import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Poll Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentDefault: StoryObj = {
  name: "Sent — Default",
  parameters: { docs: { description: { story: "Outgoing poll bubble with vote results." } } },
  render: () => (
    <Wrapper>
      <PollBubble variant="sent" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  parameters: { docs: { description: { story: "Incoming poll bubble with vote results." } } },
  render: () => (
    <Wrapper>
      <PollBubble variant="received" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllVariants: StoryObj = {
  name: "All Variants",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-6)", padding: "var(--space-4)", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sent</Label>
        <PollBubble variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Received</Label>
        <PollBubble variant="received" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent Poll Bubble -->
<div class="poll-bubble poll-bubble--sent">
  <div class="poll-bubble__header">
    <h3 class="poll-bubble__title">Question</h3>
    <p class="poll-bubble__subtitle">Question</p>
  </div>
  <div class="poll-bubble__options">
    <div class="poll-bubble__option">
      <span class="poll-bubble__radio"></span>
      <span class="poll-bubble__option-text">Poll List</span>
      <div class="poll-bubble__voters">
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
        <img class="poll-bubble__avatar" src="..." />
      </div>
    </div>
    <div class="poll-bubble__progress">
      <div class="poll-bubble__progress-bar" style="width: 50%"></div>
    </div>
  </div>
</div>

<!-- Received Poll Bubble -->
<div class="poll-bubble poll-bubble--received">
  <!-- Same structure, different colors -->
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent" description="Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right." />
          <StateCard title="Received" description="Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Title" description="Bold question text at the top of the poll." />
          <StateCard title="Subtitle" description="Secondary question/description text below the title." />
          <StateCard title="Radio Button" description="Circular outline indicating selectable option. Muted white on sent, gray on received." />
          <StateCard title="Option Text" description="Poll option label (e.g. 'Poll List')." />
          <StateCard title="Voter Avatars" description="Stacked circular avatars of users who voted for this option. Shows +N for overflow." />
          <StateCard title="Progress Bar" description="Horizontal bar showing vote percentage. White on sent, purple on received." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Sent Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Received Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Progress Bar (Sent)" description="var(--color-static-white) — White" />
          <StateCard title="Progress Bar (Received)" description="var(--color-icon-highlight-primary) — Purple" />
          <StateCard title="Progress Track (Sent)" description="rgba(255, 255, 255, 0.2) — Muted white" />
          <StateCard title="Progress Track (Received)" description="var(--color-border-default) — Light gray" />
          <StateCard title="Radio (Sent)" description="rgba(255, 255, 255, 0.4) — Muted white outline" />
          <StateCard title="Radio (Received)" description="var(--color-text-tertiary) — Gray outline" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Poll Container (node 17219:542)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

const AVATARS = [
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451",
];

interface PollOption {
  label: string;
  progress: number;
  voters: number;
  selected?: boolean;
  showExtra?: number;
}

const POLL_OPTIONS: PollOption[] = [
  { label: "Online", progress: 0.6, voters: 3 },
  { label: "In-store", progress: 0.75, voters: 3, selected: true, showExtra: 4 },
];

function PollBubble({ variant }: { variant: "sent" | "received" }) {
  const isSent = variant === "sent";

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        background: isSent ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)",
        minWidth: 280,
        maxWidth: 320,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Content area */}
      <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Title */}
        <span
          style={{
            fontSize: "var(--font-size-4)",
            fontWeight: "var(--font-weight-bold)",
            fontFamily: "var(--font-family-body)",
            color: isSent ? "var(--color-static-white)" : "var(--color-text-primary)",
            lineHeight: 1.3,
          }}
        >
          How do you prefer to shop?
        </span>

        {/* Options */}
        {POLL_OPTIONS.map((option, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              {option.selected ? (
                <div style={{ width: 24, height: 24, borderRadius: "var(--radius-full)", background: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke={isSent ? "var(--color-send-bubble-bg)" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              ) : (
                <div style={{ width: 24, height: 24, borderRadius: "var(--radius-full)", border: `2px solid ${isSent ? "rgba(255,255,255,0.5)" : "var(--color-text-tertiary)"}`, flexShrink: 0 }} />
              )}
              <span style={{ fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-medium)", fontFamily: "var(--font-family-body)", color: isSent ? "var(--color-static-white)" : "var(--color-text-primary)", flex: 1 }}>{option.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {Array.from({ length: Math.min(option.voters, 3) }).map((_, i) => (
                    <img key={i} src={AVATARS[i % AVATARS.length]} alt="" style={{ width: 28, height: 28, borderRadius: "var(--radius-full)", border: "2px solid", borderColor: isSent ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)", marginLeft: i > 0 ? -10 : 0, objectFit: "cover" }} />
                  ))}
                </div>
                {option.showExtra ? (
                  <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-medium)", color: isSent ? "var(--color-static-white)" : "var(--color-text-secondary)" }}>+{option.showExtra}</span>
                ) : (
                  <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-medium)", color: isSent ? "var(--color-static-white)" : "var(--color-text-secondary)" }}>{option.voters}</span>
                )}
              </div>
            </div>
            {/* Progress bar — starts aligned with answer text */}
            <div style={{ marginLeft: 36, height: 8, borderRadius: 4, background: isSent ? "rgba(255,255,255,0.2)" : "#d5d7da", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${option.progress * 100}%`, borderRadius: 4, background: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)" }} />
            </div>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div style={{ height: 1, background: isSent ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }} />

      {/* View All button */}
      <div style={{ padding: "var(--space-3)", textAlign: "center" }}>
        <span style={{ fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", fontFamily: "var(--font-family-body)", color: isSent ? "var(--color-static-white)" : "var(--color-icon-highlight-primary)", cursor: "pointer" }}>View All</span>
      </div>

      {/* Timestamp + receipt */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--space-1)", padding: "0 var(--space-4) var(--space-3)" }}>
        <span style={{ fontSize: "var(--font-size-1)", color: isSent ? "rgba(255,255,255,0.7)" : "var(--color-text-tertiary)" }}>4:56 pm</span>
        {isSent && <ReceiptIcon />}
      </div>
    </div>
  );
}

function ReceiptIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 8.5L5 11.5L11 4.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Wrapper({ children, width = 360 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-4)", background: "var(--color-bg-01)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-default)" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
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
