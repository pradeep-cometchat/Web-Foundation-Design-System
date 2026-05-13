import type { Meta, StoryObj } from "@storybook/react";
import { Reaction, ReactionGroup } from "../components/Reaction";

/**
 * Emoji reaction tags shown below message bubbles. Users can tap to add/remove
 * their reaction. Displays the emoji and an optional count.
 *
 * **Structure (from Figma — Base_Reaction Tag):**
 * - Container: 24px height, rounded 20px, white bg, border `--color-neutral-100`
 * - Padding: 2px vertical, 8px horizontal
 * - Emoji: 14px, line-height 20px
 * - Count: 12px, regular, `--color-neutral-900`
 * - Gap: 4px between emoji and count
 * - Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700`
 * - Group: flex-wrap, 4px gap
 */
const meta: Meta<typeof Reaction> = {
  title: "Base Components/Reaction",
  component: Reaction,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    emoji: { control: "text", description: "The emoji character." },
    count: { control: "number", description: "Reaction count." },
    active: { control: "boolean", description: "Whether selected by current user." },
    onClick: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Single reaction — default state. */
export const Default: StoryObj<typeof Reaction> = {
  args: { emoji: "😍", count: 1 },
};

/** Active/selected reaction. */
export const Active: StoryObj<typeof Reaction> = {
  args: { emoji: "❤️", count: 3, active: true },
};

/** Reaction with count. */
export const WithCount: StoryObj<typeof Reaction> = {
  args: { emoji: "👍", count: 5 },
};

/** Multiple reactions in a group. */
export const Group: StoryObj = {
  render: () => (
    <ReactionGroup
      reactions={[
        { emoji: "❤️", count: 3, active: true },
        { emoji: "😂", count: 2 },
        { emoji: "👍", count: 1 },
        { emoji: "🔥", count: 4 },
      ]}
    />
  ),
};

/** Group with add button. */
export const GroupWithAdd: StoryObj = {
  render: () => (
    <ReactionGroup
      reactions={[
        { emoji: "😍", count: 2 },
        { emoji: "👏", count: 1 },
      ]}
      showAddButton
    />
  ),
};

/** All states side by side. */
export const AllStates: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Default</div>
        <div style={{ display: "flex", gap: 4 }}>
          <Reaction emoji="😍" />
          <Reaction emoji="👍" count={2} />
          <Reaction emoji="❤️" count={5} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Active (user reacted)</div>
        <div style={{ display: "flex", gap: 4 }}>
          <Reaction emoji="😍" active />
          <Reaction emoji="👍" count={3} active />
          <Reaction emoji="❤️" count={5} active />
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>In context (below a message)</div>
        <div style={{ maxWidth: 300 }}>
          <div style={{ background: "var(--color-neutral-200)", borderRadius: "var(--radius-xl)", padding: "12px", fontSize: 14, color: "var(--color-neutral-900)", marginBottom: 4 }}>
            Sure! Sending them over now.
          </div>
          <div style={{ paddingLeft: 4 }}>
            <ReactionGroup
              reactions={[
                { emoji: "😍", count: 1 },
                { emoji: "👍", count: 2, active: true },
              ]}
              showAddButton
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof Reaction> = {
  args: { emoji: "😍", count: 3, active: false },
  parameters: { docs: { disable: true } },
};
