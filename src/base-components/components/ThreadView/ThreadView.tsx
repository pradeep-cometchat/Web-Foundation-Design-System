import "./ThreadView.css";

export interface ThreadMessage {
  /** Message text */
  text: string;
  /** Timestamp string (e.g. "4:56 pm") */
  time: string;
  /** Whether this is a sent (outgoing) message */
  isSent: boolean;
  /** Whether the message has been read (shows read receipt for sent messages) */
  isRead?: boolean;
}

export interface ThreadViewProps {
  /** Title of the thread panel. Default: "Thread" */
  title?: string;
  /** The parent message that started the thread */
  parentMessage: ThreadMessage;
  /** Reply messages in the thread */
  replies: ThreadMessage[];
  /** Date label for the date chip (e.g. "Today") */
  dateLabel?: string;
  /** Placeholder text for the composer. Default: "Type your message..." */
  composerPlaceholder?: string;
  /** Callback when close is clicked */
  onClose?: () => void;
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="currentColor" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1.5C14.69 1.5 18.5 5.31 18.5 10C18.5 14.69 14.69 18.5 10 18.5C5.31 18.5 1.5 14.69 1.5 10C1.5 5.31 5.31 1.5 10 1.5ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM9.25 9V15H10.75V9H9.25Z" fill="currentColor" />
    </svg>
  );
}

function ReadReceiptIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 8.5L5 12L11 4" stroke="#56e8a7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 8.5L9 12L15 4" stroke="#56e8a7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19V23M8 23H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SmileyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function StickerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 3V9C14 10.1 14.9 11 16 11H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2L9 11M18 2L12.5 18L9 11M18 2L2 7.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThreadView({
  title = "Thread",
  parentMessage,
  replies,
  dateLabel = "Today",
  composerPlaceholder = "Type your message...",
  onClose,
}: ThreadViewProps) {
  const replyCount = replies.length;

  return (
    <div className="thread-view">
      {/* Header */}
      <div className="thread-view__header">
        <div className="thread-view__header-text">
          <div className="thread-view__title">{title}</div>
        </div>
        <div className="thread-view__header-actions">
          <button type="button" className="thread-view__header-btn" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
          <button type="button" className="thread-view__header-btn" aria-label="Info">
            <InfoIcon />
          </button>
        </div>
      </div>

      {/* Chat area */}
      <div className="thread-view__chat">
        {/* Date chip */}
        {dateLabel && (
          <div className="thread-view__date-chip">
            <span className="thread-view__date-chip-text">{dateLabel}</span>
          </div>
        )}

        {/* Parent message */}
        <MessageBubble message={parentMessage} />

        {/* Reply separator */}
        {replyCount > 0 && (
          <div className="thread-view__separator">
            <span className="thread-view__separator-text">
              {replyCount} {replyCount === 1 ? "reply" : "replies"}
            </span>
            <div className="thread-view__separator-line" />
          </div>
        )}

        {/* Replies */}
        {replies.map((reply, index) => (
          <MessageBubble key={index} message={reply} />
        ))}
      </div>

      {/* Composer */}
      <div className="thread-view__composer">
        <div className="thread-view__composer-inner">
          <input
            className="thread-view__composer-input"
            type="text"
            placeholder={composerPlaceholder}
            aria-label={composerPlaceholder}
          />
          <div className="thread-view__composer-divider" />
          <div className="thread-view__composer-toolbar">
            <div className="thread-view__composer-icons">
              <span className="thread-view__composer-icon"><PlusCircleIcon /></span>
              <span className="thread-view__composer-icon"><MicIcon /></span>
              <span className="thread-view__composer-icon"><SmileyIcon /></span>
              <span className="thread-view__composer-icon"><StickerIcon /></span>
              <span className="thread-view__composer-icon" style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-medium)" }}>Aa</span>
            </div>
            <button type="button" className="thread-view__send-btn" aria-label="Send">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ThreadMessage }) {
  return (
    <div className={`thread-view__message ${message.isSent ? "thread-view__message--sent" : "thread-view__message--received"}`}>
      <div className={`thread-view__bubble ${message.isSent ? "thread-view__bubble--sent" : "thread-view__bubble--received"}`}>
        <p className="thread-view__bubble-text">{message.text}</p>
        <div className="thread-view__bubble-meta">
          <span className="thread-view__bubble-time">{message.time}</span>
          {message.isSent && message.isRead && (
            <span className="thread-view__read-receipt">
              <ReadReceiptIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
