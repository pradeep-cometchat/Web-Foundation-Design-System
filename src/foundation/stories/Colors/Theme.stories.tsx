import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "../../components/Section";
import { PageHeader } from "../../components/PageHeader";
import { contrastRatio, wcagRating } from "../../components/contrast";

const meta: Meta = {
  title: "Foundation/Colors/Theme",
  parameters: { layout: "fullscreen", themes: { themeOverride: "Light" } },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   TOKEN DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const staticColors = [
  { name: "Static Primary", light: "#6852d6", dark: "#6852d6", cssVar: "--color-primary", usage: "Brand anchor — same in both modes" },
  { name: "Static White", light: "#ffffff", dark: "#ffffff", cssVar: "--color-static-white", usage: "Always white (text on colored surfaces)" },
  { name: "Static Black", light: "#0a0d12", dark: "#0a0d12", cssVar: "--color-static-black", usage: "Always dark" },
];

const textColors = [
  { name: "Text Primary", light: "#181d27", dark: "#f7f7f7", cssVar: "--color-text-primary", usage: "Page titles, headings, body" },
  { name: "Text Secondary", light: "#414651", dark: "#cecfd2", cssVar: "--color-text-secondary", usage: "Subtitles, descriptions" },
  { name: "Text Secondary Hover", light: "#252b37", dark: "#ececed", cssVar: "--color-text-secondary-hover", usage: "Secondary text hover" },
  { name: "Text Tertiary", light: "#535862", dark: "#94979c", cssVar: "--color-text-tertiary", usage: "Supporting text, captions" },
  { name: "Text Tertiary Hover", light: "#414651", dark: "#cecfd2", cssVar: "--color-text-tertiary-hover", usage: "Tertiary text hover" },
  { name: "Text Quaternary", light: "#717680", dark: "#94979c", cssVar: "--color-text-quaternary", usage: "Meta info" },
  { name: "Text White", light: "#ffffff", dark: "#ffffff", cssVar: "--color-text-white", usage: "Text on colored backgrounds" },
  { name: "Text Disabled", light: "#717680", dark: "#85888e", cssVar: "--color-text-disabled", usage: "Disabled state" },
  { name: "Text Placeholder", light: "#717680", dark: "#85888e", cssVar: "--color-text-placeholder", usage: "Input placeholder" },
  { name: "Text Placeholder Subtle", light: "#d5d7da", dark: "#373a41", cssVar: "--color-text-placeholder-subtle", usage: "Lower contrast placeholder" },
  { name: "Text Highlight", light: "#6852d6", dark: "#6852d6", cssVar: "--color-text-highlight", usage: "Links, accents" },
  { name: "Text Highlight Hover", light: "#5925dc", dark: "#7b70e4", cssVar: "--color-text-highlight-hover", usage: "Brand text hover" },
  { name: "Text Error", light: "#d92d20", dark: "#f97066", cssVar: "--color-text-error", usage: "Error state" },
  { name: "Text Error Hover", light: "#b42318", dark: "#fda29b", cssVar: "--color-text-error-hover", usage: "Error hover" },
  { name: "Text Warning", light: "#dc6803", dark: "#fdb022", cssVar: "--color-text-warning", usage: "Warning state" },
  { name: "Text Success", light: "#079455", dark: "#47cd89", cssVar: "--color-text-success", usage: "Success state" },
];

const iconColors = [
  { name: "Icon Primary", light: "#181d27", dark: "#f7f7f7", cssVar: "--color-icon-primary", usage: "Primary icons" },
  { name: "Icon Secondary", light: "#252b37", dark: "#ececed", cssVar: "--color-icon-secondary", usage: "Secondary icons" },
  { name: "Icon Secondary Hover", light: "#414651", dark: "#f0f0f1", cssVar: "--color-icon-secondary-hover", usage: "Secondary icons hover" },
  { name: "Icon Tertiary", light: "#717680", dark: "#94979c", cssVar: "--color-icon-tertiary", usage: "Tertiary icons" },
  { name: "Icon Tertiary Hover", light: "#414651", dark: "#cecfd2", cssVar: "--color-icon-tertiary-hover", usage: "Tertiary icons hover" },
  { name: "Icon Quaternary", light: "#a4a7ae", dark: "#85888e", cssVar: "--color-icon-quaternary", usage: "Quaternary icons" },
  { name: "Icon Quaternary Hover", light: "#717680", dark: "#94979c", cssVar: "--color-icon-quaternary-hover", usage: "Quaternary icons hover" },
  { name: "Icon White", light: "#ffffff", dark: "#ffffff", cssVar: "--color-icon-white", usage: "Always white" },
  { name: "Icon Disabled", light: "#a4a7ae", dark: "#85888e", cssVar: "--color-icon-disabled", usage: "Disabled icons" },
  { name: "Icon Disabled Subtle", light: "#d5d7da", dark: "#61656c", cssVar: "--color-icon-disabled-subtle", usage: "Subtle disabled" },
  { name: "Icon Highlight Primary", light: "#6852d6", dark: "#9b8afb", cssVar: "--color-icon-highlight-primary", usage: "Brand icons" },
  { name: "Icon Highlight Secondary", light: "#7b70e4", dark: "#bdb4fe", cssVar: "--color-icon-highlight-secondary", usage: "Secondary brand icons" },
  { name: "Icon Error Primary", light: "#d92d20", dark: "#f97066", cssVar: "--color-icon-error-primary", usage: "Error icons" },
  { name: "Icon Warning Primary", light: "#dc6803", dark: "#fdb022", cssVar: "--color-icon-warning-primary", usage: "Warning icons" },
  { name: "Icon Success Primary", light: "#079455", dark: "#47cd89", cssVar: "--color-icon-success-primary", usage: "Success icons" },
  { name: "Icon Info Primary", light: "#155eef", dark: "#528bff", cssVar: "--color-icon-info-primary", usage: "Info icons" },
];

const bgColors = [
  { name: "Background 01", light: "#ffffff", dark: "#0c0e12", cssVar: "--color-bg-01", usage: "Primary surface" },
  { name: "Background 01 Hover", light: "#fafafa", dark: "#13161b", cssVar: "--color-bg-01-hover", usage: "Primary surface hover" },
  { name: "Background 02", light: "#fafafa", dark: "#13161b", cssVar: "--color-bg-02", usage: "Secondary surface" },
  { name: "Background 02 Hover", light: "#f5f5f5", dark: "#22262f", cssVar: "--color-bg-02-hover", usage: "Secondary surface hover" },
  { name: "Background 03", light: "#f5f5f5", dark: "#22262f", cssVar: "--color-bg-03", usage: "Tertiary surface (inputs)" },
  { name: "Background 03 Hover", light: "#e9eaeb", dark: "#373a41", cssVar: "--color-bg-03-hover", usage: "Tertiary surface hover" },
  { name: "Background 04", light: "#e9eaeb", dark: "#373a41", cssVar: "--color-bg-04", usage: "Pressed/active" },
  { name: "Background Disabled", light: "#f5f5f5", dark: "#22262f", cssVar: "--color-bg-disabled", usage: "Disabled surface" },
  { name: "Background Solid", light: "#6852d6", dark: "#6852d6", cssVar: "--color-bg-solid", usage: "Solid brand surface" },
  { name: "Background Solid Hover", light: "#5925dc", dark: "#9b8afb", cssVar: "--color-bg-solid-hover", usage: "Solid brand hover" },
  { name: "Background Primary", light: "#f4f3ff", dark: "#3e1c96", cssVar: "--color-bg-primary", usage: "Brand tinted surface" },
  { name: "Background Error Primary", light: "#fef3f2", dark: "#7a271a", cssVar: "--color-bg-error-primary", usage: "Error tinted surface" },
  { name: "Background Error Solid", light: "#d92d20", dark: "#f04438", cssVar: "--color-bg-error-solid", usage: "Solid error surface" },
  { name: "Background Success Primary", light: "#ecfdf3", dark: "#074d31", cssVar: "--color-bg-success-primary", usage: "Success tinted surface" },
  { name: "Background Warning Primary", light: "#fffaeb", dark: "#7a2e0e", cssVar: "--color-bg-warning-primary", usage: "Warning tinted surface" },
  { name: "Background Info Primary", light: "#eff4ff", dark: "#00359e", cssVar: "--color-bg-info-primary", usage: "Info tinted surface" },
];

const borderColors = [
  { name: "Border Light", light: "#f5f5f5", dark: "#22262f", cssVar: "--color-border-light", usage: "Subtle dividers" },
  { name: "Border Default", light: "#e9eaeb", dark: "#373a41", cssVar: "--color-border-default", usage: "Standard borders" },
  { name: "Border Default Hover", light: "#d5d7da", dark: "#61656c", cssVar: "--color-border-default-hover", usage: "Border hover" },
  { name: "Border Dark", light: "#d5d7da", dark: "#61656c", cssVar: "--color-border-dark", usage: "Stronger borders" },
  { name: "Border Dark Hover", light: "#a4a7ae", dark: "#85888e", cssVar: "--color-border-dark-hover", usage: "Strong border hover" },
  { name: "Border Disabled", light: "#d5d7da", dark: "#373a41", cssVar: "--color-border-disabled", usage: "Disabled border" },
  { name: "Border Primary", light: "#7b70e4", dark: "#9b8afb", cssVar: "--color-border-primary", usage: "Focus, active" },
  { name: "Border Error", light: "#f04438", dark: "#f97066", cssVar: "--color-border-error", usage: "Error border" },
];

const chatColors = [
  { name: "Send Bubble BG", light: "#6852d6", dark: "#6852d6", cssVar: "--color-send-bubble-bg", usage: "Sent message background" },
  { name: "Send Bubble Text", light: "#ffffff", dark: "#ffffff", cssVar: "--color-send-bubble-text", usage: "Sent message text" },
  { name: "Received Bubble BG", light: "#e9eaeb", dark: "#22262f", cssVar: "--color-received-bubble-bg", usage: "Received message background" },
  { name: "Received Bubble Text", light: "#181d27", dark: "#f7f7f7", cssVar: "--color-received-bubble-text", usage: "Received message text" },
  { name: "Received Bubble Timestamp", light: "#535862", dark: "#94979c", cssVar: "--color-received-bubble-timestamp", usage: "Received timestamp" },
  { name: "Received Bubble Highlight", light: "#6852d6", dark: "#9b8afb", cssVar: "--color-received-bubble-highlight", usage: "Highlighted text" },
  { name: "Received Bubble Link", light: "#155eef", dark: "#528bff", cssVar: "--color-received-bubble-link", usage: "Links in received" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STORY
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllTokens: StoryObj = {
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1400, margin: "0 auto" }}>
      <PageHeader
        title="Theme Tokens"
        description="Light and dark mode values side by side. Every semantic token resolves to a different value depending on the active theme. Components use the CSS variable name — the value swaps automatically."
        meta={[
          { label: "categories", value: "6" },
          { label: "tokens", value: "78" },
        ]}
      />

      <Section title="Static Colors" description="Same value in both modes.">
        <ThemeTable rows={staticColors} />
      </Section>

      <Section title="Text Colors" description="All text fill colors.">
        <ThemeTable rows={textColors} />
      </Section>

      <Section title="Icon Colors" description="All icon fill colors.">
        <ThemeTable rows={iconColors} />
      </Section>

      <Section title="Background Colors" description="Surface and background fills.">
        <ThemeTable rows={bgColors} />
      </Section>

      <Section title="Border Colors" description="Border and divider strokes.">
        <ThemeTable rows={borderColors} />
      </Section>

      <Section title="Chat Bubble Colors" description="Sent and received message bubbles.">
        <ThemeTable rows={chatColors} />
      </Section>
    </div>
  ),
};

