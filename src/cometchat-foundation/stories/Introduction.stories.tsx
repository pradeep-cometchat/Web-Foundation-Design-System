import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../components/PageHeader";

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
      <p style={{ color: "var(--cometchat-neutral-color-600)", marginTop: 0, maxWidth: 720, fontSize: "14px", lineHeight: 1.6 }}>
        The CometChat UI Kit token system covers five areas. Each maps to a Storybook page.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--cometchat-spacing-3-5)", margin: "20px 0 40px" }}>
        <Card title="Colors" description="Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens." />
        <Card title="Typography" description="Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles." />
        <Card title="Spacing" description="A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens." />
        <Card title="Radius" description="Border radius scale from 2px to 1000px (max for pills), tied to the spacing system." />
      </div>

      <SectionHeading>Dark mode</SectionHeading>
      <p style={{ color: "var(--cometchat-neutral-color-600)", marginTop: 0, maxWidth: 720, fontSize: "14px", lineHeight: 1.6 }}>
        Apply <code>[data-theme="dark"]</code> to the root element. The neutral scale inverts (50 becomes dark, 900 becomes light), extended primary shades darken, and all semantic tokens (backgrounds, text, borders, icons) automatically adapt since they reference the neutral scale.
      </p>

      <SectionHeading>Usage</SectionHeading>
      <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)", marginTop: 16 }}>
        <div style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>CSS</span>
        </div>
        <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
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
    <h2 style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-0.01em", color: "var(--cometchat-neutral-color-900)", borderBottom: "1px solid var(--cometchat-neutral-color-200)", paddingBottom: 10, margin: "32px 0 8px" }}>
      {children}
    </h2>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-5)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-01)", boxShadow: "var(--cometchat-shadow-xs)", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
      <strong style={{ fontSize: "16px", fontWeight: "600", color: "var(--cometchat-text-color-primary)", lineHeight: "19.2px" }}>{title}</strong>
      <p style={{ margin: 0, fontSize: "14px", lineHeight: "var(--line-height-body)", color: "var(--cometchat-text-color-tertiary)" }}>{description}</p>
    </div>
  );
}
