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
    <div style={{ padding: "var(--cometchat-spacing-10)", display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", textAlign: "center" }}>Loading</div>
        <SmartReplies open loading />
      </div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", textAlign: "center" }}>Loaded</div>
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
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
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

      <Section title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.smart-replies {
  width: 360px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-4);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  padding: var(--cometchat-spacing-3);
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-4);
}

.smart-replies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.smart-replies__title {
  font-family: var(--cometchat-font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  color: var(--cometchat-text-color-primary);
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
  color: var(--cometchat-text-color-primary);
  border-radius: var(--cometchat-radius-1);
}

.smart-replies__close:hover {
  background: var(--cometchat-background-color-02);
}

.smart-replies__content {
  display: flex;
  flex-direction: column;
  gap: var(--cometchat-spacing-2);
}

.smart-replies__reply {
  width: 100%;
  padding: var(--cometchat-spacing-3) var(--cometchat-spacing-4);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: 10px;
  background: var(--cometchat-background-color-01);
  font-family: var(--cometchat-font-family);
  font-size: 14px;
  font-weight: 400;
  color: var(--cometchat-text-color-primary);
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.smart-replies__reply:hover {
  background: var(--cometchat-background-color-02);
  border-color: var(--cometchat-border-color-dark);
}

.smart-replies__skeleton {
  height: 67px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--cometchat-background-color-04) 0%, var(--cometchat-background-color-03) 100%);
  animation: smart-replies-shimmer 1.5s ease-in-out infinite;
}`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
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
