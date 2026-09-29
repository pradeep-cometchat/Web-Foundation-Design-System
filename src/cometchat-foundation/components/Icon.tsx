import React from "react";
import {
  buildIconVariation,
  iconFontFamily,
  iconMirrorProps,
  type IconVariant,
} from "../tokens/icons";

export interface IconProps {
  /** Material Symbols ligature name, e.g. "home", "arrow_back". */
  name: string;
  /** Visual variant. Defaults to outlined. */
  variant?: IconVariant;
  /** Icon font-size in pixels. Defaults to 24. */
  size?: number;
  /** 100 → 700. Defaults to 400. */
  weight?: number;
  /** 0 (unfilled) or 1 (filled). Defaults to 0. */
  fill?: 0 | 1;
  /** -25 → 200. Default 0. */
  grade?: number;
  /** 20 → 48. Should match `size` when possible. Default 24. */
  opticalSize?: number;
  /** Override color (any CSS color). Defaults to currentColor. */
  color?: string;
  /** Accessible label. Pass empty string for decorative icons. */
  ariaLabel?: string;
  /** Additional className for styling overrides. */
  className?: string;
  /** Inline style overrides. */
  style?: React.CSSProperties;
  /**
   * Flip direction-sensitive glyphs in RTL. On by default; the icon catalog
   * passes false so it keeps showing each glyph as the font draws it.
   */
  mirror?: boolean;
}

/**
 * Material Symbols icon. Renders as a ligature — the font replaces the text
 * content with the corresponding glyph.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  variant = "outlined",
  size = 24,
  weight = 400,
  fill = 0,
  grade = 0,
  opticalSize,
  color = "currentColor",
  ariaLabel,
  className,
  style,
  mirror = true,
}) => {
  const opsz = opticalSize ?? size;
  const isDecorative = ariaLabel === "";

  return (
    <span
      className={[`icon-${variant}`, className].filter(Boolean).join(" ")}
      data-icon={variant}
      {...(mirror ? iconMirrorProps(name) : {})}
      aria-hidden={isDecorative || undefined}
      aria-label={isDecorative ? undefined : ariaLabel ?? name}
      role={isDecorative ? undefined : "img"}
      style={{
        fontFamily: iconFontFamily[variant],
        fontWeight: weight,
        fontStyle: "normal",
        fontSize: size,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        letterSpacing: "normal",
        textTransform: "none",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        direction: "ltr",
        fontFeatureSettings: "'liga'",
        WebkitFontFeatureSettings: "'liga'",
        WebkitFontSmoothing: "antialiased",
        fontVariationSettings: buildIconVariation({
          fill,
          weight,
          grade,
          opticalSize: opsz,
        }),
        ...style,
      }}
    >
      {name}
    </span>
  );
};
