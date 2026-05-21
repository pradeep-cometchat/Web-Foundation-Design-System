import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Base Components/Introduction",
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
  render: () => <IntroductionPage />,
};

function IntroductionPage() {
  return (
    <div style={{ padding: "40px 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
      {/* HERO */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "48px 40px",
          borderRadius: "var(--cometchat-radius-5)",
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--cometchat-background-color-info) 0%, var(--cometchat-background-color-info) 35%, var(--cometchat-static-white) 75%)",
          border: "1px solid var(--cometchat-background-color-info)",
          marginBottom: 40,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--cometchat-background-color-info) 0%, transparent 70%)",
            opacity: 0.7,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--cometchat-spacing-2)",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--cometchat-extended-primary-color-900)",
              background: "var(--cometchat-static-white)",
              padding: "6px 12px",
              borderRadius: "var(--cometchat-radius-max)",
              border: "1px solid var(--cometchat-extended-primary-color-200)",
              boxShadow: "var(--cometchat-shadow-xs)",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--cometchat-info-color)",
              }}
            />
            Base Components · v0.1
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              lineHeight: 1.08,
              fontWeight: "700",
              letterSpacing: "-0.025em",
              color: "var(--cometchat-neutral-color-900)",
            }}
          >
            Base Components
          </h1>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: "16px",
              lineHeight: 1.55,
              color: "var(--cometchat-neutral-color-700)",
            }}
          >
            Reusable, atomic UI components built on top of the foundation tokens.
            These are the building blocks for every feature and screen — buttons,
            inputs, labels, tags, and more. Each component consumes foundation
            tokens directly and exposes a clean, composable API.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-2)", marginTop: 24 }}>
            <HeroChip label="components" value="28" />
            <HeroChip label="variants" value="80+" />
            <HeroChip label="tokens" value="Foundation" />
            <HeroChip label="a11y" value="WCAG AA" />
            <HeroChip label="responsive" value="Mobile · Tablet · Desktop" />
          </div>
        </div>
      </div>

      {/* WHAT'S INSIDE */}
      <SectionHeading>What's inside</SectionHeading>
      <p style={{ color: "var(--cometchat-neutral-color-600)", marginTop: 0, maxWidth: 720, fontSize: "14px", lineHeight: 1.6 }}>
        28 base components form the atomic layer. Each is documented with interactive controls, accessibility notes, and usage guidelines.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "var(--cometchat-spacing-3-5)",
          margin: "20px 0 40px",
        }}
      >
        <ComponentCard name="Action Sheet" description="Bottom sheet overlay presenting a set of contextual actions or options." />
        <ComponentCard name="Avatar" description="User or entity representation with image, initials, or icon fallback." />
        <ComponentCard name="Button" description="Primary, secondary, and ghost variants with icon support and loading states." />
        <ComponentCard name="Change Scope" description="Scope switcher for toggling between contexts like channels or groups." />
        <ComponentCard name="Checkbox" description="Single and group checkboxes with indeterminate state support." />
        <ComponentCard name="Confirm Dialog" description="Modal confirmation prompt with customizable actions and messaging." />
        <ComponentCard name="Context Menu" description="Right-click or long-press menu with grouped actions and icons." />
        <ComponentCard name="Conversation Starter" description="Entry point component for initiating new conversations." />
        <ComponentCard name="Conversation Summary" description="Condensed preview of a conversation with metadata and last message." />
        <ComponentCard name="Date" description="Date display and formatting component with relative time support." />
        <ComponentCard name="Dropdown" description="Select menus with search, multi-select, and custom rendering." />
        <ComponentCard name="Emoji Keyboard" description="Emoji picker with categories, search, and skin tone selection." />
        <ComponentCard name="Error Boundary" description="Graceful error handling with fallback UI and retry actions." />
        <ComponentCard name="Flag Message Dialog" description="Dialog for reporting or flagging inappropriate messages." />
        <ComponentCard name="Fullscreen Viewer" description="Immersive media viewer with zoom, pan, and navigation controls." />
        <ComponentCard name="Link Dialog" description="Dialog for inserting or editing hyperlinks with URL validation." />
        <ComponentCard name="Link Popover" description="Inline popover showing link preview with open and edit actions." />
        <ComponentCard name="List Item" description="Versatile list row with leading/trailing elements and interaction states." />
        <ComponentCard name="Media Recorder" description="Audio and video recording interface with playback preview." />
        <ComponentCard name="Message Preview" description="Compact message representation for quotes, replies, and forwards." />
        <ComponentCard name="Popover" description="Floating content container with configurable placement and triggers." />
        <ComponentCard name="Radio Button" description="Single-select option within a group with label and description." />
        <ComponentCard name="Search Bar" description="Search input with suggestions, filters, and clear functionality." />
        <ComponentCard name="Smart Replies" description="AI-suggested quick reply chips for fast message responses." />
        <ComponentCard name="Thread View" description="Threaded conversation display with reply composition." />
        <ComponentCard name="Toast" description="Transient notification with auto-dismiss, actions, and severity levels." />
        <ComponentCard name="Typing Indicator" description="Animated indicator showing when other users are composing a message." />
      </div>

      {/* PRINCIPLES */}
      <SectionHeading>Design principles</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--cometchat-spacing-3-5)", margin: "20px 0 40px" }}>
        <PrincipleCard title="Token-first" body="Every color, spacing, and radius value comes from foundation tokens. No magic numbers." />
        <PrincipleCard title="Composable" body="Components are small and focused. Combine them to build complex patterns without tight coupling." />
        <PrincipleCard title="Accessible" body="Keyboard navigation, ARIA attributes, and focus management are built in from the start." />
        <PrincipleCard title="Themeable" body="Light and dark modes work automatically through CSS variable remapping. No prop changes needed." />
        <PrincipleCard title="Responsive" body="Mobile-first with adaptive layouts. Components scale from 320px mobile to desktop with touch-friendly targets on all viewports." />
      </div>

      {/* USAGE */}
      <SectionHeading>Usage</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--cometchat-spacing-4)", margin: "20px 0 40px" }}>
        <div style={panelStyle}>
          <div style={panelLabel}>Import & use</div>
          <pre style={codePre}><code>{`import { Button } from "@base-components/Button";
import { Avatar } from "@base-components/Avatar";
import { Toast } from "@base-components/Toast";

<Button variant="primary" size="md">
  Send message
</Button>

<Avatar
  name="John Doe"
  src="/avatars/john.png"
  size="md"
/>

<Toast severity="success" dismissible>
  Message sent successfully
</Toast>`}</code></pre>
        </div>
        <div style={panelStyle}>
          <div style={panelLabel}>Composition pattern</div>
          <pre style={codePre}><code>{`import { ListItem } from "@base-components/ListItem";
import { Avatar } from "@base-components/Avatar";
import { TypingIndicator } from "@base-components/TypingIndicator";
import { ContextMenu } from "@base-components/ContextMenu";

<ContextMenu actions={["Reply", "Forward", "Flag"]}>
  <ListItem
    leading={<Avatar name="Jane" size="sm" />}
    title="Jane Smith"
    subtitle={<TypingIndicator />}
  />
</ContextMenu>`}</code></pre>
        </div>
      </div>
    </div>
  );
}

