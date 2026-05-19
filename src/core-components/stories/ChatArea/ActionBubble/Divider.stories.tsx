import type { Meta, StoryObj } from "@storybook/react";
import "../../ChatBubbles/ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Area/Action Bubble/Divider",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   CHAT AREA DIVIDERS
   ═══════════════════════════════════════════════════════════════════════════ */

export const DateDivider: StoryObj = {
  name: "Date Divider",
  render: () => (
    <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
      </div>
    </Wrapper>
  ),
};

export const NewMessageDivider: StoryObj = {
  name: "New Message Divider",
  render: () => (
    <Wrapper>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new">New</span>
      </div>
    </Wrapper>
  ),
};

export const ThreadRepliesDivider: StoryObj = {
  name: "Thread Replies Divider",
  render: () => (
    <Wrapper>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
  ),
};

export const AllDividers: StoryObj = {
  name: "All Dividers",
  render: () => (
    <Wrapper width={400}>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
      </div>
      <div className="action-bubble-divider">
        <div className="action-bubble-divider__line action-bubble-divider__line--new" />
        <span className="action-bubble-divider__label action-bubble-divider__label--new">New</span>
      </div>
      <div className="action-bubble-divider">
        <span className="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
        <div className="action-bubble-divider__line" />
      </div>
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Date Divider (no lines) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--date">Today</span>
</div>

<!-- New Message Divider (line + label) -->
<div class="action-bubble-divider">
  <div class="action-bubble-divider__line action-bubble-divider__line--new"></div>
  <span class="action-bubble-divider__label action-bubble-divider__label--new">New</span>
</div>

<!-- Thread Replies Divider (label + line) -->
<div class="action-bubble-divider">
  <span class="action-bubble-divider__label action-bubble-divider__label--thread">4 Replies</span>
  <div class="action-bubble-divider__line"></div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Date Divider" description="Centered date label (Today, Yesterday, etc.) with pill border. No lines." />
          <StateCard title="New Message Divider" description="Red line with 'New' label aligned right — marks unread messages." />
          <StateCard title="Thread Replies Divider" description="Reply count label aligned left with line extending right." />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function Wrapper({ children, width = 360 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4)", background: "var(--color-bg-01)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-default)" }}>
      {children}
    </div>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--color-border-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-03)" }}>
        <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <strong style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)", display: "block", marginBottom: "var(--space-1)" }}>{title}</strong>
      <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-text-tertiary)", lineHeight: "var(--line-height-caption-1)" }}>{description}</span>
    </div>
  );
}
