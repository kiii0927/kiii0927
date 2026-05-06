<template>
  <Teleport to="body">
    <Transition name="toast-appear">
      <div v-if="visible" class="toast-container" :class="positionClass">
        <div class="toast-content">{{ message }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface ToastOptions {
  message: string;
  duration?: number;
  position?: "top" | "center" | "bottom";
}

const visible = ref(false);
const message = ref("");
const duration = ref(3000);
const position = ref<"top" | "center" | "bottom">("center");

const positionClass = computed(() => {
  return `toast-${position.value}`;
});

let timer: ReturnType<typeof setTimeout> | null = null;

const show = (options: ToastOptions | string) => {
  if (typeof options === "string") {
    message.value = options;
    duration.value = 3000;
    position.value = "center";
  } else {
    message.value = options.message;
    duration.value = options.duration ?? 3000;
    position.value = options.position ?? "center";
  }

  if (timer) {
    clearTimeout(timer);
  }

  visible.value = true;

  if (duration.value > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, duration.value);
  }
};

const hide = () => {
  visible.value = false;
  if (timer) {
    clearTimeout(timer);
  }
};

const showTop = (msg: string, dur?: number) => {
  show({ message: msg, duration: dur ?? 3000, position: "top" });
};

const showCenter = (msg: string, dur?: number) => {
  show({ message: msg, duration: dur ?? 3000, position: "center" });
};

const showBottom = (msg: string, dur?: number) => {
  show({ message: msg, duration: dur ?? 3000, position: "bottom" });
};

defineExpose({
  show,
  hide,
  showTop,
  showCenter,
  showBottom,
});
</script>

<style scoped>
.toast-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
}

.toast-top {
  top: 60px;
}

.toast-center {
  top: 50%;
  transform: translate(-50%, -50%);
}

.toast-bottom {
  bottom: 80px;
}

.toast-content {
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 20px;
  max-width: 280px;
  text-align: center;
  word-break: break-all;
  line-height: 1.5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 轻柔显现动画 */
.toast-appear-enter-active {
  transition: opacity 0.25s ease-out;
}
.toast-appear-leave-active {
  transition: opacity 0.2s ease-in;
}

.toast-appear-enter-from {
  opacity: 0;
}

.toast-appear-leave-to {
  opacity: 0;
}
</style>
