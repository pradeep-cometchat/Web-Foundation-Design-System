import { useState } from "react";
import "./LinkDialog.css";

export interface LinkDialogProps {
  /** Dialog title. Default: "Add Link" */
  title?: string;
  /** Initial value for the text field */
  initialText?: string;
  /** Initial value for the link/URL field */
  initialUrl?: string;
  /** Placeholder for the text field */
  textPlaceholder?: string;
  /** Placeholder for the link field */
  urlPlaceholder?: string;
  /** Label for the cancel button. Default: "Cancel" */
  cancelLabel?: string;
  /** Label for the save button. Default: "Save" */
  saveLabel?: string;
  /** Whether the dialog is visible */
  open?: boolean;
  /** Whether to show the overlay backdrop */
  showOverlay?: boolean;
  /** Callback when cancel is clicked or dialog is dismissed */
  onCancel?: () => void;
  /** Callback when save is clicked, receives text and url values */
  onSave?: (text: string, url: string) => void;
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkDialog({
  title = "Add Link",
  initialText = "",
  initialUrl = "",
  textPlaceholder = "Link",
  urlPlaceholder = "https://",
  cancelLabel = "Cancel",
  saveLabel = "Save",
  open = true,
  showOverlay = true,
  onCancel,
  onSave,
}: LinkDialogProps) {
  const [text, setText] = useState(initialText);
  const [url, setUrl] = useState(initialUrl);

  if (!open) return null;

  const handleSave = () => {
    onSave?.(text, url);
  };

  return (
    <>
      {showOverlay && (
        <div className="link-dialog__overlay" onClick={onCancel} aria-hidden="true" />
      )}
      <div
        className="link-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="link-dialog-title"
      >
        {/* Header */}
        <div className="link-dialog__header">
          <div className="link-dialog__header-text">
            <div className="link-dialog__title" id="link-dialog-title" role="heading" aria-level={2}>
              {title}
            </div>
          </div>
          <button
            type="button"
            className="link-dialog__close-btn"
            onClick={onCancel}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="link-dialog__body">
          <div className="link-dialog__form">
            {/* Text field */}
            <div className="link-dialog__field">
              <label className="link-dialog__label" htmlFor="link-dialog-text">
                Text
              </label>
              <input
                id="link-dialog-text"
                className="link-dialog__input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={textPlaceholder}
              />
            </div>

            {/* URL field */}
            <div className="link-dialog__field">
              <label className="link-dialog__label" htmlFor="link-dialog-url">
                Link
              </label>
              <input
                id="link-dialog-url"
                className="link-dialog__input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={urlPlaceholder}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="link-dialog__buttons">
            <button
              type="button"
              className="link-dialog__btn link-dialog__btn--cancel"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              className="link-dialog__btn link-dialog__btn--save"
              onClick={handleSave}
            >
              {saveLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
