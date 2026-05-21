import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { TokenTable } from "../components/TokenTable";
import { CopyButton } from "../components/CopyButton";
import { Callout } from "../components/Callout";
import { shadows, type ShadowKey } from "../tokens/shadows";

/**
 * Five elevation tokens from **xs** (subtle lift) to **xl** (modals).
 * Each token may stack multiple drop shadows for a more natural falloff.
 *
 * Pair elevation with borders and background tokens, not alone — shadows
 * alone are not a reliable visual cue in high-contrast modes.
 */
const meta: Meta<typeof ShadowPlayground> = {
  title: "CometChat Foundation/Effects/Shadows",
  component: ShadowPlayground,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", themes: { themeOverride: "Light" } },
  argTypes: {
    level: {
      control: "select",
      options: Object.keys(shadows) as ShadowKey[],
      description: "Elevation level.",
      table: { category: "Token" },
    },
  },
};
export default meta;

interface PlaygroundProps {
  level: ShadowKey;
}

function ShadowPlayground({ level }: PlaygroundProps) {
  const token = shadows[level];
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
          <div
            aria-label={`shadow-${level} preview`}
            style={{
              width: 280,
              height: 140,
              borderRadius: "var(--cometchat-radius-3)",
              background: "var(--cometchat-static-white)",
              boxShadow: `var(--cometchat-shadow-${level})`,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid var(--cometchat-border-color-default)",
          }}
        >
          <Stat label="Token" value={token.name} />
          <Stat label="Layers" value={String(token.layers.length)} mono divider />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <TokenTable
          searchable={false}
          title="Copy-ready value"
          rows={[
            {
              name: token.name,
              value: token.css,
              cssVar: `var(--cometchat-shadow-${level})`,
            },
          ]}
        />
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
      borderLeft: divider
        ? "1px solid var(--cometchat-border-color-default)"
        : "none",
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
      {label}
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

export const Playground: StoryObj<typeof ShadowPlayground> = {
  args: { level: "md" },
  parameters: { docs: { disable: true } },
};

/** All elevation tokens side by side. */
export const Scale: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Elevation scale"
        description="Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy."
        meta={[{ label: "levels", value: "5" }]}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "var(--cometchat-spacing-5)",
          padding: "var(--cometchat-spacing-8)",
          background: "var(--cometchat-background-color-01)",
          border: "1px solid var(--cometchat-border-color-default)",
          borderRadius: "var(--cometchat-radius-4)",
        }}
      >
        {(Object.keys(shadows) as ShadowKey[]).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--cometchat-spacing-3)",
              alignItems: "center",
            }}
          >
            <div
              aria-label={`shadow-${key}`}
              style={{
                width: "100%",
                height: 100,
                borderRadius: "var(--cometchat-radius-3)",
                background: "var(--cometchat-static-white)",
                boxShadow: `var(--cometchat-shadow-${key})`,
              }}
            />
            <strong
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--cometchat-text-color-primary)",
              }}
            >
              shadow-{key}
            </strong>
            <CopyButton
              value={`var(--cometchat-shadow-${key})`}
              label="Copy"
              variant="solid"
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

/** Shadow token reference. */
export const Reference: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Shadow reference"
        description="Every elevation token with its layer count and full CSS value."
      />
      <TokenTable
        rows={(Object.keys(shadows) as ShadowKey[]).map((key) => {
          const s = shadows[key];
          return {
            name: s.name,
            value: `${s.layers.length} layer${s.layers.length > 1 ? "s" : ""}`,
            cssVar: `var(--cometchat-shadow-${key})`,
            description: s.css,
            preview: (
              <div
                aria-hidden
                style={{
                  width: 64,
                  height: 32,
                  borderRadius: "var(--cometchat-radius-1-5)",
                  background: "var(--cometchat-static-white)",
                  boxShadow: `var(--cometchat-shadow-${key})`,
                }}
              />
            ),
          };
        })}
        previewHeader="Preview"
        valueHeader="Layers"
      />
    </div>
  ),
};

/** Suggested usage per level. */
export const UsageGuide: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Usage guide"
        description="Guidelines for when to reach for each elevation. If in doubt, use the smaller one."
      />
      <Callout kind="warning" title="Don't rely on shadow alone">
        In high-contrast or forced-colors modes, shadows may be stripped. Pair
        elevation with borders and surface color changes so the boundary is
        still clear.
      </Callout>
      <div style={{ height: 24 }} />
      <Section title="When to use each level">
        <TokenTable
          searchable={false}
          rows={[
            {
              name: "shadow-xs",
              value: "Inputs, chips, subtle lift",
              cssVar: "var(--cometchat-shadow-xs)",
              preview: (
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 28,
                    borderRadius: "var(--cometchat-radius-1-5)",
                    background: "var(--cometchat-static-white)",
                    boxShadow: "var(--cometchat-shadow-xs)",
                  }}
                />
              ),
            },
            {
              name: "shadow-sm",
              value: "Cards, list items",
              cssVar: "var(--cometchat-shadow-sm)",
              preview: (
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 28,
                    borderRadius: "var(--cometchat-radius-1-5)",
                    background: "var(--cometchat-static-white)",
                    boxShadow: "var(--cometchat-shadow-sm)",
                  }}
                />
              ),
            },
            {
              name: "shadow-md",
              value: "Dropdowns, menus, floating buttons",
              cssVar: "var(--cometchat-shadow-md)",
              preview: (
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 28,
                    borderRadius: "var(--cometchat-radius-1-5)",
                    background: "var(--cometchat-static-white)",
                    boxShadow: "var(--cometchat-shadow-md)",
                  }}
                />
              ),
            },
            {
              name: "shadow-lg",
              value: "Popovers, tooltips with elevation",
              cssVar: "var(--cometchat-shadow-lg)",
              preview: (
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 28,
                    borderRadius: "var(--cometchat-radius-1-5)",
                    background: "var(--cometchat-static-white)",
                    boxShadow: "var(--cometchat-shadow-lg)",
                  }}
                />
              ),
            },
            {
              name: "shadow-xl",
              value: "Modals, sheets, dialogs",
              cssVar: "var(--cometchat-shadow-xl)",
              preview: (
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 28,
                    borderRadius: "var(--cometchat-radius-1-5)",
                    background: "var(--cometchat-static-white)",
                    boxShadow: "var(--cometchat-shadow-xl)",
                  }}
                />
              ),
            },
          ]}
          previewHeader="Preview"
          valueHeader="Typical use"
        />
      </Section>
    </div>
  ),
};
