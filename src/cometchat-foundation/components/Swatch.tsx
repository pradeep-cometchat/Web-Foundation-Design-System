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
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden",
        border: "1px solid var(--cometchat-neutral-color-200)",
        background: "var(--color-white)",
        boxShadow: hovered ? "var(--cometchat-shadow-md)" : "var(--cometchat-shadow-xs)",
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
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.04em",
              padding: "3px 7px",
              borderRadius: "var(--cometchat-radius-max)",
              background: "var(--color-white)",
              color:
                bestRating === "AAA" || bestRating === "AA"
                  ? "var(--color-success-700)"
                  : bestRating === "AA Large"
                  ? "var(--color-warning-700)"
                  : "var(--color-error-700)",
              boxShadow: "var(--cometchat-shadow-xs)",
            }}
          >
            {bestRating}
          </span>
        )}
      </div>
      <div
        style={{
          padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-3-5) var(--cometchat-spacing-3-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-2)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing)" }}>
          <strong
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "var(--cometchat-neutral-color-900)",
              letterSpacing: "-0.005em",
            }}
          >
            {name}
          </strong>
          <span
            style={{
              fontSize: "12px",
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
          <div style={{ fontSize: "10px", color: "var(--cometchat-neutral-color-600)" }}>
            {description}
          </div>
        )}
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-1-5)", flexWrap: "wrap" }}>
          <CopyButton value={value} label="HEX" variant="solid" />
          <CopyButton value={cssVar} label="CSS" variant="solid" />
        </div>
      </div>
    </div>
  );
};
