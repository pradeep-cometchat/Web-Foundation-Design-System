import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip/Tooltip.impl";
import type { TooltipArrow } from "../components/Tooltip/Tooltip.types";

/**
 * A small popup that shows contextual information on hover or focus.
 *
 * **Background:** #0a0d12, **text:** white 12px/600, **supporting:** white 12px/400.
 *
 * **Arrow positions:** Top (center/left/right), Bottom (center/left/right), Left, Right, None.
 *
 * **Padding:** 8px 12px (title only), 12px (with supporting text).
 *
 * Uses foundation tokens: `--color-neutral-lm-950`, `--color-white`, `--radius-md`,
 * `--font-size-1`, `--font-weight-semibold`, `--font-weight-regular`.
 */
const meta: Meta = {
  title: "Base Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "padded", themes: { themeOverride: "Light" } },
  argTypes: {
    title: { control: "text", table: { category: "Content" } },
    supportingText: { control: "text", table: { category: "Content" } },
    arrow: {
      control: "select",
      options: [
        "top-center", "top-left", "top-right",
        "bottom-center", "bottom-left", "bottom-right",
        "left", "right", "none",
      ] satisfies TooltipArrow[],
      table: { category: "Appearance" },
    },
    open: { control: "boolean", table: { category: "State" } },
  },
};
export default meta;

type Story = StoryObj;

/** All arrow positions — rendered as static tooltip previews (no clipping). */
export const ArrowPositions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-8)" }}>
      <Section title="Arrow at bottom (tooltip appears above trigger)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap" }}>
          <StaticTooltip title="This is a tooltip" arrow="bottom-left" label="Bottom left" />
          <StaticTooltip title="This is a tooltip" arrow="bottom-center" label="Bottom center" />
          <StaticTooltip title="This is a tooltip" arrow="bottom-right" label="Bottom right" />
        </div>
      </Section>
      <Section title="Arrow at top (tooltip appears below trigger)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap" }}>
          <StaticTooltip title="This is a tooltip" arrow="top-left" label="Top left" arrowOnTop />
          <StaticTooltip title="This is a tooltip" arrow="top-center" label="Top center" arrowOnTop />
          <StaticTooltip title="This is a tooltip" arrow="top-right" label="Top right" arrowOnTop />
        </div>
      </Section>
      <Section title="Arrow on sides">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap" }}>
          <StaticTooltip title="This is a tooltip" arrow="right" label="Arrow right" side="right" />
          <StaticTooltip title="This is a tooltip" arrow="left" label="Arrow left" side="left" />
          <StaticTooltip title="This is a tooltip" arrow="none" label="No arrow" />
        </div>
      </Section>
    </div>
  ),
};

/** With supporting text — all positions. */
export const WithSupportingText: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-8)" }}>
      <Section title="Bottom arrow (tooltip above)">
        <StaticTooltip
          title="This is a tooltip"
          supportingText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning."
          arrow="bottom-center"
          label="Bottom center"
        />
      </Section>
      <Section title="Top arrow (tooltip below)">
        <StaticTooltip
          title="This is a tooltip"
          supportingText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning."
          arrow="top-center"
          label="Top center"
          arrowOnTop
        />
      </Section>
      <Section title="Side arrows">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-6)", flexWrap: "wrap" }}>
          <StaticTooltip
            title="This is a tooltip"
            supportingText="Tooltips are used to describe or identify an element."
            arrow="right"
            label="Arrow right"
            side="right"
          />
          <StaticTooltip
            title="This is a tooltip"
            supportingText="Tooltips are used to describe or identify an element."
            arrow="left"
            label="Arrow left"
            side="left"
          />
        </div>
      </Section>
    </div>
  ),
};

