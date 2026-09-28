import React, { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { CopyButton } from "./CopyButton";
import { T, useT, useIsRTL } from "../localization";

export type TokenRow = {
  name: string;
  value: string | number;
  cssVar: string;
  preview?: React.ReactNode;
  description?: string;
};

export interface TokenTableProps {
  rows: TokenRow[];
  title?: string;
  searchable?: boolean;
  previewHeader?: string;
  valueHeader?: string;
}

export const TokenTable: React.FC<TokenTableProps> = ({
  rows,
  title,
  searchable = true,
  previewHeader = "Preview",
  valueHeader = "Value",
}) => {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const t = useT();
  const isRTL = useIsRTL();

  // "→ spacing-4" in a value cell means "maps to". The arrow encodes
  // derivation, which follows reading order rather than a fixed physical
  // direction, so it flips in RTL. Handled here because TokenTable is the only
  // thing that renders these values — the eight call sites build plain strings.
  const refValue = (v: string | number) =>
    isRTL && typeof v === "string" && v.startsWith("→ ")
      ? `← ${v.slice(2)}`
      : v;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cssVar.toLowerCase().includes(q) ||
        String(r.value).toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <section
      aria-label={title ?? "Token table"}
      style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-3-5)" }}
    >
      {(title || searchable) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "var(--cometchat-spacing-3)",
            flexWrap: "wrap",
          }}
        >
          {title && (
            <h3
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--cometchat-text-color-primary)",
              }}
            >
              <T>{title}</T>
            </h3>
          )}
          {searchable && (
            <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  // Pairs with the input's paddingInlineStart below — the two
                  // must convert together or the caret runs under the glyph.
                  insetInlineStart: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--cometchat-neutral-color-400)",
                  fontSize: "14px",
                  lineHeight: 1,
                }}
              >
                <Icon name="search" variant="rounded" size={18} ariaLabel="" />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search tokens")}
                // Token names, CSS variables and hex values are Latin
                // identifiers, so the field's content stays LTR even in Arabic
                // — otherwise a query starting `--` has its dashes thrown to
                // the far end. That fixes the field's own inline axis to LTR,
                // so its padding and alignment are driven from the page
                // direction instead, keeping the glyph and the text gap
                // mirrored together.
                dir="ltr"
                style={{
                  width: "100%",
                  fontSize: "12px",
                  paddingBlock: "8px",
                  // Physical, not logical: dir="ltr" above pins this element's
                  // own inline axis, so logical props here would resolve LTR
                  // and land opposite the glyph.
                  paddingLeft: isRTL ? "12px" : "32px",
                  paddingRight: isRTL ? "32px" : "12px",
                  textAlign: isRTL ? "right" : "left",
                  borderRadius: "var(--cometchat-radius-2)",
                  border: "1px solid var(--cometchat-border-color-default)",
                  background: "var(--cometchat-background-color-01)",
                  outline: "none",
                  fontFamily: "inherit",
                  color: "var(--cometchat-text-color-primary)",
                  boxShadow: "var(--cometchat-shadow-xs)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--cometchat-extended-primary-color-400)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "var(--cometchat-neutral-color-200)")
                }
              />
            </div>
          )}
        </div>
      )}
      <div
        style={{
          overflow: "auto",
          border: "1px solid var(--cometchat-border-color-default)",
          borderRadius: "var(--cometchat-radius-3)",
          background: "var(--cometchat-background-color-01)",
          boxShadow: "var(--cometchat-shadow-xs)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            fontSize: "12px",
            color: "var(--cometchat-text-color-primary)",
          }}
        >
          <thead>
            <tr style={{ background: "var(--cometchat-background-color-02)", textAlign: "start" }}>
              <th style={th}>
                <T>{previewHeader}</T>
              </th>
              <th style={th}>
                <T>Token</T>
              </th>
              <th style={th}>
                <T>{valueHeader}</T>
              </th>
              <th style={th}>
                <T>CSS variable</T>
              </th>
              <th style={{ ...th, width: 1 }} aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={row.name}
                onMouseEnter={() => setHovered(row.name)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background:
                    hovered === row.name
                      ? "var(--cometchat-extended-primary-color-50)"
                      : i % 2 === 0
                      ? "var(--cometchat-background-color-01)"
                      : "var(--cometchat-background-color-02)",
                  transition: "background 120ms ease",
                }}
              >
                <td style={td}>{row.preview}</td>
                <td style={td}>
                  <code style={codeStyle}>{row.name}</code>
                  {row.description && (
                    <div
                      style={{
                        fontSize: "10px",
                        color: "var(--cometchat-neutral-color-600)",
                        marginTop: 3,
                      }}
                    >
                      {row.description}
                    </div>
                  )}
                </td>
                <td style={td}>
                  <code style={codeStyle}>{refValue(row.value)}</code>
                </td>
                <td style={td}>
                  <code style={codeStyle}>{row.cssVar}</code>
                </td>
                <td style={{ ...td, textAlign: "end" }}>
                  <CopyButton value={row.cssVar} label="Copy" variant="ghost" />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    ...td,
                    textAlign: "center",
                    color: "var(--cometchat-neutral-color-500)",
                    padding: 24,
                  }}
                >
                  No tokens match "{query}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const th: React.CSSProperties = {
  padding: "11px 16px",
  fontWeight: "600",
  fontSize: "10px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--cometchat-text-color-tertiary)",
  borderBottom: "1px solid var(--cometchat-border-color-default)",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "12px 16px",
  verticalAlign: "middle",
  borderBottom: "1px solid var(--cometchat-border-color-light)",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: "12px",
  color: "var(--cometchat-text-color-primary)",
  background: "var(--cometchat-background-color-02)",
  padding: "2px 6px",
  borderRadius: "var(--cometchat-radius-1)",
  border: "1px solid var(--cometchat-border-color-default)",
};
