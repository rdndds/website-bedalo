interface AOS {
  init: (options?: Record<string, unknown>) => void;
  refresh: () => void;
}

declare global {
  type ToastType = 'success' | 'error' | 'info';

  interface ToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
  }

  interface ToastManager {
    show: (options: ToastOptions) => void;
  }

  interface Window {
    toast?: ToastManager;
    AOS?: AOS;
  }
}

export {};
