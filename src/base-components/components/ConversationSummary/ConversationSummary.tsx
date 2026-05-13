import "./ConversationSummary.css";

export interface ConversationSummaryProps {
  /** The summary text content */
  text?: string;
  /** Whether the summary is in a loading state */
  loading?: boolean;
  /** Error message to display */
  error?: string;
  /** Whether the component is visible */
  open?: boolean;
  /** Callback when the close icon is clicked */
  onClose?: () => void;
}

function CloseIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.1 11L0 9.9L4.4 5.5L0 1.1L1.1 0L5.5 4.4L9.9 0L11 1.1L6.6 5.5L11 9.9L9.9 11L5.5 6.6L1.1 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ConversationSummary({
  text,
  loading = false,
  error,
  open = true,
  onClose,
}: ConversationSummaryProps) {
  if (!open) return null;

  return (
    <div
      className={`conversation-summary ${loading ? "conversation-summary--loading" : ""}`}
      role="region"
      aria-label="Conversation summary"
    >
      {/* Header */}
      <div className="conversation-summary__header">
        <div className="conversation-summary__heading">
          <span className="conversation-summary__title">Conversation summary</span>
        </div>
        <button
          type="button"
          className="conversation-summary__close-btn"
          onClick={onClose}
          aria-label="Close summary"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Body */}
      <div className="conversation-summary__body">
        {loading && (
          <>
            <div className="conversation-summary__skeleton conversation-summary__skeleton--full" />
            <div className="conversation-summary__skeleton conversation-summary__skeleton--full" />
            <div className="conversation-summary__skeleton conversation-summary__skeleton--medium" />
          </>
        )}
        {error && !loading && (
          <p className="conversation-summary__error">{error}</p>
        )}
        {text && !loading && !error && (
          <p className="conversation-summary__text">{text}</p>
        )}
      </div>
    </div>
  );
}
