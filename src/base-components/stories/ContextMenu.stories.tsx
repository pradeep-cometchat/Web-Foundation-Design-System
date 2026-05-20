import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu, ContextMenuTrigger } from "../components/ContextMenu";
import type { ContextMenuItem } from "../components/ContextMenu";

/**
 * A right-click or long-press context menu with grouped actions and icons.
 * Appears anchored to a message or element with a compact list of actions.
 *
 * **Structure (from Figma node 4090:878265):**
 * - Container: 160px wide, `--radius-md` (8px), shadow-lg, border `--color-neutral-100`
 * - First item: 44px height, rest: 40px height
 * - Item padding: 16px horizontal, 8px gap between icon and label
 * - Icons: 24×24, color `#A1A1A1` (neutral-400)
 * - Text: 14px, weight 400, line-height 1.2, color `--color-neutral-900`
 * - Hover: `--color-neutral-50` (#fafafa) background
 * - Destructive items: `--color-error` text and icon
 */
const meta: Meta<typeof ContextMenu> = {
  title: "Base Components/Context Menu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    items: { control: false, description: "Array of menu items with icon, label, and optional destructive flag." },
    open: { control: "boolean", description: "Whether the menu is visible." },
    width: { control: { type: "number", min: 120, max: 300, step: 10 }, description: "Width of the menu in pixels." },
    onClose: { control: false },
  },
};
export default meta;

/* ─── Icons (exact SVGs from Figma) ─── */

function CopyIcon() {
  return (
    <svg viewBox="0 0 16.67 19.67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.75 16.5C4.323 16.5 3.952 16.343 3.638 16.029C3.324 15.714 3.167 15.344 3.167 14.917V1.583C3.167 1.156 3.324 0.785 3.638 0.471C3.952 0.157 4.323 0 4.75 0H15.083C15.51 0 15.881 0.157 16.195 0.471C16.509 0.785 16.667 1.156 16.667 1.583V14.917C16.667 15.344 16.509 15.714 16.195 16.029C15.881 16.343 15.51 16.5 15.083 16.5H4.75ZM4.75 14.917H15.083V1.583H4.75V14.917ZM1.583 19.667C1.156 19.667 0.785 19.509 0.471 19.195C0.157 18.881 0 18.51 0 18.083V3.954C0 3.738 0.077 3.553 0.232 3.399C0.387 3.244 0.574 3.167 0.795 3.167C1.015 3.167 1.201 3.244 1.354 3.399C1.507 3.553 1.583 3.738 1.583 3.954V18.083H12.713C12.928 18.083 13.114 18.161 13.268 18.316C13.423 18.471 13.5 18.657 13.5 18.874C13.5 19.097 13.423 19.285 13.268 19.438C13.114 19.59 12.928 19.667 12.713 19.667H1.583Z" fill="currentColor"/>
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="3 5 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.373 11.75L9.696 15.073C9.845 15.222 9.918 15.396 9.916 15.595C9.914 15.795 9.836 15.972 9.681 16.127C9.526 16.272 9.35 16.347 9.154 16.352C8.958 16.357 8.782 16.282 8.627 16.127L4.133 11.633C3.952 11.452 3.862 11.241 3.862 11C3.862 10.759 3.952 10.548 4.133 10.367L8.627 5.873C8.766 5.735 8.937 5.664 9.141 5.661C9.346 5.657 9.526 5.728 9.681 5.873C9.836 6.028 9.914 6.206 9.914 6.408C9.914 6.609 9.836 6.787 9.681 6.942L6.373 10.25H15.75C17.063 10.25 18.183 10.714 19.11 11.641C20.037 12.567 20.5 13.687 20.5 15V17.75C20.5 17.963 20.428 18.141 20.285 18.285C20.141 18.428 19.963 18.5 19.75 18.5C19.537 18.5 19.359 18.428 19.216 18.285C19.072 18.141 19 17.963 19 17.75V15C19 14.103 18.683 13.337 18.048 12.702C17.414 12.067 16.648 11.75 15.75 11.75H6.373Z" fill="currentColor"/>
    </svg>
  );
}

