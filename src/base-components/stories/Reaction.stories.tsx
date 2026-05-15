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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>Default</div>
        <div style={{ display: "flex", gap: "var(--space-1)" }}>
          <Reaction emoji="😍" />
          <Reaction emoji="👍" count={2} />
          <Reaction emoji="❤️" count={5} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>Active (user reacted)</div>
        <div style={{ display: "flex", gap: "var(--space-1)" }}>
          <Reaction emoji="😍" active />
          <Reaction emoji="👍" count={3} active />
          <Reaction emoji="❤️" count={5} active />
        </div>
      </div>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>In context (below a message)</div>
        <div style={{ maxWidth: "var(--space-80, 300px)" }}>
          <div style={{ background: "var(--color-neutral-200)", borderRadius: "var(--radius-xl)", padding: "var(--space-3)", fontSize: "var(--font-size-2)", color: "var(--color-neutral-900)" }}>
            Sure! Sending them over now.
          </div>
          <div style={{ paddingLeft: 4, marginTop: -8 }}>
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

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

const ClassGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
    <div style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {items.map((item) => (
        <code key={item} style={{ fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", color: "var(--color-text-primary)", background: "var(--color-bg-02)", padding: "var(--space-0-5) var(--space-2)", borderRadius: "var(--radius-xs)", border: "1px solid var(--color-border-default)", display: "inline-block", width: "fit-content" }}>.{item}</code>
      ))}
    </div>
  </div>
);

/** Raw HTML + CSS usage with foundation variables. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Default reaction -->
<button class="reaction">
  <span class="reaction__emoji">😍</span>
  <span class="reaction__count">1</span>
</button>

<!-- Active reaction (user reacted) -->
<button class="reaction reaction--active">
  <span class="reaction__emoji">❤️</span>
  <span class="reaction__count">3</span>
</button>

<!-- Add reaction button -->
<button class="reaction reaction--add">
  <span class="reaction__emoji">+</span>
</button>

<!-- Reaction group -->
<div class="reaction-group">
  <button class="reaction reaction--active">
    <span class="reaction__emoji">❤️</span>
    <span class="reaction__count">3</span>
  </button>
  <button class="reaction">
    <span class="reaction__emoji">😂</span>
    <span class="reaction__count">2</span>
  </button>
  <button class="reaction reaction--add">
    <span class="reaction__emoji">+</span>
  </button>
</div>`}
        />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.reaction {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  height: 24px;
  padding: var(--space-0-5) var(--space-2);
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.reaction:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-default);
}

.reaction--active {
  background: var(--color-ep-50);
  border-color: var(--color-ep-200);
}

.reaction--active .reaction__count {
  color: var(--color-ep-700);
}

.reaction--add {
  color: var(--color-icon-tertiary);
  border-style: dashed;
}

.reaction__emoji {
  font-size: var(--font-size-2);
  line-height: var(--line-height-body);
}

.reaction__count {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.reaction-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <ClassGroup title="Modifiers" items={["reaction--active", "reaction--add"]} />
          <ClassGroup title="Child Elements" items={["reaction__emoji", "reaction__count"]} />
          <ClassGroup title="Group" items={["reaction-group"]} />
        </div>
      </Section>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof Reaction> = {
  args: { emoji: "😍", count: 3, active: false },
  parameters: { docs: { disable: true } },
};
