import type { Meta, StoryObj } from "@storybook/react";
import { ConversationStarter } from "../../../base-components/components/ConversationStarter";
import { ConversationSummary } from "../../../base-components/components/ConversationSummary";

/**
 * The Panel feature of the Multi Line Composer displays AI-powered panels
 * above the message input area. Panels include Conversation Starters,
 * Suggest a Reply, and Conversation Summary.
 *
 * **Figma:** [Message Composer – Panel](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Line Composer/Panel",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

/* ─── Inline SVG Icons (from Figma source) ─────────────────────────────────── */

const IconAddCircle = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="#A4A7AE"/>
  </svg>
);

const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="#A4A7AE"/>
  </svg>
);

const IconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="#A4A7AE"/>
  </svg>
);

const IconSticker = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="#A4A7AE"/>
  </svg>
);

const IconFormatting = () => (
  <svg width="20" height="20" viewBox="0 0 14.1 9.375" fill="none">
    <path d="M2.1 6.833l-.667 1.854a.83.83 0 0 1-.27.354.74.74 0 0 1-.418.126c-.264 0-.469-.108-.614-.324-.146-.215-.17-.44-.073-.677L2.933.5a.83.83 0 0 1 .282-.365A.74.74 0 0 1 3.642 0h.583c.153 0 .299.045.438.135a.83.83 0 0 1 .291.365l2.875 7.688c.097.236.07.458-.083.666-.153.209-.354.313-.604.313a.74.74 0 0 1-.417-.135.83.83 0 0 1-.271-.365l-.646-1.834H2.1Zm.48-1.333h2.728L3.975 1.708h-.084L2.58 5.5Zm8.228 3.875c-.708 0-1.27-.191-1.687-.573-.417-.382-.625-.885-.625-1.51 0-.611.24-1.115.72-1.51.479-.396 1.093-.594 1.843-.594.32 0 .632.028.938.084.305.055.569.132.791.229v-.25c0-.403-.142-.73-.427-.98-.285-.25-.663-.374-1.135-.374a1.7 1.7 0 0 0-.615.094 1.5 1.5 0 0 0-.552.28c-.181.14-.351.188-.51.147a.56.56 0 0 1-.386-.23.47.47 0 0 1-.146-.395c0-.153.076-.285.229-.396.278-.222.59-.385.938-.49.347-.104.701-.156 1.063-.156.958 0 1.673.226 2.146.677.471.451.708 1.128.708 2.031v3.063a.63.63 0 0 1-.168.458.58.58 0 0 1-.469.187.58.58 0 0 1-.458-.197.63.63 0 0 1-.188-.49v-.104h-.083a1.8 1.8 0 0 1-.792.729c-.333.167-.701.25-1.104.25Zm.25-1.125c.486 0 .9-.167 1.24-.5.34-.333.51-.722.51-1.167a2.2 2.2 0 0 0-.698-.26 3.3 3.3 0 0 0-.802-.094c-.444 0-.791.097-1.041.292-.25.194-.375.451-.375.77 0 .278.111.507.333.688.222.18.5.271.833.271Z" fill="#A4A7AE"/>
  </svg>
);

const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M7.377 5.43c.083-.406.663-.406.746 0a5 5 0 0 0 3.947 3.947c.406.083.406.663 0 .746a5 5 0 0 0-3.947 3.947c-.083.406-.663.406-.746 0a5 5 0 0 0-3.947-3.947c-.406-.083-.406-.663 0-.746A5 5 0 0 0 7.377 5.43Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
    <path d="M13.913 4.145a.03.03 0 0 1 .049 0 3.38 3.38 0 0 0 2.393 2.393.03.03 0 0 1 0 .049 3.38 3.38 0 0 0-2.393 2.393.03.03 0 0 1-.049 0 3.38 3.38 0 0 0-2.393-2.393.03.03 0 0 1 0-.049 3.38 3.38 0 0 0 2.393-2.393Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
  </svg>
);

const IconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor"/>
  </svg>
);

const IconClose = () => (
  <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
    <path d="M1.1 11L0 9.9L4.4 5.5L0 1.1L1.1 0L5.5 4.4L9.9 0L11 1.1L6.6 5.5L11 9.9L9.9 11L5.5 6.6L1.1 11Z" fill="currentColor"/>
  </svg>
);

