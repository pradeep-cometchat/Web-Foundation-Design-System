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
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-4)",
          padding: "var(--cometchat-spacing-8)",
          marginBottom: "var(--cometchat-spacing-8)",
          borderRadius: "var(--cometchat-radius-4)",
          background: "linear-gradient(135deg, var(--cometchat-extended-primary-color-50) 0%, var(--cometchat-static-white) 100%)",
          border: "1px solid var(--cometchat-extended-primary-color-100)",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--cometchat-extended-primary-color-700)",
          }}
        >
          Core Components
        </span>
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            lineHeight: "40px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            color: "var(--cometchat-text-color-primary)",
          }}
        >
          Core Components
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--cometchat-text-color-secondary)",
            maxWidth: 720,
          }}
        >
          Higher-level composed components built from Base Components and Foundation tokens.
          These represent complete UI patterns ready for integration into product screens.
          All components are responsive and adapt to mobile, tablet, and desktop viewports.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "var(--cometchat-spacing-4)",
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
        padding: "var(--cometchat-spacing-5)",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-border-color-default)",
        background: "var(--cometchat-background-color-01)",
        boxShadow: "var(--cometchat-shadow-xs)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-2)",
      }}
    >
      <strong
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-primary)",
          lineHeight: "24px",
        }}
      >
        {title}
      </strong>
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: "20px",
          color: "var(--cometchat-text-color-tertiary)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
