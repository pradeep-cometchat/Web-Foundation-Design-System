import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog } from "../components/ConfirmDialog";

/**
 * A modal confirmation prompt used before destructive or irreversible actions.
 * Centers on screen with an overlay backdrop, icon, title, description, and
 * two action buttons (cancel + confirm).
 *
 * **Structure (from Figma):**
 * - Container: 400px wide, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`
 * - Inner padding: 24px, gap: 12px between elements
 * - Icon circle: 80px, `--radius-full`, background `--color-neutral-50` (#fafafa)
 * - Icon: 48px centered in circle, colored `--color-error` (#d92d20)
 * - Title: 20px, weight 500, line-height 30px, `--color-neutral-900`
 * - Description: 14px, weight 400, line-height 20px, `--color-neutral-700`
 * - Buttons: flex row, gap 8px, padding-y 12px
 * - Cancel: white bg, border `--color-neutral-300`, `--radius-md`
 * - Confirm: `--color-error` bg (#d92d20), white text, `--radius-md`
 */
const meta: Meta<typeof ConfirmDialog> = {
  title: "Base Components/Confirm Dialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: { control: "text", description: "Dialog title." },
    description: { control: "text", description: "Dialog description/message." },
    cancelLabel: { control: "text", description: "Cancel button label." },
    confirmLabel: { control: "text", description: "Confirm button label." },
    open: { control: "boolean", description: "Whether the dialog is visible." },
    showOverlay: { control: "boolean", description: "Whether to show the backdrop overlay." },
    icon: { control: false },
    onCancel: { control: false },
    onConfirm: { control: false },
  },
};
export default meta;

/* ─── Icons (exact SVGs from Figma) ─── */

function DeleteIcon() {
  return (
    <svg viewBox="0 0 31.43 35.33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.167 35.333C4.294 35.333 3.548 35.024 2.929 34.404C2.31 33.786 2 33.04 2 32.167V4.767H1.592C1.147 4.767 0.771 4.612 0.463 4.303C0.154 3.993 0 3.618 0 3.178C0 2.737 0.154 2.364 0.463 2.058C0.771 1.753 1.147 1.6 1.592 1.6H9.373V1.575C9.373 1.138 9.526 0.766 9.832 0.46C10.138 0.153 10.514 0 10.959 0H20.492C20.923 0 21.294 0.155 21.603 0.464C21.912 0.773 22.067 1.143 22.067 1.575V1.6H29.866C30.294 1.6 30.663 1.755 30.971 2.065C31.279 2.375 31.434 2.747 31.434 3.181C31.434 3.627 31.279 4.003 30.97 4.308C30.661 4.614 30.29 4.767 29.859 4.767H29.434V32.167C29.434 33.04 29.124 33.786 28.505 34.404C27.886 35.024 27.14 35.333 26.267 35.333H5.167ZM26.267 4.767H5.167V32.167H26.267V4.767ZM11.689 28.008C12.125 28.008 12.497 27.857 12.805 27.554C13.113 27.251 13.267 26.878 13.267 26.433V10.467C13.267 10.022 13.111 9.646 12.801 9.338C12.491 9.029 12.119 8.875 11.686 8.875C11.24 8.875 10.864 9.029 10.559 9.338C10.253 9.646 10.1 10.022 10.1 10.467V26.433C10.1 26.878 10.256 27.251 10.568 27.554C10.88 27.857 11.253 28.008 11.689 28.008ZM19.756 28.008C20.192 28.008 20.564 27.857 20.872 27.554C21.18 27.251 21.334 26.878 21.334 26.433V10.467C21.334 10.022 21.178 9.646 20.868 9.338C20.558 9.029 20.186 8.875 19.753 8.875C19.307 8.875 18.931 9.029 18.625 9.338C18.319 9.646 18.167 10.022 18.167 10.467V26.433C18.167 26.878 18.323 27.251 18.635 27.554C18.947 27.857 19.32 28.008 19.756 28.008Z" fill="currentColor"/>
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg viewBox="0 0 39.33 39.33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.669 39.333C16.945 39.333 14.389 38.817 11.999 37.784C9.611 36.75 7.529 35.347 5.754 33.575C3.979 31.803 2.576 29.723 1.546 27.336C0.515 24.948 0 22.392 0 19.669C0 16.945 0.517 14.389 1.55 11.999C2.583 9.611 3.986 7.529 5.758 5.754C7.53 3.979 9.61 2.576 11.998 1.546C14.385 0.515 16.941 0 19.665 0C22.388 0 24.945 0.517 27.334 1.55C29.723 2.583 31.804 3.986 33.579 5.758C35.354 7.53 36.757 9.61 37.788 11.998C38.818 14.385 39.333 16.941 39.333 19.665C39.333 22.388 38.817 24.945 37.784 27.334C36.75 29.723 35.347 31.804 33.575 33.579C31.803 35.354 29.723 36.757 27.336 37.788C24.948 38.818 22.392 39.333 19.669 39.333ZM19.667 36.167C21.626 36.167 23.504 35.842 25.301 35.192C27.098 34.542 28.731 33.6 30.2 32.367L6.974 9.133C5.758 10.622 4.819 12.262 4.158 14.053C3.497 15.843 3.167 17.715 3.167 19.667C3.167 24.269 4.766 28.17 7.965 31.369C11.163 34.567 15.064 36.167 19.667 36.167ZM32.327 30.2C33.52 28.733 34.458 27.101 35.142 25.303C35.825 23.505 36.167 21.626 36.167 19.667C36.167 15.064 34.567 11.163 31.369 7.965C28.17 4.766 24.269 3.167 19.667 3.167C17.716 3.167 15.845 3.497 14.055 4.158C12.265 4.819 10.624 5.767 9.133 7L32.327 30.2Z" fill="currentColor"/>
    </svg>
  );
}

