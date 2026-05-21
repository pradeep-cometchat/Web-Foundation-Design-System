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
        gap: "var(--cometchat-spacing-4)",
        padding: "var(--cometchat-spacing-8) var(--cometchat-spacing-8) var(--cometchat-spacing-6)",
        margin: "0 0 var(--cometchat-spacing-8)",
        borderRadius: "var(--cometchat-radius-4)",
        background:
          "linear-gradient(135deg, var(--cometchat-background-color-02) 0%, var(--cometchat-background-color-01) 100%)",
        border: "1px solid var(--cometchat-border-color-default)",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          fontWeight: "600",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--cometchat-extended-primary-color-900)",
        }}
      >
        {eyebrow}
      </span>
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          lineHeight: 1.1,
          fontWeight: "700",
          letterSpacing: "-0.02em",
          color: "var(--cometchat-text-color-primary)",
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: 1.55,
            color: "var(--cometchat-text-color-secondary)",
            maxWidth: 720,
          }}
        >
          {description}
        </p>
      )}
      {meta && meta.length > 0 && (
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-2)", flexWrap: "wrap", marginTop: "var(--cometchat-spacing-1)" }}>
          {meta.map((m) => (
            <span
              key={m.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--cometchat-spacing-2)",
                padding: "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",
                borderRadius: "var(--cometchat-radius-max)",
                background: "var(--cometchat-background-color-01)",
                border: "1px solid var(--cometchat-border-color-default)",
                fontSize: "12px",
                color: "var(--cometchat-text-color-secondary)",
              }}
            >
              <strong style={{ color: "var(--cometchat-text-color-primary)" }}>
                {m.value}
              </strong>
              <span style={{ color: "var(--cometchat-text-color-tertiary)" }}>{m.label}</span>
            </span>
          ))}
        </div>
      )}
    </header>
  );
};