function ReplyInThreadIcon() {
  return (
    <svg viewBox="0 0 13.62 15.69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.973 15.458C7.818 15.303 7.742 15.125 7.745 14.926C7.748 14.727 7.824 14.553 7.973 14.404L11.127 11.25H1.808C1.309 11.25 0.883 11.073 0.53 10.72C0.177 10.367 0 9.941 0 9.442V0.75C0 0.537 0.072 0.359 0.216 0.216C0.359 0.072 0.537 0 0.75 0C0.963 0 1.141 0.072 1.285 0.216C1.428 0.359 1.5 0.537 1.5 0.75V9.442C1.5 9.532 1.529 9.606 1.587 9.664C1.644 9.721 1.718 9.75 1.808 9.75H11.127L7.958 6.581C7.803 6.426 7.728 6.25 7.733 6.054C7.738 5.858 7.813 5.682 7.958 5.527C8.113 5.372 8.29 5.293 8.49 5.292C8.689 5.29 8.863 5.363 9.012 5.512L13.367 9.867C13.461 9.961 13.527 10.06 13.565 10.164C13.604 10.267 13.623 10.38 13.623 10.5C13.623 10.621 13.604 10.733 13.565 10.837C13.527 10.94 13.461 11.039 13.367 11.133L9.042 15.458C8.887 15.613 8.709 15.69 8.508 15.69C8.306 15.69 8.128 15.613 7.973 15.458Z" fill="currentColor"/>
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg viewBox="0 0 20.35 18.62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.931 15.565L11.975 18.144C11.921 18.283 11.832 18.396 11.707 18.484C11.582 18.571 11.442 18.615 11.287 18.615C11.03 18.615 10.825 18.51 10.671 18.299C10.517 18.088 10.491 17.858 10.592 17.608L14.479 7.577C14.543 7.438 14.636 7.327 14.758 7.242C14.88 7.158 15.015 7.115 15.164 7.115H15.721C15.87 7.115 16.005 7.158 16.127 7.242C16.249 7.327 16.342 7.438 16.406 7.577L20.292 17.623C20.394 17.863 20.37 18.088 20.221 18.299C20.072 18.51 19.87 18.615 19.614 18.615C19.448 18.615 19.306 18.571 19.186 18.484C19.066 18.396 18.974 18.277 18.91 18.129L17.954 15.565H12.931ZM7.291 10.706L2.844 15.146C2.706 15.291 2.534 15.366 2.33 15.371C2.125 15.376 1.946 15.301 1.791 15.146C1.646 15.001 1.573 14.826 1.573 14.619C1.573 14.413 1.646 14.237 1.791 14.092L6.237 9.637C5.66 9.053 5.111 8.361 4.592 7.56C4.072 6.758 3.644 5.943 3.308 5.115H4.898C5.187 5.72 5.538 6.326 5.951 6.931C6.365 7.536 6.811 8.086 7.291 8.583C8.001 7.866 8.672 6.996 9.306 5.972C9.939 4.948 10.387 3.996 10.648 3.115H0.75C0.537 3.115 0.359 3.043 0.216 2.9C0.072 2.756 0 2.578 0 2.365C0 2.152 0.072 1.974 0.216 1.831C0.359 1.687 0.537 1.615 0.75 1.615H6.558V0.75C6.558 0.537 6.63 0.359 6.773 0.215C6.917 0.072 7.095 0 7.308 0C7.521 0 7.699 0.072 7.842 0.215C7.986 0.359 8.058 0.537 8.058 0.75V1.615H13.866C14.078 1.615 14.257 1.687 14.4 1.831C14.544 1.974 14.616 2.152 14.616 2.365C14.616 2.578 14.544 2.756 14.4 2.9C14.257 3.043 14.078 3.115 13.866 3.115H12.167C11.843 4.238 11.326 5.412 10.617 6.637C9.907 7.862 9.149 8.872 8.344 9.667L10.812 12.194L10.244 13.735L7.291 10.706ZM13.412 14.238H17.473L15.442 8.783L13.412 14.238Z" fill="currentColor"/>
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg viewBox="0 0 15.72 17.67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.583 17.667C2.147 17.667 1.774 17.512 1.464 17.202C1.155 16.893 1 16.52 1 16.083V2.383H0.796C0.574 2.383 0.385 2.306 0.231 2.151C0.077 1.996 0 1.809 0 1.589C0 1.368 0.077 1.182 0.231 1.029C0.385 0.876 0.574 0.8 0.796 0.8H4.687V0.788C4.687 0.569 4.763 0.383 4.916 0.23C5.069 0.077 5.257 0 5.479 0H10.246C10.462 0 10.647 0.077 10.802 0.232C10.956 0.386 11.033 0.572 11.033 0.788V0.8H14.933C15.147 0.8 15.331 0.878 15.486 1.033C15.64 1.188 15.717 1.374 15.717 1.59C15.717 1.813 15.639 2.001 15.485 2.154C15.33 2.307 15.145 2.383 14.929 2.383H14.717V16.083C14.717 16.52 14.562 16.893 14.252 17.202C13.943 17.512 13.57 17.667 13.133 17.667H2.583ZM13.133 2.383H2.583V16.083H13.133V2.383ZM5.845 14.004C6.062 14.004 6.248 13.928 6.402 13.777C6.556 13.626 6.633 13.439 6.633 13.217V5.233C6.633 5.011 6.556 4.823 6.401 4.669C6.246 4.515 6.06 4.438 5.843 4.438C5.62 4.438 5.432 4.515 5.279 4.669C5.126 4.823 5.05 5.011 5.05 5.233V13.217C5.05 13.439 5.128 13.626 5.284 13.777C5.44 13.928 5.627 14.004 5.845 14.004ZM9.878 14.004C10.096 14.004 10.282 13.928 10.436 13.777C10.59 13.626 10.667 13.439 10.667 13.217V5.233C10.667 5.011 10.589 4.823 10.434 4.669C10.279 4.515 10.093 4.438 9.876 4.438C9.653 4.438 9.465 4.515 9.313 4.669C9.16 4.823 9.083 5.011 9.083 5.233V13.217C9.083 13.439 9.161 13.626 9.317 13.777C9.473 13.928 9.66 14.004 9.878 14.004Z" fill="currentColor"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 17.67 17.65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.583 16.067H2.725L13.867 4.946L12.721 3.8L1.583 14.929V16.067ZM0.796 17.65C0.571 17.65 0.382 17.574 0.229 17.421C0.076 17.268 0 17.079 0 16.854V14.94C0 14.73 0.042 14.526 0.127 14.327C0.211 14.128 0.327 13.955 0.475 13.809L13.85 0.446C13.994 0.308 14.161 0.199 14.352 0.119C14.542 0.04 14.743 0 14.953 0C15.153 0 15.35 0.04 15.545 0.119C15.74 0.198 15.918 0.31 16.079 0.454L17.221 1.6C17.371 1.753 17.483 1.926 17.556 2.119C17.63 2.312 17.667 2.505 17.667 2.699C17.667 2.908 17.629 3.109 17.555 3.303C17.48 3.496 17.369 3.666 17.221 3.813L3.842 17.175C3.696 17.323 3.524 17.439 3.326 17.523C3.128 17.608 2.922 17.65 2.708 17.65H0.796ZM13.292 4.375L12.721 3.8L13.867 4.946L13.292 4.375Z" fill="currentColor"/>
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z" fill="currentColor"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1.5C14.69 1.5 18.5 5.31 18.5 10C18.5 14.69 14.69 18.5 10 18.5C5.31 18.5 1.5 14.69 1.5 10C1.5 5.31 5.31 1.5 10 1.5ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM9.25 9V15H10.75V9H9.25Z" fill="currentColor"/>
    </svg>
  );
}

