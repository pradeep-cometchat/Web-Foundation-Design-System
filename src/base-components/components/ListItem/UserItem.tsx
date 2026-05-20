import React from "react";
import "./UserItem.css";

export type UserItemState = "default" | "hover" | "pressed";

export type AvatarVariant = "image" | "text" | "icon";
export type StatusIcon = "none" | "online" | "offline";

export type MessageStatus = "none" | "sending" | "sent" | "delivered" | "read" | "error";

export type MessageType =
  | "none"
  | "photo"
  | "video"
  | "audio"
  | "file"
  | "location"
  | "sticker"
  | "gif"
  | "poll";

export interface UserItemProps {
  /* Avatar */
  avatarVariant?: AvatarVariant;
  avatarUrl?: string;
  avatarIcon?: string;
  avatarText?: string;
  avatarSize?: "lg";
  /** Avatar status indicator dot */
  statusIcon?: StatusIcon;

  /** Display name */
  title: string;

  /** Optional message preview / subtitle text */
  textContent?: string;
  /** Message status icon (read receipt) — shown before text content */
  messageStatus?: MessageStatus;
  /** Message type icon — shown before text content */
  messageType?: MessageType;
  /** Whether to show the message-type label text */
  messageTypeLabel?: boolean;

  /** Visual state */
  state?: UserItemState;

  /** Click handler */
  onClick?: () => void;
  /** Optional className */
  className?: string;
}

const messageTypeIcon: Record<MessageType, string> = {
  none: "",
  photo: "image",
  video: "videocam",
  audio: "mic",
  file: "description",
  location: "location_on",
  sticker: "sticky_note_2",
  gif: "gif_box",
  poll: "ballot",
};

const messageTypeLabelText: Record<MessageType, string> = {
  none: "",
  photo: "Photo",
  video: "Video",
  audio: "Audio",
  file: "File",
  location: "Location",
  sticker: "Sticker",
  gif: "GIF",
  poll: "Poll",
};

const messageStatusIcon: Record<MessageStatus, string> = {
  none: "",
  sending: "schedule",
  sent: "done",
  delivered: "done_all",
  read: "done_all",
  error: "error",
};

const statusIconColor: Record<StatusIcon, string> = {
  none: "transparent",
  online: "var(--cometchat-success-color)",
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
    <div className="user-item__avatar">
      {variant === "image" && url && <img src={url} alt={title} />}
      {variant === "image" && !url && (
        <span className="user-item__avatar-fallback">{title.charAt(0)}</span>
      )}
      {variant === "text" && (
        <span className="user-item__avatar-fallback">
          {(text ?? title).slice(0, 2).toUpperCase()}
        </span>
      )}
      {variant === "icon" && (
        <span className="icon-outlined user-item__avatar-icon" aria-hidden="true">
          {icon ?? "person"}
        </span>
      )}
      {status !== "none" && (
        <span
          className="user-item__avatar-status"
          style={{ background: statusIconColor[status] }}
          aria-label={status}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* User Item                                                                  */
/* -------------------------------------------------------------------------- */

export const UserItem: React.FC<UserItemProps> = ({
  avatarVariant = "image",
  avatarUrl,
  avatarIcon,
  avatarText,
  avatarSize = "lg",
  statusIcon = "none",

  title,

  textContent,
  messageStatus = "none",
  messageType = "none",
  messageTypeLabel = false,

  state = "default",
  onClick,
  className,
}) => {
  const classes = [
    "user-item",
    `user-item--${state}`,
    `user-item--avatar-${avatarSize}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showStatus = messageStatus !== "none";
  const showType = messageType !== "none";
  const showTypeLabel = showType && messageTypeLabel;
  const showText = !!textContent;
  const hasSubtitle = showStatus || showType || showText;

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

      <div className="user-item__content">
        <div className="user-item__header">
          <div className="user-item__title">{title}</div>
        </div>

        {hasSubtitle && (
          <div className="user-item__subtitle">
            {showStatus && (
              <span
                className={`icon-outlined user-item__status user-item__status--${messageStatus}`}
                aria-hidden="true"
              >
                {messageStatusIcon[messageStatus]}
              </span>
            )}

            {showType && (
              <span className="user-item__type">
                <span className="icon-outlined user-item__type-icon" aria-hidden="true">
                  {messageTypeIcon[messageType]}
                </span>
                {showTypeLabel && (
                  <span className="user-item__type-label">
                    {messageTypeLabelText[messageType]}
                  </span>
                )}
              </span>
            )}

            {showText && <span className="user-item__text">{textContent}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Divider — section letter (A, B, C ...) used in alphabet-grouped user lists */
/* -------------------------------------------------------------------------- */

export interface UserItemDividerProps {
  label: string;
  className?: string;
}

export const UserItemDivider: React.FC<UserItemDividerProps> = ({ label, className }) => {
  const classes = ["user-item", "user-item--divider", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <div className="user-item__divider-label">{label}</div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

export interface UserItemSkeletonProps {
  tone?: "start" | "end";
  className?: string;
}

export const UserItemSkeleton: React.FC<UserItemSkeletonProps> = ({
  tone = "start",
  className,
}) => {
  const classes = [
    "user-item",
    "user-item--skeleton",
    `user-item--skeleton-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <div className="user-item__skeleton-avatar" />
      <div className="user-item__skeleton-content">
        <div className="user-item__skeleton-bar" />
      </div>
    </div>
  );
};
