import {
  mockOrderDetail,
  mockOrderDetail2,
  mockOrderDetail3,
  type OrderDetail,
} from "@/mocks/orderDetail";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useOrderStore = defineStore("order", () => {
  // 默认使用第一条数据，可通过 switchOrder 切换
  const orderDetail = ref<OrderDetail>({ ...mockOrderDetail });

  // 格式化后的下单日期（只显示日期部分）
  const formattedOrderTime = computed(() => {
    // return orderDetail.value.orderTime.split(" ")[0];
    return orderDetail.value.orderTime.replace(" ", "\n");
  });

  // 格式化支付时间
  const formattedPayTime = computed(() => {
    return orderDetail.value.payTime.replace(" ", "\n");
  });

  // 手机号脱敏
  const maskedPhone = computed(() => {
    const phone = orderDetail.value.receiverPhone;
    return phone.replace(/(\d{3})\d{4}(\d{2,3})/, "$1****$2");
  });

  // 优惠金额展示
  const discountText = computed(() => {
    return `共减 ¥${orderDetail.value.discount.toFixed(2)}`;
  });

  // 补贴信息
  const subsidyText = computed(() => {
    return `复购补贴 x${orderDetail.value.subsidyAmount}`;
  });

  // 切换订单数据（用于测试不同场景）
  const switchOrder = (index: number) => {
    const orders = [mockOrderDetail, mockOrderDetail2, mockOrderDetail3];
    orderDetail.value = { ...orders[index % orders.length] };
  };

  return {
    orderDetail,
    formattedOrderTime,
    formattedPayTime,
    maskedPhone,
    discountText,
    subsidyText,
    switchOrder,
  };
});
