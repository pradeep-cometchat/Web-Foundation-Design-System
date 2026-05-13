import type { Meta, StoryObj } from "@storybook/react";
import { ReactionList } from "../components/ReactionList";
import type { ReactionListItem, ReactionTab } from "../components/ReactionList";

/**
 * A popup showing who reacted to a message, with emoji filter tabs and a list of reactors.
 * Each item shows an avatar, name, optional subtitle, and the emoji they reacted with.
 *
 * **Structure (from Figma node 4043:476218):**
 * - Container: radius-2xl (16px), shadow-lg, border `#f5f5f5`, bg white
 * - Tabs: border-bottom `#e9eaeb`, pt-8, height 40px
 *   - Active tab: text `#6852d6`, border-bottom 2px `#6852d6`
 *   - Inactive tab: text `#717680`
 * - List items: px-20 py-8, gap-12
 *   - Avatar: 32×32, full-round
 *   - Name: 14px medium, #181d27
 *   - Subtitle: 12px regular, #414651
 *   - Emoji: 20px, 24px wide
 */
const meta: Meta<typeof ReactionList> = {
  title: "Base Components/Reaction List",
  component: ReactionList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    tabs: { control: "object", description: "Tabs to display (e.g. 'All 5', '😍 3')." },
    items: { control: "object", description: "List of reactor items." },
    activeTab: { control: "text", description: "Initially active tab key." },
    onTabChange: { control: false },
    onItemClick: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof ReactionList>;

/* ─── Sample data ─── */

const singleReactionTabs: ReactionTab[] = [
  { label: "All 1", key: "all" },
  { label: "😍 1", key: "😍" },
];

const singleReactionItems: ReactionListItem[] = [
  { name: "You", avatar: "https://i.pravatar.cc/32?u=you", emoji: "😍", subtitle: "Tap to remove" },
];

const multiReactionTabs: ReactionTab[] = [
  { label: "All 5", key: "all" },
  { label: "😍 3", key: "😍" },
  { label: "👍 2", key: "👍" },
];

const multiReactionItems: ReactionListItem[] = [
  { name: "You", avatar: "https://i.pravatar.cc/32?u=you", emoji: "😍", subtitle: "Tap to remove" },
  { name: "George Alan", avatar: "https://i.pravatar.cc/32?u=george", emoji: "😍" },
  { name: "Pourav Raj", avatar: "https://i.pravatar.cc/32?u=pourav", emoji: "😍" },
  { name: "Alice Johnson", avatar: "https://i.pravatar.cc/32?u=alice", emoji: "👍" },
  { name: "Bob Smith", avatar: "https://i.pravatar.cc/32?u=bob", emoji: "👍" },
];

const manyEmojiTabs: ReactionTab[] = [
  { label: "All 8", key: "all" },
  { label: "😍 3", key: "😍" },
  { label: "👍 2", key: "👍" },
  { label: "😂 2", key: "😂" },
  { label: "🔥 1", key: "🔥" },
];

const manyEmojiItems: ReactionListItem[] = [
  { name: "You", avatar: "https://i.pravatar.cc/32?u=you", emoji: "😍", subtitle: "Tap to remove" },
  { name: "George Alan", avatar: "https://i.pravatar.cc/32?u=george", emoji: "😍" },
  { name: "Pourav Raj", avatar: "https://i.pravatar.cc/32?u=pourav", emoji: "😍" },
  { name: "Alice Johnson", avatar: "https://i.pravatar.cc/32?u=alice", emoji: "👍" },
  { name: "Bob Smith", avatar: "https://i.pravatar.cc/32?u=bob", emoji: "👍" },
  { name: "Charlie Brown", avatar: "https://i.pravatar.cc/32?u=charlie", emoji: "😂" },
  { name: "Diana Prince", avatar: "https://i.pravatar.cc/32?u=diana", emoji: "😂" },
  { name: "Eve Wilson", avatar: "https://i.pravatar.cc/32?u=eve", emoji: "🔥" },
];

/* ─── Stories ─── */

/** Default state — single reaction, exact match to Figma node 4043:476218. */
export const Default: Story = {
  args: {
    tabs: singleReactionTabs,
    items: singleReactionItems,
    activeTab: "all",
  },
};

/** Multiple reactions with different emojis. */
export const MultipleReactions: Story = {
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all",
  },
};

/** Many emoji types with several reactors. */
export const ManyEmojis: Story = {
  args: {
    tabs: manyEmojiTabs,
    items: manyEmojiItems,
    activeTab: "all",
  },
};

/** Filtered view — showing only a specific emoji tab. */
export const FilteredByEmoji: Story = {
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "👍",
  },
};

/** Single user with "Tap to remove" subtitle. */
export const OwnReaction: Story = {
  args: {
    tabs: [{ label: "All 1", key: "all" }, { label: "👍 1", key: "👍" }],
    items: [{ name: "You", emoji: "👍", subtitle: "Tap to remove" }],
    activeTab: "all",
  },
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={stateLabelStyle}>Single reaction</div>
        <ReactionList tabs={singleReactionTabs} items={singleReactionItems} activeTab="all" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={stateLabelStyle}>Multiple reactions</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="all" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={stateLabelStyle}>Filtered (👍)</div>
        <ReactionList tabs={multiReactionTabs} items={multiReactionItems} activeTab="👍" />
      </div>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    tabs: multiReactionTabs,
    items: multiReactionItems,
    activeTab: "all",
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
