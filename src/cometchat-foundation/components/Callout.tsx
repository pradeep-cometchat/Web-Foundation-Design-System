import React from "react";
import { T } from "../localization";

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
    bg: "var(--cometchat-background-color-info)",
    border: "var(--cometchat-info-color)",
    accent: "var(--cometchat-info-color)",
    icon: "ⓘ",
  },
  tip: {
    bg: "var(--cometchat-extended-primary-color-50)",
    border: "var(--cometchat-extended-primary-color-200)",
    accent: "var(--cometchat-extended-primary-color-900)",
    icon: "✦",
  },
  warning: {
    bg: "var(--cometchat-background-color-warning)",
    border: "var(--cometchat-warning-color)",
    accent: "var(--cometchat-text-color-warning)",
    icon: "⚠",
  },
  success: {
    bg: "var(--cometchat-background-color-success)",
    border: "var(--cometchat-success-color)",
    accent: "var(--cometchat-text-color-success)",
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
          <strong style={{ color: p.accent, fontSize: "12px" }}><T>{title}</T></strong>
        )}
        <div>
          <T>{children}</T>
        </div>
      </div>
    </aside>
  );
};
