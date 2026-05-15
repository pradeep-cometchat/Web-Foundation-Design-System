import type { Meta, StoryObj } from "@storybook/react";
import { ConversationSummary } from "../components/ConversationSummary";

/**
 * An AI-generated conversation summary card that appears above the message composer.
 * Displays a condensed overview of the conversation with a close action.
 *
 * **Structure (from Figma node 4043:347990):**
 * - Container: full-width, `radius-md` (8px), `shadow-lg`, border `#f5f5f5`
 * - Padding: 16px horizontal, 12px vertical, gap 8px
 * - Header: "Conversation summary" (14px medium, #181d27) + close icon (20×20)
 * - Body: Summary text (14px regular, line-height 20px, #181d27)
 */
const meta: Meta<typeof ConversationSummary> = {
  title: "Base Components/Conversation Summary",
  component: ConversationSummary,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    text: { control: "text", description: "The summary text content." },
    loading: { control: "boolean", description: "Whether the summary is loading." },
    error: { control: "text", description: "Error message to display." },
    open: { control: "boolean", description: "Whether the component is visible." },
    onClose: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof ConversationSummary>;

/* ─── Sample data ─── */

const defaultSummaryText =
  "The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.";

const shortSummaryText =
  "Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.";

const longSummaryText =
  "The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.";

/* ─── Stories ─── */

/** Default state — exact match to Figma node 4043:347990. */
export const Default: Story = {
  args: {
    text: defaultSummaryText,
    open: true,
  },
};

/** Short summary text. */
export const ShortSummary: Story = {
  args: {
    text: shortSummaryText,
    open: true,
  },
};

/** Long summary text that wraps multiple lines. */
export const LongSummary: Story = {
  args: {
    text: longSummaryText,
    open: true,
  },
};

/** Loading state — skeleton placeholders while AI generates the summary. */
export const Loading: Story = {
  args: {
    loading: true,
    open: true,
  },
};

/** Error state — when summary generation fails. */
export const Error: Story = {
  args: {
    error: "Unable to generate summary. Please try again.",
    open: true,
  },
};

/** All states side by side for comparison. */
export const States: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-10)", display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 1020, margin: "0 auto" }}>
      <div>
        <div style={stateLabelStyle}>Default</div>
        <ConversationSummary text={defaultSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Short Summary</div>
        <ConversationSummary text={shortSummaryText} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Loading</div>
        <ConversationSummary loading={true} open={true} />
      </div>
      <div>
        <div style={stateLabelStyle}>Error</div>
        <ConversationSummary error="Unable to generate summary. Please try again." open={true} />
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Conversation Summary component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Conversation Summary -->
<div class="conversation-summary">
  <div class="conversation-summary__header">
    <div class="conversation-summary__heading">
      <span class="conversation-summary__title">Conversation summary</span>
    </div>
    <button class="conversation-summary__close-btn" type="button">
      <!-- close SVG -->
    </button>
  </div>
  <div class="conversation-summary__body">
    <p class="conversation-summary__text">
      The user negotiated the price down from $130 to $120...
    </p>
  </div>
</div>

<!-- Loading state -->
<div class="conversation-summary conversation-summary--loading">
  <div class="conversation-summary__header">...</div>
  <div class="conversation-summary__body">
    <div class="conversation-summary__skeleton conversation-summary__skeleton--full"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--medium"></div>
    <div class="conversation-summary__skeleton conversation-summary__skeleton--short"></div>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (Foundation Variables)">
        <UsageCodeCard language="CSS" code={`.conversation-summary {
  background: var(--color-bg-01);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
}

.conversation-summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conversation-summary__title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.conversation-summary__close-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
}

.conversation-summary__text {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
  color: var(--color-text-primary);
}

.conversation-summary__skeleton {
  height: 14px;
  border-radius: var(--radius-xs);
  background: var(--color-bg-03);
  animation: conversation-summary-pulse 1.5s ease-in-out infinite;
}

.conversation-summary__error {
  font-size: var(--font-size-2);
  color: var(--color-error);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    text: defaultSummaryText,
    open: true,
    loading: false,
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
  marginBottom: "var(--space-2)",
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
