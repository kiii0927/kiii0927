<template>
  <div class="service-bar">
    <div class="service-title">服务中心</div>
    <div class="service-grid">
      <div class="service-item" v-for="item in services" :key="item.label">
        <div class="service-icon" :style="{ background: item.bg }">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              :d="item.icon"
              :stroke="item.color"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="service-label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
const store = useOrderStore();

const services = [
  {
    label: "保障服务",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    bg: "#fff3e0",
    color: "#ff9800",
  },
  {
    label: store.subsidyText,
    icon: "M20 12v-2a8 8 0 10-16 0v2m16 0a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2m16 0H4",
    bg: "#fce4ec",
    color: "#e91e63",
  },
  {
    label: "PLUS会员",
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    bg: "#fff8e1",
    color: "#c69c6d",
  },
  {
    label: "退换/售后",
    icon: "M4 4h16v16H4V4zm4 4h8v2H8V8zm0 4h8v2H8v-2z",
    bg: "#e8f5e9",
    color: "#4caf50",
  },
];
</script>

<style scoped>
.service-bar {
  background: #fff;
  padding: 16px;
  margin-bottom: 8px;
}
.service-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 14px;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.service-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-label {
  font-size: 11px;
  color: #666;
  text-align: center;
}
</style>