function LeaveIcon() {
  return (
    <svg viewBox="0 0 33.26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.616 34C2.605 34 1.75 33.65 1.05 32.95C0.35 32.25 0 31.395 0 30.385V3.616C0 2.605 0.35 1.75 1.05 1.05C1.75 0.35 2.605 0 3.616 0H15.52C15.945 0 16.301 0.144 16.589 0.431C16.876 0.718 17.019 1.074 17.019 1.5C17.019 1.926 16.876 2.282 16.589 2.569C16.301 2.856 15.945 3 15.52 3H3.616C3.462 3 3.321 3.064 3.193 3.193C3.064 3.321 3 3.462 3 3.616V30.385C3 30.539 3.064 30.68 3.193 30.808C3.321 30.936 3.462 31 3.616 31H15.52C15.945 31 16.301 31.144 16.589 31.431C16.876 31.718 17.019 32.074 17.019 32.5C17.019 32.926 16.876 33.282 16.589 33.569C16.301 33.856 15.945 34 15.52 34H3.616ZM28.235 18.5H12.693C12.267 18.5 11.91 18.356 11.623 18.069C11.336 17.782 11.193 17.426 11.193 17C11.193 16.574 11.336 16.218 11.623 15.931C11.91 15.644 12.267 15.5 12.693 15.5H28.235L24.389 11.654C24.112 11.377 23.97 11.039 23.964 10.641C23.957 10.242 24.099 9.887 24.389 9.577C24.678 9.267 25.03 9.106 25.443 9.096C25.855 9.086 26.217 9.236 26.527 9.546L32.716 15.735C33.077 16.096 33.258 16.518 33.258 17C33.258 17.482 33.077 17.904 32.716 18.266L26.527 24.454C26.23 24.751 25.877 24.898 25.468 24.894C25.059 24.89 24.699 24.733 24.389 24.423C24.099 24.113 23.959 23.756 23.97 23.354C23.98 22.951 24.13 22.605 24.42 22.316L28.235 18.5Z" fill="currentColor"/>
    </svg>
  );
}

/* ─── Stories ─── */

/** Delete chat confirmation — exact match to Figma node 4087:691752. */
export const DeleteChat: StoryObj<typeof ConfirmDialog> = {
  args: {
    title: "Delete this chat?",
    description: "Are you sure you want to delete this chat?\nThis action cannot be undone.",
    icon: <DeleteIcon />,
    cancelLabel: "Cancel",
    confirmLabel: "Delete",
    showOverlay: false,
  },
};

/** Block contact confirmation — exact match to Figma node 4087:687976. */
export const BlockContact: StoryObj<typeof ConfirmDialog> = {
  args: {
    title: "Block this contact?",
    description: "Are you sure you want to block this contact? You won't receive/send messages from them anymore.",
    icon: <BlockIcon />,
    cancelLabel: "Cancel",
    confirmLabel: "Block",
    showOverlay: false,
  },
};

/** Leave group confirmation — exact match to Figma node 4086:673817. */
export const LeaveGroup: StoryObj<typeof ConfirmDialog> = {
  args: {
    title: "Leave this group?",
    description: "Are you sure you want to leave this group? You won't receive any more messages from this chat.",
    icon: <LeaveIcon />,
    cancelLabel: "Cancel",
    confirmLabel: "Leave",
    showOverlay: false,
  },
};

/** Without icon — minimal confirmation dialog. */
export const WithoutIcon: StoryObj<typeof ConfirmDialog> = {
  args: {
    title: "Discard changes?",
    description: "Your unsaved changes will be lost.",
    cancelLabel: "Keep editing",
    confirmLabel: "Discard",
    showOverlay: false,
  },
};

/** All three Figma variants side by side. */
export const AllVariants: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <ConfirmDialog
        title="Delete this chat?"
        description={"Are you sure you want to delete this chat?\nThis action cannot be undone."}
        icon={<DeleteIcon />}
        cancelLabel="Cancel"
        confirmLabel="Delete"
        showOverlay={false}
      />
      <ConfirmDialog
        title="Block this contact?"
        description="Are you sure you want to block this contact? You won't receive/send messages from them anymore."
        icon={<BlockIcon />}
        cancelLabel="Cancel"
        confirmLabel="Block"
        showOverlay={false}
      />
      <ConfirmDialog
        title="Leave this group?"
        description="Are you sure you want to leave this group? You won't receive any more messages from this chat."
        icon={<LeaveIcon />}
        cancelLabel="Cancel"
        confirmLabel="Leave"
        showOverlay={false}
      />
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Confirm Dialog. */
export const Playground: StoryObj<typeof ConfirmDialog> = {
  args: {
    title: "Delete this chat?",
    description: "Are you sure you want to delete this chat?\nThis action cannot be undone.",
    icon: <DeleteIcon />,
    cancelLabel: "Cancel",
    confirmLabel: "Delete",
    open: true,
    showOverlay: false,
  },
  parameters: { docs: { disable: true } },
};
