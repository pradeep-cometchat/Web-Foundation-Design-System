import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import {
  socialIconsBrand,
  socialIconsGray,
  fileTypeIcons,
  fileTypeSized,
  countryFlags,
  featuredIcons,
  featuredIconsOutline,
  miscIconCategories,
  miscIconRegistry,
  miscIconTotalCount,
  type MiscIconCategory,
  type MiscIconAsset,
} from "../tokens/miscIcons";

const meta: Meta = {
  title: "CometChat Foundation/Misc Icons",
  tags: ["!autodocs"],
  parameters: { layout: "fullscreen", themes: { themeOverride: "Light" } },
};
export default meta;

const SIZES = [16, 20, 24, 32, 40, 48] as const;
type IconSize = (typeof SIZES)[number];

export const All: StoryObj = { render: () => <BrowseAll /> };
export const SocialBrand: StoryObj = { name: "Social (Brand)", render: () => <IconGrid title="Social Icons — Brand" items={socialIconsBrand} /> };
export const SocialGray: StoryObj = { name: "Social (Gray)", render: () => <IconGrid title="Social Icons — Gray" items={socialIconsGray} /> };
export const FileTypes: StoryObj = { name: "File Types", render: () => <IconGrid title="File Type Icons" items={fileTypeIcons} /> };
export const FileTypesSized: StoryObj = { name: "File Types (Sized)", render: () => <IconGrid title="File Type — Sized" items={fileTypeSized} /> };
export const Flags: StoryObj = { name: "Country Flags", render: () => <IconGrid title="Country Flags" items={countryFlags} isFlag /> };
export const Featured: StoryObj = { name: "Featured Icons", render: () => <FeaturedGrid title="Featured Icons (Filled)" items={featuredIcons} /> };
export const FeaturedOutline: StoryObj = { name: "Featured Icons (Outline)", render: () => <FeaturedGrid title="Featured Icons (Outline)" items={featuredIconsOutline} /> };

/* ─── Size Selector ────────────────────────────────────────────────────────── */

function SizeBar({ size, onChange }: { size: IconSize; onChange: (s: IconSize) => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)", padding: "var(--cometchat-spacing-3-5)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-static-white)", boxShadow: "var(--cometchat-shadow-xs)", marginBottom: 20 }}>
      <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Size</span>
      <div style={{ display: "inline-flex", padding: 3, borderRadius: "var(--cometchat-radius-2)", background: "var(--cometchat-background-color-02)", gap: 2 }}>
        {SIZES.map((s) => (
          <button key={s} type="button" onClick={() => onChange(s)} style={{ padding: "4px 10px", fontSize: "12px", fontWeight: "600", borderRadius: "var(--cometchat-radius-1-5)", border: "none", background: s === size ? "var(--cometchat-static-white)" : "transparent", color: s === size ? "var(--cometchat-text-color-primary)" : "var(--cometchat-text-color-secondary)", cursor: "pointer", fontFamily: "inherit", boxShadow: s === size ? "var(--cometchat-shadow-xs)" : "none" }}>{s}</button>
        ))}
      </div>
      <span style={{ fontSize: "10px", color: "var(--cometchat-text-color-tertiary)" }}>{size}px</span>
    </div>
  );
}

/* ─── Browse All ───────────────────────────────────────────────────────────── */

function BrowseAll() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MiscIconCategory | "All">("All");
  const [size, setSize] = useState<IconSize>(24);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const cats = category === "All" ? miscIconCategories : [category];
    return cats.map((c) => ({ category: c, items: q ? miscIconRegistry[c].filter((i) => i.name.toLowerCase().includes(q)) : miscIconRegistry[c] })).filter((g) => g.items.length > 0);
  }, [query, category]);

  const totalShown = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader title="Miscellaneous Icons" description="All icons exported as SVG. Adjust size and click any tile to copy SVG code." meta={[{ label: "total", value: String(miscIconTotalCount) }]} />
      <SizeBar size={size} onChange={setSize} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-3)", marginBottom: 20, alignItems: "center" }}>
        <div style={{ position: "relative", flex: "1 1 260px", minWidth: 220 }}>
          <span aria-hidden style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--cometchat-icon-color-tertiary)", fontSize: "14px" }}>⌕</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search icons" style={{ width: "100%", fontSize: "12px", padding: "8px 12px 8px 32px", borderRadius: "var(--cometchat-radius-2)", border: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-static-white)", outline: "none", fontFamily: "inherit", color: "var(--cometchat-text-color-primary)" }} />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value as any)} style={{ fontSize: "12px", padding: "8px 12px", borderRadius: "var(--cometchat-radius-2)", border: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-static-white)", color: "var(--cometchat-text-color-primary)", fontFamily: "inherit", cursor: "pointer" }}>
          <option value="All">All categories</option>
          {miscIconCategories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-secondary)", marginLeft: "auto" }}>{totalShown} icons</span>
      </div>
      {filtered.map(({ category: cat, items }) => (
        <Section key={cat} title={cat} description={`${items.length} icons`}>
          <TileGrid items={items} size={size} isFlag={cat === "Country Flags"} />
        </Section>
      ))}
    </div>
  );
}

