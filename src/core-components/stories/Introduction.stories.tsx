import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Core Components/Introduction",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
    themes: { themeOverride: "Light" },
  },
};
export default meta;

export const Overview: StoryObj = {
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          padding: "var(--space-8)",
          marginBottom: "var(--space-8)",
          borderRadius: "var(--radius-2xl)",
          background: "linear-gradient(135deg, var(--color-ep-50) 0%, var(--color-static-white) 100%)",
          border: "1px solid var(--color-ep-100)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-ep-700)",
          }}
        >
          Core Components
        </span>
        <h1
          style={{
            margin: 0,
            fontSize: "var(--font-size-7)",
            lineHeight: "var(--line-height-title)",
            fontWeight: "var(--font-weight-bold)",
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          Core Components
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "var(--font-size-3)",
            lineHeight: "var(--line-height-h4)",
            color: "var(--color-text-secondary)",
            maxWidth: 720,
          }}
        >
          Higher-level composed components built from Base Components and Foundation tokens.
          These represent complete UI patterns ready for integration into product screens.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <ComponentCard
          title="Conversation List"
          description="A scrollable list of conversations with avatars, message previews, timestamps, and unread indicators."
        />
        <ComponentCard
          title="Chat Area"
          description="The main chat view combining message bubbles, date separators, and scroll behavior into a cohesive thread."
        />
        <ComponentCard
          title="Chat Bubbles"
          description="Sent and received message bubbles with text, media, reactions, timestamps, and read receipts."
        />
        <ComponentCard
          title="Message Composer"
          description="The input area for composing messages with text input, attachments, emoji, and send actions."
        />
      </div>
    </div>
  ),
};

function ComponentCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        padding: "var(--space-5)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-border-default)",
        background: "var(--color-bg-01)",
        boxShadow: "var(--shadow-xs)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
      }}
    >
      <strong
        style={{
          fontSize: "var(--font-size-3)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--line-height-h4)",
        }}
      >
        {title}
      </strong>
      <p
        style={{
          margin: 0,
          fontSize: "var(--font-size-2)",
          lineHeight: "var(--line-height-body)",
          color: "var(--color-text-tertiary)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
