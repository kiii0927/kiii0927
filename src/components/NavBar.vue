<template>
  <div class="nav-bar">
    <div class="nav-back" @click="goBack">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 18L9 12L15 6"
          stroke="#333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="nav-title">订单详情</div>
    <div class="nav-more">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="1.5" fill="#333" />
        <circle cx="12" cy="12" r="1.5" fill="#333" />
        <circle cx="12" cy="19" r="1.5" fill="#333" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const goBack = () => {
  // 返回上一页
  // window.history.back();

  alert("模拟返回上一页，即将打开京东首页！");

  // 模拟返回上一页的效果，1秒后打开京东首页
  setTimeout(() => {
    window.open("https://www.jd.com/", "_blank");
  }, 1000);
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 12px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.nav-back,
.nav-more {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.nav-title {
  font-size: 17px;
  font-weight: 600;
  color: #333;
}
</style>
