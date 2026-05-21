import type { Meta, StoryObj } from "@storybook/react";
import { ActionSheet } from "../components/ActionSheet";
import type { ActionSheetItem } from "../components/ActionSheet";
import {
  CameraIcon,
  PhotoIcon,
  VideocamIcon,
  PlayCircleIcon,
  DescriptionIcon,
  PollIcon,
  CollaborativeWhiteboardIcon,
  CollaborativeDocumentIcon,
} from "../components/ActionSheet/icons";

/**
 * A popup overlay presenting a list of contextual actions. Used for attachment menus,
 * message actions, and any context where the user needs to pick from a set of options.
 * Appears anchored to a trigger element with elevation and rounded corners.
 *
 * **Anatomy:** Container (radius-4, shadow-lg) → Action Items (icon + label, 44px height)
 *
 * **Icons:** Material Symbols Rounded in brand color. Destructive items use error color.
 */
const meta: Meta<typeof ActionSheet> = {
  title: "Base Components/Action Sheet",
  component: ActionSheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    items: { control: false, description: "Array of action items with icon (ReactNode), label, and optional onClick/destructive." },
    open: { control: "boolean", description: "Whether the action sheet is visible." },
    width: { control: { type: "number", min: 180, max: 400, step: 10 }, description: "Width of the action sheet in pixels." },
    title: { control: "text", description: "Optional title displayed at the top." },
    onClose: { control: false, description: "Callback when the sheet is dismissed." },
  },
};
export default meta;

/* ─── Data ─── */

const attachmentItems: ActionSheetItem[] = [
  { icon: <CameraIcon />, label: "Camera" },
  { icon: <PhotoIcon />, label: "Attach Image" },
  { icon: <VideocamIcon />, label: "Attach Video" },
  { icon: <PlayCircleIcon />, label: "Attach Audio" },
  { icon: <DescriptionIcon />, label: "Attach Document" },
  { icon: <PollIcon />, label: "Poll" },
  { icon: <CollaborativeWhiteboardIcon />, label: "Collaborative Whiteboard" },
  { icon: <CollaborativeDocumentIcon />, label: "Collaborative Document" },
];

const messageActions: ActionSheetItem[] = [
  { icon: <ReplyIcon />, label: "Reply" },
  { icon: <CopyIcon />, label: "Copy Message" },
  { icon: <ForwardIcon />, label: "Forward" },
  { icon: <EditIcon />, label: "Edit Message" },
  { icon: <PinIcon />, label: "Pin Message" },
  { icon: <DeleteIcon />, label: "Delete Message", destructive: true },
];

const minimalItems: ActionSheetItem[] = [
  { icon: <EditIcon />, label: "Edit" },
  { icon: <DeleteIcon />, label: "Delete", destructive: true },
];

/* ─── Stories ─── */

/** The standard attachment action sheet as seen in the message composer. Eight options with filled icons in the primary color. */
export const Default: StoryObj<typeof ActionSheet> = {
  args: {
    items: attachmentItems,
    open: true,
    width: 244,
  },
};

/** Contextual actions for a message. Includes a destructive "Delete" action rendered in error color. */
export const MessageActions: StoryObj<typeof ActionSheet> = {
  args: {
    items: messageActions,
    open: true,
    width: 244,
  },
};

/** An optional title can be displayed at the top to provide context about the available actions. */
export const WithTitle: StoryObj<typeof ActionSheet> = {
  args: {
    items: minimalItems,
    open: true,
    width: 244,
    title: "Actions",
  },
};

/** Action sheets can contain as few as two items. Useful for simple edit/delete patterns. */
export const Minimal: StoryObj<typeof ActionSheet> = {
  args: {
    items: minimalItems,
    open: true,
    width: 244,
  },
};

/** The width can be adjusted. Default is 244px. Here shown at 320px for longer labels. */
export const CustomWidth: StoryObj<typeof ActionSheet> = {
  args: {
    items: attachmentItems,
    open: true,
    width: 320,
  },
};

/** Destructive-only variant showing how error styling applies to all items. */
export const DestructiveActions: StoryObj<typeof ActionSheet> = {
  args: {
    items: [
      { icon: <DeleteIcon />, label: "Delete Message", destructive: true },
      { icon: <BlockIcon />, label: "Block User", destructive: true },
      { icon: <ReportIcon />, label: "Report", destructive: true },
    ],
    open: true,
    width: 244,
    title: "Danger Zone",
  },
};

