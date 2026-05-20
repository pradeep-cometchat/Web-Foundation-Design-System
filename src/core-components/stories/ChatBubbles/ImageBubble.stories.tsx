import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Image Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   LAYOUT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Single: StoryObj = {
  name: "Single Image — Sent",
  parameters: { docs: { description: { story: "Single image displayed at full width within the sent bubble." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="single" variant="sent" />
    </Wrapper>
  ),
};

export const SingleReceived: StoryObj = {
  name: "Single Image — Received",
  parameters: { docs: { description: { story: "Single image displayed at full width within the received bubble." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="single" variant="received" />
    </Wrapper>
  ),
};

export const TwoGrid: StoryObj = {
  name: "2 Grid — Sent",
  parameters: { docs: { description: { story: "Two images displayed in a 2-column grid." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="2-grid" variant="sent" />
    </Wrapper>
  ),
};

export const TwoGridReceived: StoryObj = {
  name: "2 Grid — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="2-grid" variant="received" />
    </Wrapper>
  ),
};

export const ThreeGrid: StoryObj = {
  name: "3 Grid — Sent",
  parameters: { docs: { description: { story: "Three images — one large on left, two stacked on right." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="3-grid" variant="sent" />
    </Wrapper>
  ),
};

export const ThreeGridReceived: StoryObj = {
  name: "3 Grid — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="3-grid" variant="received" />
    </Wrapper>
  ),
};

export const FourGrid: StoryObj = {
  name: "4 Grid — Sent",
  parameters: { docs: { description: { story: "Four images in a 2×2 grid layout." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="4-grid" variant="sent" />
    </Wrapper>
  ),
};

export const FourGridReceived: StoryObj = {
  name: "4 Grid — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="4-grid" variant="received" />
    </Wrapper>
  ),
};

export const FourPlusGrid: StoryObj = {
  name: "4+ Grid — Sent",
  parameters: { docs: { description: { story: "Four images in a 2×2 grid with a '+N' overlay on the last image indicating more." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="4+-grid" extraCount={3} variant="sent" />
    </Wrapper>
  ),
};

export const FourPlusGridReceived: StoryObj = {
  name: "4+ Grid — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
    </Wrapper>
  ),
};

export const Horizontal: StoryObj = {
  name: "Horizontal — Sent",
  parameters: { docs: { description: { story: "Landscape/horizontal image displayed wider than tall." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="horizontal" variant="sent" />
    </Wrapper>
  ),
};

export const HorizontalReceived: StoryObj = {
  name: "Horizontal — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="horizontal" variant="received" />
    </Wrapper>
  ),
};

export const Vertical: StoryObj = {
  name: "Vertical — Sent",
  parameters: { docs: { description: { story: "Portrait/vertical image displayed taller than wide." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="vertical" variant="sent" />
    </Wrapper>
  ),
};

export const VerticalReceived: StoryObj = {
  name: "Vertical — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="vertical" variant="received" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   LOADING STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const SingleLoading: StoryObj = {
  name: "Single — Loading (Sent)",
  parameters: { docs: { description: { story: "Single image in loading state with a cancel button overlay." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="single-loading" variant="sent" />
    </Wrapper>
  ),
};

export const SingleLoadingReceived: StoryObj = {
  name: "Single — Loading (Received)",
  render: () => (
    <Wrapper>
      <ImageBubble layout="single-loading" variant="received" />
    </Wrapper>
  ),
};

export const MultipleLoading: StoryObj = {
  name: "Multiple — Loading (Sent)",
  parameters: { docs: { description: { story: "Multiple images in loading state with a cancel button overlay." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="multiple-loading" variant="sent" />
    </Wrapper>
  ),
};

export const MultipleLoadingReceived: StoryObj = {
  name: "Multiple — Loading (Received)",
  render: () => (
    <Wrapper>
      <ImageBubble layout="multiple-loading" variant="received" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SPECIAL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const SensitiveContent: StoryObj = {
  name: "Sensitive Content — Sent",
  parameters: { docs: { description: { story: "Image hidden behind a sensitive content warning with a 'See Photo' action." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="sensitive" variant="sent" />
    </Wrapper>
  ),
};

export const SensitiveContentReceived: StoryObj = {
  name: "Sensitive Content — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="sensitive" variant="received" />
    </Wrapper>
  ),
};

export const Placeholder: StoryObj = {
  name: "Placeholder — Sent",
  parameters: { docs: { description: { story: "Empty placeholder state before an image loads." } } },
  render: () => (
    <Wrapper>
      <ImageBubble layout="placeholder" variant="sent" />
    </Wrapper>
  ),
};

export const PlaceholderReceived: StoryObj = {
  name: "Placeholder — Received",
  render: () => (
    <Wrapper>
      <ImageBubble layout="placeholder" variant="received" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllLayouts: StoryObj = {
  name: "All Layouts",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-4)", maxWidth: 1200 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Single (Sent)</Label>
        <ImageBubble layout="single" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Single (Received)</Label>
        <ImageBubble layout="single" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>2 Grid (Sent)</Label>
        <ImageBubble layout="2-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>2 Grid (Received)</Label>
        <ImageBubble layout="2-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>3 Grid (Sent)</Label>
        <ImageBubble layout="3-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>3 Grid (Received)</Label>
        <ImageBubble layout="3-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>4 Grid (Sent)</Label>
        <ImageBubble layout="4-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>4 Grid (Received)</Label>
        <ImageBubble layout="4-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>4+ Grid (Sent)</Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>4+ Grid (Received)</Label>
        <ImageBubble layout="4+-grid" extraCount={3} variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Horizontal (Sent)</Label>
        <ImageBubble layout="horizontal" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Horizontal (Received)</Label>
        <ImageBubble layout="horizontal" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Single Loading (Sent)</Label>
        <ImageBubble layout="single-loading" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Single Loading (Received)</Label>
        <ImageBubble layout="single-loading" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Multiple Loading (Sent)</Label>
        <ImageBubble layout="multiple-loading" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Multiple Loading (Received)</Label>
        <ImageBubble layout="multiple-loading" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sensitive Content (Sent)</Label>
        <ImageBubble layout="sensitive" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Sensitive Content (Received)</Label>
        <ImageBubble layout="sensitive" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Placeholder (Sent)</Label>
        <ImageBubble layout="placeholder" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Label>Placeholder (Received)</Label>
        <ImageBubble layout="placeholder" variant="received" />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Single Image -->
<div class="image-bubble image-bubble--single">
  <img src="..." alt="..." class="image-bubble__img" />
</div>

<!-- 2 Grid -->
<div class="image-bubble image-bubble--grid-2">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 3 Grid (1 large left + 2 stacked right) -->
<div class="image-bubble image-bubble--grid-3">
  <img src="..." class="image-bubble__img image-bubble__img--large" />
  <div class="image-bubble__stack">
    <img src="..." class="image-bubble__img" />
    <img src="..." class="image-bubble__img" />
  </div>
</div>

<!-- 4 Grid -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
</div>

<!-- 4+ Grid (with overlay count) -->
<div class="image-bubble image-bubble--grid-4">
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <img src="..." class="image-bubble__img" />
  <div class="image-bubble__img image-bubble__more">
    <img src="..." />
    <span class="image-bubble__more-count">+3</span>
  </div>
</div>

<!-- Loading State -->
<div class="image-bubble image-bubble--single image-bubble--loading">
  <img src="..." class="image-bubble__img" />
  <button class="image-bubble__cancel">
    <span class="icon-rounded">close</span>
  </button>
</div>

<!-- Sensitive Content -->
<div class="image-bubble image-bubble--sensitive">
  <span class="icon-rounded">visibility_off</span>
  <span class="image-bubble__sensitive-title">Sensitive Content</span>
  <span class="image-bubble__sensitive-desc">This media may contain graphic or violent content</span>
  <button class="image-bubble__sensitive-btn">See Photo</button>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Single" description="One image at full container width, square aspect ratio." />
          <StateCard title="2 Grid" description="Two images side by side, each taking 50% width with a 2px gap." />
          <StateCard title="3 Grid" description="One large image on the left (50%), two stacked images on the right (50%)." />
          <StateCard title="4 Grid" description="Four images in a 2×2 grid with 2px gaps." />
          <StateCard title="4+ Grid" description="Same as 4 Grid but the last cell has a dark overlay with '+N' count." />
          <StateCard title="Horizontal" description="Landscape image with wider aspect ratio (approx 5:3)." />
          <StateCard title="Vertical" description="Portrait image with taller aspect ratio (approx 3:5)." />
          <StateCard title="Single Loading" description="Blurred image with a circular cancel (×) button overlay." />
          <StateCard title="Multiple Loading" description="Blurred grid with a circular cancel (×) button overlay." />
          <StateCard title="Sensitive Content" description="Dark overlay with visibility_off icon, warning text, and 'See Photo' button." />
          <StateCard title="Placeholder" description="Empty gray container with a landscape icon placeholder." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Border Radius" description="var(--radius-xl) — 12px uniform on all corners" />
          <StateCard title="Grid Gap" description="2px — Between grid images" />
          <StateCard title="Overlay (4+)" description="rgba(0, 0, 0, 0.5) — Dark overlay with white '+N' text" />
          <StateCard title="Loading Overlay" description="Blurred image with centered cancel button" />
          <StateCard title="Sensitive Background" description="var(--color-bg-03) — Dark muted background" />
          <StateCard title="Sensitive Text" description="var(--color-text-primary) for title, var(--color-text-tertiary) for description" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Image Container (node 17303:78709)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

type ImageLayout = "single" | "2-grid" | "3-grid" | "4-grid" | "4+-grid" | "horizontal" | "vertical" | "single-loading" | "multiple-loading" | "sensitive" | "placeholder";

const SAMPLE_IMAGES = [
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46",
];

function ImageBubble({ layout, extraCount = 0, variant = "sent", time = "4:56 pm", status = "read" }: { layout: ImageLayout; extraCount?: number; variant?: "sent" | "received"; time?: string; status?: "sent" | "delivered" | "read" }) {
  const size = 232;
  const gap = 2;
  const radius = "var(--radius-xl)";
  const isSent = variant === "sent";

  const wrapperStyle: React.CSSProperties = {
    borderRadius: radius,
    overflow: "hidden",
    background: isSent ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)",
    padding: "var(--space-2)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
    width: "fit-content",
  };

  const containerStyle: React.CSSProperties = {
    width: size,
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    position: "relative",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  function renderMeta() {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--space-1)", padding: "0 var(--space-1)" }}>
        <span style={{ fontSize: "var(--font-size-1)", color: isSent ? "rgba(255,255,255,0.7)" : "var(--color-text-tertiary)" }}>{time}</span>
        {isSent && <ReceiptIcon status={status} />}
      </div>
    );
  }

  function renderContent() {
    switch (layout) {
      case "single":
        return (
          <div style={{ ...containerStyle, height: size }}>
            <img src={SAMPLE_IMAGES[0]} alt="Single" style={{ ...imgStyle, height: size }} />
          </div>
        );

      case "2-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gap }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} />
          </div>
        );

      case "3-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, gridRow: "1 / 3" }} />
            <img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} />
          </div>
        );

      case "4-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[3]} alt="" style={imgStyle} />
          </div>
        );

      case "4+-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} />
            <img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} />
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={SAMPLE_IMAGES[3]} alt="" style={imgStyle} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--color-static-white)", fontSize: "var(--font-size-4)", fontWeight: "var(--font-weight-semibold)" }}>+{extraCount}</span>
              </div>
            </div>
          </div>
        );

      case "horizontal":
        return (
          <div style={{ ...containerStyle, height: 140 }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: 140 }} />
          </div>
        );

      case "vertical":
        return (
          <div style={{ ...containerStyle, height: 360 }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: 360 }} />
          </div>
        );

      case "single-loading":
        return (
          <div style={{ ...containerStyle, height: size }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: size, filter: "blur(4px)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-static-white)", "--icon-fill": 0 } as React.CSSProperties}>close</span>
              </div>
            </div>
          </div>
        );

      case "multiple-loading":
        return (
          <div style={{ ...containerStyle, height: size }}>
            <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap, filter: "blur(4px)" }}>
              <img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} />
              <img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} />
              <img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} />
              <img src={SAMPLE_IMAGES[3]} alt="" style={imgStyle} />
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-static-white)", "--icon-fill": 0 } as React.CSSProperties}>close</span>
              </div>
            </div>
          </div>
        );

      case "sensitive":
        return (
          <div style={{ ...containerStyle, height: size, position: "relative" }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: size, filter: "blur(20px)", transform: "scale(1.1)" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", padding: "var(--space-4)" }}>
              <span className="icon-rounded" style={{ fontSize: 36, color: "var(--color-static-white)", "--icon-fill": 0 } as React.CSSProperties}>visibility_off</span>
              <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-static-white)", textAlign: "center" }}>Sensitive Content</span>
              <span style={{ fontSize: "var(--font-size-1)", color: "rgba(255,255,255,0.7)", textAlign: "center", lineHeight: "var(--line-height-caption-1)" }}>This media may contain graphic or violent content.</span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.5)", padding: "var(--space-3)", textAlign: "center" }}>
              <span style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-static-white)", cursor: "pointer" }}>See Photo</span>
            </div>
          </div>
        );

      case "placeholder":
        return (
          <div style={{ ...containerStyle, height: size, background: "var(--color-bg-02)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="icon-rounded" style={{ fontSize: 40, color: "var(--color-text-quaternary)", "--icon-fill": 0 } as React.CSSProperties}>landscape</span>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div style={wrapperStyle}>
      {renderContent()}
      {renderMeta()}
    </div>
  );
}

function ReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  const isRead = status === "read";
  const color = isRead ? "var(--color-message-seen)" : "rgba(255, 255, 255, 0.7)";
  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L5 11.5L11 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

function Wrapper({ children, width = 280 }: { children: React.ReactNode; width?: number }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--space-4)",
        background: "var(--color-bg-01)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", paddingBottom: "var(--space-2)", borderBottom: "1px solid var(--color-border-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--color-bg-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) var(--space-3)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-03)" }}>
        <span style={{ fontSize: "var(--font-size-0)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--space-3-5)", fontFamily: "var(--font-family-body)", fontSize: "var(--font-size-1)", lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--space-3-5) var(--space-4)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", background: "var(--color-bg-01)" }}>
      <strong style={{ fontSize: "var(--font-size-2)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-text-primary)", display: "block", marginBottom: "var(--space-1)" }}>{title}</strong>
      <span style={{ fontSize: "var(--font-size-1)", color: "var(--color-text-tertiary)", lineHeight: "var(--line-height-caption-1)" }}>{description}</span>
    </div>
  );
}

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
