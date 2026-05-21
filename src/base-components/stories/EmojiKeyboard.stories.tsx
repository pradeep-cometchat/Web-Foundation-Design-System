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
    <div style={{ padding: "var(--cometchat-spacing-10)", display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap", justifyContent: "center" }}>
      <EmojiKeyboard activeCategory="smileys" />
      <EmojiKeyboard activeCategory="animals" />
      <EmojiKeyboard activeCategory="flags" />
    </div>
  ),
};

/** HTML & CSS usage reference for the Emoji Keyboard component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Emoji Keyboard -->
<div class="emoji-keyboard">
  <div class="emoji-keyboard__header">
    <span class="emoji-keyboard__category-label">Smileys & People</span>
    <div class="emoji-keyboard__search">
      <span class="emoji-keyboard__search-icon"><!-- search SVG --></span>
      <span class="emoji-keyboard__search-text">Search</span>
    </div>
  </div>
  <div class="emoji-keyboard__grid">
    <button class="emoji-keyboard__emoji" type="button">😀</button>
    <button class="emoji-keyboard__emoji" type="button">😃</button>
    <button class="emoji-keyboard__emoji" type="button">😄</button>
    <!-- 10 per row -->
  </div>
  <div class="emoji-keyboard__tabs">
    <button class="emoji-keyboard__tab emoji-keyboard__tab--active" type="button">
      <span class="emoji-keyboard__tab-icon">😊</span>
    </button>
    <button class="emoji-keyboard__tab" type="button">
      <span class="emoji-keyboard__tab-icon">🐶</span>
    </button>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  height: 28px;
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-2);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  padding: 0 var(--cometchat-spacing-3) var(--cometchat-spacing-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--cometchat-radius-1);
}

.emoji-keyboard__emoji:hover {
  background: var(--cometchat-background-color-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--cometchat-radius-2);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--cometchat-extended-primary-color-100);
}`} />
      </UsageSection>
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