/** Interactive — hover to see tooltip appear. */
export const Interactive: Story = {
  parameters: { controls: { disable: true }, layout: "centered" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--cometchat-spacing-8)", padding: "var(--cometchat-spacing-24)" }}>
      <Tooltip title="Add to favorites" arrow="bottom-center">
        <TriggerBtn label="Favorite" icon="favorite" />
      </Tooltip>
      <Tooltip title="Share this item" supportingText="Copy a link or share via email." arrow="bottom-center">
        <TriggerBtn label="Share" icon="share" />
      </Tooltip>
      <Tooltip title="Delete permanently" supportingText="This action cannot be undone." arrow="bottom-center">
        <TriggerBtn label="Delete" icon="delete" />
      </Tooltip>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Tooltip. */
export const Playground: Story = {
  args: { title: "This is a tooltip", supportingText: "", arrow: "bottom-center", open: true },
  parameters: { docs: { disable: true }, layout: "centered" },
  render: (args: any) => (
    <div style={{ padding: "var(--cometchat-spacing-24)" }}>
      <Tooltip {...args}>
        <TriggerBtn />
      </Tooltip>
    </div>
  ),
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function TriggerBtn({ label = "Hover me", icon }: { label?: string; icon?: string }) {
  return (
    <button
      type="button"
      style={{
        padding: "8px 16px",
        borderRadius: "var(--cometchat-radius-2)",
        border: "1px solid var(--cometchat-border-color-default)",
        background: "var(--cometchat-static-white)",
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-1-5)",
      }}
    >
      {icon && (
        <span
          className="icon-outlined"
          data-icon="outlined"
          style={{
            fontFamily: "Material Symbols Outlined",
            fontSize: "18px",
            fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
          }}
        >
          {icon}
        </span>
      )}
      {label}
    </button>
  );
}

/**
 * Static tooltip preview — renders the tooltip inline (not positioned absolutely)
 * so it doesn't clip or overflow the story frame.
 */
function StaticTooltip({
  title,
  supportingText,
  arrow,
  label,
  arrowOnTop,
  side,
}: {
  title: string;
  supportingText?: string;
  arrow: TooltipArrow;
  label: string;
  arrowOnTop?: boolean;
  side?: "left" | "right";
}) {
  const arrowAlign: "flex-start" | "center" | "flex-end" =
    arrow.includes("left")
      ? "flex-start"
      : arrow.includes("right")
      ? "flex-end"
      : "center";

  const arrowMargin: React.CSSProperties =
    arrowAlign === "flex-start"
      ? { marginLeft: 12 }
      : arrowAlign === "flex-end"
      ? { marginRight: 12 }
      : {};

  const arrowEl =
    arrow !== "none" && (
      <span
        style={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          display: "block",
          alignSelf: side ? "center" : arrowAlign,
          ...(side ? {} : arrowMargin),
          ...(side === "right"
            ? {
                borderWidth: "6px 6px 6px 0",
                borderColor:
                  "transparent var(--cometchat-neutral-color-900) transparent transparent",
                marginLeft: -1,
              }
            : side === "left"
            ? {
                borderWidth: "6px 0 6px 6px",
                borderColor:
                  "transparent transparent transparent var(--cometchat-neutral-color-900)",
                marginRight: -1,
              }
            : arrowOnTop
            ? {
                borderWidth: "0 6px 6px 6px",
                borderColor:
                  "transparent transparent var(--cometchat-neutral-color-900) transparent",
              }
            : {
                borderWidth: "6px 6px 0 6px",
                borderColor:
                  "var(--cometchat-neutral-color-900) transparent transparent transparent",
              }),
        }}
      />
    );

  const content = (
    <div
      style={{
        background: "var(--cometchat-neutral-color-900)",
        borderRadius: "var(--cometchat-radius-2)",
        padding: supportingText ? 12 : "8px 12px",
        width: supportingText ? 320 : "max-content",
        maxWidth: 320,
      }}
    >
      <div
        style={{
          fontFamily: "var(--cometchat-font-family)",
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--cometchat-static-white)",
          lineHeight: "18px",
        }}
      >
        {title}
      </div>
      {supportingText && (
        <div
          style={{
            fontFamily: "var(--cometchat-font-family)",
            fontSize: "12px",
            fontWeight: "400",
            color: "var(--cometchat-static-white)",
            lineHeight: "18px",
            marginTop: "var(--cometchat-spacing-1)",
            opacity: 0.9,
          }}
        >
          {supportingText}
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--cometchat-spacing-1)",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--cometchat-spacing-1)",
        }}
      >
        {label}
      </span>
      {side ? (
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {side === "left" && content}
          {side === "left" && arrowEl}
          {side === "right" && arrowEl}
          {side === "right" && content}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {arrowOnTop && arrowEl}
          {content}
          {!arrowOnTop && arrowEl}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--cometchat-spacing-3)",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Tooltip with arrow at bottom-center -->
<div class="tooltip-wrapper">
  <button class="tooltip-trigger">Hover me</button>
  <div class="tooltip tooltip--visible">
    <div class="tooltip__content">
      <span class="tooltip__title">This is a tooltip</span>
      <span class="tooltip__supporting">
        Tooltips help the user understand meaning.
      </span>
    </div>
    <span class="tooltip__arrow tooltip__arrow--bottom-center"></span>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease;
}

.tooltip--visible {
  opacity: 1;
}

.tooltip__content {
  background: var(--cometchat-neutral-color-900);
  border-radius: var(--cometchat-radius-2);
  padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3);
  max-width: 320px;
}

/* With supporting text — more padding */
.tooltip__content--rich {
  padding: var(--cometchat-spacing-3);
}

.tooltip__title {
  font: var(--cometchat-font-caption1-semibold);
  color: var(--cometchat-static-white);
  display: block;
}

.tooltip__supporting {
  font: var(--cometchat-font-caption1-regular);
  color: var(--cometchat-static-white);
  opacity: 0.9;
  display: block;
  margin-top: var(--cometchat-spacing-1);
}

/* Arrow — CSS triangle */
.tooltip__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
}

.tooltip__arrow--bottom-center {
  border-width: 6px 6px 0 6px;
  border-color: var(--cometchat-neutral-color-900) transparent transparent transparent;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--top-center {
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent var(--cometchat-neutral-color-900) transparent;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip__arrow--left {
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent var(--cometchat-neutral-color-900);
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip__arrow--right {
  border-width: 6px 6px 6px 0;
  border-color: transparent var(--cometchat-neutral-color-900) transparent transparent;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Title Only" description="Simple tooltip with just a title. Padding: 8px 12px. Used for icon labels and short hints." />
          <StateCard title="With Supporting Text" description="Title + description. Padding: 12px. Max-width 320px. Used for longer explanations." />
          <StateCard title="Arrow Positions" description="9 positions: top (left/center/right), bottom (left/center/right), left, right, none." />
          <StateCard title="Interactive" description="Appears on hover/focus with 150ms fade transition. Disappears on mouse leave/blur." />
        </div>
      </UsageSection>
    </div>
  ),
};

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
      <strong style={{ fontSize: "14px", fontWeight: "600", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "18px" }}>{description}</span>
    </div>
  );
}
