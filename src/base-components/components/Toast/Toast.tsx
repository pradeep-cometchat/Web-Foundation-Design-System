import { useEffect } from "react";
import "./Toast.css";

export interface ToastProps {
  /** The message to display */
  message: string;
  /** Whether the toast is visible */
  open?: boolean;
  /** Auto-dismiss duration in ms. Set to 0 to disable. Default: 3000 */
  duration?: number;
  /** Callback when the toast is dismissed */
  onClose?: () => void;
}

export function Toast({
  message,
  open = true,
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!open || duration === 0) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toast__content">
        <span className="toast__message">{message}</span>
      </div>
    </div>
  );
}
