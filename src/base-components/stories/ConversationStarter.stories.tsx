import type { Meta, StoryObj } from "@storybook/react";
import { ConversationStarter } from "../components/ConversationStarter";

/**
 * AI-powered conversation starter suggestions displayed above the message composer.
 * Presents a row of clickable pill-shaped tags with pre-written messages the user
 * can tap to quickly start a conversation.
 *
 * **Structure (from Figma node 4088:704041):**
 * - Container: full width, `--radius-2xl` (16px), wrapping flex layout
 * - Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`
 * - Tag padding: 8px vertical, 20px horizontal
 * - Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`
 * - Gap between tags: 8px
 * - Hover: `--color-neutral-100` bg, `--color-neutral-300` border
 */
const meta: Meta<typeof ConversationStarter> = {
  title: "Base Components/Conversation Starter",
  component: ConversationStarter,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    suggestions: { control: false, description: "Array of suggested conversation starter messages." },
    open: { control: "boolean", description: "Whether the component is visible." },
    onSelect: { control: false },
  },
};
export default meta;

/* ─── Data ─── */

const defaultSuggestions = [
  "Hi there! How's it going?",
  "Hey, how are you doing today?",
  "Hello! How's your day been so far?",
  "Hope all's well!",
];

const businessSuggestions = [
  "I'd like to know more about your services",
  "Can you help me with my order?",
  "What are your business hours?",
  "I have a question about pricing",
];

const casualSuggestions = [
  "What's up? 👋",
  "Long time no see!",
  "Got any plans this weekend?",
  "Did you see that movie?",
  "How's the family?",
];

const singleSuggestion = ["Say hello 👋"];

/* ─── Stories ─── */

/** Default — four greeting suggestions as shown in Figma. */
export const Default: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: defaultSuggestions,
    open: true,
  },
};

/** Business/support context with service-related starters. */
export const Business: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: businessSuggestions,
    open: true,
  },
};

/** Casual conversation starters with more options (wraps to second line). */
export const Casual: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: casualSuggestions,
    open: true,
  },
};

/** Single suggestion — minimal variant. */
export const Single: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: singleSuggestion,
    open: true,
  },
};

/** In context — shown above a message composer mock. */
export const InContext: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ marginBottom: "var(--space-2)" }}>
        <ConversationStarter suggestions={defaultSuggestions} />
      </div>
      {/* Message Composer */}
      <div style={{
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-md)",
        background: "var(--color-bg-01)",
        overflow: "hidden",
      }}>
        {/* Input area */}
        <div style={{ padding: "var(--space-3)", fontSize: "var(--font-size-2)", color: "var(--color-text-tertiary)", fontFamily: "var(--font-family-body)", lineHeight: "var(--line-height-body)" }}>
          Type your message...
        </div>
        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
        {/* Actions bar */}
        <div style={{ padding: "var(--space-1-5) var(--space-3)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>add_circle</span>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>mic</span>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>mood</span>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>sticky_note_2</span>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>match_case</span>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)", padding: "var(--space-1-5)" }}>auto_awesome</span>
          </div>
          <div style={{
            width: 36, height: 36,
            borderRadius: "var(--radius-full)",
            background: "var(--color-bg-disabled)",
            border: "2px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "var(--shadow-xs)",
          }}>
            <span className="icon-outlined" style={{ fontSize: 20, color: "var(--color-icon-quaternary)" }}>send</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Conversation Starter component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Conversation Starter -->
<div class="conversation-starter">
  <div class="conversation-starter__tags">
    <button class="conversation-starter__tag" type="button">
      Hi there! How's it going?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hey, how are you doing today?
    </button>
    <button class="conversation-starter__tag" type="button">
      Hello! How's your day been so far?
    </button>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.conversation-starter {
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.conversation-starter__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

.conversation-starter__tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1-5) var(--space-5);
  background: var(--color-bg-02);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
}

.conversation-starter__tag:hover {
  background: var(--color-bg-03);
  border-color: var(--color-border-dark);
}

.conversation-starter__tag:active {
  background: var(--color-bg-04);
}

.conversation-starter__tag:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-xs);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: defaultSuggestions,
    open: true,
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
