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
    <div style={{ padding: "var(--cometchat-spacing-10)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)", maxWidth: 400, margin: "0 auto" }}>
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

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}

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

const ClassGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1)" }}>
      {items.map((item) => (
        <code key={item} style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "12px", color: "var(--cometchat-text-color-primary)", background: "var(--cometchat-background-color-02)", padding: "var(--cometchat-spacing) var(--cometchat-spacing-2)", borderRadius: "var(--cometchat-radius-1)", border: "1px solid var(--cometchat-border-color-default)", display: "inline-block", width: "fit-content" }}>.{item}</code>
      ))}
    </div>
  </div>
);

/** Raw HTML + CSS usage with foundation variables. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Search bar (empty) -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <input class="search-bar__input" placeholder="Search" />
  </div>
</div>

<!-- Search bar with value and clear button -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon">
      <svg><!-- search icon --></svg>
    </span>
    <input class="search-bar__input" value="Design system" />
    <button class="search-bar__clear" aria-label="Clear search">
      <svg><!-- close icon --></svg>
    </button>
  </div>
</div>`}
        />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-bar__input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  flex: 1;
  height: 40px;
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  background: var(--cometchat-background-color-03);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-max);
  transition: border-color 120ms ease, background 120ms ease;
}

.search-bar__input-wrapper:focus-within {
  border-color: var(--cometchat-border-color-default);
  background: var(--cometchat-background-color-01);
}

.search-bar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cometchat-icon-color-tertiary);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
}

.search-bar__input::placeholder {
  color: var(--cometchat-icon-color-tertiary);
}

.search-bar__clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--cometchat-icon-color-tertiary);
  border-radius: 50%;
}

.search-bar__clear:hover {
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-04);
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <ClassGroup title="Root" items={["search-bar"]} />
          <ClassGroup title="Child Elements" items={["search-bar__input-wrapper", "search-bar__icon", "search-bar__input", "search-bar__clear"]} />
        </div>
      </Section>
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
  fontSize: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--cometchat-neutral-color-500)",
  marginBottom: "var(--cometchat-spacing-2)",
};
