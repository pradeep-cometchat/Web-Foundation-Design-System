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

/* ─── Icons (Material Symbols Rounded, filled) ─── */

const fillStyle: React.CSSProperties = {
  fontSize: 20,
  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
};

function CopyIcon() {
  return <span className="icon-rounded" style={fillStyle}>content_copy</span>;
}

function ReplyIcon() {
  return <span className="icon-rounded" style={fillStyle}>reply</span>;
}

function ReplyInThreadIcon() {
  return <span className="icon-rounded" style={fillStyle}>forum</span>;
}

function TranslateIcon() {
  return <span className="icon-rounded" style={fillStyle}>translate</span>;
}

function DeleteIcon() {
  return <span className="icon-rounded" style={fillStyle}>delete</span>;
}

function EditIcon() {
  return <span className="icon-rounded" style={fillStyle}>edit</span>;
}

function ForwardIcon() {
  return <span className="icon-rounded" style={fillStyle}>forward</span>;
}

function InfoIcon() {
  return <span className="icon-rounded" style={fillStyle}>info</span>;
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
    <div style={{ padding: "var(--cometchat-spacing-10)", display: "flex", gap: "var(--cometchat-spacing-8)", flexWrap: "wrap", justifyContent: "center" }}>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>
          Trigger button (kebab icon)
        </div>
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          <ContextMenuTrigger />
          <span style={{ fontSize: "12px", color: "var(--cometchat-neutral-color-500)" }}>Default</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>
          In context — appears on message hover
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-2)" }}>
          <div style={{ background: "var(--cometchat-neutral-color-100)", borderRadius: "var(--cometchat-radius-3)", padding: "8px 12px", fontSize: "14px", color: "var(--cometchat-neutral-color-900)" }}>
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
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
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
  background: var(--cometchat-background-color-error);
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
  fontSize: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--cometchat-neutral-color-500)",
  marginBottom: "var(--cometchat-spacing-2)",
  textAlign: "center",
};

/* ─── Usage helpers ─── */

const UsageCodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}
