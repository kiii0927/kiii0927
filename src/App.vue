<script setup lang="ts">
import { onMounted, ref } from "vue";

// import OrderDetail from "./views/OrderDetail.vue";

import Toast from "@/components/Toast.vue";
import { registerToast } from "@/composables/useToast";

// 注册全局Toast组件
const toastRef = ref<InstanceType<typeof Toast>>();

onMounted(() => {
  if (toastRef.value) {
    registerToast(toastRef.value);
  }
});
</script>

<template>
  <router-view />
  <Toast ref="toastRef" />
</template>