/* ─── Helper components ─── */

function HeroChip({ label, value }: { label: string; value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--cometchat-spacing-1-5)",
        fontSize: "12px",
        fontWeight: "500",
        color: "var(--cometchat-neutral-color-700)",
        background: "var(--cometchat-static-white)",
        border: "1px solid var(--cometchat-neutral-color-300)",
        borderRadius: "var(--cometchat-radius-max)",
        padding: "5px 12px",
      }}
    >
      <span style={{ color: "var(--cometchat-neutral-color-500)", fontSize: "10px" }}>{label}</span>
      <span style={{ fontWeight: "600" }}>{value}</span>
    </span>
  );
}

function ComponentCard({ name, description }: { name: string; description: string }) {
  const storyId = `base-components-${name.toLowerCase().replace(/\s+/g, "-")}--docs`;

  const handleClick = () => {
    try {
      // Navigate within Storybook using the iframe's parent
      const baseUrl = window.top?.location.href.split("?")[0] || "";
      window.top!.location.href = `${baseUrl}?path=/docs/${storyId}`;
    } catch {
      // Fallback: try navigating within the iframe
      window.location.href = `?path=/docs/${storyId}`;
    }
  };

  return (
    <a
      href={`?path=/docs/${storyId}`}
      onClick={(e) => { e.preventDefault(); handleClick(); }}
      style={{
        display: "block",
        padding: "20px",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-neutral-color-300)",
        background: "var(--cometchat-static-white)",
        transition: "box-shadow 0.15s, border-color 0.15s, transform 0.15s",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--cometchat-extended-primary-color-200)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--cometchat-shadow-md)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--cometchat-neutral-color-300)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--cometchat-neutral-color-900)", marginBottom: 6 }}>
        {name}
      </div>
      <div style={{ fontSize: "12px", color: "var(--cometchat-neutral-color-600)", lineHeight: 1.5 }}>
        {description}
      </div>
    </a>
  );
}

function PrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-neutral-color-300)",
        background: "var(--cometchat-neutral-color-50)",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-900)", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: "12px", color: "var(--cometchat-neutral-color-600)", lineHeight: 1.5 }}>
        {body}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "20px",
        fontWeight: "600",
        letterSpacing: "-0.01em",
        color: "var(--cometchat-neutral-color-900)",
        borderBottom: "1px solid var(--cometchat-neutral-color-300)",
        paddingBottom: 10,
        margin: "32px 0 8px",
      }}
    >
      {children}
    </h2>
  );
}

const panelStyle: React.CSSProperties = {
  padding: "24px",
  borderRadius: "var(--cometchat-radius-3)",
  border: "1px solid var(--cometchat-neutral-color-300)",
  background: "var(--cometchat-neutral-color-50)",
};

const panelLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--cometchat-neutral-color-500)",
  marginBottom: "var(--cometchat-spacing-3)",
};

const codePre: React.CSSProperties = {
  margin: 0,
  padding: "16px",
  borderRadius: "var(--cometchat-radius-2)",
  background: "var(--cometchat-neutral-color-900)",
  color: "var(--cometchat-neutral-color-100)",
  fontSize: "12px",
  lineHeight: 1.6,
  overflow: "auto",
  fontFamily: "var(--cometchat-font-family)",
};
