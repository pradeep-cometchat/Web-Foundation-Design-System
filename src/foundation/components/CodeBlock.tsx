import React from "react";
import { CopyButton } from "./CopyButton";

export interface CodeBlockProps {
  code: string;
  language?: string;
  /** Label shown in the top-right. Defaults to the language. */
  label?: string;
}

/**
 * Formatted code block with a copy button and language badge.
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "css",
  label,
}) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-neutral-200)",
        background: "var(--color-neutral-25)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
          borderBottom: "1px solid var(--color-neutral-200)",
          background: "var(--color-neutral-50)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
          }}
        >
          {label ?? language}
        </span>
        <CopyButton value={code} label="Copy" />
      </div>
      <pre
        style={{
          margin: 0,
          padding: 14,
          overflowX: "auto",
          fontFamily:
            "var(--font-family-body)",
          fontSize: "var(--font-size-1)",
          lineHeight: 1.6,
          color: "var(--color-neutral-800)",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};
