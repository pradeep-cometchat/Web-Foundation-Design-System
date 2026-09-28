import type { Meta, StoryObj } from "@storybook/react";
import { T, useLanguage } from "../localization";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { Callout } from "../components/Callout";
import { TokenTable } from "../components/TokenTable";
import { focusRings, type FocusRingKey } from "../tokens/shadows";

/**
 * Focus states stack three layers:
 * 1. The base elevation (matches `shadow-xs`).
 * 2. A 2px white halo to separate the ring from the control.
 * 3. A 4px colored outer ring — brand or error.
 *
 * Always apply a visible focus ring to interactive elements. Use the **error**
 * variant for destructive controls so the focus color matches intent.
 */
const meta: Meta<typeof FocusPlayground> = {
  title: "CometChat Foundation/Effects/Focus Rings",
  component: FocusPlayground,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", themes: { themeOverride: "Light" } },
  argTypes: {
    variant: {
      control: "radio",
      options: Object.keys(focusRings) as FocusRingKey[],
      description: "Focus ring style.",
      table: { category: "Token" },
    },
    label: {
      control: "text",
      description: "Button label.",
      table: { category: "Content" },
    },
  },
};
export default meta;

interface PlaygroundProps {
  variant: FocusRingKey;
  label: string;
}

function FocusPlayground({ variant, label }: PlaygroundProps) {
  const token = focusRings[variant];
  const cssVarName =
    variant === "error" ? "focus-ring-error" : "focus-ring";

  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid var(--cometchat-border-color-default)",
          borderRadius: "var(--cometchat-radius-4)",
          overflow: "hidden",
          background: "var(--cometchat-static-white)",
          boxShadow: "var(--cometchat-shadow-sm)",
        }}
      >
        <div
          style={{
            padding: "var(--cometchat-spacing-12)",
            background: "var(--cometchat-background-color-01)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            style={{
              padding: "10px 18px",
              borderRadius: "var(--cometchat-radius-2)",
              border: "1px solid transparent",
              background:
                variant === "error"
                  ? "var(--cometchat-error-color)"
                  : "var(--cometchat-extended-primary-color-500)",
              color: "var(--cometchat-static-white)",
              fontWeight: "600",
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: `var(--cometchat-${cssVarName})`,
              fontFamily: "inherit",
            }}
          >
            <T>{label}</T>
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid var(--cometchat-border-color-default)",
          }}
        >
          <Stat label="Token" value={token.name} />
          <Stat
            label="CSS variable"
            value={`var(--cometchat-${cssVarName})`}
            mono
            divider
          />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <Callout kind="tip" title="Try tabbing through the canvas">
          <FocusVisibleCopy />
        </Callout>
      </div>
    </div>
  );
}

const Stat: React.FC<{
  label: string;
  value: string;
  mono?: boolean;
  divider?: boolean;
}> = ({ label, value, mono, divider }) => (
  <div
    style={{
      padding: "16px 20px",
      borderInlineStart: divider ? "1px solid var(--cometchat-border-color-default)" : "none",
      background: "var(--cometchat-background-color-01)",
    }}
  >
    <div
      style={{
        fontSize: "10px",
        fontWeight: "600",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--cometchat-text-color-tertiary)",
        marginBottom: "var(--cometchat-spacing-1)",
      }}
    >
      <T>{label}</T>
    </div>
    <div
      style={{
        fontFamily: mono ? "var(--cometchat-font-family)" : "inherit",
        fontSize: "14px",
        fontWeight: "600",
        color: "var(--cometchat-text-color-primary)",
      }}
    >
      {value}
    </div>
  </div>
);

export const Playground: StoryObj<typeof FocusPlayground> = {
  args: { variant: "default", label: "Focused button" },
  parameters: { docs: { disable: true } },
};

/** Reference of focus ring tokens with descriptions. */
export const Reference: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Focus ring reference"
        description="Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones."
      />
      <TokenTable
        rows={(Object.keys(focusRings) as FocusRingKey[]).map((key) => {
          const t = focusRings[key];
          const cssVarName =
            key === "error" ? "focus-ring-error" : "focus-ring";
          return {
            name: t.name,
            value: t.description ?? "",
            cssVar: `var(--cometchat-${cssVarName})`,
            preview: (
              <div
                aria-hidden
                style={{
                  width: 56,
                  height: 32,
                  borderRadius: "var(--cometchat-radius-2)",
                  background:
                    key === "error"
                      ? "var(--cometchat-error-color)"
                      : "var(--cometchat-extended-primary-color-500)",
                  boxShadow: `var(--cometchat-${cssVarName})`,
                  margin: 10,
                }}
              />
            ),
          };
        })}
        previewHeader="Preview"
        valueHeader="Use for"
      />
    </div>
  ),
};

/** Accessibility guidance. */
export const Accessibility: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Accessibility notes"
        description="Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces."
      />
      <Section title="Do's and don'ts">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--cometchat-spacing-4)",
          }}
        >
          <Callout kind="success" title="Do">
            <DoFocusVisibleCopy />
          </Callout>
          <Callout kind="success" title="Do">
            <DoErrorVariantCopy />
          </Callout>
          <Callout kind="warning" title="Don't">
            <DontRemoveCopy />
          </Callout>
          <Callout kind="warning" title="Don't">
            <T>
              Don't rely on the ring alone in forced-colors mode. Add a border
              state change as a backup.
            </T>
          </Callout>
        </div>
      </Section>
    </div>
  ),
};

/* Callout bodies mixing prose with code chips — Arabic word order differs, so
   each needs a real alternative rather than a key lookup on a fragment. */
function FocusVisibleCopy() {
  const fv = <code>:focus-visible</code>;
  return useLanguage() === "ar" ? (
    <>
      تُطبَّق حلقة التركيز في المعاينة أعلاه بشكل دائم لأغراض المرجع. في
      الاستخدام الفعلي، استخدم {fv} حتى تظهر الحلقة لمستخدمي لوحة المفاتيح فقط.
    </>
  ) : (
    <>
      The preview above has the focus ring permanently applied for reference. In
      real usage, use {fv} so the ring only appears for keyboard users.
    </>
  );
}

function DoFocusVisibleCopy() {
  const fv = <code>:focus-visible</code>;
  return useLanguage() === "ar" ? (
    <>استخدم {fv} لتظهر الحلقة لمستخدمي لوحة المفاتيح دون نقرات الفأرة.</>
  ) : (
    <>Use {fv} so the ring appears for keyboard users but not on mouse clicks.</>
  );
}

function DoErrorVariantCopy() {
  return useLanguage() === "ar" ? (
    <>
      استخدم نمط <strong>error</strong> على عناصر التحكّم التدميرية فقط، حتى
      يحمل اللون معنًى متّسقًا.
    </>
  ) : (
    <>
      Use the <strong>error</strong> variant only on destructive controls so
      color carries meaning consistently.
    </>
  );
}

function DontRemoveCopy() {
  const on = <code>outline: none</code>;
  return useLanguage() === "ar" ? (
    <>لا تُزِل حلقات التركيز عبر {on} ما لم توفّر مؤشّرًا مرئيًا مكافئًا.</>
  ) : (
    <>
      Don't remove focus rings with {on} unless you provide an equivalent
      visible indicator.
    </>
  );
}
