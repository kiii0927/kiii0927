<template>
  <div class="address-bar">
    <div class="address-icon">
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
          fill="#e4393c"
        />
      </svg>
    </div>
    <div class="address-content">
      <div class="address-info">
        <span class="receiver">{{ store.orderDetail.receiverName }}</span>
        <span class="phone">{{ store.maskedPhone }}</span>
      </div>
      <div class="address-detail">{{ store.orderDetail.receiverAddress }}</div>
    </div>
    <div class="address-arrow">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M6 4L10 8L6 12"
          stroke="#ccc"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
const store = useOrderStore();
</script>

<style scoped>
.address-bar {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.address-icon {
  margin-right: 12px;
  flex-shrink: 0;
}
.address-content {
  flex: 1;
}
.address-info {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}
.phone {
  margin-left: 8px;
  color: #666;
}
.address-detail {
  font-size: 13px;
  color: #999;
}
.address-arrow {
  flex-shrink: 0;
}
</style>