/** Visual demonstration of all interactive states: default, hover, active, focus, and destructive. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-10)", display: "flex", gap: "var(--cometchat-spacing-8)", flexWrap: "wrap", justifyContent: "center" }}>
      {/* Default */}
      <div>
        <div style={stateLabelStyle}>Default</div>
        <div className="action-sheet" style={{ width: 244 }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Hover */}
      <div>
        <div style={stateLabelStyle}>Hover</div>
        <div className="action-sheet" style={{ width: 244 }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Active */}
      <div>
        <div style={stateLabelStyle}>Active</div>
        <div className="action-sheet" style={{ width: 244 }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><CameraIcon /></span>
            <span className="action-sheet__item-label">Camera</span>
          </button>
          <button className="action-sheet__item action-sheet__item--active-preview" type="button">
            <span className="action-sheet__item-icon"><PhotoIcon /></span>
            <span className="action-sheet__item-label">Attach Image</span>
          </button>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <div style={stateLabelStyle}>Destructive</div>
        <div className="action-sheet" style={{ width: 244 }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>

      {/* Destructive Hover */}
      <div>
        <div style={stateLabelStyle}>Destructive Hover</div>
        <div className="action-sheet" style={{ width: 244 }}>
          <button className="action-sheet__item" type="button">
            <span className="action-sheet__item-icon"><EditIcon /></span>
            <span className="action-sheet__item-label">Edit</span>
          </button>
          <button className="action-sheet__item action-sheet__item--destructive action-sheet__item--hover-preview" type="button">
            <span className="action-sheet__item-icon"><DeleteIcon /></span>
            <span className="action-sheet__item-label">Delete</span>
          </button>
        </div>
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Action Sheet component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <CodeCard language="HTML" code={`<!-- Action Sheet -->
<div class="action-sheet" style="width: 244px">
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Camera</span>
  </button>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Attach Image</span>
  </button>
  <button class="action-sheet__item action-sheet__item--destructive" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Delete</span>
  </button>
</div>

<!-- With title -->
<div class="action-sheet" style="width: 244px">
  <div class="action-sheet__title">Actions</div>
  <button class="action-sheet__item" type="button">
    <span class="action-sheet__item-icon"><!-- SVG icon --></span>
    <span class="action-sheet__item-label">Edit</span>
  </button>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={`.action-sheet {
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.action-sheet__title {
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  font-size: 12px;
  font-weight: 500;
  color: var(--cometchat-text-color-tertiary);
  text-transform: uppercase;
  border-bottom: 1px solid var(--cometchat-border-color-light);
}

.action-sheet__item {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  height: 44px;
  background: var(--cometchat-background-color-01);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.action-sheet__item:hover {
  background: var(--cometchat-background-color-02);
}

.action-sheet__item:active {
  background: var(--cometchat-background-color-03);
}

.action-sheet__item--destructive {
  color: var(--cometchat-error-color);
}

.action-sheet__item--destructive:hover {
  background: var(--cometchat-background-color-error);
}

.action-sheet__item-icon {
  width: 24px;
  height: 24px;
  color: var(--cometchat-primary-color);
}

.action-sheet__item--destructive .action-sheet__item-icon {
  color: var(--cometchat-error-color);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Action Sheet. */
export const Playground: StoryObj = {
  args: {
    open: true,
    width: 244,
    title: "",
    itemSet: "attachment",
  },
  argTypes: {
    open: { control: "boolean", description: "Whether the action sheet is visible." },
    width: { control: { type: "number", min: 180, max: 400, step: 10 }, description: "Width in pixels." },
    title: { control: "text", description: "Optional title at the top." },
    itemSet: {
      control: "select",
      options: ["attachment", "messageActions", "minimal", "destructive"],
      description: "Predefined set of items to display.",
    },
  },
  parameters: { docs: { disable: true } },
  render: (args: any) => {
    const sets: Record<string, ActionSheetItem[]> = {
      attachment: attachmentItems,
      messageActions: messageActions,
      minimal: minimalItems,
      destructive: [
        { icon: <DeleteIcon />, label: "Delete Message", destructive: true },
        { icon: <BlockIcon />, label: "Block User", destructive: true },
        { icon: <ReportIcon />, label: "Report", destructive: true },
      ],
    };
    return (
      <ActionSheet
        items={sets[args.itemSet] || attachmentItems}
        open={args.open}
        width={args.width}
        title={args.title || undefined}
      />
    );
  },
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

/* ─── Inline Icons for additional stories ─── */

const fillStyle: React.CSSProperties = {
  fontSize: 24,
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

function ReplyIcon() {
  return <span className="icon-rounded" style={fillStyle}>reply</span>;
}

function CopyIcon() {
  return <span className="icon-rounded" style={fillStyle}>content_copy</span>;
}

function ForwardIcon() {
  return <span className="icon-rounded" style={fillStyle}>forward</span>;
}

function EditIcon() {
  return <span className="icon-rounded" style={fillStyle}>edit</span>;
}

function PinIcon() {
  return <span className="icon-rounded" style={fillStyle}>push_pin</span>;
}

function DeleteIcon() {
  return <span className="icon-rounded" style={fillStyle}>delete</span>;
}

function BlockIcon() {
  return <span className="icon-rounded" style={fillStyle}>block</span>;
}

function ReportIcon() {
  return <span className="icon-rounded" style={fillStyle}>flag</span>;
}

/* ─── Usage helpers ─── */

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
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
