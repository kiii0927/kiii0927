<template>
  <div class="order-info">
    <div class="info-title">订单信息</div>
    <div class="info-row">
      <span class="label">订单编号</span>
      <span class="value copyable">
        {{ store.orderDetail.orderId }}
        <button class="copy-btn" @click="onCopy">复制</button>
      </span>
    </div>
    <div class="info-row">
      <span class="label">下单时间</span>
      <span class="value">{{ store.formattedOrderTime }}</span>
    </div>
    <div class="info-row">
      <span class="label">支付时间</span>
      <span class="value">{{ store.formattedPayTime }}</span>
    </div>
    <div class="info-row">
      <span class="label">支付方式</span>
      <span class="value">{{ store.orderDetail.paymentMethod }}</span>
    </div>
    <div class="info-row">
      <span class="label">配送方式</span>
      <span class="value">{{ store.orderDetail.deliveryMethod }}</span>
    </div>
    <div class="info-row">
      <span class="label">期望配送</span>
      <span class="value">{{ store.orderDetail.expectDeliveryTime }}</span>
    </div>
    <div class="info-row">
      <span class="label">收货方式</span>
      <span class="value">{{ store.orderDetail.deliveryType }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
const store = useOrderStore();

import { useToast } from "@/composables/useToast";

const { showToast } = useToast();

const onCopy = () => {
  const orderNumber = store.orderDetail.orderId;
  if (!orderNumber) {
    showToast("订单编号不存在");
    return;
  }

  copyOrderIdToClipboard(orderNumber)
    .then(() => {
      showToast("订单编号已复制");
    })
    .catch(() => {
      showToast("复制失败，请长按订单编号手动复制");
    });
};

/**
 * 复制订单编号到剪贴板
 *  - 兼容 iOS (WebView/ Safari) 和 安卓系统
 *  - 使用 Clipboard API，现代浏览器支持较好，但在某些环境下可能需要额外权限或用户交互
 */
const copyOrderIdToClipboard = async (orderId: string): Promise<void> => {
  if (!orderId) throw new Error("orderId is empty");

  // 首选：Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(orderId);
      return;
    } catch {
      // 继续走回退逻辑
    }
  }

  // 回退：隐藏 textarea + execCommand（兼容 iOS/老 WebView）
  return new Promise<void>((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = orderId;
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
</script>

<style scoped>
.order-info {
  background: #fff;
  padding: 16px;
  margin-bottom: 8px;
}
.info-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
}
.info-row .label {
  color: #999;
  flex-shrink: 0;
  margin-right: 16px;
}
.info-row .value {
  color: #333;
  text-align: right;
  word-break: break-all;
}
.copy-btn {
  background: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px 8px;
  font-size: 12px;
  color: #666;
  margin-left: 8px;
  cursor: pointer;
}
</style>
