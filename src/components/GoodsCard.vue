<template>
  <div class="goods-card">
    <!-- 店铺头部 -->
    <div class="store-header">
      <span class="store-tag">{{ store.orderDetail.storeTag }}</span>
      <span class="store-name">{{ store.orderDetail.storeName }}</span>
      <span class="store-arrow">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5 3L9 7L5 11"
            stroke="#999"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </div>

    <!-- 商品主体 -->
    <div class="goods-body">
      <div class="goods-image">
        <img
          :src="store.orderDetail.goodsImage"
          :alt="store.orderDetail.goodsName"
          @error="handleImageError"
          ref="goodsImg"
        />
        <!-- 图片加载失败时的占位 -->
        <div class="image-placeholder" v-if="imageError">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="#ccc"
              stroke-width="1.5"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#ccc" />
            <path d="M21 15l-5-5L5 21" stroke="#ccc" stroke-width="1.5" />
          </svg>
          <span>商品图</span>
        </div>
      </div>
      <div class="goods-info">
        <div class="goods-name">{{ store.orderDetail.goodsName }}</div>
        <div class="goods-spec">{{ store.orderDetail.goodsSpec }}</div>
        <div class="goods-meta">
          <span class="goods-quantity"
            >数量 x{{ store.orderDetail.quantity }}</span
          >
          <span class="goods-price"
            >¥{{ store.orderDetail.actualPrice.toFixed(2) }}</span
          >
        </div>
      </div>
    </div>

    <!-- 退换政策 -->
    <div class="goods-return">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="#52c41a" stroke-width="1.2" />
        <path
          d="M4.5 7L6.5 9L9.5 5"
          stroke="#52c41a"
          stroke-width="1.2"
          stroke-linecap="round"
        />
      </svg>
      <span>{{ store.orderDetail.returnPolicy }}</span>
    </div>

    <!-- 操作按钮 -->
    <div class="goods-actions">
      <button class="btn-secondary">评价晒单</button>
      <button class="btn-secondary">使用帮助</button>
      <button class="btn-secondary">申请售后</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
import { ref } from "vue";

const store = useOrderStore();
const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>

<style scoped>
.goods-card {
  background: #fff;
  margin-bottom: 8px;
}
.store-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
}
.store-tag {
  background: #e4393c;
  color: #fff;
  font-size: 11px;
  padding: 1px 5px;
  border-radius: 2px;
  margin-right: 6px;
  line-height: 16px;
}
.store-name {
  flex: 1;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}
.store-arrow {
  display: flex;
  align-items: center;
}
.goods-body {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
}
.goods-image {
  width: 90px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f8f8f8;
  position: relative;
}
.goods-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  color: #ccc;
  font-size: 12px;
  gap: 4px;
}
.goods-info {
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods-name {
  font-size: 14px;
  color: #333;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}
.goods-spec {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
.goods-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
}
.goods-quantity {
  font-size: 13px;
  color: #999;
}
.goods-price {
  font-size: 16px;
  font-weight: 600;
  color: #e4393c;
}
.goods-return {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 12px;
  color: #666;
  gap: 6px;
  border-bottom: 1px solid #f5f5f5;
}
.goods-actions {
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  justify-content: flex-end;
}
.btn-secondary {
  padding: 7px 14px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background: #fff;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:active {
  background: #f5f5f5;
}
</style>