/* ─── Data ─── */

const receivedMessageItems: ContextMenuItem[] = [
  { icon: <CopyIcon />, label: "Copy" },
  { icon: <ReplyIcon />, label: "Reply" },
  { icon: <ReplyInThreadIcon />, label: "Reply in thread" },
  { icon: <TranslateIcon />, label: "Translate" },
  { icon: <DeleteIcon />, label: "Delete" },
];

const sentMessageItems: ContextMenuItem[] = [
  { icon: <InfoIcon />, label: "Info" },
  { icon: <CopyIcon />, label: "Copy" },
  { icon: <ReplyIcon />, label: "Reply" },
  { icon: <EditIcon />, label: "Edit" },
  { icon: <ReplyInThreadIcon />, label: "Reply in thread" },
  { icon: <TranslateIcon />, label: "Translate" },
  { icon: <DeleteIcon />, label: "Delete" },
];

const minimalItems: ContextMenuItem[] = [
  { icon: <CopyIcon />, label: "Copy" },
  { icon: <ForwardIcon />, label: "Forward" },
  { icon: <DeleteIcon />, label: "Delete", destructive: true },
];

/* ─── Stories ─── */

/** Received message context menu — exact match to Figma node 4090:878265. */
export const ReceivedMessage: StoryObj<typeof ContextMenu> = {
  args: {
    items: receivedMessageItems,
    open: true,
    width: 160,
  },
};

