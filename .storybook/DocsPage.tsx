import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Stories,
  Markdown,
  useOf,
} from "@storybook/blocks";
import {
  useDocumentDirection,
  toArabic,
} from "../src/cometchat-foundation/localization";

/**
 * Custom autodocs page layout.
 *
 * The default Storybook autodocs page renders Title → Subtitle → Description →
 * Primary (first story preview) → Controls (argTypes table) → Stories.
 *
 * We hide the Playground story from docs (it's still in the sidebar), so the
 * "Primary" block becomes noise and the Controls table sits empty. This layout
 * drops both and goes straight from description into the curated Stories.
 */

/**
 * The component description comes from a JSDoc comment that react-docgen
 * extracts at build time, so it cannot be wrapped at the call site like the
 * rest of the docs chrome. Read it out of the docs context instead and resolve
 * it through the shared dictionary; anything untranslated falls back to
 * Storybook's own block, so English is untouched.
 */
const LocalizedDescription: React.FC = () => {
  const direction = useDocumentDirection();
  const resolved = useOf("meta", ["meta"]);


  if (direction !== "rtl") return <Description />;

  // Mirrors Storybook's own resolution: an explicit parameter first, then the
  // docgen extractor, which is where a JSDoc comment above `meta` ends up.
  const meta = (resolved as { preparedMeta?: Record<string, any> })?.preparedMeta;
  const parameters = meta?.parameters;
  const component = meta?.component;
  const english: unknown =
    parameters?.docs?.description?.component ??
    parameters?.docs?.extractComponentDescription?.(component, {
      component,
      parameters,
    });

  const arabic = typeof english === "string" ? toArabic(english.trim()) : undefined;
  if (!arabic) return <Description />;

  // Every one of these descriptions carries markdown, so render it through
  // Storybook's own renderer rather than as plain text — otherwise the Arabic
  // loses the bold runs and sub-headings the English keeps.
  return <Markdown>{arabic}</Markdown>;
};

export const FoundationDocsPage: React.FC = () => (
  <>
    <Title />
    <Subtitle />
    <LocalizedDescription />
    <Stories />
  </>
);
