import type { Meta, StoryObj } from "@storybook/react";
import { ReactionInfo } from "../components/ReactionInfo";

/**
 * A tooltip-style popup that shows who reacted with a specific emoji.
 * Appears on hover over a reaction badge in a message.
 *
 * **Structure (from Figma node 4043:476245):**
 * - Container: radius 8px, shadow-lg (drop-shadow)
 * - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px
 * - Emoji: 24px, line-height 32px, centered
 * - Names: 12px regular, white, line-height 18px
 * - Label ("reacted"): 12px regular, text-tertiary (#535862), line-height 18px
 * - Arrow: 6px triangle pointing down, same color as bg
 */
const meta: Meta<typeof ReactionInfo> = {
  title: "Base Components/Reaction Info",
  component: ReactionInfo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    emoji: { control: "text", description: "The emoji that was reacted with." },
    names: { control: "object", description: "List of names who reacted." },
    maxVisible: { control: { type: "number", min: 1, max: 10 }, description: "Max names shown before +N." },
    label: { control: "text", description: "Label text below names." },
    showArrow: { control: "boolean", description: "Whether to show the bottom arrow." },
  },
};
export default meta;

type Story = StoryObj<typeof ReactionInfo>;

/* ─── Stories ─── */

/** Default state — exact match to Figma node 4043:476245. */
export const Default: Story = {
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Single reactor. */
export const SingleReactor: Story = {
  args: {
    emoji: "👍",
    names: ["George Alan"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Two reactors — no overflow. */
export const TwoReactors: Story = {
  args: {
    emoji: "❤️",
    names: ["George Alan", "Pourav Raj"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
};

/** Many reactors with overflow. */
export const ManyReactors: Story = {
  args: {
    emoji: "😂",
    names: ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"],
    maxVisible: 3,
    label: "reacted",
    showArrow: true,
  },
};

/** Without arrow. */
export const WithoutArrow: Story = {
  args: {
    emoji: "🔥",
    names: ["George Alan", "Pourav Raj", "Alice"],
    maxVisible: 2,
    label: "reacted",
    showArrow: false,
  },
};

/** All variants side by side. */
export const States: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", padding: "var(--space-10)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Single</div>
        <ReactionInfo emoji="👍" names={["George Alan"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Two names</div>
        <ReactionInfo emoji="❤️" names={["George Alan", "Pourav Raj"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Overflow (+5)</div>
        <ReactionInfo emoji="😍" names={["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"]} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>Different emoji</div>
        <ReactionInfo emoji="🔥" names={["Alice", "Bob", "Charlie"]} maxVisible={3} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={stateLabelStyle}>No arrow</div>
        <ReactionInfo emoji="😂" names={["George Alan", "Pourav Raj"]} showArrow={false} />
      </div>
    </div>
  ),
};

/** HTML & CSS usage reference for the Reaction Info component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Reaction Info Tooltip -->
<div class="reaction-info">
  <div class="reaction-info__content">
    <div class="reaction-info__inner">
      <span class="reaction-info__emoji">😍</span>
      <div class="reaction-info__text">
        <span class="reaction-info__names">George Alan, Pourav Raj +5</span>
        <span class="reaction-info__label">reacted</span>
      </div>
    </div>
  </div>
  <div class="reaction-info__arrow"></div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.reaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--cometchat-radius-2);
  filter: drop-shadow(0px 12px 16px rgba(10, 13, 18, 0.08));
}

.reaction-info__content {
  display: flex;
  flex-direction: column;
  padding: var(--cometchat-spacing-2);
  background: var(--color-neutral-lm-950);
  border-radius: var(--cometchat-radius-1);
}

.reaction-info__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cometchat-spacing-1);
  text-align: center;
}

.reaction-info__emoji {
  font-size: 24px;
  line-height: 28.8px;
}

.reaction-info__names {
  font-size: 12px;
  color: var(--color-white);
}

.reaction-info__label {
  font-size: 12px;
  color: var(--cometchat-text-color-secondary);
}

.reaction-info__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: var(--color-neutral-lm-950) transparent transparent transparent;
  align-self: center;
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure. */
export const Playground: Story = {
  args: {
    emoji: "😍",
    names: ["George Alan", "Pourav Raj", "Alice", "Bob", "Charlie", "Dave", "Eve"],
    maxVisible: 2,
    label: "reacted",
    showArrow: true,
  },
  parameters: { docs: { disable: true } },
};

const stateLabelStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--color-neutral-500, #535862)",
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
