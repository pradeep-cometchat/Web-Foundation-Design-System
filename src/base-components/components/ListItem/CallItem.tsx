import React from "react";
import "./CallItem.css";

export type CallItemState = "default" | "hover" | "pressed";
export type CallDirection = "incoming" | "outgoing" | "declined" | "missed";
export type CallType = "voice" | "video";

export type AvatarVariant = "image" | "text" | "icon";
export type StatusIcon = "none" | "online" | "offline";

export interface CallItemProps {
  /* Avatar */
  avatarVariant?: AvatarVariant;
  avatarUrl?: string;
  avatarIcon?: string;
  avatarText?: string;
  /** Avatar size — currently only `lg` (48px) */
  avatarSize?: "lg";
  /** Avatar status indicator dot */
  statusIcon?: StatusIcon;

  /** Display name */
  title: string;

  /** Call direction (drives the inline icon) */
  direction?: CallDirection;
  /** Call action type (drives the trailing icon) */
  type?: CallType;

  /** Date/time text — e.g. "11 September, 8:14 pm" */
  dateTime?: string;

  /** Visual state */
  state?: CallItemState;

  /** Click handler */
  onClick?: () => void;
  /** Trailing action button click handler */
  onActionClick?: () => void;
  /** Optional className */
  className?: string;
}

const directionIcon: Record<CallDirection, string> = {
  incoming: "call_received",
  outgoing: "call_made",
  declined: "phone_disabled",
  missed: "call_missed",
};

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
    <div className="call-item__avatar">
      {variant === "image" && url && <img src={url} alt={title} />}
      {variant === "image" && !url && (
        <span className="call-item__avatar-fallback">{title.charAt(0)}</span>
      )}
      {variant === "text" && (
        <span className="call-item__avatar-fallback">
          {(text ?? title).slice(0, 2).toUpperCase()}
        </span>
      )}
      {variant === "icon" && (
        <span className="icon-outlined call-item__avatar-icon" aria-hidden="true">
          {icon ?? "person"}
        </span>
      )}
      {status !== "none" && (
        <span
          className="call-item__avatar-status"
          style={{ background: statusIconColor[status] }}
          aria-label={status}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Call Item                                                                  */
/* -------------------------------------------------------------------------- */

export const CallItem: React.FC<CallItemProps> = ({
  avatarVariant = "image",
  avatarUrl,
  avatarIcon,
  avatarText,
  avatarSize = "lg",
  statusIcon = "none",

  title,
  direction = "outgoing",
  type = "voice",
  dateTime,
  state = "default",
  onClick,
  onActionClick,
  className,
}) => {
  const classes = [
    "call-item",
    `call-item--${state}`,
    `call-item--avatar-${avatarSize}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const trailingIcon = type === "video" ? "videocam" : "call";

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

      <div className="call-item__content">
        <div className="call-item__header">
          <div className="call-item__title">{title}</div>
        </div>

        <div className="call-item__meta">
          <span
            className={`icon-outlined call-item__direction call-item__direction--${direction}`}
            aria-hidden="true"
          >
            {directionIcon[direction]}
          </span>
          {dateTime && <span className="call-item__datetime">{dateTime}</span>}
        </div>
      </div>

      <button
        type="button"
        className="call-item__action"
        aria-label={type === "video" ? "Video call" : "Voice call"}
        onClick={(e) => {
          e.stopPropagation();
          onActionClick?.();
        }}
      >
        <span className="icon-outlined" aria-hidden="true">
          {trailingIcon}
        </span>
      </button>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

export interface CallItemSkeletonProps {
  tone?: "start" | "end";
  className?: string;
}

export const CallItemSkeleton: React.FC<CallItemSkeletonProps> = ({
  tone = "start",
  className,
}) => {
  const classes = [
    "call-item",
    "call-item--skeleton",
    `call-item--skeleton-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <div className="call-item__skeleton-avatar" />
      <div className="call-item__skeleton-content">
        <div className="call-item__skeleton-bar call-item__skeleton-bar--title" />
        <div className="call-item__skeleton-bar call-item__skeleton-bar--meta" />
      </div>
      <div className="call-item__skeleton-action" />
    </div>
  );
};
