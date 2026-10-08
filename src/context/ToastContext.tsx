import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => {
          let bg = 'bg-[#111111] text-white border border-[#222222]';
          let icon = <Info className="w-5 h-5 text-neutral-300 shrink-0" />;

          if (toast.type === 'success') {
            bg = 'bg-[#0A0A0A] text-white border-l-4 border-l-[#BC0202] border border-[#222222] shadow-xl';
            icon = <CheckCircle2 className="w-5 h-5 text-[#BC0202] shrink-0" />;
          } else if (toast.type === 'error') {
            bg = 'bg-[#0A0A0A] text-white border-l-4 border-l-red-600 border border-[#222222] shadow-xl';
            icon = <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />;
          } else if (toast.type === 'warning') {
            bg = 'bg-[#0A0A0A] text-white border-l-4 border-l-neutral-400 border border-[#222222] shadow-xl';
            icon = <AlertTriangle className="w-5 h-5 text-neutral-300 shrink-0" />;
          }

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded shadow-lg transition-all duration-200 ${bg}`}
              role="alert"
            >
              {icon}
              <div className="flex-1 text-sm font-medium leading-snug">{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-neutral-400 hover:text-white transition-colors p-0.5 rounded"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
