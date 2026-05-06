<template>
  <div class="bottom-actions">
    <button class="action-btn primary" @click="buyAgain">再次购买</button>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
const store = useOrderStore();

const buyAgain = () => {
  alert(`正在将 ${store.orderDetail.goodsName} 加入购物车...`);
};
</script>

<style scoped>
.bottom-actions {
  background: #fff;
  padding: 12px 16px 24px;
  display: flex;
  justify-content: center;
}
.action-btn {
  padding: 12px 48px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.action-btn.primary {
  background: linear-gradient(135deg, #e4393c, #c62f2f);
  color: #fff;
  box-shadow: 0 4px 12px rgba(228, 57, 60, 0.3);
}
.action-btn:active {
  transform: scale(0.96);
  opacity: 0.9;
}
</style>
