import type { Meta, StoryObj } from "@storybook/react";
import { TypingIndicator } from "../components/TypingIndicator";
import type { TypingActivity, TypingContext } from "../components/TypingIndicator";

/**
 * An animated indicator showing when users are performing an activity
 * (typing, recording, or uploading). Supports single, group, and multiple contexts.
 *
 * **Structure (from Figma node 17442:55645):**
 * - Container: flex row, gap 4px (spacing-xs), items-center
 * - Dots: 3 animated circles (4px), gap 2px, color `#6852d6` (text-highlight)
 * - Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color `#6852d6`
 *
 * **Variants:**
 * - Activity: Typing, Recording, Uploading
 * - Context: Single ("Typing"), Group ("John is typing"), Multiple ("2 people are typing")
 */
const meta: Meta<typeof TypingIndicator> = {
  title: "Base Components/Typing Indicator",
  component: TypingIndicator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    activity: {
      control: "select",
      options: ["typing", "recording", "uploading"] satisfies TypingActivity[],
      description: "Activity type.",
      table: { category: "Content" },
    },
    context: {
      control: "select",
      options: ["single", "group", "multiple"] satisfies TypingContext[],
      description: "Context type.",
      table: { category: "Content" },
    },
    userName: { control: "text", description: "User name (for group context).", table: { category: "Content" } },
    count: { control: { type: "number", min: 2, max: 99 }, description: "Number of people (for multiple context).", table: { category: "Content" } },
  },
};
export default meta;

type Story = StoryObj<typeof TypingIndicator>;

/* ─── Stories ─── */

/** Default — single user typing. */
export const Default: Story = {
  args: {
    activity: "typing",
    context: "single",
  },
};

/** Group context — shows a user name. */
export const GroupTyping: Story = {
  args: {
    activity: "typing",
    context: "group",
    userName: "John",
  },
};

/** Multiple people typing. */
export const MultipleTyping: Story = {
  args: {
    activity: "typing",
    context: "multiple",
    count: 2,
  },
};

/** Recording activity. */
export const Recording: Story = {
  args: {
    activity: "recording",
    context: "single",
  },
};

/** Uploading activity. */
export const Uploading: Story = {
  args: {
    activity: "uploading",
    context: "single",
  },
};

/** All variants — matching Figma component set layout. */
export const AllVariants: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="Single">
        <div style={{ display: "flex", gap: "var(--space-10)", flexWrap: "wrap" }}>
          <TypingIndicator activity="typing" context="single" />
          <TypingIndicator activity="recording" context="single" />
          <TypingIndicator activity="uploading" context="single" />
        </div>
      </Section>
      <Section title="Group (with name)">
        <div style={{ display: "flex", gap: "var(--space-10)", flexWrap: "wrap" }}>
          <TypingIndicator activity="typing" context="group" userName="John" />
          <TypingIndicator activity="recording" context="group" userName="John" />
          <TypingIndicator activity="uploading" context="group" userName="John" />
        </div>
      </Section>
      <Section title="Multiple">
        <div style={{ display: "flex", gap: "var(--space-10)", flexWrap: "wrap" }}>
          <TypingIndicator activity="typing" context="multiple" count={2} />
          <TypingIndicator activity="recording" context="multiple" count={2} />
          <TypingIndicator activity="uploading" context="multiple" count={2} />
        </div>
      </Section>
    </div>
  ),
};

/** All states side by side for comparison. */
export const States: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "center" }}>
        <div style={stateLabelStyle}>Typing</div>
        <TypingIndicator activity="typing" context="single" />
        <TypingIndicator activity="typing" context="group" userName="John" />
        <TypingIndicator activity="typing" context="multiple" count={2} />
      </div>
      <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "center" }}>
        <div style={stateLabelStyle}>Recording</div>
        <TypingIndicator activity="recording" context="single" />
        <TypingIndicator activity="recording" context="group" userName="John" />
        <TypingIndicator activity="recording" context="multiple" count={2} />
      </div>
      <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "center" }}>
        <div style={stateLabelStyle}>Uploading</div>
        <TypingIndicator activity="uploading" context="single" />
        <TypingIndicator activity="uploading" context="group" userName="John" />
        <TypingIndicator activity="uploading" context="multiple" count={2} />
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Typing Indicator component. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Single user typing -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">Typing</span>
</div>

<!-- Group context -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">John is typing</span>
</div>

<!-- Multiple users -->
<div class="typing-indicator">
  <div class="typing-indicator__dots">
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
    <span class="typing-indicator__dot"></span>
  </div>
  <span class="typing-indicator__text">2 people are typing</span>
</div>`} />
      </Section>
      <Section title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.typing-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.typing-indicator__dots {
  display: flex;
  align-items: center;
  gap: var(--space-0-5);
}

.typing-indicator__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-ep-500);
  animation: typing-dot-bounce 1.4s infinite ease-in-out both;
}

.typing-indicator__dot:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot-bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.typing-indicator__text {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-ep-500);
}`} />
      </Section>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    activity: "typing",
    context: "group",
    userName: "John",
    count: 2,
  },
  parameters: { docs: { disable: true } },
};

/* ─── Helpers ─── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{title}</div>
      {children}
    </div>
  );
}

const stateLabelStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
  width: 80,
};

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
