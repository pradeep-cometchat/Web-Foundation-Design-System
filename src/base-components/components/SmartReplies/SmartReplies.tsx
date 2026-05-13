import "./SmartReplies.css";

export interface SmartRepliesProps {
  /** Whether the component is visible */
  open?: boolean;
  /** Whether replies are loading */
  loading?: boolean;
  /** Array of suggested reply texts */
  replies?: string[];
  /** Callback when a reply is selected */
  onSelect?: (reply: string) => void;
  /** Callback when close is clicked */
  onClose?: () => void;
}

export function SmartReplies({
  open = true,
  loading = false,
  replies = [],
  onSelect,
  onClose,
}: SmartRepliesProps) {
  if (!open) return null;

  return (
    <div className="smart-replies">
      {/* Header */}
      <div className="smart-replies__header">
        <span className="smart-replies__title">Suggest a reply</span>
        <button type="button" className="smart-replies__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="smart-replies__content">
        {loading ? (
          <>
            <div className="smart-replies__skeleton" />
            <div className="smart-replies__skeleton" />
            <div className="smart-replies__skeleton" />
          </>
        ) : (
          replies.map((reply, index) => (
            <button
              key={index}
              type="button"
              className="smart-replies__reply"
              onClick={() => onSelect?.(reply)}
            >
              {reply}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
