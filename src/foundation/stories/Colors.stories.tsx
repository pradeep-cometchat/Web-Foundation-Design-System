import type { Meta } from "@storybook/react";
import { Swatch } from "../components/Swatch";
import { Section } from "../components/Section";
import { PageHeader } from "../components/PageHeader";
import { Callout } from "../components/Callout";
import { contrastRatio, wcagRating } from "../components/contrast";
import {
  extendedPrimary,
  neutralLight,
  neutralDark,
  info,
  warning,
  success,
  error,
  primaryColors,
} from "../tokens/colors";

/**
 * Seven color families power the product: Primary, Extended Primary, two
 * Neutral palettes (light & dark mode), and four semantic palettes for state
 * (Info, Warning, Success, Error).
 *
 * Pick a shade with the control on the Playground, or browse the full system
 * on "All palettes". The Accessibility audit shows WCAG contrast on every
 * shade against white and black.
 */
const meta: Meta<typeof ColorStory> = {
  title: "Foundation/Colors",
  component: ColorStory,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    themes: { themeOverride: "Light" },
    docs: {
      description: {
        component:
          "Pick a shade with the control. Copy the hex value or CSS variable directly from the swatch. The contrast badge shows the best WCAG rating against white or black.",
      },
    },
  },
  argTypes: {
    family: {
      control: "select",
      options: [
        "extendedPrimary",
        "neutralLight",
        "neutralDark",
        "info",
        "warning",
        "success",
        "error",
      ],
      description: "Color family to sample from.",
      table: { category: "Token" },
    },
    shade: {
      control: "select",
      options: [
        "25",
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ],
      description: "Shade within the selected family.",
      table: { category: "Token" },
    },
  },
};
export default meta;

type FamilyKey =
  | "extendedPrimary"
  | "neutralLight"
  | "neutralDark"
  | "info"
  | "warning"
  | "success"
  | "error";

const familyMap: Record<FamilyKey, Record<string, string>> = {
  extendedPrimary,
  neutralLight,
  neutralDark,
  info,
  warning,
  success,
  error,
};

const cssPrefix: Record<FamilyKey, string> = {
  extendedPrimary: "--color-ep-",
  neutralLight: "--color-neutral-lm-",
  neutralDark: "--color-neutral-dm-",
  info: "--color-info-",
  warning: "--color-warning-",
  success: "--color-success-",
  error: "--color-error-",
};

const familyLabel: Record<FamilyKey, string> = {
  extendedPrimary: "Extended Primary",
  neutralLight: "Neutral (Light)",
  neutralDark: "Neutral (Dark)",
  info: "Info",
  warning: "Warning",
  success: "Success",
  error: "Error",
};

interface ColorStoryProps {
  family: FamilyKey;
  shade: string;
}

