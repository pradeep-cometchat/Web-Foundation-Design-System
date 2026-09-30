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
  toArabicDigits,
  reflowLike,
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
 * Arabic markdown for an English source. The line structure is restored first
 * (see reflowLike), and any markdown heading is labelled with its English text
 * so the on-page nav, which tocbot builds from heading text, stays English.
 */
const ArabicMarkdown: React.FC<{ english: string; arabic: string }> = ({ english, arabic }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const labels = [...english.matchAll(/^\s*#{1,6}\s+(.+?)\s*$/gm)].map((m) =>
      m[1].replace(/[*_`]/g, "")
    );
    const heads = ref.current?.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (!heads || heads.length !== labels.length) return;
    heads.forEach((h, i) => {
      h.setAttribute("data-heading-label", labels[i]);
      // Storybook's markdown slugger drops non-Latin letters, leaving an Arabic
      // heading with id="" — and the nav link pointing nowhere. Use the id the
      // English heading gets, so #states links work in both directions.
      if (!h.id) h.id = labels[i].toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
    });
  }, [english, arabic]);
  return (
    <div ref={ref} style={{ display: "contents" }}>
      <Markdown>{toArabicDigits(reflowLike(english, arabic))}</Markdown>
    </div>
  );
};

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

  const arabic =
    typeof english === "string" ? toArabic(english.trim()) : undefined;
  if (!arabic) return <Description />;

  // Every one of these descriptions carries markdown, so render it through
  // Storybook's own renderer rather than as plain text — otherwise the Arabic
  // loses the bold runs and sub-headings the English keeps.
  return <ArabicMarkdown english={english as string} arabic={arabic} />;
};

/** One story: its heading, its own description, and the canvas. */
const LocalizedStory: React.FC<{ story: any }> = ({ story }) => {
  const direction = useDocumentDirection();
  // The docs chrome resolves strings itself rather than through <T>, so the
  // numeral conversion has to be applied here too.
  const ar = (v: unknown) => {
    if (direction !== "rtl" || typeof v !== "string") return undefined;
    const hit = toArabic(v.trim());
    return hit === undefined ? undefined : toArabicDigits(hit);
  };
  const englishDescription: unknown = story.parameters?.docs?.description?.story;
  const arabicDescription =
    direction === "rtl" && typeof englishDescription === "string"
      ? toArabic(englishDescription.trim())
      : undefined;

  // The on-page nav is built by tocbot from each heading's text, which is
  // Arabic in RTL. tocbot prefers data-heading-label when present, so the
  // heading keeps its Arabic text while the nav shows the English story name.
  // Subheading doesn't forward props, so it's set through the story's anchor.
  React.useLayoutEffect(() => {
    const h3 = document.getElementById(`anchor--${story.id}`)?.querySelector("h3");
    if (!h3) return;
    if (direction === "rtl") h3.setAttribute("data-heading-label", story.name);
    else h3.removeAttribute("data-heading-label");
  }, [direction, story.id, story.name]);

  return (
    <Anchor storyId={story.id}>
      <Subheading>{ar(story.name) ?? story.name}</Subheading>
      {arabicDescription ? (
        <ArabicMarkdown english={englishDescription as string} arabic={arabicDescription} />
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
      <Heading data-heading-label={direction === "rtl" ? "Stories" : undefined}>
        {heading}
      </Heading>
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
  const hit = direction === "rtl" && leaf ? toArabic(leaf) : undefined;
  const arabic = hit === undefined ? undefined : toArabicDigits(hit);
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
