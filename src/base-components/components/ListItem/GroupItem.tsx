import React from "react";
import "./GroupItem.css";

export type GroupItemState = "default" | "hover" | "pressed";

export type AvatarSize = "lg";
export type AvatarVariant = "image" | "text" | "icon";
export type StatusIcon = "none" | "online" | "offline";

export interface GroupItemProps {
  /** Avatar variant */
  avatarVariant?: AvatarVariant;
  /** Avatar image url (for image variant) */
  avatarUrl?: string;
  /** Avatar icon name — Material Symbols (for icon variant) */
  avatarIcon?: string;
  /** Avatar text — initials (for text variant) */
  avatarText?: string;
  /** Avatar size */
  avatarSize?: AvatarSize;
  /** Avatar status indicator */
  statusIcon?: StatusIcon;

  /** Group name shown in header */
  title: string;

  /** Description text (e.g. "24 Members") */
  description?: string;

  /** Visual state */
  state?: GroupItemState;

  /** Click handler */
  onClick?: () => void;

  /** Optional className */
  className?: string;
}

const statusIconColor: Record<StatusIcon, string> = {
  none: "transparent",
  online: "var(--color-success-500)",
  offline: "var(--color-neutral-400)",
};

/* -------------------------------------------------------------------------- */
/* Avatar                                                                     */
/* -------------------------------------------------------------------------- */

interface AvatarPartProps {
  variant: AvatarVariant;
  url?: string;
  icon?: string;
  text?: string;
  title: string;
  status: StatusIcon;
}

const Avatar: React.FC<AvatarPartProps> = ({ variant, url, icon, text, title, status }) => {
  return (
    <div className="group-item__avatar">
      {variant === "image" && url && <img src={url} alt={title} />}
      {variant === "image" && !url && (
        <span className="group-item__avatar-fallback">{title.charAt(0)}</span>
      )}
      {variant === "text" && (
        <span className="group-item__avatar-fallback">
          {(text ?? title).slice(0, 2).toUpperCase()}
        </span>
      )}
      {variant === "icon" && (
        <span className="icon-outlined group-item__avatar-icon" aria-hidden="true">
          {icon ?? "group"}
        </span>
      )}
      {status !== "none" && (
        <span
          className="group-item__avatar-status"
          style={{ background: statusIconColor[status] }}
          aria-label={status}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Group Item                                                                 */
/* -------------------------------------------------------------------------- */

export const GroupItem: React.FC<GroupItemProps> = ({
  avatarVariant = "image",
  avatarUrl,
  avatarIcon,
  avatarText,
  avatarSize = "lg",
  statusIcon = "none",

  title,
  description,

  state = "default",
  onClick,
  className,
}) => {
  const classes = [
    "group-item",
    `group-item--${state}`,
    `group-item--avatar-${avatarSize}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick} role="button" tabIndex={0}>
      <Avatar
        variant={avatarVariant}
        url={avatarUrl}
        icon={avatarIcon}
        text={avatarText}
        title={title}
        status={statusIcon}
      />

      <div className="group-item__content">
        <div className="group-item__header">
          <div className="group-item__title">{title}</div>
        </div>

        {description && (
          <div className="group-item__description">
            <span className="group-item__description-text">{description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

export interface GroupItemSkeletonProps {
  /** Skeleton tone — start (lighter) or end (darker) */
  tone?: "start" | "end";
  className?: string;
}

export const GroupItemSkeleton: React.FC<GroupItemSkeletonProps> = ({
  tone = "start",
  className,
}) => {
  const classes = [
    "group-item",
    "group-item--skeleton",
    `group-item--skeleton-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <div className="group-item__skeleton-avatar" />
      <div className="group-item__skeleton-content">
        <div className="group-item__skeleton-bar group-item__skeleton-bar--title" />
        <div className="group-item__skeleton-bar group-item__skeleton-bar--description" />
      </div>
    </div>
  );
};
