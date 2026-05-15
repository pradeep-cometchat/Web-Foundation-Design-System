import "./ConfirmationDialog.css";

export type ConfirmationDialogVariant =
  | "deleteConversation"
  | "blockUser"
  | "deleteUser"
  | "leaveGroup"
  | "deleteAndExit"
  | "banMember"
  | "kickMember"
  | "transferOwnership"
  | "translate";

export interface ConfirmationDialogProps {
  /** The variant determines the title, description, icon, and button labels. */
  variant: ConfirmationDialogVariant;
  /** Custom title (overrides variant default). */
  title?: string;
  /** Custom description (overrides variant default). */
  description?: string;
  /** Custom confirm button label (overrides variant default). */
  confirmLabel?: string;
  /** Custom cancel button label. Default: "Cancel" */
  cancelLabel?: string;
  /** Whether the modal is open. */
  open?: boolean;
  /** Callback when cancel is clicked. */
  onCancel?: () => void;
  /** Callback when confirm is clicked. */
  onConfirm?: () => void;
}

const VARIANT_CONFIG: Record<
  ConfirmationDialogVariant,
  { title: string; description: string; confirmLabel: string; icon: "delete" | "block" | "leave" | "kick" | "translate" | "transfer" | "none" }
> = {
  deleteConversation: {
    title: "Delete Conversation?",
    description: "Are you sure you want to delete this conversation? This action cannot be undone.",
    confirmLabel: "Delete",
    icon: "delete",
  },
  blockUser: {
    title: "Block this contact?",
    description: "Are you sure you want to block this contact? You won't receive/send messages from them anymore.",
    confirmLabel: "Block",
    icon: "block",
  },
  deleteUser: {
    title: "Delete User?",
    description: "Are you sure you want to delete this user? This action cannot be undone.",
    confirmLabel: "Delete",
    icon: "delete",
  },
  leaveGroup: {
    title: "Leave Group?",
    description: "Are you sure you want to leave this group? You will no longer receive messages from this group.",
    confirmLabel: "Leave",
    icon: "leave",
  },
  deleteAndExit: {
    title: "Delete and Exit?",
    description: "Are you sure you want to delete this chat and exit the group? This action cannot be undone.",
    confirmLabel: "Delete & Exit",
    icon: "delete",
  },
  banMember: {
    title: "Ban Member?",
    description: "Are you sure you want to ban this member? They will be removed and won't be able to rejoin.",
    confirmLabel: "Ban",
    icon: "block",
  },
  kickMember: {
    title: "Kick Member?",
    description: "Are you sure you want to kick this member from the group?",
    confirmLabel: "Kick",
    icon: "kick",
  },
  translate: {
    title: "Translate Message?",
    description: "Would you like to translate this message to your preferred language?",
    confirmLabel: "Translate",
    icon: "translate",
  },
  transferOwnership: {
    title: "Ownership Transfer",
    description: "Are you sure you want to transfer ownership? This can't be undone, and the new owner will take full control.",
    confirmLabel: "Continue",
    icon: "transfer",
  },
};

/* ─── Icons ─── */

function DeleteIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.583 17.667C2.147 17.667 1.774 17.512 1.464 17.202C1.155 16.893 1 16.52 1 16.083V2.383H0.796C0.574 2.383 0.385 2.306 0.231 2.151C0.077 1.996 0 1.809 0 1.589C0 1.368 0.077 1.182 0.231 1.029C0.385 0.876 0.574 0.8 0.796 0.8H4.687V0.788C4.687 0.569 4.763 0.383 4.916 0.23C5.069 0.077 5.257 0 5.479 0H10.246C10.462 0 10.647 0.077 10.802 0.232C10.956 0.386 11.033 0.572 11.033 0.788V0.8H14.933C15.147 0.8 15.331 0.878 15.486 1.033C15.64 1.188 15.717 1.374 15.717 1.59C15.717 1.813 15.639 2.001 15.485 2.154C15.33 2.307 15.145 2.383 14.929 2.383H14.717V16.083C14.717 16.52 14.562 16.893 14.252 17.202C13.943 17.512 13.57 17.667 13.133 17.667H2.583ZM13.133 2.383H2.583V16.083H13.133V2.383ZM5.845 14.004C6.062 14.004 6.248 13.928 6.402 13.777C6.556 13.626 6.633 13.439 6.633 13.217V5.233C6.633 5.011 6.556 4.823 6.401 4.669C6.246 4.515 6.06 4.438 5.843 4.438C5.62 4.438 5.432 4.515 5.279 4.669C5.126 4.823 5.05 5.011 5.05 5.233V13.217C5.05 13.439 5.128 13.626 5.284 13.777C5.44 13.928 5.627 14.004 5.845 14.004ZM9.878 14.004C10.096 14.004 10.282 13.928 10.436 13.777C10.59 13.626 10.667 13.439 10.667 13.217V5.233C10.667 5.011 10.589 4.823 10.434 4.669C10.279 4.515 10.093 4.438 9.876 4.438C9.653 4.438 9.465 4.515 9.313 4.669C9.16 4.823 9.083 5.011 9.083 5.233V13.217C9.083 13.439 9.161 13.626 9.317 13.777C9.473 13.928 9.66 14.004 9.878 14.004Z" fill="currentColor"/>
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M5.5 5.5L18.5 18.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LeaveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8l7 8M2 5h12M7 2v3M4.5 13c1.5 2.5 4 4 7.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14l2 4.5 2-4.5M13 19h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KickIcon() {
  return (
    <span
      className="icon-outlined"
      style={{ fontSize: 32, fontFamily: "var(--icon-font-outlined)" }}
    >
      close
    </span>
  );
}

function TransferIcon() {
  return (
    <span
      className="icon-outlined"
      style={{ fontSize: 28, fontFamily: "var(--icon-font-outlined)" }}
    >
      key
    </span>
  );
}

const ICON_MAP: Record<string, React.FC | null> = {
  delete: DeleteIcon,
  block: BlockIcon,
  leave: LeaveIcon,
  kick: KickIcon,
  translate: TranslateIcon,
  transfer: TransferIcon,
  none: null,
};

export function ConfirmationDialog({
  variant,
  title,
  description,
  confirmLabel,
  cancelLabel = "Cancel",
  open = true,
  onCancel,
  onConfirm,
}: ConfirmationDialogProps) {
  const config = VARIANT_CONFIG[variant];
  const displayTitle = title || config.title;
  const displayDescription = description || config.description;
  const displayConfirmLabel = confirmLabel || config.confirmLabel;
  const IconComponent = ICON_MAP[config.icon];
  const isDestructive = config.icon !== "none" && config.icon !== "transfer";

  if (!open) return null;

  return (
    <div className="confirmation-dialog__overlay">
      <div className="confirmation-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-dialog-title">
        {/* Icon (only if variant has one) */}
        {IconComponent && (
          <div className="confirmation-dialog__icon-wrap">
            <div className={`confirmation-dialog__icon ${isDestructive ? "" : "confirmation-dialog__icon--primary"}`}>
              <IconComponent />
            </div>
          </div>
        )}

        {/* Text */}
        <div className="confirmation-dialog__text">
          <div className="confirmation-dialog__title" id="confirm-dialog-title">
            {displayTitle}
          </div>
          <div className="confirmation-dialog__description">
            {displayDescription}
          </div>
        </div>

        {/* Buttons */}
        <div className="confirmation-dialog__actions">
          <div className="confirmation-dialog__btn-wrap">
            <button
              type="button"
              className="confirmation-dialog__btn confirmation-dialog__btn--cancel"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
          </div>
          <div className="confirmation-dialog__btn-wrap">
            <button
              type="button"
              className={`confirmation-dialog__btn ${isDestructive ? "confirmation-dialog__btn--confirm" : "confirmation-dialog__btn--primary"}`}
              onClick={onConfirm}
            >
              {displayConfirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
