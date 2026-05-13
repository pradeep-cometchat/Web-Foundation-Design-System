import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../components/SearchBar";

/**
 * A pill-shaped search input with a search icon and optional clear button.
 * Used for filtering conversations, contacts, or messages.
 *
 * **Structure (from Figma node 4094:1014224):**
 * - Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5`
 * - Padding: 12px horizontal, 8px vertical
 * - Search icon: 24×24, color `#a1a1a1`
 * - Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1`
 * - Input text: 16px regular, color `#141414`
 */
const meta: Meta<typeof SearchBar> = {
  title: "Base Components/Search Bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    placeholder: { control: "text", description: "Placeholder text." },
    value: { control: "text", description: "Controlled input value." },
    showClear: { control: "boolean", description: "Show clear button when input has value." },
    onChange: { control: false },
    onClear: { control: false },
    className: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof SearchBar>;

/* ─── Stories ─── */

/** Default empty state — exact match to Figma node 4094:1014224. */
export const Default: Story = {
  args: {
    placeholder: "Search",
  },
};

/** With a value typed in. */
export const WithValue: Story = {
  args: {
    placeholder: "Search",
    value: "John",
  },
};

/** Custom placeholder text. */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Search conversations...",
  },
};

/** Without clear button. */
export const NoClearButton: Story = {
  args: {
    placeholder: "Search",
    value: "Hello",
    showClear: false,
  },
};

/** Fixed width (328px) matching Figma's original frame. */
export const FixedWidth: Story = {
  args: {
    placeholder: "Search",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 328 }}>
        <Story />
      </div>
    ),
  ],
};

/** All states side by side. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 24, maxWidth: 400, margin: "0 auto" }}>
      <div>
        <div style={stateLabelStyle}>Empty (placeholder)</div>
        <SearchBar placeholder="Search" />
      </div>
      <div>
        <div style={stateLabelStyle}>With value</div>
        <SearchBar placeholder="Search" value="Design system" />
      </div>
      <div>
        <div style={stateLabelStyle}>Custom placeholder</div>
        <SearchBar placeholder="Search messages..." />
      </div>
      <div>
        <div style={stateLabelStyle}>No clear button</div>
        <SearchBar placeholder="Search" value="Hello" showClear={false} />
      </div>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    placeholder: "Search",
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
  marginBottom: 8,
};
