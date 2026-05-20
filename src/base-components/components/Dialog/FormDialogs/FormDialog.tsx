import { useState } from "react";
import "./FormDialog.css";

export type FormDialogVariant = "createGroup" | "joinGroup";
export type GroupType = "public" | "private" | "protected";

export interface FormDialogProps {
  /** The variant determines the layout and fields. */
  variant: FormDialogVariant;
  /** Whether the modal is open. */
  open?: boolean;
  /** Initial group type selection (for createGroup). Default: "public" */
  initialGroupType?: GroupType;
  /** Callback when cancel is clicked. */
  onCancel?: () => void;
  /** Callback when submit is clicked. */
  onSubmit?: () => void;
}

/* ─── Icons ─── */
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Create Group Form ─── */
function CreateGroupForm({ initialGroupType = "public" }: { initialGroupType?: GroupType }) {
  const [groupType, setGroupType] = useState<GroupType>(initialGroupType);

  return (
    <div className="form-dialog__body">
      {/* Type Field */}
      <div className="form-dialog__field">
        <label className="form-dialog__label">Type</label>
        <div className="form-dialog__tabs">
          <button
            type="button"
            className={`form-dialog__tab ${groupType === "public" ? "form-dialog__tab--active" : ""}`}
            onClick={() => setGroupType("public")}
          >
            Public
          </button>
          <button
            type="button"
            className={`form-dialog__tab ${groupType === "private" ? "form-dialog__tab--active" : ""}`}
            onClick={() => setGroupType("private")}
          >
            Private
          </button>
          <button
            type="button"
            className={`form-dialog__tab ${groupType === "protected" ? "form-dialog__tab--active" : ""}`}
            onClick={() => setGroupType("protected")}
          >
            Password
          </button>
        </div>
      </div>

      {/* Group Name Field */}
      <div className="form-dialog__field">
        <div className="form-dialog__label-wrap">
          <span className="form-dialog__label">Group Name</span>
          <span className="form-dialog__required">*</span>
        </div>
        <input type="text" className="form-dialog__input" placeholder="Enter group name" />
      </div>

      {/* Password Field (only for Protected type) */}
      {groupType === "protected" && (
        <div className="form-dialog__field">
          <div className="form-dialog__label-wrap">
            <span className="form-dialog__label">Password</span>
            <span className="form-dialog__required">*</span>
          </div>
          <input type="password" className="form-dialog__input" placeholder="Enter group password" />
        </div>
      )}
    </div>
  );
}

/* ─── Join Group Form ─── */
function JoinGroupForm() {
  return (
    <div className="form-dialog__body">
      <div className="form-dialog__profile">
        <div className="form-dialog__avatar">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="var(--cometchat-extended-primary-color-300)" />
            <path d="M40 40c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm0 4c-6 0-18 3-18 9v5h36v-5c0-6-12-9-18-9z" fill="white" />
          </svg>
        </div>
        <div className="form-dialog__profile-info">
          <div className="form-dialog__profile-name">Innovative Online Shopping</div>
          <div className="form-dialog__profile-meta">44 Members</div>
        </div>
      </div>
      <div className="form-dialog__field">
        <div className="form-dialog__label-wrap">
          <span className="form-dialog__label">Password</span>
          <span className="form-dialog__required">*</span>
        </div>
        <div className="form-dialog__input-wrap">
          <input type="password" className="form-dialog__input form-dialog__input--with-icon" placeholder="Enter password" />
          <button type="button" className="form-dialog__input-icon" aria-label="Toggle password visibility">
            <span className="icon-outlined" style={{ fontSize: 20, fontFamily: "var(--cometchat-font-family)", color: "var(--cometchat-icon-color-tertiary)" }}>
              visibility_off
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const VARIANT_CONFIG: Record<FormDialogVariant, { title: string; submitLabel: string }> = {
  createGroup: { title: "New Group", submitLabel: "Create Group" },
  joinGroup: { title: "Group Password", submitLabel: "Continue" },
};

export function FormDialog({
  variant,
  open = true,
  initialGroupType = "public",
  onCancel,
  onSubmit,
}: FormDialogProps) {
  const config = VARIANT_CONFIG[variant];

  if (!open) return null;

  return (
    <div className="form-dialog__overlay">
      <div className="form-dialog" role="dialog" aria-modal="true" aria-labelledby="form-dialog-title">
        {/* Header */}
        <div className="form-dialog__header">
          <div className="form-dialog__title" id="form-dialog-title">{config.title}</div>
          <button type="button" className="form-dialog__close" onClick={onCancel} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Form Content */}
        {variant === "createGroup" && <CreateGroupForm initialGroupType={initialGroupType} />}
        {variant === "joinGroup" && <JoinGroupForm />}

        {/* Actions */}
        <div className="form-dialog__actions">
          <button type="button" className="form-dialog__btn form-dialog__btn--cancel" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="form-dialog__btn form-dialog__btn--submit" onClick={onSubmit}>
            {config.submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
