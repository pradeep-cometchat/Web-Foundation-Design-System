import "./ReactionInfo.css";

export interface ReactionInfoProps {
  /** The emoji that was reacted with */
  emoji: string;
  /** List of names who reacted */
  names: string[];
  /** Maximum number of names to show before "+N" */
  maxVisible?: number;
  /** Label text below names. Default: "reacted" */
  label?: string;
  /** Whether to show the bottom arrow */
  showArrow?: boolean;
}

export function ReactionInfo({
  emoji,
  names,
  maxVisible = 2,
  label = "reacted",
  showArrow = true,
}: ReactionInfoProps) {
  const visibleNames = names.slice(0, maxVisible);
  const remaining = names.length - maxVisible;

  const nameText =
    remaining > 0
      ? `${visibleNames.join(", ")}, +${remaining}`
      : visibleNames.join(", ");

  return (
    <div className="reaction-info" role="tooltip">
      <div className="reaction-info__content">
        <div className="reaction-info__inner">
          <span className="reaction-info__emoji">{emoji}</span>
          <div className="reaction-info__text">
            <span className="reaction-info__names">{nameText}</span>
            <span className="reaction-info__label">{label}</span>
          </div>
        </div>
      </div>
      {showArrow && <span className="reaction-info__arrow" />}
    </div>
  );
}
