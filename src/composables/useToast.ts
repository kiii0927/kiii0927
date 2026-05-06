import { ref, type Ref } from "vue";

interface ToastInstance {
  show: (
    options:
      | string
      | {
          message: string;
          duration?: number;
          position?: "top" | "center" | "bottom";
        },
  ) => void;
  hide: () => void;
}

// 全局单例引用
const toastRef: Ref<ToastInstance | null> = ref(null);

export const registerToast = (instance: ToastInstance) => {
  toastRef.value = instance;
};

export const useToast = () => {
  const showToast = (
    options:
      | string
      | {
          message: string;
          duration?: number;
          position?: "top" | "center" | "bottom";
        },
  ) => {
    toastRef.value?.show(options);
  };

  const hideToast = () => {
    toastRef.value?.hide();
  };

  return {
    showToast,
    hideToast,
  };
};
