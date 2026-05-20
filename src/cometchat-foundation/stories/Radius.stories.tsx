import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../../foundation/components/PageHeader";
import { Section } from "../../foundation/components/Section";
import { TokenTable } from "../../foundation/components/TokenTable";

const meta: Meta = {
  title: "CometChat Foundation/Radius",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   TOKEN DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const radiusTokens = [
  { name: "radius-none", value: 0, cssVar: "--cometchat-radius-none", isNew: true },
  { name: "radius", value: 2, cssVar: "--cometchat-radius", isNew: false },
  { name: "radius-1", value: 4, cssVar: "--cometchat-radius-1", isNew: false },
  { name: "radius-1-5", value: 6, cssVar: "--cometchat-radius-1-5", isNew: true },
  { name: "radius-2", value: 8, cssVar: "--cometchat-radius-2", isNew: false },
  { name: "radius-2-5", value: 10, cssVar: "--cometchat-radius-2-5", isNew: true },
  { name: "radius-3", value: 12, cssVar: "--cometchat-radius-3", isNew: false },
  { name: "radius-4", value: 16, cssVar: "--cometchat-radius-4", isNew: false },
  { name: "radius-5", value: 20, cssVar: "--cometchat-radius-5", isNew: false },
  { name: "radius-6", value: 24, cssVar: "--cometchat-radius-6", isNew: false },
  { name: "radius-max", value: 1000, cssVar: "--cometchat-radius-max", isNew: false },
];

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
        title="Border Radius"
        description="Border radius scale tied to the spacing system. From sharp corners (0px) to fully rounded pills (1000px max)."
        meta={[
          { label: "tokens", value: "11" },
          { label: "range", value: "0–1000px" },
        ]}
      />

      <Section title="Radius Scale" description="Each radius token maps to a spacing value for consistency.">
        <TokenTable
          rows={radiusTokens.map(t => ({
            name: t.name,
            value: `${t.value}px`,
            cssVar: `var(${t.cssVar})`,
            preview: (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  aria-hidden
                  style={{
                    width: 48,
                    height: 48,
                    background: "var(--color-ep-100)",
                    border: "2px solid var(--color-ep-500)",
                    borderRadius: t.value >= 1000 ? "50%" : t.value,
                  }}
                />
                {t.isNew && <NewChip />}
              </div>
            ),
          }))}
          previewHeader="Preview"
          valueHeader="Value"
        />
      </Section>

      <Section title="Visual Comparison">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-4)" }}>
          {radiusTokens.map(t => (
            <div key={t.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
              <div style={{ width: 64, height: 64, background: "var(--color-ep-100)", border: "2px solid var(--color-ep-500)", borderRadius: t.value >= 1000 ? "50%" : t.value }} />
              <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-text-secondary)", fontWeight: "var(--font-weight-medium)" }}>{t.value}px</span>
              <code style={{ fontSize: "var(--font-size-0)", color: "var(--color-text-tertiary)" }}>{t.name}</code>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};
