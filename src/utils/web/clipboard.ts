


/**
 * 复制文本到剪贴板
 *  - 兼容 iOS (WebView/ Safari) 和 安卓系统
 *  - 使用 Clipboard API，现代浏览器支持较好，但在某些环境下可能需要额外权限或用户交互
 * @param value 要复制的内容
 */
export const copyTextToClipboard = async (value: string): Promise<void> => {
  if (!value) throw new Error("orderId is empty");

  // 首选：Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // 继续走回退逻辑
    }
  }

  // 回退：隐藏 textarea + execCommand（兼容 iOS/老 WebView）
  return new Promise<void>((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    ta.style.fontSize = "12pt"; // 避免 iOS 缩放
    document.body.appendChild(ta);

    // 保存当前选择
    const sel = document.getSelection();
    const ranges: Range[] = [];
    if (sel && sel.rangeCount > 0) {
      for (let i = 0; i < sel.rangeCount; i++) ranges.push(sel.getRangeAt(i));
    }

    ta.select();
    ta.setSelectionRange(0, ta.value.length);

    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      // 恢复选择
      if (sel) {
        sel.removeAllRanges();
        for (const r of ranges) sel.addRange(r);
      }
      if (ok) resolve();
      else reject(new Error("execCommand copy failed"));
    } catch (err) {
      document.body.removeChild(ta);
      if (sel) {
        sel.removeAllRanges();
        for (const r of ranges) sel.addRange(r);
      }
      reject(err);
    }
  });
};