import React from "react";
import "./GroupItem.css";

export type GroupItemState = "default" | "hover" | "pressed";
export type GroupType = "public" | "private" | "protected" | "none";

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
  /** Group type — shows a badge icon on the avatar */
  groupType?: GroupType;

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
  online: "var(--cometchat-success-color)",
  offline: "var(--color-neutral-400)",
};

/* -------------------------------------------------------------------------- */
/* Group Type Badge                                                           */
/* -------------------------------------------------------------------------- */

const GroupTypeBadge: React.FC<{ type: GroupType }> = ({ type }) => {
  if (type === "none" || type === "public") return null;

  if (type === "private") {
    // Green circle with lock icon (matches AvatarGroup "Private" badge)
    return (
      <span className="group-item__type-badge group-item__type-badge--private">
        <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-item__type-badge-svg">
          <circle cx="8.5" cy="8.5" r="7.9" fill="#079455" stroke="white" strokeWidth="1.17" />
          <path d="M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z" fill="white" />
        </svg>
      </span>
    );
  }

  // Protected — orange circle with shield icon (matches AvatarGroup "Protected" badge)
  return (
    <span className="group-item__type-badge group-item__type-badge--protected">
      <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-item__type-badge-svg">
        <circle cx="8.5" cy="8.5" r="7.9" fill="#DC6803" stroke="white" strokeWidth="1.17" />
        <path d="M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z" fill="white" />
      </svg>
    </span>
  );
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
  groupType: GroupType;
}

const Avatar: React.FC<AvatarPartProps> = ({ variant, url, icon, text, title, status, groupType }) => {
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
      {status !== "none" && groupType === "none" && (
        <span
          className="group-item__avatar-status"
          style={{ background: statusIconColor[status] }}
          aria-label={status}
        />
      )}
      <GroupTypeBadge type={groupType} />
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
  groupType = "none",

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
        groupType={groupType}
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
