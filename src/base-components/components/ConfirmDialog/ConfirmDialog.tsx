import "./ConfirmDialog.css";

export interface ConfirmDialogProps {
  /** Dialog title */
  title: string;
  /** Dialog description/message */
  description: string;
  /** Icon to display in the circular area (React node — SVG) */
  icon?: React.ReactNode;
  /** Label for the cancel button. Default: "Cancel" */
  cancelLabel?: string;
  /** Label for the confirm button. Default: "Confirm" */
  confirmLabel?: string;
  /** Whether the dialog is visible */
  open?: boolean;
  /** Whether to show the overlay backdrop */
  showOverlay?: boolean;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
  /** Callback when confirm is clicked */
  onConfirm?: () => void;
}

export function ConfirmDialog({
  title,
  description,
  icon,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  open = true,
  showOverlay = true,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <>
      {showOverlay && (
        <div className="confirm-dialog__overlay" onClick={onCancel} aria-hidden="true" />
      )}
      <div
        className="confirm-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-desc"
      >
        <div className="confirm-dialog__content">
          {icon && (
            <div className="confirm-dialog__icon">
              <span className="confirm-dialog__icon-inner">{icon}</span>
            </div>
          )}
          <div className="confirm-dialog__text">
            <div className="confirm-dialog__title" id="confirm-dialog-title">
              {title}
            </div>
            <p className="confirm-dialog__description" id="confirm-dialog-desc">
              {description}
            </p>
          </div>
          <div className="confirm-dialog__buttons">
            <button
              type="button"
              className="confirm-dialog__btn confirm-dialog__btn--cancel"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              className="confirm-dialog__btn confirm-dialog__btn--confirm"
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
