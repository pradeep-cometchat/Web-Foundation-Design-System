import type { Meta, StoryObj } from "@storybook/react";
import { EmojiKeyboard } from "../components/EmojiKeyboard";

/**
 * An emoji picker popup with categories, search, and a grid of selectable emojis.
 * Appears above the message composer when the emoji icon is clicked.
 *
 * **Structure (from Figma node 4105:547232 → Emoji Popup):**
 * - Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`
 * - Category label: 14px, weight 400, `--color-neutral-600`
 * - Search: 28px height, `--radius-full`, `--color-neutral-100` bg
 * - Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row
 * - Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md`
 *
 * **Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags
 */
const meta: Meta<typeof EmojiKeyboard> = {
  title: "Base Components/Emoji Keyboard",
  component: EmojiKeyboard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the keyboard is visible." },
    activeCategory: {
      control: "select",
      options: ["recents", "smileys", "animals", "food", "activity", "travel", "objects", "symbols", "flags"],
      description: "Active emoji category.",
    },
    onEmojiSelect: { control: false },
    onClose: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Default state — Smileys & People category active (matches Figma). */
export const Default: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "smileys",
  },
};

/** Recently used emojis. */
export const Recents: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "recents",
  },
};

/** Animals & Nature category. */
export const Animals: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "animals",
  },
};

/** Food & Drink category. */
export const Food: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "food",
  },
};

/** Symbols category. */
export const Symbols: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "symbols",
  },
};

/** All categories side by side for comparison. */
export const AllCategories: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 40, display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
      <EmojiKeyboard activeCategory="smileys" />
      <EmojiKeyboard activeCategory="animals" />
      <EmojiKeyboard activeCategory="flags" />
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof EmojiKeyboard> = {
  args: {
    open: true,
    activeCategory: "smileys",
  },
  parameters: { docs: { disable: true } },
};
