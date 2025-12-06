interface ToastManager {
  show: (options: {
    message: string;
    type?: string;
    duration?: number;
  }) => void;
}

interface AOS {
  init: (options?: Record<string, unknown>) => void;
  refresh: () => void;
}

declare global {
  interface Window {
    toast?: ToastManager;
    AOS?: AOS;
  }
}

export {};
