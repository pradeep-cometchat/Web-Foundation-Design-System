import React from "react";
import "./Header.css";

export interface HeaderAction {
  /** Material Symbol icon name */
  icon: string;
  /** Accessible label for the button */
  ariaLabel: string;
  /** Click handler */
  onClick?: () => void;
}

export interface HeaderProps {
  /** Title text displayed on the left */
  title?: string;
  /** Up to 3 action icon buttons */
  actions?: HeaderAction[];
  /** Whether to show the more (kebab) menu button */
  showMore?: boolean;
  /** Click handler for the more button */
  onMoreClick?: () => void;
  /** Optional className */
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = "Chats",
  actions = [],
  showMore = true,
  onMoreClick,
  className,
}) => {
  const classes = ["screen-header", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <p className="screen-header__title">{title}</p>
      <div className="screen-header__actions">
        {actions.map((action, i) => (
          <button
            key={i}
            type="button"
            className="screen-header__action-btn"
            aria-label={action.ariaLabel}
            onClick={action.onClick}
          >
            <span className="screen-header__action-icon icon-outlined">
              {action.icon}
            </span>
          </button>
        ))}
        {showMore && (
          <button
            type="button"
            className="screen-header__action-btn"
            aria-label="More actions"
            onClick={onMoreClick}
          >
            <span className="screen-header__action-icon icon-outlined">
              more_vert
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
