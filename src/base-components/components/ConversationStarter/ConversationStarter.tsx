import "./ConversationStarter.css";

export interface ConversationStarterProps {
  /** Array of suggested conversation starter messages */
  suggestions: string[];
  /** Callback when a suggestion is clicked */
  onSelect?: (suggestion: string) => void;
  /** Whether the component is visible */
  open?: boolean;
}

export function ConversationStarter({
  suggestions,
  onSelect,
  open = true,
}: ConversationStarterProps) {
  if (!open) return null;

  return (
    <div className="conversation-starter">
      <div className="conversation-starter__tags">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            type="button"
            className="conversation-starter__tag"
            onClick={() => onSelect?.(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