/* ─── Styles ───────────────────────────────────────────────────────────────── */

const composerBox: React.CSSProperties = {
  width: 800,
  display: "flex",
  flexDirection: "column",
  background: "var(--color-bg-01)",
  border: "1px solid var(--color-border-default)",
  borderRadius: 8,
};

const inputBox: React.CSSProperties = {
  padding: 12,
  fontSize: 14,
  lineHeight: "20px",
  fontFamily: "'Inter', sans-serif",
};

const toolbarBox: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "6px 12px",
  borderTop: "1px solid var(--color-border-light)",
};

const actionsLeft: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  flex: 1,
};

const actionButton: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  padding: 6,
  borderRadius: 8,
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

const sendBase: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "2px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 2px rgba(10,13,18,0.05)",
};

/* ─── Suggest a Reply Panel (inline) ───────────────────────────────────────── */

interface SuggestReplyProps {
  suggestions: string[];
  onClose?: () => void;
  onSelect?: (suggestion: string) => void;
}

function SuggestReply({ suggestions, onClose, onSelect }: SuggestReplyProps) {
  return (
    <div
      style={{
        background: "var(--color-bg-01)",
        border: "1px solid var(--color-border-default)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid var(--color-border-light)",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Suggest a reply
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close suggest a reply"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            borderRadius: 4,
            color: "var(--color-text-secondary)",
          }}
        >
          <IconClose />
        </button>
      </div>
      {/* Body */}
      <div>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => onSelect?.(suggestion)}
            style={{
              padding: "12px 16px",
              fontSize: 14,
              color: "var(--color-text-primary)",
              fontFamily: "'Inter', sans-serif",
              borderBottom: index < suggestions.length - 1 ? "1px solid var(--color-border-light)" : "none",
              borderLeft: "2px solid transparent",
              cursor: "pointer",
            }}
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Composer (Placeholder State) ─────────────────────────────────────────── */

function ComposerPlaceholder() {
  return (
    <div style={composerBox}>
      <div style={inputBox}>
        <span style={{ color: "var(--color-text-placeholder)" }}>Type your message...</span>
      </div>
      <div style={toolbarBox}>
        <div style={actionsLeft}>
          <button style={actionButton} aria-label="Attach file"><IconAddCircle /></button>
          <button style={actionButton} aria-label="Voice record"><IconMic /></button>
          <button style={actionButton} aria-label="Emoji"><IconMood /></button>
          <button style={actionButton} aria-label="Sticker"><IconSticker /></button>
          <button style={actionButton} aria-label="Formatting"><IconFormatting /></button>
          <button style={{ ...actionButton, padding: 4 }} aria-label="AI features"><IconAI /></button>
        </div>
        <div style={{ ...sendBase, background: "var(--color-bg-03)", color: "var(--color-icon-disabled)" }}>
          <IconSend />
        </div>
      </div>
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const conversationStarterSuggestions = [
  "Is this still available?",
  "Is there any warranty left?",
  "Can you share more photos?",
  "When was it purchased?",
  "Is the price negotiable?",
];

const suggestReplySuggestions = [
  "Is this watch still available?",
  "What is the condition of the watch?",
  "Is the price negotiable?",
];

const conversationSummaryText =
  "The buyer is interested in the watch and wants to confirm if it is still available. They are asking about the condition and whether the product is original, along with details like box and warranty. There are also questions around pricing and if there is any room for negotiation. The buyer has requested additional photos to better evaluate the item. Overall, they are trying to verify authenticity, condition, and value before making a decision.";

/* ─── Stories ──────────────────────────────────────────────────────────────── */

/** Conversation Starter chips displayed above the composer. */
export const ConversationStarterPanel: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24, width: 800 }}>
      <div style={{ marginBottom: 8 }}>
        <ConversationStarter suggestions={conversationStarterSuggestions} />
      </div>
      <ComposerPlaceholder />
    </div>
  ),
};

/** Suggest a Reply card displayed above the composer. */
export const SuggestReplyPanel: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24, width: 800 }}>
      <div style={{ marginBottom: 8 }}>
        <SuggestReply suggestions={suggestReplySuggestions} />
      </div>
      <ComposerPlaceholder />
    </div>
  ),
};

