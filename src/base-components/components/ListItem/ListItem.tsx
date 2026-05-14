import React from "react";
import "./ListItem.css";

export interface ListItemProps {
  /** Leading avatar / image url (40px) */
  avatarUrl?: string;
  /** Fallback initials when no avatar */
  initials?: string;
  /** Status dot color (e.g. online) */
  statusColor?: string;
  /** Primary line */
  title: string;
  /** Secondary line */
  subtitle?: string;
  /** Optional icon (Material Symbol name) before subtitle */
  subtitleIcon?: string;
  /** Trailing top text (timestamp, duration, etc.) */
  trailingText?: string;
  /** Trailing bottom node (badge, icon, etc.) */
  trailingNode?: React.ReactNode;
  /** Trailing icon (Material Symbol name) */
  trailingIcon?: string;
  /** Selected / active state */
  selected?: boolean;
  /** Hovered state (for storybook) */
  hovered?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Optional className */
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  avatarUrl,
  initials,
  statusColor,
  title,
  subtitle,
  subtitleIcon,
  trailingText,
  trailingNode,
  trailingIcon,
  selected,
  hovered,
  onClick,
  className,
}) => {
  const classes = [
    "list-item",
    selected && "list-item--selected",
    hovered && "list-item--hovered",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick} role="button" tabIndex={0}>
      <div className="list-item__leading">
        <div className="list-item__avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={title} />
          ) : (
            <span className="list-item__avatar-initials">{initials ?? title.charAt(0)}</span>
          )}
          {statusColor && (
            <span className="list-item__status" style={{ background: statusColor }} />
          )}
        </div>
      </div>

      <div className="list-item__content">
        <div className="list-item__title">{title}</div>
        {subtitle && (
          <div className="list-item__subtitle">
            {subtitleIcon && (
              <span className="icon-outlined list-item__subtitle-icon" aria-hidden="true">
                {subtitleIcon}
              </span>
            )}
            <span className="list-item__subtitle-text">{subtitle}</span>
          </div>
        )}
      </div>

      <div className="list-item__trailing">
        {trailingText && <div className="list-item__trailing-text">{trailingText}</div>}
        {trailingNode && <div className="list-item__trailing-node">{trailingNode}</div>}
        {trailingIcon && (
          <span className="icon-outlined list-item__trailing-icon" aria-hidden="true">
            {trailingIcon}
          </span>
        )}
      </div>
    </div>
  );
};