function ColorStory({ family, shade }: ColorStoryProps) {
  const palette = familyMap[family];
  const resolvedShade = palette[shade] ? shade : Object.keys(palette)[0];
  const value = palette[resolvedShade];
  const cssVar = `var(${cssPrefix[family]}${resolvedShade})`;
  const onWhite = contrastRatio(value, "#ffffff");
  const onBlack = contrastRatio(value, "#000000");
  const bestRatio = Math.max(onWhite, onBlack);
  const bestRating = wcagRating(bestRatio);
  const bestAgainst = onWhite >= onBlack ? "white" : "black";

  return (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid var(--color-neutral-200)",
          borderRadius: "var(--radius-2xl)",
          overflow: "hidden",
          background: "var(--color-white)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div
          aria-label={`${familyLabel[family]} ${resolvedShade} preview`}
          style={{
            background: value,
            height: 200,
            display: "flex",
            alignItems: "flex-end",
            padding: "var(--space-6)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-1-5)",
              fontSize: "var(--font-size-1)",
              fontWeight: "var(--font-weight-semibold)",
              padding: "5px 10px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-white)",
              color:
                bestRating === "AAA" || bestRating === "AA"
                  ? "var(--color-success-700)"
                  : bestRating === "AA Large"
                  ? "var(--color-warning-700)"
                  : "var(--color-error-700)",
              boxShadow: "var(--shadow-sm)",
            }}
            title={`Best against ${bestAgainst}: ${bestRatio.toFixed(2)}:1`}
          >
            {bestRating} · {bestRatio.toFixed(2)}:1
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--color-neutral-200)",
            background: "var(--color-neutral-25)",
          }}
        >
          <Stat label="Family" value={familyLabel[family]} />
          <Stat label="Shade" value={resolvedShade} mono divider />
          <Stat label="Hex" value={value.toUpperCase()} mono divider />
          <Stat label="CSS variable" value={cssVar} mono divider />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "var(--space-4)",
          marginTop: 20,
        }}
      >
        <Callout kind="tip" title="How to read the contrast">
          The pill on the preview shows the best WCAG 2.1 rating achievable
          against pure white or pure black. Aim for <strong>AA (4.5:1)</strong>{" "}
          for body text and <strong>AA Large (3:1)</strong> for icons and large
          text.
        </Callout>
        <Callout kind="info" title="Missing shades">
          Some semantic palettes omit <code>600</code> by design. When the
          selected shade doesn't exist, the Playground falls back to the first
          available shade.
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
      padding: "14px 16px",
      borderLeft: divider ? "1px solid var(--color-neutral-200)" : "none",
    }}
  >
    <div
      style={{
        fontSize: "var(--font-size-0)",
        fontWeight: "var(--font-weight-semibold)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--color-neutral-500)",
        marginBottom: "var(--space-1)",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: mono ? "var(--font-family-body)" : "inherit",
        fontSize: "var(--font-size-1)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-900)",
        wordBreak: "break-all",
      }}
    >
      {value}
    </div>
  </div>
);

function SwatchGrid({
  entries,
  cssVarOf,
  labelOf,
}: {
  entries: [string, string][];
  cssVarOf: (key: string) => string;
  labelOf: (key: string) => string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "var(--space-3-5)",
      }}
    >
      {entries.map(([key, value]) => (
        <Swatch
          key={key}
          name={labelOf(key)}
          value={value}
          cssVar={cssVarOf(key)}
        />
      ))}
    </div>
  );
}

function SemanticGrid({
  scale,
  family,
}: {
  scale: Record<string, string>;
  family: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "var(--space-3-5)",
      }}
    >
      {sortSemanticEntries(scale).map(([key, value]) => {
        const label = key === "base" ? family : `${family}-${key}`;
        const cssVar =
          key === "base"
            ? `var(--color-${family})`
            : `var(--color-${family}-${key})`;
        return <Swatch key={key} name={label} value={value} cssVar={cssVar} />;
      })}
    </div>
  );
}

/**
 * Order semantic palette entries: `base` first, then numeric shades ascending.
 * Needed because JS object iteration puts integer-like keys before string keys.
 */
function sortSemanticEntries(scale: Record<string, string>) {
  return Object.entries(scale).sort(([a], [b]) => {
    if (a === "base") return -1;
    if (b === "base") return 1;
    return Number(a) - Number(b);
  });
}

function toContrastRows(scale: Record<string, string>, prefix: string) {
  return sortSemanticEntries(scale).map(([key, value]) => {
    const onWhite = contrastRatio(value, "#ffffff");
    const onBlack = contrastRatio(value, "#000000");
    return {
      name:
        key === "base"
          ? prefix.replace(/-$/, "").replace(/^--color-/, "")
          : `${prefix.replace(/^--color-/, "")}${key}`,
      value,
      cssVar:
        key === "base"
          ? `var(${prefix.replace(/-$/, "")})`
          : `var(${prefix}${key})`,
      preview: (
        <div
          aria-hidden
          style={{
            width: 56,
            height: 28,
            borderRadius: "var(--radius-sm)",
            background: value,
            border: "1px solid var(--color-neutral-200)",
          }}
        />
      ),
      description: `On white ${onWhite.toFixed(2)}:1 (${wcagRating(
        onWhite
      )}) · On black ${onBlack.toFixed(2)}:1 (${wcagRating(onBlack)})`,
    };
  });
}
