<template>
  <div class="price-info">
    <div class="price-row">
      <span class="label">商品总额</span>
      <span class="value"
        >¥{{ store.orderDetail.originalPrice.toFixed(2) }}</span
      >
    </div>
    <div class="price-row discount">
      <span class="label">{{ store.discountText }}</span>
      <span class="value">-¥{{ store.orderDetail.discount.toFixed(2) }}</span>
    </div>
    <div class="price-row">
      <span class="label">运费</span>
      <span class="value free">免运费</span>
    </div>
    <div class="price-row plus">
      <span class="label">PLUS会员</span>
      <span class="value"
        >省 ¥{{ store.orderDetail.plusSaved.toFixed(2) }}</span
      >
    </div>
    <div class="price-total">
      <span class="label">实付款</span>
      <div class="total-price">
        <span class="integer">¥{{ splitPrice.integerPart }}</span>
        <span class="decimal">.{{ splitPrice.decimalPart }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
import { computed } from "vue";
const store = useOrderStore();

const splitPrice = computed(() => {
  const priceStr = store.orderDetail.actualPrice.toFixed(2);
  const [integerPart, decimalPart] = priceStr.split(".");
  return { integerPart, decimalPart };
});
</script>

<style scoped>
.price-info {
  background: #fff;
  padding: 16px;
  margin-bottom: 8px;
}
.price-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 14px;
  color: #666;
}
.price-row.discount .value {
  color: #e4393c;
}
.price-row .free {
  color: #52c41a;
}
.price-row.plus {
  color: #c69c6d;
}
.price-total {
  display: flex;
  justify-content: space-between;
  padding: 12px 0 0;
  border-top: 1px solid #f0f0f0;
  margin-top: 8px;
}
.price-total .label {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}
.total-price {
  font-weight: 700;
  color: #e4393c;
}
.total-price .integer {
  font-size: 20px;
}
.total-price .decimal {
  font-size: 16px;
}
</style>
