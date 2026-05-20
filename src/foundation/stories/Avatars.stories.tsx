import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import {
  avatarRegistry,
  avatarCategories,
  type AvatarCategory,
} from "../tokens/avatars";

/**
 * Avatar and media assets extracted from Figma color styles.
 * Seven groups: Male Avatar, Female Avatar, Avatar Company Logo,
 * Group Avatar, Media Footage, Gif Footage, Sticker Footage.
 *
 * Each asset is a pre-rendered PNG at 2× resolution, served from Figma's CDN.
 * Use these as placeholder content in components that need profile images,
 * logos, or media thumbnails.
 */
const meta: Meta = {
  title: "CometChat Foundation/Avatars",
  tags: ["!autodocs"],
  parameters: { layout: "fullscreen", themes: { themeOverride: "Light" } },
};
export default meta;

/** Browse all categories. */
export const All: StoryObj = {
  render: () => <AllAvatars />,
};

export const MaleAvatar: StoryObj = {
  render: () => <AvatarGrid category="Male Avatar" />,
};

export const FemaleAvatar: StoryObj = {
  render: () => <AvatarGrid category="Female Avatar" />,
};

export const GroupAvatar: StoryObj = {
  render: () => <AvatarGrid category="Group Avatar" />,
};

/* ─── Components ───────────────────────────────────────────────────────────── */

function AvatarGrid({ category }: { category: AvatarCategory }) {
  const items = avatarRegistry[category];
  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title={category}
        description={`${items.length} assets. Click any tile to copy the image URL.`}
        meta={[{ label: "assets", value: String(items.length) }]}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: category.includes("Footage")
            ? "repeat(auto-fill, minmax(200px, 1fr))"
            : "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "var(--cometchat-spacing-3-5)",
        }}
      >
        {items.map((item) => (
          <AvatarTile
            key={item.name}
            name={item.name}
            imageUrl={item.imageUrl}
            isMedia={category.includes("Footage")}
          />
        ))}
      </div>
    </div>
  );
}

function AllAvatars() {
  const [query, setQuery] = useState("");

  const allowedCategories = avatarCategories.filter(
    (c) => c !== "Avatar company logo" && c !== "Media Footage" && c !== "Gif Footage" && c !== "Sticker Footage"
  );

  // Move "Group Avatar" to the end
  const orderedCategories = [
    ...allowedCategories.filter((c) => c !== "Group Avatar"),
    ...allowedCategories.filter((c) => c === "Group Avatar"),
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orderedCategories.map((c) => ({ category: c, items: avatarRegistry[c] }));
    return orderedCategories
      .map((c) => ({
        category: c,
        items: avatarRegistry[c].filter((i) => i.name.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const totalShown = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <PageHeader
        title="Avatars & Media"
        description="All avatar and media assets from the design system. Click any tile to copy the image URL."
        meta={[
          { label: "categories", value: String(orderedCategories.length) },
          { label: "total assets", value: String(orderedCategories.reduce((n, c) => n + avatarRegistry[c].length, 0)) },
        ]}
      />

      <div style={{ marginBottom: 24 }}>
        <div style={{ position: "relative", maxWidth: 360 }}>
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--color-neutral-400)",
              fontSize: "14px",
            }}
          >
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search avatars and media"
            style={{
              width: "100%",
              fontSize: "12px",
              padding: "8px 12px 8px 32px",
              borderRadius: "var(--cometchat-radius-2)",
              border: "1px solid var(--color-neutral-200)",
              background: "var(--cometchat-static-white)",
              outline: "none",
              fontFamily: "inherit",
              color: "var(--color-neutral-900)",
              boxShadow: "var(--cometchat-shadow-xs)",
            }}
          />
        </div>
        <div style={{ fontSize: "12px", color: "var(--color-neutral-600)", marginTop: "var(--cometchat-spacing-2)" }}>
          {totalShown} asset{totalShown === 1 ? "" : "s"}
        </div>
      </div>

      {filtered.map(({ category, items }) => (
        <Section key={category} title={category} description={`${items.length} assets`}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: category.includes("Footage")
                ? "repeat(auto-fill, minmax(200px, 1fr))"
                : "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "var(--cometchat-spacing-3-5)",
            }}
          >
            {items.map((item) => (
              <AvatarTile
                key={item.name}
                name={item.name}
                imageUrl={item.imageUrl}
                isMedia={category.includes("Footage")}
              />
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}

function AvatarTile({
  name,
  imageUrl,
  isMedia,
}: {
  name: string;
  imageUrl: string;
  isMedia?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy URL for ${name}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--cometchat-spacing-2)",
        padding: "var(--cometchat-spacing-3)",
        borderRadius: "var(--cometchat-radius-3)",
        border: `1px solid ${copied ? "var(--color-success-300)" : "var(--color-neutral-200)"}`,
        background: copied ? "var(--color-success-50)" : "var(--cometchat-static-white)",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 120ms ease",
        boxShadow: "var(--cometchat-shadow-xs)",
      }}
    >
      <div
        style={{
          width: isMedia ? "100%" : 64,
          height: isMedia ? 100 : 64,
          borderRadius: isMedia ? 8 : "50%",
          overflow: "hidden",
          background: "var(--color-neutral-50)",
          border: "1px solid var(--color-neutral-100)",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>
      <span
        style={{
          fontSize: "10px",
          fontFamily: "var(--cometchat-font-family)",
          color: copied ? "var(--cometchat-success-color)" : "var(--color-neutral-600)",
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {copied ? "Copied URL" : name}
      </span>
    </button>
  );
}
