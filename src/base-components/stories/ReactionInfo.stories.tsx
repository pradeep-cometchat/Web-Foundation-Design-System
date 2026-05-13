import type { Meta, StoryObj } from "@storybook/react";
import { ReactionInfo } from "../components/ReactionInfo";

/**
 * A tooltip-style popup that shows who reacted with a specific emoji.
 * Appears on hover over a reaction badge in a message.
 *
 * **Structure (from Figma node 4043:476245):**
 * - Container: radius 8px, shadow-lg (drop-shadow)
 * - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px
 * - Emoji: 24px, line-height 32px, centered
 * - Names: 12px regular, white, line-height 18px
 * - Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
 * - Arrow: 6px triangle pointing down, same color as bg
 */
const meta: Meta<typeof ReactionInfo> = {
  title: "Base Components/Reaction Info",
  component: ReactionInfo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    emoji: { control: "text", description: "The emoji that was reacted with." },
    names: { control: "object", description: "List of names who reacted." },
    maxVisible: { control: { type: "number", min: 1, max: 10 }, description: "Max names shown before +N." },
    label: { control: "text", description: "Label text below names." },
    showArrow: { control: "boolean", description: "Whether to show the bottom arrow." },
  },
};
export default meta;

type Story = StoryObj<typeof ReactionInfo>;

/* ─── Stories ─── */

/** Default state — exact match to Figma node 4043:476245. */
export const Default: Story = {
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Single reactor. */
export const SingleReactor: Story = {
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Two reactors — no overflow. */
export const TwoReactors: Story = {
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Many reactors with overflow. */
export const ManyReactors: Story = {
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true,
  },
};

/** Without arrow. */
export const WithoutArrow: Story = {
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false,
  },
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", padding: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={stateLabelStyle}>Single</div>
        <ReactionInfo emoji="👍" names={["George Alan"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={stateLabelStyle}>Two names</div>
        <ReactionInfo emoji="❤️" names={["George Alan", "Pourav Raj"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={stateLabelStyle}>Overflow (+5)</div>
        <ReactionInfo emoji="😍" names={["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={stateLabelStyle}>Different emoji</div>
        <ReactionInfo emoji="🔥" names={["Alice", "Bob", "Charlie"]} maxVisible={3} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={stateLabelStyle}>No arrow</div>
        <ReactionInfo emoji="😂" names={["George Alan", "Pourav Raj"]} showArrow={false} />
      </div>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
};
