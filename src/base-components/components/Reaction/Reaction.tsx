import "./Reaction.css";

export interface ReactionProps {
  /** The emoji character */
  emoji: string;
  /** Reaction count (if > 1) */
  count?: number;
  /** Whether this reaction is selected/active by the current user */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export interface ReactionGroupProps {
  /** Array of reactions */
  reactions: ReactionProps[];
  /** Whether to show the add reaction button */
  showAddButton?: boolean;
  /** Callback when add reaction is clicked */
  onAddReaction?: () => void;
}

export function Reaction({ emoji, count, active = false, onClick }: ReactionProps) {
  return (
    <button
      type="button"
      className={`reaction ${active ? "reaction--active" : ""}`}
      onClick={onClick}
    >
      <span className="reaction__emoji">{emoji}</span>
      {count && count > 1 && <span className="reaction__count">{count}</span>}
    </button>
  );
}

export function ReactionGroup({ reactions, showAddButton = false, onAddReaction }: ReactionGroupProps) {
  return (
    <div className="reaction-group">
      {reactions.map((reaction, index) => (
        <Reaction key={index} {...reaction} />
      ))}
      {showAddButton && (
        <button type="button" className="reaction reaction--add" onClick={onAddReaction} aria-label="Add reaction">
          <span className="reaction__emoji">+</span>
        </button>
      )}
    </div>
  );
}
