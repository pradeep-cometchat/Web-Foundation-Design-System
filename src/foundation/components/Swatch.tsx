import React, { useState } from "react";
import { CopyButton } from "./CopyButton";
import { contrastRatio, wcagRating, type WcagRating } from "./contrast";

export interface SwatchProps {
  value: string;
  name: string;
  cssVar: string;
  showContrast?: boolean;
  description?: string;
}

/**
 * Polished color swatch: large preview, quick hex readout, and
 * contrast-on-hover with on-click copy for both hex and CSS variable.
 */
export const Swatch: React.FC<SwatchProps> = ({
  value,
  name,
  cssVar,
  showContrast = true,
  description,
}) => {
  const [hovered, setHovered] = useState(false);
  const onWhite = contrastRatio(value, "#ffffff");
  const onBlack = contrastRatio(value, "#000000");
  const bestRatio = Math.max(onWhite, onBlack);
  const bestAgainst: "white" | "black" = onWhite >= onBlack ? "white" : "black";
  const bestRating: WcagRating = wcagRating(bestRatio);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="group"
      aria-label={`${name} color swatch`}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        border: "1px solid var(--color-neutral-200)",
        background: "var(--color-white)",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 160ms ease",
      }}
    >
      <div
        aria-hidden
        style={{
          background: value,
          height: 88,
          position: "relative",
        }}
      >
        {showContrast && (
          <span
            title={`Best against ${bestAgainst}: ${bestRatio.toFixed(2)}:1 (${bestRating})`}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "var(--font-size-0)",
              fontWeight: "var(--font-weight-bold)",
              letterSpacing: "0.04em",
              padding: "3px 7px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-white)",
              color:
                bestRating === "AAA" || bestRating === "AA"
                  ? "var(--color-success-700)"
                  : bestRating === "AA Large"
                  ? "var(--color-warning-700)"
                  : "var(--color-error-700)",
              boxShadow: "var(--shadow-xs)",
            }}
          >
            {bestRating}
          </span>
        )}
      </div>
      <div
        style={{
          padding: "var(--space-3) var(--space-3-5) var(--space-3-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)" }}>
          <strong
            style={{
              fontSize: "var(--font-size-1)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-neutral-900)",
              letterSpacing: "-0.005em",
            }}
          >
            {name}
          </strong>
          <span
            style={{
              fontSize: "var(--font-size-1)",
              fontFamily:
                "var(--font-family-body)",
              color: "var(--color-neutral-500)",
              textTransform: "uppercase",
            }}
          >
            {value}
          </span>
        </div>
        {description && (
          <div style={{ fontSize: "var(--font-size-0)", color: "var(--color-neutral-600)" }}>
            {description}
          </div>
        )}
        <div style={{ display: "flex", gap: "var(--space-1-5)", flexWrap: "wrap" }}>
          <CopyButton value={value} label="HEX" variant="solid" />
          <CopyButton value={cssVar} label="CSS" variant="solid" />
        </div>
      </div>
    </div>
  );
};
