import React from "react";
import "./ConversationItem.css";

export type ConversationItemState = "default" | "hover" | "pressed";

export type AvatarSize = "lg";
export type AvatarVariant = "image" | "text" | "icon";
export type StatusIcon = "none" | "online" | "offline";

export type MessageStatus = "none" | "sending" | "sent" | "delivered" | "read" | "error";
export type DateType = "time" | "date";

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

export interface ConversationItemProps {
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

  /** Sender name shown in header */
  title: string;

  /** Timestamp text (e.g. "4:30 PM" or "Mon" or "11/09") */
  timestamp?: string;
  /** Date type — drives styling (currently identical, kept for parity with Figma) */
  dateType?: DateType;

  /** Message status — read receipt icon */
  messageStatus?: MessageStatus;

  /** Sender label e.g. "John:" — for group chats */
  senderLabel?: string;

  /** Message type — drives type icon */
  messageType?: MessageType;
  /** Whether to show the message-type label text (e.g. "Photo") */
  messageTypeLabel?: boolean;

  /** Text content of the message preview */
  textContent?: string;

  /** Show the activity status (e.g. "Typing") inline with message preview */
  activityStatus?: boolean;
  /** Show typing indicator (replaces message preview entirely) */
  typingIndicator?: boolean;

  /** Visual state */
  state?: ConversationItemState;

  /** Show the conversation meta (kebab menu) */
  conversationMeta?: boolean;

  /** Click handler */
  onClick?: () => void;
  /** Click handler for kebab menu */
  onMenuClick?: () => void;

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
    <div className="conversation-item__avatar">
      {variant === "image" && url && <img src={url} alt={title} />}
      {variant === "image" && !url && (
        <span className="conversation-item__avatar-fallback">{title.charAt(0)}</span>
      )}
      {variant === "text" && (
        <span className="conversation-item__avatar-fallback">
          {(text ?? title).slice(0, 2).toUpperCase()}
        </span>
      )}
      {variant === "icon" && (
        <span className="icon-outlined conversation-item__avatar-icon" aria-hidden="true">
          {icon ?? "person"}
        </span>
      )}
      {status !== "none" && (
        <span
          className="conversation-item__avatar-status"
          style={{ background: statusIconColor[status] }}
          aria-label={status}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Conversation Item                                                          */
/* -------------------------------------------------------------------------- */

export const ConversationItem: React.FC<ConversationItemProps> = ({
  avatarVariant = "image",
  avatarUrl,
  avatarIcon,
  avatarText,
  avatarSize = "lg",
  statusIcon = "none",

  title,

  timestamp,
  dateType = "time",

  messageStatus = "none",
  senderLabel,

  messageType = "none",
  messageTypeLabel = false,

  textContent,

  activityStatus = false,
  typingIndicator = false,

  state = "default",
  conversationMeta = false,

  onClick,
  onMenuClick,
  className,
}) => {
  const classes = [
    "conversation-item",
    `conversation-item--${state}`,
    `conversation-item--avatar-${avatarSize}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showTyping = typingIndicator || activityStatus;
  const showStatus = !showTyping && messageStatus !== "none";
  const showSender = !showTyping && !!senderLabel;
  const showType = !showTyping && messageType !== "none";
  const showTypeLabel = showType && messageTypeLabel;
  const showText = !showTyping && !!textContent;

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

      <div className="conversation-item__content">
        {/* Header */}
        <div className="conversation-item__header">
          <div className="conversation-item__title">{title}</div>
          {timestamp && (
            <div
              className={`conversation-item__timestamp conversation-item__timestamp--${dateType}`}
            >
              {timestamp}
            </div>
          )}
        </div>

        {/* Message row */}
        <div className="conversation-item__message-row">
          <div className="conversation-item__preview">
            {showTyping && (
              <div className="conversation-item__typing">
                <span className="conversation-item__dots">
                  <span className="conversation-item__dot conversation-item__dot--lg" />
                  <span className="conversation-item__dot" />
                  <span className="conversation-item__dot" />
                </span>
                <span className="conversation-item__typing-text">Typing</span>
              </div>
            )}

            {showStatus && (
              <span
                className={`icon-outlined conversation-item__status conversation-item__status--${messageStatus}`}
                aria-hidden="true"
              >
                {messageStatusIcon[messageStatus]}
              </span>
            )}

            {showSender && <span className="conversation-item__sender">{senderLabel}</span>}

            {showType && (
              <span className="conversation-item__type">
                <span className="icon-outlined conversation-item__type-icon" aria-hidden="true">
                  {messageTypeIcon[messageType]}
                </span>
                {showTypeLabel && (
                  <span className="conversation-item__type-label">
                    {messageTypeLabelText[messageType]}
                  </span>
                )}
              </span>
            )}

            {showText && <span className="conversation-item__text">{textContent}</span>}
          </div>

          {conversationMeta && (
            <button
              className="conversation-item__menu"
              aria-label="Conversation options"
              onClick={(e) => {
                e.stopPropagation();
                onMenuClick?.();
              }}
            >
              <span className="icon-outlined" aria-hidden="true">
                more_vert
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

export interface ConversationItemSkeletonProps {
  /** Skeleton tone — start (lighter) or end (darker) */
  tone?: "start" | "end";
  className?: string;
}

export const ConversationItemSkeleton: React.FC<ConversationItemSkeletonProps> = ({
  tone = "start",
  className,
}) => {
  const classes = [
    "conversation-item",
    "conversation-item--skeleton",
    `conversation-item--skeleton-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <div className="conversation-item__skeleton-avatar" />
      <div className="conversation-item__skeleton-content">
        <div className="conversation-item__skeleton-row">
          <div className="conversation-item__skeleton-bar conversation-item__skeleton-bar--title" />
          <div className="conversation-item__skeleton-bar conversation-item__skeleton-bar--time" />
        </div>
        <div className="conversation-item__skeleton-bar conversation-item__skeleton-bar--message" />
      </div>
    </div>
  );
};
