import React from "react";

export type CalloutKind = "info" | "tip" | "warning" | "success";

export interface CalloutProps {
  kind?: CalloutKind;
  title?: string;
  children: React.ReactNode;
}

const palette: Record<
  CalloutKind,
  { bg: string; border: string; accent: string; icon: string }
> = {
  info: {
    bg: "var(--color-info-50)",
    border: "var(--color-info-200)",
    accent: "var(--color-info-700)",
    icon: "ⓘ",
  },
  tip: {
    bg: "var(--cometchat-extended-primary-color-50)",
    border: "var(--color-ep-200)",
    accent: "var(--cometchat-extended-primary-color-900)",
    icon: "✦",
  },
  warning: {
    bg: "var(--color-warning-50)",
    border: "var(--color-warning-200)",
    accent: "var(--color-warning-700)",
    icon: "⚠",
  },
  success: {
    bg: "var(--color-success-50)",
    border: "var(--color-success-200)",
    accent: "var(--color-success-700)",
    icon: "✓",
  },
};

export const Callout: React.FC<CalloutProps> = ({
  kind = "info",
  title,
  children,
}) => {
  const p = palette[kind];
  return (
    <aside
      style={{
        display: "flex",
        gap: "var(--cometchat-spacing-3)",
        padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",
        borderRadius: "var(--cometchat-radius-2-5)",
        background: p.bg,
        border: `1px solid ${p.border}`,
        color: "var(--cometchat-text-color-primary)",
        fontSize: "12px",
        lineHeight: 1.6,
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: 20,
          height: 20,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "700",
          color: p.accent,
        }}
      >
        {p.icon}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing)" }}>
        {title && (
          <strong style={{ color: p.accent, fontSize: "12px" }}>{title}</strong>
        )}
        <div>{children}</div>
      </div>
    </aside>
  );
};
