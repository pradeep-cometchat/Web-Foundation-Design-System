import type { Meta, StoryObj } from "@storybook/react";
import { FlagMessageDialog } from "../components/FlagMessageDialog";

/**
 * A dialog for reporting or flagging inappropriate messages. Presents selectable
 * reason badges, an optional text area for additional context, and cancel/report actions.
 *
 * **Structure (from Figma node 4090:860298):**
 * - Container: 400px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`
 * - Header: title (20px, bold, `--color-neutral-900`), close icon (24px), description (14px, `--color-neutral-700`)
 * - Badges: pill-shaped (`--radius-full`), border `--color-neutral-200`, 14px medium text, wrap layout
 * - Selected badge: `--color-ep-50` bg, `--color-ep-300` border, `--color-ep-700` text
 * - Text area: `--color-neutral-50` bg, `--radius-md`, border `--color-neutral-100`, placeholder in `--color-neutral-600`
 * - Cancel: outlined button, Report: disabled (`--color-neutral-200` bg) until a reason is selected, then `--color-error` bg
 */
const meta: Meta<typeof FlagMessageDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Flag Message Dialog",
  component: FlagMessageDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the dialog is visible." },
    reasons: { control: false, description: "Pre-defined report reasons." },
    onCancel: { control: false },
    onReport: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Default state — no reason selected, Report button disabled. Matches Figma exactly. */
export const Default: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
  },
};

/** Custom reasons for a different context. */
export const CustomReasons: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
    reasons: [
      "Harassment or bullying",
      "Impersonation",
      "Intellectual property violation",
      "Self-harm or suicide",
      "Other",
    ],
  },
};

/** Fewer reasons — minimal variant. */
export const MinimalReasons: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
    reasons: ["Spam", "Inappropriate content", "Other"],
  },
};

/** HTML & CSS usage reference for the Flag Message Dialog component. */
export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <UsageSection title="HTML">
        <UsageCodeCard language="HTML" code={`<!-- Flag Message Dialog -->
<div class="flag-message-dialog">
  <div class="flag-message-dialog__header">
    <div class="flag-message-dialog__header-content">
      <div class="flag-message-dialog__header-top">
        <span class="flag-message-dialog__title">Flag Message</span>
        <button class="flag-message-dialog__close" type="button"><!-- X icon --></button>
      </div>
      <p class="flag-message-dialog__description">
        Select a reason for flagging this message.
      </p>
    </div>
  </div>
  <div class="flag-message-dialog__body">
    <div class="flag-message-dialog__badges">
      <button class="flag-message-dialog__badge" type="button">Spam</button>
      <button class="flag-message-dialog__badge flag-message-dialog__badge--selected" type="button">
        Inappropriate content
      </button>
      <button class="flag-message-dialog__badge" type="button">Harassment</button>
    </div>
    <div class="flag-message-dialog__field">
      <label class="flag-message-dialog__label">
        <span class="flag-message-dialog__label-text">Additional details</span>
        <span class="flag-message-dialog__label-optional"> (optional)</span>
      </label>
      <textarea class="flag-message-dialog__textarea" placeholder="Provide more context..."></textarea>
    </div>
  </div>
  <div class="flag-message-dialog__buttons">
    <button class="flag-message-dialog__btn flag-message-dialog__btn--cancel">Cancel</button>
    <button class="flag-message-dialog__btn flag-message-dialog__btn--report flag-message-dialog__btn--report-active">Report</button>
  </div>
</div>`} />
      </UsageSection>
      <UsageSection title="CSS (CometChat Tokens)">
        <UsageCodeCard language="CSS" code={`.flag-message-dialog {
  width: 400px;
  background: var(--cometchat-background-color-01);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-5);
  box-shadow: 0px 12px 16px -4px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.flag-message-dialog__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--cometchat-text-color-primary);
}

.flag-message-dialog__badge {
  padding: var(--cometchat-spacing-1) var(--cometchat-spacing-3);
  border: 1px solid var(--cometchat-border-color-default);
  border-radius: var(--cometchat-radius-max);
  font-size: 14px;
  font-weight: 500;
  color: var(--cometchat-text-color-primary);
  cursor: pointer;
}

.flag-message-dialog__badge--selected {
  background: var(--color-ep-50);
  border-color: var(--color-ep-300);
  color: var(--color-ep-700);
}

.flag-message-dialog__textarea {
  width: 100%;
  height: 88px;
  padding: var(--cometchat-spacing-2);
  border: 1px solid var(--cometchat-border-color-light);
  border-radius: var(--cometchat-radius-2);
  background: var(--cometchat-background-color-02);
  font-size: 14px;
  resize: none;
}

.flag-message-dialog__btn--report-active {
  background: var(--cometchat-error-color);
  color: var(--color-white);
}

.flag-message-dialog__btn--report-active:hover {
  background: var(--color-error-700);
}`} />
      </UsageSection>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof FlagMessageDialog> = {
  args: {
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
