import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Markdown,
  Heading,
  Subheading,
  Anchor,
  Canvas,
  DocsContext,
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

/** One story: its heading, its own description, and the canvas. */
const LocalizedStory: React.FC<{ story: any }> = ({ story }) => {
  const direction = useDocumentDirection();
  const ar = (v: unknown) =>
    direction === "rtl" && typeof v === "string" ? toArabic(v.trim()) : undefined;
  const description = ar(story.parameters?.docs?.description?.story);

  return (
    <Anchor storyId={story.id}>
      <Subheading>{ar(story.name) ?? story.name}</Subheading>
      {description ? (
        <Markdown>{description}</Markdown>
      ) : (
        <Description of={story.moduleExport} />
      )}
      <Canvas
        of={story.moduleExport}
        story={{ __forceInitialArgs: true } as never}
        source={{ __forceInitialArgs: true } as never}
      />
    </Anchor>
  );
};

/**
 * Replaces the stock <Stories /> block so the section heading and each story's
 * name and description can be localized. Mirrors its filtering: autodocs-only
 * when any story carries the tag, plus a project-level stories filter.
 */
const LocalizedStories: React.FC = () => {
  const direction = useDocumentDirection();
  const context = React.useContext(DocsContext) as any;
  const { componentStories, projectAnnotations, getStoryContext } = context;

  let stories = componentStories();
  const filter = projectAnnotations?.parameters?.docs?.stories?.filter;
  if (filter) stories = stories.filter((s: any) => filter(s, getStoryContext(s)));
  if (stories.some((s: any) => s.tags?.includes("autodocs"))) {
    stories = stories.filter(
      (s: any) => s.tags?.includes("autodocs") && !s.usesMount
    );
  }
  if (!stories.length) return null;

  const heading =
    (direction === "rtl" ? toArabic("Stories") : undefined) ?? "Stories";

  return (
    <>
      <Heading>{heading}</Heading>
      {stories.map((story: any) => (
        <LocalizedStory key={story.id} story={story} />
      ))}
    </>
  );
};

/** The component name — the leaf of the meta title. */
const LocalizedTitle: React.FC = () => {
  const direction = useDocumentDirection();
  const resolved = useOf("meta", ["meta"]);
  const meta = (resolved as { preparedMeta?: Record<string, any> })?.preparedMeta;
  const title: unknown = meta?.title;
  const leaf = typeof title === "string" ? title.split("/").pop()?.trim() : undefined;
  const arabic =
    direction === "rtl" && leaf ? toArabic(leaf) : undefined;
  return arabic ? <Title>{arabic}</Title> : <Title />;
};

export const FoundationDocsPage: React.FC = () => (
  <>
    <LocalizedTitle />
    <Subtitle />
    <LocalizedDescription />
    <LocalizedStories />
  </>
);
