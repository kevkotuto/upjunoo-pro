"use client";

import { useState, useCallback } from 'react';

export interface Toast {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning';
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, variant = 'default' }: Toast) => {
    // Simple alert for now - can be enhanced with a toast component later
    const message = `${title || ''}${description ? '\n' + description : ''}`;

    if (typeof window !== 'undefined') {
      // For now, we'll use a simple alert
      // In production, you'd want to use a proper toast library like sonner or radix-ui
      alert(message);
    }

    setToasts((prev) => [...prev, { title, description, variant }]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  }, []);

  return {
    toast,
    toasts,
  };
}
