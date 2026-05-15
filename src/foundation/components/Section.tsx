import React from "react";

export interface SectionProps {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  level?: 2 | 3;
  /** Optional small caption shown above the title, e.g. "Step 1". */
  eyebrow?: string;
  /** Right-aligned actions (e.g. a view-toggle). */
  actions?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
  level = 2,
  eyebrow,
  actions,
}) => {
  const Heading = (level === 2 ? "h2" : "h3") as keyof JSX.IntrinsicElements;
  return (
    <section style={{ marginBottom: "var(--space-10)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          marginBottom: description ? "var(--space-2)" : "var(--space-5)",
          paddingBottom: "var(--space-3)",
          borderBottom: "1px solid var(--color-neutral-200)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          {eyebrow && (
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
          )}
          <Heading
            style={{
              margin: 0,
              fontSize: level === 2 ? "var(--font-size-5)" : "var(--font-size-3)",
              fontWeight: "var(--font-weight-semibold)",
              letterSpacing: "-0.01em",
              color: "var(--color-neutral-900)",
            }}
          >
            {title}
          </Heading>
        </div>
        {actions}
      </div>
      {description && (
        <p
          style={{
            margin: "0 0 var(--space-5)",
            color: "var(--color-neutral-600)",
            maxWidth: 760,
            fontSize: "var(--font-size-2)",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
};
