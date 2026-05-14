import { useState } from "react";
import "./InfoSelectionDialog.css";

export type InfoSelectionDialogVariant = "messageInfo" | "addMembers" | "transferOwnership" | "alert";

export interface MessageInfoItem {
  label: string;
  timestamp: string;
}

export interface MemberItem {
  name: string;
  avatar?: string;
  status?: string;
  role?: string;
  selected?: boolean;
}

export type AlertIconType = "block" | "warning" | "info" | "error" | "translate";

export interface InfoSelectionDialogProps {
  /** The variant determines the layout. */
  variant: InfoSelectionDialogVariant;
  /** Whether the modal is open. */
  open?: boolean;
  /** Message info items (for messageInfo variant). */
  messageInfoItems?: MessageInfoItem[];
  /** Message text preview (for messageInfo variant). */
  messagePreview?: string;
  /** Members list (for addMembers/transferOwnership variants). */
  members?: MemberItem[];
  /** Alert title (for alert variant). */
  alertTitle?: string;
  /** Alert description (for alert variant). */
  alertDescription?: string;
  /** Alert button label (for alert variant). Default: "Understood" */
  alertButtonLabel?: string;
  /** Alert icon type (for alert variant). Default: "block" */
  alertIcon?: AlertIconType;
  /** Callback when close is clicked. */
  onClose?: () => void;
  /** Callback when confirm/submit is clicked. */
  onConfirm?: () => void;
  /** Callback when cancel is clicked. */
  onCancel?: () => void;
}

/* ─── Icons ─── */
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14l-3.5-3.5M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BlockAlertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M5.5 5.5L18.5 18.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const VARIANT_CONFIG: Record<InfoSelectionDialogVariant, { title?: string; submitLabel?: string }> = {
  messageInfo: { title: "Message Info" },
  addMembers: { title: "Add Members", submitLabel: "Add" },
  transferOwnership: { title: "Transfer Ownership", submitLabel: "Transfer" },
  alert: {},
};

/* ─── Alert/Acknowledgment Content ─── */
function AlertContent({
  title,
  description,
  buttonLabel,
  icon,
  onConfirm,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  icon: AlertIconType;
  onConfirm?: () => void;
}) {
  return (
    <div className="info-dialog__alert">
      <div className="info-dialog__alert-icon-wrap">
        <div className="info-dialog__alert-icon">
          {icon === "block" && <BlockAlertIcon />}
          {icon === "warning" && (
            <span className="icon-outlined" style={{ fontSize: 32, fontFamily: "var(--icon-font-outlined)" }}>
              warning
            </span>
          )}
          {icon === "info" && (
            <span className="icon-outlined" style={{ fontSize: 32, fontFamily: "var(--icon-font-outlined)" }}>
              info
            </span>
          )}
          {icon === "error" && (
            <span className="icon-outlined" style={{ fontSize: 32, fontFamily: "var(--icon-font-outlined)" }}>
              error
            </span>
          )}
          {icon === "translate" && (
            <span className="icon-outlined" style={{ fontSize: 32, fontFamily: "var(--icon-font-outlined)" }}>
              translate
            </span>
          )}
        </div>
      </div>
      <div className="info-dialog__alert-text">
        <div className="info-dialog__alert-title">{title}</div>
        <div className="info-dialog__alert-description">{description}</div>
      </div>
      <div className="info-dialog__alert-actions">
        <button
          type="button"
          className="info-dialog__alert-btn"
          onClick={onConfirm}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

/* ─── Message Info Content ─── */
function MessageInfoContent({ messagePreview, items }: { messagePreview?: string; items?: MessageInfoItem[] }) {
  return (
    <div className="info-dialog__body">
      {messagePreview && (
        <div className="info-dialog__message-preview">
          <div className="info-dialog__message-bubble">{messagePreview}</div>
        </div>
      )}
      <div className="info-dialog__info-list">
        {items?.map((item, i) => (
          <div key={i} className="info-dialog__info-item">
            <span className="info-dialog__info-label">{item.label}</span>
            <span className="info-dialog__info-value">{item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Member Selection Content ─── */
function MemberSelectionContent({ members, selectionType = "checkbox" }: { members?: MemberItem[]; selectionType?: "checkbox" | "radio" }) {
  const defaultSelected = members?.findIndex((m) => m.selected) ?? -1;
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected >= 0 ? defaultSelected : -1);

  return (
    <div className="info-dialog__body">
      <div className="info-dialog__search">
        <SearchIcon />
        <input type="text" className="info-dialog__search-input" placeholder="Search" />
      </div>
      <div className="info-dialog__member-list">
        {members?.map((member, i) => (
          <div key={i} className="info-dialog__member-item">
            {selectionType === "radio" ? (
              <input
                type="radio"
                name="member-select"
                className="info-dialog__member-radio"
                checked={selectedIndex === i}
                onChange={() => setSelectedIndex(i)}
              />
            ) : (
              <input
                type="checkbox"
                className="info-dialog__member-checkbox"
                defaultChecked={member.selected}
              />
            )}
            <div className="info-dialog__member-avatar">
              {member.avatar ? (
                <img src={member.avatar} alt={member.name} />
              ) : (
                <div className="info-dialog__member-avatar-fallback">
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div className="info-dialog__member-info">
              <span className="info-dialog__member-name">{member.name}</span>
              {member.status && !member.role && <span className="info-dialog__member-status">{member.status}</span>}
            </div>
            {member.role && (
              <span className={`info-dialog__member-role info-dialog__member-role--${member.role.toLowerCase()}`}>
                {member.role}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfoSelectionDialog({
  variant,
  open = true,
  messageInfoItems,
  messagePreview,
  members,
  alertTitle = "You are no longer part of the group",
  alertDescription = "You have been banned from this group by the administrator.",
  alertButtonLabel = "Understood",
  alertIcon = "block",
  onClose,
  onConfirm,
  onCancel,
}: InfoSelectionDialogProps) {
  const config = VARIANT_CONFIG[variant];

  if (!open) return null;

  /* Alert variant has its own layout (no header) */
  if (variant === "alert") {
    return (
      <div className="info-dialog__overlay">
        <div className="info-dialog info-dialog--alert" role="dialog" aria-modal="true" aria-labelledby="info-dialog-alert-title">
          <AlertContent
            title={alertTitle}
            description={alertDescription}
            buttonLabel={alertButtonLabel}
            icon={alertIcon}
            onConfirm={onConfirm}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="info-dialog__overlay">
      <div className="info-dialog" role="dialog" aria-modal="true" aria-labelledby="info-dialog-title">
        {/* Header */}
        <div className="info-dialog__header">
          <div className="info-dialog__title" id="info-dialog-title">{config.title}</div>
          <button type="button" className="info-dialog__close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        {variant === "messageInfo" && (
          <MessageInfoContent messagePreview={messagePreview} items={messageInfoItems} />
        )}
        {(variant === "addMembers" || variant === "transferOwnership") && (
          <MemberSelectionContent members={members} selectionType={variant === "transferOwnership" ? "radio" : "checkbox"} />
        )}

        {/* Actions (only for selection variants) */}
        {config.submitLabel && (
          <div className="info-dialog__actions">
            <button type="button" className="info-dialog__btn info-dialog__btn--cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="info-dialog__btn info-dialog__btn--submit" onClick={onConfirm}>
              {config.submitLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
