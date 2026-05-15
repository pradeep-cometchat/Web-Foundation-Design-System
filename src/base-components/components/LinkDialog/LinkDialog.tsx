import { useState } from "react";
import { Input } from "../Input";
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
            <span className="icon-outlined" style={{ fontSize: 20 }}>close</span>
          </button>
        </div>

        {/* Body */}
        <div className="link-dialog__body">
          <div className="link-dialog__form">
            <Input
              label="Text"
              placeholder={textPlaceholder}
              value={text}
              onChange={setText}
            />
            <Input
              label="Link"
              type="url"
              placeholder={urlPlaceholder}
              value={url}
              onChange={setUrl}
            />
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
