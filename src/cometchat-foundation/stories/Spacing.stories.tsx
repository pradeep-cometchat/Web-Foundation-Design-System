import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../../foundation/components/PageHeader";
import { Section } from "../../foundation/components/Section";
import { TokenTable } from "../../foundation/components/TokenTable";

const meta: Meta = {
  title: "CometChat Foundation/Spacing",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   TOKEN DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const spacingTokens = [
  { step: "spacing", value: 2, isNew: false },
  { step: "spacing-1", value: 4, isNew: false },
  { step: "spacing-1-5", value: 6, isNew: true },
  { step: "spacing-2", value: 8, isNew: false },
  { step: "spacing-2-5", value: 10, isNew: true },
  { step: "spacing-3", value: 12, isNew: false },
  { step: "spacing-3-5", value: 14, isNew: true },
  { step: "spacing-4", value: 16, isNew: false },
  { step: "spacing-5", value: 20, isNew: false },
  { step: "spacing-6", value: 24, isNew: false },
  { step: "spacing-7", value: 28, isNew: false },
  { step: "spacing-8", value: 32, isNew: false },
  { step: "spacing-9", value: 36, isNew: false },
  { step: "spacing-10", value: 40, isNew: false },
  { step: "spacing-11", value: 44, isNew: false },
  { step: "spacing-12", value: 48, isNew: false },
  { step: "spacing-13", value: 52, isNew: false },
  { step: "spacing-14", value: 56, isNew: false },
  { step: "spacing-15", value: 60, isNew: false },
  { step: "spacing-16", value: 64, isNew: false },
  { step: "spacing-17", value: 68, isNew: false },
  { step: "spacing-18", value: 72, isNew: false },
  { step: "spacing-19", value: 76, isNew: false },
  { step: "spacing-20", value: 80, isNew: false },
  { step: "spacing-24", value: 96, isNew: true },
  { step: "spacing-32", value: 128, isNew: true },
  { step: "spacing-40", value: 160, isNew: true },
  { step: "spacing-48", value: 192, isNew: true },
  { step: "spacing-max", value: 1000, isNew: false },
];

const paddingTokens = spacingTokens.filter(t => t.step !== "spacing-max" && parseInt(t.step.replace("spacing-", "") || "0") <= 10).map(t => ({
  step: t.step.replace("spacing", "padding"),
  value: t.value,
  ref: t.step,
}));

const marginTokens = spacingTokens.filter(t => t.step !== "spacing-max").map(t => ({
  step: t.step.replace("spacing", "margin"),
  value: t.value,
  ref: t.step,
}));

/* ═══════════════════════════════════════════════════════════════════════════
   STORY
   ═══════════════════════════════════════════════════════════════════════════ */

function NewChip() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: "var(--radius-full, 9999px)", background: "var(--color-success-50, #ecfdf3)", color: "var(--color-success-700, #067647)", fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      New
    </span>
  );
}

export const AllTokens: StoryObj = {
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1400, margin: "0 auto" }}>
      <PageHeader
        eyebrow="CometChat Foundation"
        title="Spacing"
        description="A 4px-based spacing scale from 2px to 80px (plus a max of 1000px). Padding and margin tokens map directly to the spacing scale."
        meta={[
          { label: "base", value: "4px" },
          { label: "steps", value: "30" },
          { label: "range", value: "2–1000px" },
        ]}
      />

      <Section title="Spacing Scale" description="Core spacing values used for padding, margin, and gap.">
        <TokenTable
          rows={spacingTokens.map(t => ({
            name: t.step,
            value: `${t.value}px`,
            cssVar: `var(--cometchat-${t.step})`,
            preview: (
              <div aria-hidden style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ background: "var(--color-ep-500)", width: Math.min(t.value, 200), height: 10, borderRadius: "var(--radius-xxs)" }} />
                {t.isNew && <NewChip />}
              </div>
            ),
          }))}
          previewHeader="Ruler"
          valueHeader="Value"
        />
      </Section>

      <Section title="Padding Tokens" description="Mapped to spacing values (0–10).">
        <TokenTable
          searchable={false}
          rows={paddingTokens.map(t => ({
            name: t.step,
            value: `${t.value}px`,
            cssVar: `var(--cometchat-${t.step})`,
            description: `→ ${t.ref}`,
          }))}
          previewHeader=""
          valueHeader="Value"
        />
      </Section>

      <Section title="Margin Tokens" description="Mapped to spacing values (0–20).">
        <TokenTable
          searchable={false}
          rows={marginTokens.map(t => ({
            name: t.step,
            value: `${t.value}px`,
            cssVar: `var(--cometchat-${t.step})`,
            description: `→ ${t.ref}`,
          }))}
          previewHeader=""
          valueHeader="Value"
        />
      </Section>
    </div>
  ),
};
