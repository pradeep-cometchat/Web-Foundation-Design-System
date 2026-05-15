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
      gap: "var(--space-2)",
    }}
  >
    <strong style={{ fontSize: "var(--font-size-2)", color: "var(--color-neutral-900)" }}>
      {name}
    </strong>
    <span
      style={{
        fontSize: "var(--font-size-0)",
        color: "var(--color-ep-700)",
        fontWeight: "var(--font-weight-semibold)",
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
      padding: "var(--space-4) var(--space-4)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--color-neutral-200)",
      background: "var(--color-white)",
      boxShadow: "var(--shadow-xs)",
    }}
  >
    <strong
      style={{
        display: "block",
        fontSize: "var(--font-size-2)",
        color: "var(--color-neutral-900)",
        marginBottom: "var(--space-1-5)",
      }}
    >
      {title}
    </strong>
    <div
      style={{
        fontSize: "var(--font-size-1)",
        lineHeight: 1.55,
        color: "var(--color-neutral-600)",
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
      gap: "var(--space-2)",
      padding: "var(--space-2) var(--space-3-5)",
      borderRadius: "var(--radius-full)",
      background: "var(--color-white)",
      border: "1px solid var(--color-neutral-200)",
      fontSize: "var(--font-size-1)",
      color: "var(--color-neutral-700)",
    }}
  >
    <strong style={{ color: "var(--color-neutral-900)" }}>{value}</strong>
    <span style={{ color: "var(--color-neutral-500)" }}>{label}</span>
  </span>
);

export const cardPreview: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 90,
  borderRadius: "var(--radius-lg)",
  background:
    "linear-gradient(180deg, var(--color-neutral-25) 0%, var(--color-white) 100%)",
  border: "1px solid var(--color-neutral-100)",
  padding: "var(--space-3)",
  overflow: "hidden",
};

export const cardDesc: React.CSSProperties = {
  fontSize: "var(--font-size-1)",
  lineHeight: 1.55,
  color: "var(--color-neutral-600)",
};

export const cardLinkStyle: React.CSSProperties = {
  padding: "var(--space-4)",
  borderRadius: "var(--radius-xl)",
  border: "1px solid var(--color-neutral-200)",
  background: "var(--color-white)",
  boxShadow: "var(--shadow-xs)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
  transition: "all 160ms ease",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

export const panelStyle: React.CSSProperties = {
  padding: "var(--space-5)",
  borderRadius: "var(--radius-xl)",
  border: "1px solid var(--color-neutral-200)",
  background: "var(--color-white)",
  boxShadow: "var(--shadow-xs)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2-5)",
};

export const panelLabel: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-ep-700)",
};

export const panelP: React.CSSProperties = {
  margin: 0,
  fontSize: "var(--font-size-1)",
  lineHeight: 1.55,
  color: "var(--color-neutral-600)",
};

export const codePre: React.CSSProperties = {
  margin: 0,
  padding: "var(--space-3-5)",
  borderRadius: "var(--radius-lg)",
  background: "var(--color-neutral-50)",
  border: "1px solid var(--color-neutral-200)",
  fontFamily:
    "var(--font-family-body)",
  fontSize: "var(--font-size-1)",
  lineHeight: 1.65,
  color: "var(--color-neutral-800)",
  overflowX: "auto",
};
