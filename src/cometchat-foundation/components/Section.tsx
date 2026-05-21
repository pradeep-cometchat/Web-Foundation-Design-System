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
    <section style={{ marginBottom: "var(--cometchat-spacing-10)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "var(--cometchat-spacing-4)",
          marginBottom: description ? "var(--cometchat-spacing-2)" : "var(--cometchat-spacing-5)",
          paddingBottom: "var(--cometchat-spacing-3)",
          borderBottom: "1px solid var(--cometchat-neutral-color-200)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-1)" }}>
          {eyebrow && (
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
          )}
          <Heading
            style={{
              margin: 0,
              fontSize: level === 2 ? "20px" : "16px",
              fontWeight: "600",
              letterSpacing: "-0.01em",
              color: "var(--cometchat-neutral-color-900)",
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
            margin: "0 0 var(--cometchat-spacing-5)",
            color: "var(--cometchat-neutral-color-600)",
            maxWidth: 760,
            fontSize: "14px",
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
