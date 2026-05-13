import "./MessagePreview.css";

export type MessagePreviewMode = "reply" | "edit" | "deleted";

export interface MessagePreviewProps {
  /** Mode: reply (quoting someone), edit (editing own message), or deleted */
  mode?: MessagePreviewMode;
  /** Sender name displayed in the preview */
  senderName: string;
  /** Message text being quoted/edited */
  messageText: string;
  /** Callback when the close/dismiss button is clicked */
  onClose?: () => void;
}

export function MessagePreview({
  mode = "reply",
  senderName,
  messageText,
  onClose,
}: MessagePreviewProps) {
  return (
    <div className="message-preview">
      <div className={`message-preview__border message-preview__border--${mode}`} />
      <div className="message-preview__content">
        <span className={`message-preview__sender message-preview__sender--${mode}`}>
          {senderName}
        </span>
        <div className="message-preview__text-container">
          {mode === "deleted" && (
            <span className="message-preview__deleted-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4.7 15.3L15.3 4.7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
          )}
          <span className="message-preview__text">{messageText}</span>
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          className="message-preview__close"
          onClick={onClose}
          aria-label="Dismiss"
        >
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
