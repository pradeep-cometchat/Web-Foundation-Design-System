import React from "react";

export const CardMeta: React.FC<{ name: string; count: string }> = ({
  name,
  count,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--cometchat-spacing-2)",
    }}
  >
    <strong style={{ fontSize: "14px", color: "var(--cometchat-neutral-color-900)" }}>
      {name}
    </strong>
    <span
      style={{
        fontSize: "10px",
        color: "var(--cometchat-extended-primary-color-900)",
        fontWeight: "600",
        letterSpacing: "0.02em",
      }}
    >
      {count}
    </span>
  </div>
);

export const ConventionCard: React.FC<{
  title: string;
  body: React.ReactNode;
}> = ({ title, body }) => (
  <div
    style={{
      padding: "var(--cometchat-spacing-4) var(--cometchat-spacing-4)",
      borderRadius: "var(--cometchat-radius-3)",
      border: "1px solid var(--cometchat-neutral-color-200)",
      background: "var(--color-white)",
      boxShadow: "var(--cometchat-shadow-xs)",
    }}
  >
    <strong
      style={{
        display: "block",
        fontSize: "14px",
        color: "var(--cometchat-neutral-color-900)",
        marginBottom: "var(--cometchat-spacing-1-5)",
      }}
    >
      {title}
    </strong>
    <div
      style={{
        fontSize: "12px",
        lineHeight: 1.55,
        color: "var(--cometchat-neutral-color-600)",
      }}
    >
      {body}
    </div>
  </div>
);

export const HeroChip: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--cometchat-spacing-2)",
      padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3-5)",
      borderRadius: "var(--cometchat-radius-max)",
      background: "var(--color-white)",
      border: "1px solid var(--cometchat-neutral-color-200)",
      fontSize: "12px",
      color: "var(--cometchat-neutral-color-700)",
    }}
  >
    <strong style={{ color: "var(--cometchat-neutral-color-900)" }}>{value}</strong>
    <span style={{ color: "var(--color-neutral-500)" }}>{label}</span>
  </span>
);

export const cardPreview: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 90,
  borderRadius: "var(--cometchat-radius-2-5)",
  background:
    "linear-gradient(180deg, var(--color-neutral-25) 0%, var(--color-white) 100%)",
  border: "1px solid var(--color-neutral-100)",
  padding: "var(--cometchat-spacing-3)",
  overflow: "hidden",
};

export const cardDesc: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.55,
  color: "var(--cometchat-neutral-color-600)",
};

export const cardLinkStyle: React.CSSProperties = {
  padding: "var(--cometchat-spacing-4)",
  borderRadius: "var(--cometchat-radius-3)",
  border: "1px solid var(--cometchat-neutral-color-200)",
  background: "var(--color-white)",
  boxShadow: "var(--cometchat-shadow-xs)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--cometchat-spacing-3)",
  transition: "all 160ms ease",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

export const panelStyle: React.CSSProperties = {
  padding: "var(--cometchat-spacing-5)",
  borderRadius: "var(--cometchat-radius-3)",
  border: "1px solid var(--cometchat-neutral-color-200)",
  background: "var(--color-white)",
  boxShadow: "var(--cometchat-shadow-xs)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2-5)",
};

export const panelLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--cometchat-extended-primary-color-900)",
};

export const panelP: React.CSSProperties = {
  margin: 0,
  fontSize: "12px",
  lineHeight: 1.55,
  color: "var(--cometchat-neutral-color-600)",
};

export const codePre: React.CSSProperties = {
  margin: 0,
  padding: "var(--cometchat-spacing-3-5)",
  borderRadius: "var(--cometchat-radius-2-5)",
  background: "var(--color-neutral-50)",
  border: "1px solid var(--cometchat-neutral-color-200)",
  fontFamily:
    "var(--font-family-body)",
  fontSize: "12px",
  lineHeight: 1.65,
  color: "var(--cometchat-neutral-color-800)",
  overflowX: "auto",
};
