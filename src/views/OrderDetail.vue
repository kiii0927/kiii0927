<template>
  <div class="order-detail-page">
    <StatusBar />
    <NavBar />
    <OrderStatus />
    <AddressBar />
    <GoodsCard />
    <PriceInfo />
    <OrderInfo />
    <ServiceBar />
    <BottomActions />
  </div>
</template>

<script setup lang="ts">
import AddressBar from "@/components/AddressBar.vue";
import BottomActions from "@/components/BottomActions.vue";
import GoodsCard from "@/components/GoodsCard.vue";
import NavBar from "@/components/NavBar.vue";
import OrderInfo from "@/components/OrderInfo.vue";
import OrderStatus from "@/components/OrderStatus.vue";
import PriceInfo from "@/components/PriceInfo.vue";
import ServiceBar from "@/components/ServiceBar.vue";
import StatusBar from "@/components/StatusBar.vue";
import { useOrderStore } from "@/stores/order";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useToast } from "@/composables/useToast";

const store = useOrderStore();

const route = useRoute();

const { showToast } = useToast();

onMounted(() => {
  let orderId = Number(route.params.id as string);

  if (isNaN(orderId)) {
    showToast("无效的订单ID，使用默认订单信息");
    console.error("error in order id");
    return;
  }
  // 数组下标从 0 开始
  if (orderId > 0) orderId--;
  store.switchOrder(orderId);

  // 可以在这里初始化数据或调用接口
  console.log("订单详情页已加载，订单ID:", store.orderDetail.orderId);
});
</script>

<style scoped>
.order-detail-page {
  max-width: 450px;
  margin: 0 auto;
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
