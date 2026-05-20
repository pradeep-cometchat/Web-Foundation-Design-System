import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../../foundation/components/PageHeader";
import { Section } from "../../foundation/components/Section";
import { TokenTable } from "../../foundation/components/TokenTable";

const meta: Meta = {
  title: "CometChat Foundation/Colors",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   TOKEN DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const primaryExtended = {
  50: { light: "#F9F8FD", dark: "#15102B" },
  100: { light: "#EDEAFA", dark: "#1D173C" },
  200: { light: "#DCD7F6", dark: "#251E4D" },
  300: { light: "#CCC4F1", dark: "#2E245E" },
  400: { light: "#BBB1ED", dark: "#362B6F" },
  500: { light: "#AA9EE8", dark: "#3E3180" },
  600: { light: "#9A8BE4", dark: "#473892" },
  700: { light: "#8978DF", dark: "#4F3EA3" },
  800: { light: "#7965DB", dark: "#5745B4" },
  900: { light: "#5D49BE", dark: "#7460D9" },
};

const neutrals = {
  50: { light: "#FFFFFF", dark: "#141414" },
  100: { light: "#FAFAFA", dark: "#1A1A1A" },
  200: { light: "#F5F5F5", dark: "#272727" },
  300: { light: "#E8E8E8", dark: "#383838" },
  400: { light: "#DCDCDC", dark: "#4C4C4C" },
  500: { light: "#A1A1A1", dark: "#858585" },
  600: { light: "#727272", dark: "#989898" },
  700: { light: "#5B5B5B", dark: "#A8A8A8" },
  800: { light: "#434343", dark: "#C8C8C8" },
  900: { light: "#141414", dark: "#FFFFFF" },
};

const alerts = [
  { name: "Info", light: "#0B7BEA", dark: "#0D66BF", cssVar: "--cometchat-info-color" },
  { name: "Warning", light: "#FFAB00", dark: "#D08D04", cssVar: "--cometchat-warning-color" },
  { name: "Success", light: "#09C26F", dark: "#0B9F5D", cssVar: "--cometchat-success-color" },
  { name: "Error", light: "#F44649", dark: "#C73C3E", cssVar: "--cometchat-error-color" },
];

const statics = [
  { name: "Static Black", light: "#141414", dark: "#141414", cssVar: "--cometchat-static-black" },
  { name: "Static White", light: "#FFFFFF", dark: "#FFFFFF", cssVar: "--cometchat-static-white" },
];

const backgrounds = [
  { name: "Background 01", cssVar: "--cometchat-background-color-01", usage: "Primary surface", ref: "neutral-50", isNew: false },
  { name: "Background 02", cssVar: "--cometchat-background-color-02", usage: "Secondary surface", ref: "neutral-100", isNew: false },
  { name: "Background 03", cssVar: "--cometchat-background-color-03", usage: "Tertiary surface (inputs)", ref: "neutral-200", isNew: false },
  { name: "Background 04", cssVar: "--cometchat-background-color-04", usage: "Pressed/active", ref: "neutral-300", isNew: false },
  { name: "Background 01 Hover", cssVar: "--cometchat-background-color-01-hover", usage: "Primary surface hover", ref: "neutral-100", isNew: true },
  { name: "Background Disabled", cssVar: "--cometchat-background-color-disabled", usage: "Disabled surface", ref: "neutral-200", isNew: true },
  { name: "Background Overlay", cssVar: "--cometchat-background-color-overlay", usage: "Modal/dialog overlay", ref: "neutral-900", isNew: true },
  { name: "Background Solid", cssVar: "--cometchat-background-color-solid", usage: "Solid brand surface", ref: "primary", isNew: true },
  { name: "Background Solid Hover", cssVar: "--cometchat-background-color-solid-hover", usage: "Solid brand hover", ref: "extended-primary-900", isNew: true },
  { name: "Background Error", cssVar: "--cometchat-background-color-error", usage: "Error tinted surface", ref: "error-100", isNew: true },
  { name: "Background Warning", cssVar: "--cometchat-background-color-warning", usage: "Warning tinted surface", ref: "warning light tint", isNew: true },
  { name: "Background Success", cssVar: "--cometchat-background-color-success", usage: "Success tinted surface", ref: "success light tint", isNew: true },
  { name: "Background Info", cssVar: "--cometchat-background-color-info", usage: "Info tinted surface", ref: "info light tint", isNew: true },
];

const borders = [
  { name: "Border Light", cssVar: "--cometchat-border-color-light", usage: "Subtle dividers", ref: "neutral-200", isNew: false },
  { name: "Border Default", cssVar: "--cometchat-border-color-default", usage: "Standard borders", ref: "neutral-300", isNew: false },
  { name: "Border Default Hover", cssVar: "--cometchat-border-color-default-hover", usage: "Border hover state", ref: "neutral-400", isNew: true },
  { name: "Border Dark", cssVar: "--cometchat-border-color-dark", usage: "Stronger borders", ref: "neutral-400", isNew: false },
  { name: "Border Dark Hover", cssVar: "--cometchat-border-color-dark-hover", usage: "Strong border hover", ref: "neutral-500", isNew: true },
  { name: "Border Disabled", cssVar: "--cometchat-border-color-disabled", usage: "Disabled border", ref: "neutral-400", isNew: true },
  { name: "Border Highlight", cssVar: "--cometchat-border-color-highlight", usage: "Focus, active", ref: "primary", isNew: false },
  { name: "Border Error", cssVar: "--cometchat-border-color-error", usage: "Error border", ref: "error", isNew: true },
];

const textColors = [
  { name: "Text Primary", cssVar: "--cometchat-text-color-primary", usage: "Headings, body", ref: "neutral-900", isNew: false },
  { name: "Text Secondary", cssVar: "--cometchat-text-color-secondary", usage: "Subtitles", ref: "neutral-600", isNew: false },
  { name: "Text Secondary Hover", cssVar: "--cometchat-text-color-secondary-hover", usage: "Secondary hover", ref: "neutral-700", isNew: true },
  { name: "Text Tertiary", cssVar: "--cometchat-text-color-tertiary", usage: "Captions", ref: "neutral-500", isNew: false },
  { name: "Text Tertiary Hover", cssVar: "--cometchat-text-color-tertiary-hover", usage: "Tertiary hover", ref: "neutral-600", isNew: true },
  { name: "Text Quaternary", cssVar: "--cometchat-text-color-quaternary", usage: "Meta info", ref: "neutral-500", isNew: true },
  { name: "Text Disabled", cssVar: "--cometchat-text-color-disabled", usage: "Disabled state", ref: "neutral-400", isNew: false },
  { name: "Text Placeholder", cssVar: "--cometchat-text-color-placeholder", usage: "Input placeholder", ref: "neutral-500", isNew: true },
  { name: "Text White", cssVar: "--cometchat-text-color-white", usage: "On colored surfaces", ref: "neutral-50", isNew: false },
  { name: "Text Highlight", cssVar: "--cometchat-text-color-highlight", usage: "Links, accents", ref: "primary", isNew: false },
  { name: "Text Highlight Hover", cssVar: "--cometchat-text-color-highlight-hover", usage: "Brand text hover", ref: "extended-primary-900", isNew: true },
  { name: "Text Error", cssVar: "--cometchat-text-color-error", usage: "Error state", ref: "error", isNew: true },
  { name: "Text Warning", cssVar: "--cometchat-text-color-warning", usage: "Warning state", ref: "warning", isNew: true },
  { name: "Text Success", cssVar: "--cometchat-text-color-success", usage: "Success state", ref: "success", isNew: true },
];

const iconColors = [
  { name: "Icon Primary", cssVar: "--cometchat-icon-color-primary", usage: "Primary icons", ref: "neutral-900", isNew: false },
  { name: "Icon Secondary", cssVar: "--cometchat-icon-color-secondary", usage: "Secondary icons", ref: "neutral-500", isNew: false },
  { name: "Icon Secondary Hover", cssVar: "--cometchat-icon-color-secondary-hover", usage: "Secondary hover", ref: "neutral-600", isNew: true },
  { name: "Icon Tertiary", cssVar: "--cometchat-icon-color-tertiary", usage: "Tertiary icons", ref: "neutral-400", isNew: false },
  { name: "Icon Tertiary Hover", cssVar: "--cometchat-icon-color-tertiary-hover", usage: "Tertiary hover", ref: "neutral-500", isNew: true },
  { name: "Icon Disabled", cssVar: "--cometchat-icon-color-disabled", usage: "Disabled icons", ref: "neutral-400", isNew: true },
  { name: "Icon White", cssVar: "--cometchat-icon-color-white", usage: "Always white", ref: "neutral-50", isNew: false },
  { name: "Icon Highlight", cssVar: "--cometchat-icon-color-highlight", usage: "Brand icons", ref: "primary", isNew: false },
  { name: "Icon Error", cssVar: "--cometchat-icon-color-error", usage: "Error icons", ref: "error", isNew: true },
  { name: "Icon Warning", cssVar: "--cometchat-icon-color-warning", usage: "Warning icons", ref: "warning", isNew: true },
  { name: "Icon Success", cssVar: "--cometchat-icon-color-success", usage: "Success icons", ref: "success", isNew: true },
  { name: "Icon Info", cssVar: "--cometchat-icon-color-info", usage: "Info icons", ref: "info", isNew: true },
];

const chatBubbleColors = [
  { name: "Send Bubble BG", cssVar: "--cometchat-send-bubble-background", usage: "Sent message background", ref: "primary", isNew: true },
  { name: "Send Bubble Text", cssVar: "--cometchat-send-bubble-text", usage: "Sent message text", ref: "static-white", isNew: true },
  { name: "Send Bubble Timestamp", cssVar: "--cometchat-send-bubble-timestamp", usage: "Sent timestamp", ref: "static-white", isNew: true },
  { name: "Received Bubble BG", cssVar: "--cometchat-received-bubble-background", usage: "Received message background", ref: "neutral-200", isNew: true },
  { name: "Received Bubble Text", cssVar: "--cometchat-received-bubble-text", usage: "Received message text", ref: "neutral-900", isNew: true },
  { name: "Received Bubble Timestamp", cssVar: "--cometchat-received-bubble-timestamp", usage: "Received timestamp", ref: "neutral-600", isNew: true },
  { name: "Received Bubble Link", cssVar: "--cometchat-received-bubble-link", usage: "Links in received", ref: "info", isNew: true },
];

const shadowTokens = [
  { name: "Shadow XS", cssVar: "--cometchat-shadow-xs", usage: "Subtle elevation", value: "0px 1px 2px rgba(0,0,0,0.05)", isNew: true },
  { name: "Shadow SM", cssVar: "--cometchat-shadow-sm", usage: "Cards, dropdowns", value: "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)", isNew: true },
  { name: "Shadow MD", cssVar: "--cometchat-shadow-md", usage: "Popovers", value: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.06)", isNew: true },
  { name: "Shadow LG", cssVar: "--cometchat-shadow-lg", usage: "Modals, dialogs", value: "0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)", isNew: true },
  { name: "Shadow XL", cssVar: "--cometchat-shadow-xl", usage: "Large overlays", value: "0px 20px 24px -4px rgba(0,0,0,0.08), 0px 8px 8px -4px rgba(0,0,0,0.03)", isNew: true },
];

const focusRingTokens = [
  { name: "Focus Ring", cssVar: "--cometchat-focus-ring", usage: "Default focus ring (primary)", value: "0 0 0 2px white, 0 0 0 4px primary", isNew: true },
  { name: "Focus Ring Error", cssVar: "--cometchat-focus-ring-error", usage: "Error focus ring", value: "0 0 0 2px white, 0 0 0 4px error", isNew: true },
];

const messageSeen = [
  { name: "Message Seen", cssVar: "--cometchat-message-seen-color", usage: "Read receipt checkmark", ref: "green accent", isNew: true },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STORY
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllTokens: StoryObj = {
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1400, margin: "0 auto" }}>
      <PageHeader
        eyebrow="CometChat Foundation"
        title="Colors"
        description="Primary, Extended Primary, Neutrals, Alerts, and semantic tokens for backgrounds, borders, text, and icons. The neutral scale inverts in dark mode — all semantic tokens adapt automatically."
        meta={[
          { label: "primary", value: "#6852D6" },
          { label: "neutrals", value: "10 shades" },
          { label: "alerts", value: "4" },
          { label: "semantic", value: "20+" },
        ]}
      />

      <Section title="Primary" description="The brand anchor color — same in both modes.">
        <TokenTable
          searchable={false}
          rows={[{ name: "Primary", value: "#6852D6", cssVar: "var(--cometchat-primary-color)", preview: <ColorDot color="#6852D6" /> }]}
          previewHeader="Color"
          valueHeader="Hex"
        />
      </Section>

      <Section title="Extended Primary" description="Full tint/shade scale of the brand color (50–900). Light and dark values shown.">
        <ThemeTable rows={Object.entries(primaryExtended).map(([shade, { light, dark }]) => ({
          name: `Extended Primary ${shade}`,
          light,
          dark,
          cssVar: `--cometchat-extended-primary-color-${shade}`,
          usage: `Brand shade ${shade}`,
        }))} />
      </Section>

      <Section title="Neutrals" description="Surfaces, text, borders. The scale inverts in dark mode (50 = white in light, 50 = dark in dark).">
        <ThemeTable rows={Object.entries(neutrals).map(([shade, { light, dark }]) => ({
          name: `Neutral ${shade}`,
          light,
          dark,
          cssVar: `--cometchat-neutral-color-${shade}`,
          usage: `Neutral shade ${shade}`,
        }))} />
      </Section>

      <Section title="Alert Colors" description="Semantic colors for info, warning, success, and error states.">
        <ThemeTable rows={alerts.map(a => ({ name: a.name, light: a.light, dark: a.dark, cssVar: a.cssVar, usage: `${a.name} state` }))} />
      </Section>

      <Section title="Static Colors" description="Colors that don't change between modes.">
        <ThemeTable rows={statics.map(s => ({ name: s.name, light: s.light, dark: s.dark, cssVar: s.cssVar, usage: "Same in both modes" }))} />
      </Section>

      <Section title="Background Colors" description="Semantic surface tokens — reference neutrals.">
        <TokenTable
          searchable={false}
          rows={backgrounds.map(b => ({ name: b.name, value: `→ ${b.ref}`, cssVar: `var(${b.cssVar})`, description: b.usage, preview: b.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>

      <Section title="Border Colors" description="Semantic border tokens.">
        <TokenTable
          searchable={false}
          rows={borders.map(b => ({ name: b.name, value: `→ ${b.ref}`, cssVar: `var(${b.cssVar})`, description: b.usage, preview: b.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>

      <Section title="Text Colors" description="Semantic text fill tokens.">
        <TokenTable
          searchable={false}
          rows={textColors.map(t => ({ name: t.name, value: `→ ${t.ref}`, cssVar: `var(${t.cssVar})`, description: t.usage, preview: t.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>

      <Section title="Icon Colors" description="Semantic icon fill tokens.">
        <TokenTable
          searchable={false}
          rows={iconColors.map(i => ({ name: i.name, value: `→ ${i.ref}`, cssVar: `var(${i.cssVar})`, description: i.usage, preview: i.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>

      <Section title="Chat Bubble Colors" description="Sent and received message bubble tokens.">
        <TokenTable
          searchable={false}
          rows={chatBubbleColors.map(c => ({ name: c.name, value: `→ ${c.ref}`, cssVar: `var(${c.cssVar})`, description: c.usage, preview: c.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>

      <Section title="Shadows" description="Elevation tokens for depth and layering.">
        <TokenTable
          searchable={false}
          rows={shadowTokens.map(s => ({ name: s.name, value: s.value, cssVar: `var(${s.cssVar})`, description: s.usage, preview: s.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="Value"
        />
      </Section>

      <Section title="Focus Rings" description="Accessible focus indicators for keyboard navigation.">
        <TokenTable
          searchable={false}
          rows={focusRingTokens.map(f => ({ name: f.name, value: f.value, cssVar: `var(${f.cssVar})`, description: f.usage, preview: f.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="Value"
        />
      </Section>

      <Section title="Message Status" description="Read receipt and delivery status colors.">
        <TokenTable
          searchable={false}
          rows={messageSeen.map(m => ({ name: m.name, value: `→ ${m.ref}`, cssVar: `var(${m.cssVar})`, description: m.usage, preview: m.isNew ? <NewChip /> : undefined }))}
          previewHeader=""
          valueHeader="References"
        />
      </Section>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function ColorDot({ color }: { color: string }) {
  return <div aria-hidden style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", background: color, border: "1px solid var(--color-border-default)", flexShrink: 0 }} />;
}

function NewChip() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: "var(--radius-full, 9999px)", background: "var(--color-success-50, #ecfdf3)", color: "var(--color-success-700, #067647)", fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginLeft: 8, whiteSpace: "nowrap" }}>
      New
    </span>
  );
}

type TokenRow = { name: string; light: string; dark: string; cssVar: string; usage: string };

function ThemeTable({ rows }: { rows: TokenRow[] }) {
  return (
    <div style={{ overflow: "auto", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: "var(--font-size-1)", tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "18%" }} />
          <col style={{ width: "18%" }} />
          <col style={{ width: "18%" }} />
          <col style={{ width: "26%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr style={{ background: "var(--color-bg-02)" }}>
            <th style={th}>Token</th>
            <th style={th}>Light</th>
            <th style={th}>Dark</th>
            <th style={th}>CSS Variable</th>
            <th style={th}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.name} style={{ background: i % 2 === 0 ? "var(--color-bg-01)" : "var(--color-bg-02)" }}>
              <td style={td}><span style={{ fontWeight: "var(--font-weight-medium)", color: "var(--color-text-primary)" }}>{row.name}</span></td>
              <td style={td}><ColorCell color={row.light} /></td>
              <td style={td}><ColorCell color={row.dark} /></td>
              <td style={td}><code style={code}>{row.cssVar}</code></td>
              <td style={td}><span style={{ color: "var(--color-text-tertiary)" }}>{row.usage}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ColorCell({ color }: { color: string }) {
  const isLight = ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#F9F8FD", "#EDEAFA", "#E8E8E8", "#DCDCDC"].includes(color.toUpperCase());
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
      <div aria-hidden style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: color, border: isLight ? "1px solid var(--color-border-default)" : "none", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-family-body)", color: "var(--color-text-secondary)", fontSize: "var(--font-size-1)" }}>{color}</span>
    </div>
  );
}

const th: React.CSSProperties = { padding: "var(--space-3) var(--space-4)", fontWeight: "var(--font-weight-semibold)", fontSize: "var(--font-size-0)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)", borderBottom: "1px solid var(--color-border-default)", textAlign: "left", whiteSpace: "nowrap" };
const td: React.CSSProperties = { padding: "var(--space-3) var(--space-4)", verticalAlign: "middle", borderBottom: "1px solid var(--color-border-light)" };
const code: React.CSSProperties = { fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", color: "var(--color-text-primary)", background: "var(--color-bg-03)", padding: "var(--space-0-5) var(--space-2)", borderRadius: "var(--radius-xs)", border: "1px solid var(--color-border-default)" };
