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

    <!-- 可折叠区域 - 改用 Grid 方案 -->
    <div class="extra-rows-wrapper" :class="{ expanded: expanded }">
      <div class="extra-rows-inner">
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
    </div>

    <!-- 展开 / 收起 按钮 -->
    <div class="toggle-row" @click="expanded = !expanded">
      <span class="toggle-text">{{ expanded ? "收起" : "全部订单信息" }}</span>
      <!-- expanded ? "▲" : "▼" -->
      <span class="toggle-icon" :class="{ rotated: expanded }">{{
        expanded ? "▲" : "▼"
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useOrderStore } from "@/stores/order";
import { copyTextToClipboard } from "@/utils/web/clipboard";
const store = useOrderStore();

import { useToast } from "@/composables/useToast";
const { showToast } = useToast();

const expanded = ref(false);

const onCopy = () => {
  const orderNumber = store.orderDetail.orderId;
  if (!orderNumber) {
    showToast("订单编号不存在");
    return;
  }

  copyTextToClipboard(orderNumber)
    .then(() => {
      showToast("订单编号已复制");
    })
    .catch(() => {
      showToast("复制失败，请长按订单编号手动复制");
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

/* ========== 手风琴动画 - 使用 Grid 方案 ========== */
.extra-rows-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.extra-rows-wrapper.expanded {
  grid-template-rows: 1fr;
}

.extra-rows-inner {
  overflow: hidden;
}

/* 可选：为内部区域添加轻微透明渐变效果 */
.extra-rows-wrapper:not(.expanded) .extra-rows-inner {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.extra-rows-wrapper.expanded .extra-rows-inner {
  opacity: 1;
  transition: opacity 0.25s ease 0.05s;
}

/* 展开/收起触发行 */
.toggle-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding-top: 12px;
  margin-top: 4px;
  cursor: pointer;
  user-select: none;
}

.toggle-text {
  font-size: 13px;
  color: #999;
  line-height: 1;
}

.toggle-icon {
  font-size: 12px;
  color: #999;
  display: inline-block;
  transition: transform 0.25s ease;
  line-height: 1;
}

.toggle-icon.rotated {
  /* transform: rotate(180deg); */
  margin-bottom: 4px;
}
</style>