/** Accessibility audit — side by side contrast for both modes. */
export const AccessibilityAudit: StoryObj = {
  render: () => {
    const textTokens = textColors.filter(t => t.name !== "Text White" && t.name !== "Text Placeholder Subtle");
    const lightBg = "#ffffff";
    const darkBg = "#0c0e12";

    return (
      <div style={{ padding: "var(--space-8)", maxWidth: 1400, margin: "0 auto" }}>
        <PageHeader
          title="Accessibility Audit — Both Modes"
          description="WCAG 2.1 contrast ratios for text colors against their primary background in each mode. Both columns should pass AA (4.5:1) for body text."
          meta={[
            { label: "AAA", value: "≥ 7:1" },
            { label: "AA", value: "≥ 4.5:1" },
            { label: "AA Large", value: "≥ 3:1" },
          ]}
        />

        <Section title="Text on Primary Surface">
          <div style={{ overflow: "auto", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: "var(--font-size-1)" }}>
              <thead>
                <tr style={{ background: "var(--color-bg-02)" }}>
                  <th style={th}>Token</th>
                  <th style={th}>Light Value</th>
                  <th style={th}>Light Contrast</th>
                  <th style={th}>Dark Value</th>
                  <th style={th}>Dark Contrast</th>
                </tr>
              </thead>
              <tbody>
                {textTokens.map((t, i) => {
                  const lightRatio = contrastRatio(t.light, lightBg);
                  const darkRatio = contrastRatio(t.dark, darkBg);
                  return (
                    <tr key={t.name} style={{ background: i % 2 === 0 ? "var(--color-bg-01)" : "var(--color-bg-02)" }}>
                      <td style={td}><code style={code}>{t.cssVar}</code></td>
                      <td style={td}><Pair fg={t.light} bg={lightBg} /></td>
                      <td style={td}><Rating ratio={lightRatio} /></td>
                      <td style={td}><Pair fg={t.dark} bg={darkBg} /></td>
                      <td style={td}><Rating ratio={darkRatio} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    );
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

type TokenRow = { name: string; light: string; dark: string; cssVar: string; usage: string };

function ThemeTable({ rows }: { rows: TokenRow[] }) {
  return (
    <div style={{ overflow: "auto", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: "var(--font-size-1)", tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "18%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "22%" }} />
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
              <td style={td}>
                <span style={{ fontWeight: "var(--font-weight-medium)", color: "var(--color-text-primary)" }}>{row.name}</span>
              </td>
              <td style={td}>
                <ColorCell color={row.light} />
              </td>
              <td style={td}>
                <ColorCell color={row.dark} />
              </td>
              <td style={td}><code style={code}>{row.cssVar}</code></td>
              <td style={td}><span style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-1)" }}>{row.usage}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ColorCell({ color }: { color: string }) {
  const isLight = ["#ffffff", "#fafafa", "#f7f7f7", "#f5f5f5", "#f4f3ff", "#ececed", "#fffaeb", "#ecfdf3", "#eff4ff", "#fef3f2", "#f0f0f1", "#e9eaeb", "#d5d7da", "#fee4e2", "#dcfae6", "#d1e0ff", "#fef0c7", "#ebe9fe", "#fda29b", "#fecdca", "#cecfd2"].includes(color);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
      <div aria-hidden style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: color, border: isLight ? "1px solid var(--color-border-default)" : "none", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-family-body)", color: "var(--color-text-secondary)", fontSize: "var(--font-size-1)" }}>{color}</span>
    </div>
  );
}

function Pair({ fg, bg }: { fg: string; bg: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
      <div aria-hidden style={{ width: 40, height: 24, borderRadius: "var(--radius-xs)", background: bg, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-border-default)" }}>
        <span style={{ color: fg, fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-bold)" }}>Aa</span>
      </div>
      <span style={{ fontFamily: "var(--font-family-body)", color: "var(--color-text-secondary)" }}>{fg}</span>
    </div>
  );
}

function Rating({ ratio }: { ratio: number }) {
  const rating = wcagRating(ratio);
  const color = rating === "AAA" || rating === "AA" ? "var(--color-success-700)" : rating === "AA Large" ? "var(--color-warning-700)" : "var(--color-error-700)";
  return (
    <span style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color }}>
      {ratio.toFixed(2)}:1 ({rating})
    </span>
  );
}

/* ─── Table styles ─── */

const th: React.CSSProperties = {
  padding: "var(--space-3) var(--space-4)",
  fontWeight: "var(--font-weight-semibold)",
  fontSize: "var(--font-size-0)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--color-text-secondary)",
  borderBottom: "1px solid var(--color-border-default)",
  textAlign: "left",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "var(--space-3) var(--space-4)",
  verticalAlign: "middle",
  borderBottom: "1px solid var(--color-border-light)",
};

const code: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: "var(--font-size-1)",
  color: "var(--color-text-primary)",
  background: "var(--color-bg-03)",
  padding: "var(--space-0-5) var(--space-2)",
  borderRadius: "var(--radius-xs)",
  border: "1px solid var(--color-border-default)",
};
