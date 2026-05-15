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
    <div style={{ padding: "var(--space-10)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "center" }}>
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
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
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
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.emoji-keyboard {
  width: 300px;
  height: 348px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.emoji-keyboard__search {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  height: 28px;
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-03);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
}

.emoji-keyboard__grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: var(--space-2) var(--space-3);
  padding: 0 var(--space-3) var(--space-3);
}

.emoji-keyboard__emoji {
  width: 24px;
  height: 24px;
  font-size: var(--font-size-5);
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-xs);
}

.emoji-keyboard__emoji:hover {
  background: var(--color-bg-03);
}

.emoji-keyboard__tab {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.emoji-keyboard__tab--active {
  background: var(--color-ep-100);
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
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}
