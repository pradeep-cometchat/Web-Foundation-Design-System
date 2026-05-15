import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast";

/**
 * A transient notification pill that appears briefly to confirm an action.
 * Dark background with white text, auto-dismisses after a set duration.
 *
 * **Structure (from Figma node 4090:837860):**
 * - Outer: radius 8px, drop-shadow (shadow-lg)
 * - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px
 * - Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered
 */
const meta: Meta<typeof Toast> = {
  title: "Base Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    message: { control: "text", description: "The message to display." },
    open: { control: "boolean", description: "Whether the toast is visible." },
    duration: { control: { type: "number", min: 0, step: 500 }, description: "Auto-dismiss duration in ms. 0 to disable." },
    onClose: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

/* ─── Stories ─── */

/** Default state — exact match to Figma node 4090:837860. */
export const Default: Story = {
  args: {
    message: "Message Copied",
    open: true,
    duration: 0,
  },
};

/** Message sent confirmation. */
export const MessageSent: Story = {
  args: {
    message: "Message Sent",
    open: true,
    duration: 0,
  },
};

/** Message deleted confirmation. */
export const MessageDeleted: Story = {
  args: {
    message: "Message Deleted",
    open: true,
    duration: 0,
  },
};

/** Link copied confirmation. */
export const LinkCopied: Story = {
  args: {
    message: "Link Copied",
    open: true,
    duration: 0,
  },
};

/** Longer message text. */
export const LongMessage: Story = {
  args: {
    message: "Your message has been forwarded successfully",
    open: true,
    duration: 0,
  },
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "var(--space-10)" }}>
      <Toast message="Message Copied" open={true} duration={0} />
      <Toast message="Message Sent" open={true} duration={0} />
      <Toast message="Message Deleted" open={true} duration={0} />
      <Toast message="Link Copied" open={true} duration={0} />
      <Toast message="Reaction Added" open={true} duration={0} />
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
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Basic toast -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Copied</span>
  </div>
</div>

<!-- Toast with different messages -->
<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Message Sent</span>
  </div>
</div>

<div class="toast">
  <div class="toast__content">
    <span class="toast__message">Link Copied</span>
  </div>
</div>`}
        />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  filter: drop-shadow(0px 12px 8px rgba(10, 13, 18, 0.08))
    drop-shadow(0px 4px 3px rgba(10, 13, 18, 0.03))
    drop-shadow(0px 2px 1px rgba(10, 13, 18, 0.04));
}

.toast__content {
  display: flex;
  align-items: flex-start;
  padding: var(--space-2);
  background: var(--color-neutral-lm-950, #0a0d12);
  border-radius: var(--radius-xs);
}

.toast__message {
  font-family: var(--font-family-body);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption-1);
  color: var(--color-white);
  text-align: center;
  white-space: nowrap;
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <ClassGroup title="Root" items={["toast"]} />
          <ClassGroup title="Child Elements" items={["toast__content", "toast__message"]} />
        </div>
      </Section>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    message: "Message Copied",
    open: true,
    duration: 0,
  },
  parameters: { docs: { disable: true } },
};
