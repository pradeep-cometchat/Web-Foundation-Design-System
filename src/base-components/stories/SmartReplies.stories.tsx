import type { Meta, StoryObj } from "@storybook/react";
import { SmartReplies } from "../components/SmartReplies";

/**
 * AI-suggested quick reply popup that appears above the message composer.
 * Shows a list of contextual reply suggestions the user can tap to send.
 *
 * **Structure (from Figma node 4088:736840):**
 * - Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px
 * - Header: "Suggest a reply" (16px, medium, `--color-neutral-900`) + close icon (20px)
 * - Gap between header and content: 16px
 * - Content gap: 8px between items
 *
 * **States:**
 * - Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation)
 * - Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px)
 *
 * **Interactions:**
 * - Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border
 * - Click reply: fires `onSelect` with the reply text
 * - Close button dismisses the popup
 */
const meta: Meta<typeof SmartReplies> = {
  title: "Base Components/Smart Replies",
  component: SmartReplies,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the component is visible." },
    loading: { control: "boolean", description: "Whether replies are loading." },
    replies: { control: false, description: "Array of suggested reply texts." },
    onSelect: { control: false },
    onClose: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Loading state — skeleton shimmer bars. Matches Figma node 4088:736840. */
export const Loading: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: true,
  },
};

/** Loaded state — reply suggestions displayed. */
export const Loaded: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Yes, it's still available! Would you like to see more photos?",
      "Sure, I can ship it. Where are you located?",
      "Thanks for your interest! Let me check the shipping options.",
    ],
  },
};

/** Two replies — shorter list. */
export const TwoReplies: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Sounds good, let's do it!",
      "I'll think about it and get back to you.",
    ],
  },
};

/** Single reply suggestion. */
export const SingleReply: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: ["Thanks! I appreciate it."],
  },
};

/** All states side by side. */
export const AllStates: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-10)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", textAlign: "center" }}>Loading</div>
        <SmartReplies open loading />
      </div>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", textAlign: "center" }}>Loaded</div>
        <SmartReplies
          open
          replies={[
            "Yes, it's still available!",
            "Sure, I can ship it.",
            "Thanks for your interest!",
          ]}
        />
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
          code={`<!-- Smart Replies — loaded state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <button class="smart-replies__reply">Yes, it's still available!</button>
    <button class="smart-replies__reply">Sure, I can ship it. Where are you located?</button>
    <button class="smart-replies__reply">Thanks for your interest!</button>
  </div>
</div>

<!-- Smart Replies — loading state -->
<div class="smart-replies">
  <div class="smart-replies__header">
    <span class="smart-replies__title">Suggest a reply</span>
    <button class="smart-replies__close" aria-label="Close">
      <svg><!-- close icon --></svg>
    </button>
  </div>
  <div class="smart-replies__content">
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
    <div class="smart-replies__skeleton"></div>
  </div>
</div>`}
        />
      </Section>

      <Section title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.smart-replies {
  width: 360px;
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h4);
  color: var(--color-text-primary);
}

.smart-replies__close {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-text-primary);
  border-radius: var(--radius-xs);
}

.smart-replies__close:hover {
  background: var(--color-bg-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background: var(--color-bg-01);
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--color-bg-02);
  border-color: var(--color-border-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: var(--radius-lg);
  background: linear-gradient(90deg, var(--color-bg-04) 0%, var(--color-bg-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <ClassGroup title="Root" items={["smart-replies"]} />
          <ClassGroup title="Header" items={["smart-replies__header", "smart-replies__title", "smart-replies__close"]} />
          <ClassGroup title="Content" items={["smart-replies__content", "smart-replies__reply", "smart-replies__skeleton"]} />
        </div>
      </Section>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Yes, it's still available! Would you like to see more photos?",
      "Sure, I can ship it. Where are you located?",
      "Thanks for your interest! Let me check the shipping options.",
    ],
  },
  parameters: { docs: { disable: true } },
};
