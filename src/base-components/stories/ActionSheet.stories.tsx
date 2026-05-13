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
 * **Anatomy:** Container (radius-2xl, shadow-lg) → Action Items (icon + label, 44px height)
 *
 * **Icons:** Filled SVG style in extended-primary-600 color. Destructive items use error-500.
 *
 * **Foundation tokens used:**
 * - Background: `--color-white`
 * - Border: `--color-neutral-100`
 * - Border radius: `--radius-2xl` (16px)
 * - Shadow: `--shadow-lg`
 * - Item padding: `--space-3` / `--space-4` (12px / 16px)
 * - Icon-label gap: `--space-2` (8px)
 * - Text: `--font-size-2` (14px), `--line-height-body` (20px), `--font-weight-regular`
 * - Icon color: `--color-ep-600` (#6852d6)
 * - Hover: `--color-neutral-50`
 * - Active: `--color-neutral-100`
 * - Destructive: `--color-error-500`
 * - Focus ring: `--focus-ring-xs`
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
    <div style={{ padding: 40, display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
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

/** Interactive playground — use the controls panel to configure the Action Sheet. */
export const Playground: StoryObj<typeof ActionSheet> = {
  args: {
    items: attachmentItems,
    open: true,
    width: 244,
    title: "",
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500)",
  marginBottom: 8,
  textAlign: "center",
};

/* ─── Inline SVG Icons for additional stories ─── */

function ReplyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill="currentColor"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18C8.45 18 7.979 17.804 7.587 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.587 2.587C7.979 2.196 8.45 2 9 2H18C18.55 2 19.021 2.196 19.413 2.587C19.804 2.979 20 3.45 20 4V16C20 16.55 19.804 17.021 19.413 17.413C19.021 17.804 18.55 18 18 18H9ZM5 22C4.45 22 3.979 21.804 3.587 21.413C3.196 21.021 3 20.55 3 20V6H5V20H16V22H5Z" fill="currentColor"/>
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z" fill="currentColor"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21V16.75L16.2 3.575C16.4 3.392 16.621 3.25 16.863 3.15C17.104 3.05 17.358 3 17.625 3C17.892 3 18.15 3.05 18.4 3.15C18.65 3.25 18.867 3.4 19.05 3.6L20.425 5C20.625 5.183 20.771 5.4 20.863 5.65C20.954 5.9 21 6.15 21 6.4C21 6.667 20.954 6.921 20.863 7.163C20.771 7.404 20.625 7.625 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z" fill="currentColor"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 12V4H17C17.283 4 17.521 3.904 17.713 3.713C17.904 3.521 18 3.283 18 3C18 2.717 17.904 2.479 17.713 2.287C17.521 2.096 17.283 2 17 2H7C6.717 2 6.479 2.096 6.287 2.287C6.096 2.479 6 2.717 6 3C6 3.283 6.096 3.521 6.287 3.713C6.479 3.904 6.717 4 7 4H8V12L6 14V16H11V22L12 23L13 22V16H18V14L16 12Z" fill="currentColor"/>
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21C6.45 21 5.979 20.804 5.587 20.413C5.196 20.021 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.413 20.413C18.021 20.804 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="currentColor"/>
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z" fill="currentColor"/>
    </svg>
  );
}