/* ─── Icon Grid ────────────────────────────────────────────────────────────── */

function IconGrid({ title, items, isFlag }: { title: string; items: MiscIconAsset[]; isFlag?: boolean }) {
  const [size, setSize] = useState<IconSize>(24);
  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader title={title} description={`${items.length} SVG icons. Click any tile to copy SVG code.`} meta={[{ label: "icons", value: String(items.length) }]} />
      <SizeBar size={size} onChange={setSize} />
      <TileGrid items={items} size={size} isFlag={isFlag} />
    </div>
  );
}

/* ─── Featured Grid (grouped by size) ─────────────────────────────────────── */

function FeaturedGrid({ title, items }: { title: string; items: MiscIconAsset[] }) {
  const [size, setSize] = useState<IconSize>(32);
  const sizeOrder = ["sm", "md", "lg", "xl"];
  const grouped = sizeOrder.map((sz) => ({ size: sz, items: items.filter((i) => i.size === sz) })).filter((g) => g.items.length > 0);
  const sizeLabels: Record<string, string> = { sm: "Small (sm)", md: "Medium (md)", lg: "Large (lg)", xl: "Extra Large (xl)" };

  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader title={title} description={`${items.length} SVG icons grouped by size.`} meta={[{ label: "icons", value: String(items.length) }]} />
      <SizeBar size={size} onChange={setSize} />
      {grouped.map(({ size: sz, items: sizeItems }) => (
        <Section key={sz} title={sizeLabels[sz] ?? sz} description={`${sizeItems.length} icons`}>
          <TileGrid items={sizeItems} size={size} />
        </Section>
      ))}
    </div>
  );
}

/* ─── Tile Grid ────────────────────────────────────────────────────────────── */

function TileGrid({ items, size, isFlag }: { items: MiscIconAsset[]; size: IconSize; isFlag?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(size + 60, 140)}px, 1fr))`, gap: 10 }}>
      {items.map((item) => <IconTile key={item.name} item={item} size={size} isFlag={isFlag} />)}
    </div>
  );
}

/* ─── Icon Tile ────────────────────────────────────────────────────────────── */

function IconTile({ item, size, isFlag }: { item: MiscIconAsset; size: IconSize; isFlag?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);

  const copy = async () => {
    try {
      setCopying(true);
      const resp = await fetch(item.svgUrl);
      const svgText = await resp.text();
      await navigator.clipboard.writeText(svgText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      try { await navigator.clipboard.writeText(item.svgUrl); setCopied(true); setTimeout(() => setCopied(false), 1200); } catch {}
    } finally { setCopying(false); }
  };

  const w = isFlag ? size * 1.4 : size;
  const h = size;

  return (
    <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--cometchat-radius-2-5)", border: `1px solid ${copied ? "var(--cometchat-success-color)" : "var(--cometchat-border-color-default)"}`, background: copied ? "var(--cometchat-background-color-success)" : "var(--cometchat-static-white)", overflow: "hidden", boxShadow: "var(--cometchat-shadow-xs)", transition: "all 120ms ease" }}>
      <button type="button" onClick={copy} title={`Copy SVG for ${item.name}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1-5)", padding: "var(--cometchat-spacing-3)", cursor: "pointer", fontFamily: "inherit", border: "none", background: "transparent" }}>
        <div style={{ width: w, height: h, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={item.svgUrl} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
        </div>
        <span style={{ fontSize: "10px", fontFamily: "var(--cometchat-font-family)", color: copied ? "var(--cometchat-success-color)" : "var(--cometchat-text-color-secondary)", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "center" }}>
          {item.name}
        </span>
      </button>
      <div style={{ borderTop: "1px solid var(--cometchat-background-color-02)", padding: "6px 10px", display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={copy} style={{ fontSize: "10px", fontWeight: "600", color: copied ? "var(--cometchat-success-color)" : "var(--cometchat-extended-primary-color-700)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: "2px 8px", borderRadius: "var(--cometchat-radius-1)" }}>
          {copied ? "✓ Copied" : copying ? "..." : "Copy SVG"}
        </button>
      </div>
    </div>
  );
}