/** Sent message context menu — exact match to Figma node 4090:878304. Includes Info, Edit, and all actions. */
export const SentMessage: StoryObj<typeof ContextMenu> = {
  args: {
    items: sentMessageItems,
    open: true,
    width: 180,
  },
};

/** Minimal context menu with fewer options. */
export const Minimal: StoryObj<typeof ContextMenu> = {
  args: {
    items: minimalItems,
    open: true,
    width: 160,
  },
};

/** Custom width (200px) for longer labels. */
export const CustomWidth: StoryObj<typeof ContextMenu> = {
  args: {
    items: sentMessageItems,
    open: true,
    width: 200,
  },
};

/** Visual demonstration of item states. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-10)", display: "flex", gap: "var(--space-8)", flexWrap: "wrap", justifyContent: "center" }}>
      <div>
        <div style={stateLabelStyle}>Default</div>
        <div className="context-menu" style={{ width: 160 }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label">Reply</span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}>Hover</div>
        <div className="context-menu" style={{ width: 160 }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item context-menu__item--hover-preview" type="button">
            <span className="context-menu__item-icon"><ReplyIcon /></span>
            <span className="context-menu__item-label">Reply</span>
          </button>
        </div>
      </div>

      <div>
        <div style={stateLabelStyle}>Destructive</div>
        <div className="context-menu" style={{ width: 160 }}>
          <button className="context-menu__item context-menu__item--first" type="button">
            <span className="context-menu__item-icon"><CopyIcon /></span>
            <span className="context-menu__item-label">Copy</span>
          </button>
          <button className="context-menu__item context-menu__item--destructive" type="button">
            <span className="context-menu__item-icon"><DeleteIcon /></span>
            <span className="context-menu__item-label">Delete</span>
          </button>
        </div>
      </div>
    </div>
  ),
};

/** The three-dot trigger button that opens the context menu. Shown on message hover. */
export const Trigger: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>
          Trigger button (kebab icon)
        </div>
        <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
          <ContextMenuTrigger />
          <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-neutral-500)" }}>Default</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>
          In context — appears on message hover
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <div style={{ background: "var(--color-neutral-100)", borderRadius: "var(--radius-xl)", padding: "8px 12px", fontSize: "var(--font-size-2)", color: "var(--color-neutral-900)" }}>
            Yes, it's available.
          </div>
          <ContextMenuTrigger />
        </div>
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Context Menu component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Context Menu -->
<div class="context-menu" style="width: 160px">
  <button class="context-menu__item context-menu__item--first" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Copy</span>
  </button>
  <button class="context-menu__item" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Reply</span>
  </button>
  <button class="context-menu__item context-menu__item--destructive" type="button">
    <span class="context-menu__item-icon"><!-- SVG icon --></span>
    <span class="context-menu__item-label">Delete</span>
  </button>
</div>

<!-- Trigger button (kebab icon) -->
<button class="context-menu-trigger" type="button">
  <!-- three-dot SVG -->
</button>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.context-menu {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.context-menu__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-4);
  height: 40px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.context-menu__item--first {
  height: 44px;
}

.context-menu__item:hover {
  background: var(--cometchat-background-color-02);
}

.context-menu__item--destructive {
  color: var(--cometchat-error-color);
}

.context-menu__item--destructive:hover {
  background: var(--color-error-25);
}

.context-menu__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-icon-color-tertiary);
}

.context-menu-trigger {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-01);
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
  color: var(--cometchat-text-color-secondary);
  cursor: pointer;
}

.context-menu-trigger:hover {
  background: var(--cometchat-background-color-02);
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Context Menu. */
export const Playground: StoryObj<typeof ContextMenu> = {
  args: {
    items: receivedMessageItems,
    open: true,
    width: 160,
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500)",
  marginBottom: "var(--space-2)",
  textAlign: "center",
};

/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
