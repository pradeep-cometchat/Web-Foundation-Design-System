import { useState } from "react";
import "./FlagMessageDialog.css";

export interface FlagMessageDialogProps {
  /** Whether the dialog is visible */
  open?: boolean;
  /** Pre-defined report reasons */
  reasons?: string[];
  /** Whether the report button is enabled (at least one reason selected) */
  reportEnabled?: boolean;
  /** Callback when cancel/close is clicked */
  onCancel?: () => void;
  /** Callback when report is submitted */
  onReport?: (selectedReasons: string[], additionalContext: string) => void;
}

const defaultReasons = [
  "I just don't like it",
  "Violence, hate or exploitation",
  "Nudity or sexual activity",
  "Scam, fraud or spam",
  "False Information",
];

export function FlagMessageDialog({
  open = true,
  reasons = defaultReasons,
  onCancel,
  onReport,
}: FlagMessageDialogProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [context, setContext] = useState("");

  if (!open) return null;

  const toggleReason = (reason: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(reason)) next.delete(reason);
      else next.add(reason);
      return next;
    });
  };

  const hasSelection = selected.size > 0;

  return (
    <div className="flag-message-dialog">
      {/* Header */}
      <div className="flag-message-dialog__header">
        <div className="flag-message-dialog__header-content">
          <div className="flag-message-dialog__header-top">
            <div className="flag-message-dialog__title">Report a message</div>
            <button
              type="button"
              className="flag-message-dialog__close"
              onClick={onCancel}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <p className="flag-message-dialog__description">
            Report this chat if it goes against our Community Standards. We won't tell the account you reported them.
          </p>
        </div>
      </div>

      {/* Reason badges */}
      <div className="flag-message-dialog__body">
        <div className="flag-message-dialog__badges">
          {reasons.map((reason) => (
            <button
              key={reason}
              type="button"
              className={`flag-message-dialog__badge ${selected.has(reason) ? "flag-message-dialog__badge--selected" : ""}`}
              onClick={() => toggleReason(reason)}
            >
              {reason}
            </button>
          ))}
        </div>

        {/* Text area */}
        <div className="flag-message-dialog__field">
          <label className="flag-message-dialog__label">
            <span className="flag-message-dialog__label-text">Reason </span>
            <span className="flag-message-dialog__label-optional">(Optional)</span>
          </label>
          <textarea
            className="flag-message-dialog__textarea"
            placeholder="Provide additional context for your report..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flag-message-dialog__buttons">
        <button type="button" className="flag-message-dialog__btn flag-message-dialog__btn--cancel" onClick={onCancel}>
          Cancel
        </button>
        <button
          type="button"
          className={`flag-message-dialog__btn flag-message-dialog__btn--report ${hasSelection ? "flag-message-dialog__btn--report-active" : ""}`}
          disabled={!hasSelection}
          onClick={() => onReport?.(Array.from(selected), context)}
        >
          Report
        </button>
      </div>
    </div>
  );
}