/** Conversation Summary card displayed above the composer. */
export const ConversationSummaryPanel: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24, width: 800 }}>
      <div style={{ marginBottom: 8 }}>
        <ConversationSummary text={conversationSummaryText} />
      </div>
      <ComposerPlaceholder />
    </div>
  ),
};

/** HTML + CSS usage reference for the Panel feature. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 32, maxWidth: 1200, margin: "0 auto" }}>
      <Section title="Conversation Starters (HTML)">
        <CodeCard language="HTML" code={`<div class="panel-wrapper">
  <div class="conversation-starter">
    <div class="conversation-starter__tags">
      <button class="conversation-starter__tag">Is this still available?</button>
      <button class="conversation-starter__tag">Is there any warranty left?</button>
      <button class="conversation-starter__tag">Can you share more photos?</button>
    </div>
  </div>
  <div class="composer">...</div>
</div>`} />
      </Section>
      <Section title="Suggest a Reply (HTML)">
        <CodeCard language="HTML" code={`<div class="panel-wrapper">
  <div class="suggest-reply">
    <div class="suggest-reply__header">
      <span class="suggest-reply__title">Suggest a reply</span>
      <button class="suggest-reply__close" aria-label="Close">✕</button>
    </div>
    <div class="suggest-reply__body">
      <div class="suggest-reply__item">Is this watch still available?</div>
      <div class="suggest-reply__item">What is the condition of the watch?</div>
      <div class="suggest-reply__item">Is the price negotiable?</div>
    </div>
  </div>
  <div class="composer">...</div>
</div>`} />
      </Section>
      <Section title="Suggest a Reply (CSS)">
        <CodeCard language="CSS" code={`.suggest-reply {
  background: white;
  border: 1px solid #e9eaeb;
  border-radius: 8px;
  overflow: hidden;
}
.suggest-reply__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
}
.suggest-reply__title {
  font-size: 16px;
  font-weight: 500;
  color: #181d27;
}
.suggest-reply__close {
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #535862;
}
.suggest-reply__item {
  padding: 12px 16px;
  font-size: 14px;
  color: #181d27;
  border-bottom: 1px solid #f5f5f5;
  border-left: 2px solid transparent;
  cursor: pointer;
}
.suggest-reply__item:last-child {
  border-bottom: none;
}`} />
      </Section>
      <Section title="Conversation Summary (HTML)">
        <CodeCard language="HTML" code={`<div class="panel-wrapper">
  <div class="conversation-summary">
    <div class="conversation-summary__header">
      <span class="conversation-summary__title">Conversation summary</span>
      <button class="conversation-summary__close-btn" aria-label="Close">✕</button>
    </div>
    <div class="conversation-summary__body">
      <p class="conversation-summary__text">Summary text here...</p>
    </div>
  </div>
  <div class="composer">...</div>
</div>`} />
      </Section>
    </div>
  ),
};

/* ─── Docs Helpers ─────────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ padding: "8px 12px", borderBottom: "1px solid var(--color-border-default)", background: "#fafafa" }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: 14, fontSize: 12, lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto", background: "var(--color-bg-01)" }}>
      <code>{code}</code>
    </pre>
  </div>
);

/** Interactive playground — select a panel type to preview above the composer. */
export const Playground: Story = {
  args: {
    panelType: "conversationStarter",
  },
  argTypes: {
    panelType: {
      control: "select",
      options: ["conversationStarter", "suggestReply", "conversationSummary"],
      description: "Panel type displayed above the composer",
      table: { category: "Panel" },
    },
  },
  parameters: { layout: "padded", docs: { disable: true } },
  render: function Render(args) {
    const panelType = (args as Record<string, unknown>).panelType as string;

    return (
      <div style={{ padding: 24, width: 800 }}>
        <div style={{ marginBottom: 8 }}>
          {panelType === "conversationStarter" && (
            <ConversationStarter suggestions={conversationStarterSuggestions} />
          )}
          {panelType === "suggestReply" && (
            <SuggestReply suggestions={suggestReplySuggestions} />
          )}
          {panelType === "conversationSummary" && (
            <ConversationSummary text={conversationSummaryText} />
          )}
        </div>
        <ComposerPlaceholder />
      </div>
    );
  },
};
