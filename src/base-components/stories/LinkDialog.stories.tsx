import type { Meta, StoryObj } from "@storybook/react";
import { LinkDialog } from "../components/LinkDialog";

/**
 * A modal dialog for inserting or editing hyperlinks with text and URL fields.
 * Appears with a header (title + close icon), two form fields, and action buttons.
 *
 * **Structure (from Figma node 4099:104917):**
 * - Container: 400px wide, radius 12px, shadow-lg, border `--color-neutral-100`
 * - Header: 64px height, bottom border, title 20px bold, close icon 24×24
 * - Body: pt-16 pb-20, gap 20px
 * - Fields: label 16px medium + input 40px height, radius 8px, border `#e8e8e8`
 * - Buttons: border-top, pt-12 px-16, gap 12px
 * - Cancel: white bg, border `#dcdcdc`, text-primary
 * - Save: `--color-ep-500` (#6852d6) bg, white text
 */
const meta: Meta<typeof LinkDialog> = {
  title: "Base Components/Link Dialog",
  component: LinkDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: { control: "text", description: "Dialog title." },
    initialText: { control: "text", description: "Initial value for the text field." },
    initialUrl: { control: "text", description: "Initial value for the URL field." },
    textPlaceholder: { control: "text", description: "Placeholder for the text input." },
    urlPlaceholder: { control: "text", description: "Placeholder for the URL input." },
    cancelLabel: { control: "text", description: "Cancel button label." },
    saveLabel: { control: "text", description: "Save button label." },
    open: { control: "boolean", description: "Whether the dialog is visible." },
    showOverlay: { control: "boolean", description: "Whether to show the backdrop overlay." },
    onCancel: { control: false },
    onSave: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof LinkDialog>;

/* ─── Stories ─── */

/** Default state with pre-filled values — exact match to Figma node 4099:104917. */
export const Default: Story = {
  args: {
    title: "Add Link",
    initialText: "Link",
    initialUrl: "https://www.cometchat.com/",
    open: true,
    showOverlay: false,
  },
};

/** Empty state — no pre-filled values, showing placeholders. */
export const Empty: Story = {
  args: {
    title: "Add Link",
    initialText: "",
    initialUrl: "",
    open: true,
    showOverlay: false,
  },
};

/** Edit link variant — used when modifying an existing link. */
export const EditLink: Story = {
  args: {
    title: "Edit Link",
    initialText: "Visit our website",
    initialUrl: "https://www.cometchat.com/",
    saveLabel: "Update",
    open: true,
    showOverlay: false,
  },
};

/** With overlay backdrop — as it appears in production. */
export const WithOverlay: Story = {
  args: {
    title: "Add Link",
    initialText: "CometChat Docs",
    initialUrl: "https://www.cometchat.com/docs",
    open: true,
    showOverlay: true,
  },
};

/** Visual demonstration of dialog states. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <div>
        <div style={stateLabelStyle}>Default (Add Link)</div>
        <LinkDialog
          title="Add Link"
          initialText="Link"
          initialUrl="https://www.cometchat.com/"
          open={true}
          showOverlay={false}
        />
      </div>
      <div>
        <div style={stateLabelStyle}>Empty</div>
        <LinkDialog
          title="Add Link"
          initialText=""
          initialUrl=""
          open={true}
          showOverlay={false}
        />
      </div>
      <div>
        <div style={stateLabelStyle}>Edit Link</div>
        <LinkDialog
          title="Edit Link"
          initialText="Visit our website"
          initialUrl="https://www.cometchat.com/"
          saveLabel="Update"
          open={true}
          showOverlay={false}
        />
      </div>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Link Dialog. */
export const Playground: Story = {
  args: {
    title: "Add Link",
    initialText: "Link",
    initialUrl: "https://www.cometchat.com/",
    open: true,
    showOverlay: false,
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
