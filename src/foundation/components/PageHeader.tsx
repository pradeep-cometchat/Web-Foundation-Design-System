import React from "react";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  meta?: Array<{ label: string; value: string }>;
}

/**
 * Page header with eyebrow, title, description, and optional metadata chips.
 * Drop at the top of every foundation docs page for a consistent hero.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow = "Foundation",
  title,
  description,
  meta,
}) => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--space-8) var(--space-8) var(--space-6)",
        margin: "0 0 var(--space-8)",
        borderRadius: "var(--radius-2xl)",
        background:
          "linear-gradient(135deg, var(--color-bg-02) 0%, var(--color-bg-01) 100%)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      <span
        style={{
          fontSize: "var(--font-size-0)",
          fontWeight: "var(--font-weight-semibold)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-ep-700)",
        }}
      >
        {eyebrow}
      </span>
      <h1
        style={{
          margin: 0,
          fontSize: "var(--font-size-7)",
          lineHeight: 1.1,
          fontWeight: "var(--font-weight-bold)",
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            margin: 0,
            fontSize: "var(--font-size-3)",
            lineHeight: 1.55,
            color: "var(--color-text-secondary)",
            maxWidth: 720,
          }}
        >
          {description}
        </p>
      )}
      {meta && meta.length > 0 && (
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-1)" }}>
          {meta.map((m) => (
            <span
              key={m.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "var(--space-1-5) var(--space-3)",
                borderRadius: "var(--radius-full)",
                background: "var(--color-bg-01)",
                border: "1px solid var(--color-border-default)",
                fontSize: "var(--font-size-1)",
                color: "var(--color-text-secondary)",
              }}
            >
              <strong style={{ color: "var(--color-text-primary)" }}>
                {m.value}
              </strong>
              <span style={{ color: "var(--color-text-tertiary)" }}>{m.label}</span>
            </span>
          ))}
        </div>
      )}
    </header>
  );
};
