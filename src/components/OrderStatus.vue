<template>
  <div class="order-status">
    <div class="status-icon">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#52c41a" />
        <path
          d="M12 20L18 26L28 14"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="status-text">{{ store.orderDetail.orderStatus }}</div>
    <div
      class="pickup-info"
      v-if="store.orderDetail.pickupCode"
      @click="onCopy"
    >
      <span class="pickup-label">取件码：</span>
      <span class="pickup-code">{{ store.orderDetail.pickupCode }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
import { copyTextToClipboard } from "@/utils/web/clipboard";
import { useToast } from "@/composables/useToast";

const { showToast } = useToast();
const store = useOrderStore();

const onCopy = () => {
  copyTextToClipboard(store.orderDetail.pickupCode)
    .then(() => {
      showToast("取件码已复制");
    })
    .catch(() => {
      showToast("复制失败，请长按取件码手动复制");
    });
};
</script>

<style scoped>
.order-status {
  background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
  padding: 24px 16px;
  text-align: center;
  border-bottom: 8px solid #f5f5f5;
}
.status-icon {
  margin-bottom: 8px;
}
.status-text {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}
.pickup-info {
  background: #f0f0f0;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
}
.pickup-label {
  color: #999;
}
.pickup-code {
  color: #e4393c;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
