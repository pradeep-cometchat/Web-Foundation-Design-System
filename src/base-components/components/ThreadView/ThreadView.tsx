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
    <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
      <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="currentColor"/>
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
      <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="currentColor"/>
    </svg>
  );
}

function SmileyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
      <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="currentColor"/>
    </svg>
  );
}

function StickerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
      <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="currentColor"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
      <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor"/>
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
              <span className="thread-view__composer-icon thread-view__composer-icon--text">Aa</span>
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
