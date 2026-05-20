import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../../foundation/components/PageHeader";
import { Section } from "../../foundation/components/Section";
import { TokenTable } from "../../foundation/components/TokenTable";

/* Load Roboto from Google Fonts for accurate previews */
const robotoLink = document.querySelector('link[href*="Roboto"]');
if (!robotoLink) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap";
  document.head.appendChild(link);
}

const meta: Meta = {
  title: "CometChat Foundation/Typography",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   TOKEN DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const fontTokens = [
  { name: "Title / Bold", value: "700 32px/38.4px", cssVar: "--cometchat-font-title-bold" },
  { name: "Title / Semibold", value: "600 32px/38.4px", cssVar: "--cometchat-font-title-semibold" },
  { name: "Title / Medium", value: "500 32px/38.4px", cssVar: "--cometchat-font-title-medium" },
  { name: "Title / Regular", value: "400 32px/38.4px", cssVar: "--cometchat-font-title-regular" },
  { name: "Heading 1 / Bold", value: "700 24px/28.8px", cssVar: "--cometchat-font-heading1-bold" },
  { name: "Heading 1 / Semibold", value: "600 24px/28.8px", cssVar: "--cometchat-font-heading1-semibold" },
  { name: "Heading 1 / Medium", value: "500 24px/28.8px", cssVar: "--cometchat-font-heading1-medium" },
  { name: "Heading 1 / Regular", value: "400 24px/28.8px", cssVar: "--cometchat-font-heading1-regular" },
  { name: "Heading 2 / Bold", value: "700 20px/24px", cssVar: "--cometchat-font-heading2-bold" },
  { name: "Heading 2 / Semibold", value: "600 20px/24px", cssVar: "--cometchat-font-heading2-semibold" },
  { name: "Heading 2 / Medium", value: "500 20px/24px", cssVar: "--cometchat-font-heading2-medium" },
  { name: "Heading 2 / Regular", value: "400 20px/24px", cssVar: "--cometchat-font-heading2-regular" },
  { name: "Heading 3 / Bold", value: "700 18px/21.6px", cssVar: "--cometchat-font-heading3-bold" },
  { name: "Heading 3 / Semibold", value: "600 18px/21.6px", cssVar: "--cometchat-font-heading3-semibold" },
  { name: "Heading 3 / Medium", value: "500 18px/21.6px", cssVar: "--cometchat-font-heading3-medium" },
  { name: "Heading 3 / Regular", value: "400 18px/21.6px", cssVar: "--cometchat-font-heading3-regular" },
  { name: "Heading 4 / Bold", value: "700 16px/19.2px", cssVar: "--cometchat-font-heading4-bold" },
  { name: "Heading 4 / Semibold", value: "600 16px/19.2px", cssVar: "--cometchat-font-heading4-semibold" },
  { name: "Heading 4 / Medium", value: "500 16px/19.2px", cssVar: "--cometchat-font-heading4-medium" },
  { name: "Heading 4 / Regular", value: "400 16px/19.2px", cssVar: "--cometchat-font-heading4-regular" },
  { name: "Body / Bold", value: "700 14px/16.8px", cssVar: "--cometchat-font-body-bold" },
  { name: "Body / Semibold", value: "600 14px/16.8px", cssVar: "--cometchat-font-body-semibold" },
  { name: "Body / Medium", value: "500 14px/16.8px", cssVar: "--cometchat-font-body-medium" },
  { name: "Body / Regular", value: "400 14px/16.8px", cssVar: "--cometchat-font-body-regular" },
  { name: "Caption 1 / Bold", value: "700 12px/14.4px", cssVar: "--cometchat-font-caption1-bold" },
  { name: "Caption 1 / Semibold", value: "600 12px/14.4px", cssVar: "--cometchat-font-caption1-semibold" },
  { name: "Caption 1 / Medium", value: "500 12px/14.4px", cssVar: "--cometchat-font-caption1-medium" },
  { name: "Caption 1 / Regular", value: "400 12px/14.4px", cssVar: "--cometchat-font-caption1-regular" },
  { name: "Caption 2 / Bold", value: "700 10px/12px", cssVar: "--cometchat-font-caption2-bold" },
  { name: "Caption 2 / Semibold", value: "600 10px/12px", cssVar: "--cometchat-font-caption2-semibold" },
  { name: "Caption 2 / Medium", value: "500 10px/12px", cssVar: "--cometchat-font-caption2-medium" },
  { name: "Caption 2 / Regular", value: "400 10px/12px", cssVar: "--cometchat-font-caption2-regular" },
  { name: "Button / Bold", value: "700 14px/16.8px", cssVar: "--cometchat-font-button-bold" },
  { name: "Button / Semibold", value: "600 14px/16.8px", cssVar: "--cometchat-font-button-semibold" },
  { name: "Button / Medium", value: "500 14px/16.8px", cssVar: "--cometchat-font-button-medium" },
  { name: "Button / Regular", value: "400 14px/16.8px", cssVar: "--cometchat-font-button-regular" },
  { name: "Link", value: "400 14px/19.6px", cssVar: "--cometchat-font-link" },
];

function parseFont(value: string): { weight: number; size: string; lineHeight: string } {
  const match = value.match(/(\d+)\s+(\d+px)\/([\d.]+px)/);
  if (!match) return { weight: 400, size: "14px", lineHeight: "16.8px" };
  return { weight: parseInt(match[1]), size: match[2], lineHeight: match[3] };
}

function NewChip() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: "var(--radius-full, 9999px)", background: "var(--color-success-50, #ecfdf3)", color: "var(--color-success-700, #067647)", fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginLeft: 8, whiteSpace: "nowrap" }}>
      New
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STORY
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllTokens: StoryObj = {
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1400, margin: "0 auto" }}>
      <PageHeader
        eyebrow="CometChat Foundation"
        title="Typography"
        description="Roboto font family with 28 shorthand font tokens. Each token encodes weight, size, and line-height in a single CSS shorthand value. Use via the font property."
        meta={[
          { label: "family", value: "Roboto" },
          { label: "tokens", value: "28" },
          { label: "sizes", value: "10–32px" },
          { label: "weights", value: "300–700" },
        ]}
      />

      <Section title="Font Family">
        <TokenTable
          searchable={false}
          rows={[{ name: "Font Family", value: "'Roboto', 'Inter'", cssVar: "var(--cometchat-font-family)" }]}
          previewHeader=""
          valueHeader="Value"
        />
      </Section>

      <Section title="All Font Tokens" description="Each token is a CSS font shorthand: weight size/line-height family.">
        <TokenTable
          rows={fontTokens.map(t => {
            const { weight, size, lineHeight } = parseFont(t.value);
            const isNew = t.cssVar.includes("-semibold");
            return {
              name: t.name,
              value: t.value,
              cssVar: `var(${t.cssVar})`,
              preview: (
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: size, lineHeight, fontWeight: weight, color: "var(--color-text-primary)" }}>
                    Aa
                  </span>
                  {isNew && <NewChip />}
                </span>
              ),
            };
          })}
          previewHeader="Preview"
          valueHeader="Shorthand"
        />
      </Section>
    </div>
  ),
};
