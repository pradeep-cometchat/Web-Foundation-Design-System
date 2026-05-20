import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../../foundation/components/PageHeader";

const meta: Meta = {
  title: "CometChat Foundation/Introduction",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
};
export default meta;

export const Overview: StoryObj = {
  render: () => (
    <div style={{ padding: "40px 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <PageHeader
        eyebrow="CometChat Foundation"
        title="CometChat UI Kit Tokens"
        description="Design tokens from the CometChat Web UI Kit — spacing, typography, colors, radius, and button styles. These tokens power the CometChat SDK components and can be themed via CSS custom properties with light and dark mode support."
        meta={[
          { label: "tokens", value: "120+" },
          { label: "themes", value: "Light · Dark" },
          { label: "font", value: "Roboto" },
          { label: "prefix", value: "--cometchat-*" },
        ]}
      />

      <SectionHeading>What's inside</SectionHeading>
      <p style={{ color: "var(--color-neutral-600)", marginTop: 0, maxWidth: 720, fontSize: "var(--font-size-2)", lineHeight: 1.6 }}>
        The CometChat UI Kit token system covers five areas. Each maps to a Storybook page.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-3-5)", margin: "20px 0 40px" }}>
        <Card title="Colors" description="Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens." />
        <Card title="Typography" description="Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles." />
        <Card title="Spacing" description="A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens." />
        <Card title="Radius" description="Border radius scale from 2px to 1000px (max for pills), tied to the spacing system." />
      </div>

      <SectionHeading>Dark mode</SectionHeading>
      <p style={{ color: "var(--color-neutral-600)", marginTop: 0, maxWidth: 720, fontSize: "var(--font-size-2)", lineHeight: 1.6 }}>
        Apply <code>[data-theme="dark"]</code> to the root element. The neutral scale inverts (50 becomes dark, 900 becomes light), extended primary shades darken, and all semantic tokens (backgrounds, text, borders, icons) automatically adapt since they reference the neutral scale.
      </p>

      <SectionHeading>Usage</SectionHeading>
      <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-02)", marginTop: 16 }}>
        <div style={{ padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-03)" }}>
          <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>CSS</span>
        </div>
        <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
          <code>{`.my-component {
  font: var(--cometchat-font-heading2-medium);
  color: var(--cometchat-text-color-primary);
  background: var(--cometchat-background-color-01);
  padding: var(--cometchat-padding-4);
  border-radius: var(--cometchat-radius-3);
  border: 1px solid var(--cometchat-border-color-default);
}`}</code>
        </pre>
      </div>
    </div>
  ),
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "var(--font-size-5)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "-0.01em", color: "var(--color-neutral-900)", borderBottom: "1px solid var(--color-neutral-200)", paddingBottom: 10, margin: "32px 0 8px" }}>
      {children}
    </h2>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--space-5)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-default)", background: "var(--color-bg-01)", boxShadow: "var(--shadow-xs)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <strong style={{ fontSize: "var(--font-size-3)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)", lineHeight: "var(--line-height-h4)" }}>{title}</strong>
      <p style={{ margin: 0, fontSize: "var(--font-size-2)", lineHeight: "var(--line-height-body)", color: "var(--color-text-tertiary)" }}>{description}</p>
    </div>
  );
}
