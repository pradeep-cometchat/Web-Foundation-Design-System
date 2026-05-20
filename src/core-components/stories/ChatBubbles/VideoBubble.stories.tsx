import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Video Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SingleSent: StoryObj = {
  name: "Single — Sent",
  parameters: { docs: { description: { story: "Single video sent with play button overlay." } } },
  render: () => (
    <Wrapper>
      <VideoBubble layout="single" variant="sent" />
    </Wrapper>
  ),
};

export const TwoGridSent: StoryObj = {
  name: "2 Grid — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="2-grid" variant="sent" />
    </Wrapper>
  ),
};

export const ThreeGridSent: StoryObj = {
  name: "3 Grid — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="3-grid" variant="sent" />
    </Wrapper>
  ),
};

export const FourGridSent: StoryObj = {
  name: "4 Grid — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="4-grid" variant="sent" />
    </Wrapper>
  ),
};

export const FourPlusGridSent: StoryObj = {
  name: "4+ Grid — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="4+-grid" variant="sent" extraCount={2} />
    </Wrapper>
  ),
};

export const HorizontalSent: StoryObj = {
  name: "Horizontal — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="horizontal" variant="sent" />
    </Wrapper>
  ),
};

export const VerticalSent: StoryObj = {
  name: "Vertical — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="vertical" variant="sent" />
    </Wrapper>
  ),
};

export const LoadingSent: StoryObj = {
  name: "Loading — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="loading" variant="sent" />
    </Wrapper>
  ),
};

export const MultipleLoadingSent: StoryObj = {
  name: "Multiple Loading — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="multiple-loading" variant="sent" />
    </Wrapper>
  ),
};

export const SensitiveSent: StoryObj = {
  name: "Sensitive Content — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="sensitive" variant="sent" />
    </Wrapper>
  ),
};

export const PlaceholderSent: StoryObj = {
  name: "Placeholder — Sent",
  render: () => (
    <Wrapper>
      <VideoBubble layout="placeholder" variant="sent" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SingleReceived: StoryObj = {
  name: "Single — Received",
  parameters: { docs: { description: { story: "Single video received with play button overlay." } } },
  render: () => (
    <Wrapper>
      <VideoBubble layout="single" variant="received" />
    </Wrapper>
  ),
};

export const TwoGridReceived: StoryObj = {
  name: "2 Grid — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="2-grid" variant="received" />
    </Wrapper>
  ),
};

export const ThreeGridReceived: StoryObj = {
  name: "3 Grid — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="3-grid" variant="received" />
    </Wrapper>
  ),
};

export const FourGridReceived: StoryObj = {
  name: "4 Grid — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="4-grid" variant="received" />
    </Wrapper>
  ),
};

export const FourPlusGridReceived: StoryObj = {
  name: "4+ Grid — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="4+-grid" variant="received" extraCount={2} />
    </Wrapper>
  ),
};

export const HorizontalReceived: StoryObj = {
  name: "Horizontal — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="horizontal" variant="received" />
    </Wrapper>
  ),
};

export const VerticalReceived: StoryObj = {
  name: "Vertical — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="vertical" variant="received" />
    </Wrapper>
  ),
};

export const LoadingReceived: StoryObj = {
  name: "Loading — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="loading" variant="received" />
    </Wrapper>
  ),
};

export const MultipleLoadingReceived: StoryObj = {
  name: "Multiple Loading — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="multiple-loading" variant="received" />
    </Wrapper>
  ),
};

export const SensitiveReceived: StoryObj = {
  name: "Sensitive Content — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="sensitive" variant="received" />
    </Wrapper>
  ),
};

export const PlaceholderReceived: StoryObj = {
  name: "Placeholder — Received",
  render: () => (
    <Wrapper>
      <VideoBubble layout="placeholder" variant="received" />
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", maxWidth: 1200 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Single (Sent)</Label>
        <VideoBubble layout="single" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Single (Received)</Label>
        <VideoBubble layout="single" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>2 Grid (Sent)</Label>
        <VideoBubble layout="2-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>2 Grid (Received)</Label>
        <VideoBubble layout="2-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>3 Grid (Sent)</Label>
        <VideoBubble layout="3-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>3 Grid (Received)</Label>
        <VideoBubble layout="3-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>4 Grid (Sent)</Label>
        <VideoBubble layout="4-grid" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>4 Grid (Received)</Label>
        <VideoBubble layout="4-grid" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>4+ Grid (Sent)</Label>
        <VideoBubble layout="4+-grid" variant="sent" extraCount={2} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>4+ Grid (Received)</Label>
        <VideoBubble layout="4+-grid" variant="received" extraCount={2} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Horizontal (Sent)</Label>
        <VideoBubble layout="horizontal" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Horizontal (Received)</Label>
        <VideoBubble layout="horizontal" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Loading (Sent)</Label>
        <VideoBubble layout="loading" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Loading (Received)</Label>
        <VideoBubble layout="loading" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Multiple Loading (Sent)</Label>
        <VideoBubble layout="multiple-loading" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Multiple Loading (Received)</Label>
        <VideoBubble layout="multiple-loading" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Sensitive (Sent)</Label>
        <VideoBubble layout="sensitive" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Sensitive (Received)</Label>
        <VideoBubble layout="sensitive" variant="received" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Placeholder (Sent)</Label>
        <VideoBubble layout="placeholder" variant="sent" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <Label>Placeholder (Received)</Label>
        <VideoBubble layout="placeholder" variant="received" />
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
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Sent Video Bubble -->
<div class="video-bubble video-bubble--sent">
  <div class="video-bubble__preview">
    <img src="..." alt="Video thumbnail" />
    <div class="video-bubble__play">
      <span class="icon-rounded">play_arrow</span>
    </div>
    <span class="video-bubble__duration">02:34</span>
  </div>
  <div class="video-bubble__meta">
    <span class="video-bubble__time">4:56 pm</span>
    <span class="video-bubble__receipt">✓✓</span>
  </div>
</div>

<!-- Received Video Bubble -->
<div class="video-bubble video-bubble--received">
  <div class="video-bubble__preview">
    <img src="..." alt="Video thumbnail" />
    <div class="video-bubble__play">
      <span class="icon-rounded">play_arrow</span>
    </div>
    <span class="video-bubble__duration">02:34</span>
  </div>
  <div class="video-bubble__meta">
    <span class="video-bubble__time">4:56 pm</span>
  </div>
</div>

<!-- Loading State -->
<div class="video-bubble video-bubble--sent">
  <div class="video-bubble__preview video-bubble__preview--loading">
    <img src="..." style="filter: blur(4px)" />
    <button class="video-bubble__cancel">
      <span class="icon-rounded">close</span>
    </button>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Single (Sent)" description="Square video thumbnail with play button overlay and duration badge. Purple bubble wrapper with timestamp + receipt." />
          <StateCard title="Single (Received)" description="Same layout with gray bubble wrapper. No receipt icon." />
          <StateCard title="Horizontal (Sent)" description="Landscape video thumbnail (wider aspect ratio) with play overlay." />
          <StateCard title="Horizontal (Received)" description="Same layout with gray bubble wrapper." />
          <StateCard title="Vertical (Sent)" description="Portrait video thumbnail (taller aspect ratio) with play overlay." />
          <StateCard title="Vertical (Received)" description="Same layout with gray bubble wrapper." />
          <StateCard title="Loading (Sent)" description="Blurred thumbnail with cancel (×) button overlay." />
          <StateCard title="Loading (Received)" description="Same loading state with gray bubble wrapper." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Play Button" description="Centered circular button (48×48) with semi-transparent dark background and white play_arrow icon." />
          <StateCard title="Duration Badge" description="Bottom-left badge showing video length (e.g. '02:34'). Semi-transparent dark background with white text." />
          <StateCard title="Timestamp + Receipt" description="Below the video, right-aligned. Same pattern as image bubble." />
          <StateCard title="Cancel Button (Loading)" description="Centered circular button with close icon. Shown during upload." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Play Button BG" description="rgba(0, 0, 0, 0.4) — Semi-transparent dark" />
          <StateCard title="Duration Badge BG" description="rgba(0, 0, 0, 0.6) — Darker semi-transparent" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) outer, var(--cometchat-radius-2) inner" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Video Container (node 17303:79942)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

type VideoLayout = "single" | "2-grid" | "3-grid" | "4-grid" | "4+-grid" | "horizontal" | "vertical" | "loading" | "multiple-loading" | "sensitive" | "placeholder";

const SAMPLE_IMAGES = [
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc4a0de-e4dc-4cfd-ba7f-35d799b05451",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc4f92e-1273-4695-9212-9ecad5b0e4b7",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219ae09e-7eac-4a0a-bcbb-10552c1ee531",
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097eae8e-e136-4b3e-a162-1bf9a960bf46",
];

function VideoBubble({ layout, variant, extraCount = 0 }: { layout: VideoLayout; variant: "sent" | "received"; extraCount?: number }) {
  const size = 232;
  const gap = 2;
  const isSent = variant === "sent";

  const wrapperStyle: React.CSSProperties = {
    borderRadius: "var(--cometchat-radius-3)",
    overflow: "hidden",
    background: isSent ? "var(--cometchat-send-bubble-background)" : "var(--cometchat-received-bubble-background)",
    padding: "var(--cometchat-spacing-2)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--cometchat-spacing-1)",
    width: "fit-content",
  };

  const containerStyle: React.CSSProperties = {
    width: size,
    borderRadius: "var(--cometchat-radius-2)",
    overflow: "hidden",
    position: "relative",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  function PlayOverlay() {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: "var(--cometchat-radius-max)", background: "rgba(255,255,255,0.3)", backdropFilter: "blur(8px)", boxShadow: "0 4px 4px rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="icon-rounded" style={{ fontSize: 32, color: "white", "--icon-fill": 1 } as React.CSSProperties}>play_arrow</span>
        </div>
      </div>
    );
  }

  function CancelOverlay() {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 36, height: 36, borderRadius: "var(--cometchat-radius-max)", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="icon-rounded" style={{ fontSize: 20, color: "white", "--icon-fill": 0 } as React.CSSProperties}>close</span>
        </div>
      </div>
    );
  }

  function renderMeta() {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--cometchat-spacing-1)", padding: "0 var(--cometchat-spacing-1)" }}>
        <span style={{ fontSize: "12px", color: isSent ? "rgba(255,255,255,0.7)" : "var(--cometchat-text-color-tertiary)" }}>4:56 pm</span>
        {isSent && <ReceiptIcon />}
      </div>
    );
  }

  function renderContent() {
    switch (layout) {
      case "single":
        return (
          <div style={{ ...containerStyle, height: size }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: size }} />
            <PlayOverlay />
          </div>
        );
      case "2-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gap }}>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} /><PlayOverlay /></div>
          </div>
        );
      case "3-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <div style={{ position: "relative", overflow: "hidden", gridRow: "1 / 3" }}><img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} /><PlayOverlay /></div>
          </div>
        );
      case "4-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[3]} alt="" style={imgStyle} /><PlayOverlay /></div>
          </div>
        );
      case "4+-grid":
        return (
          <div style={{ ...containerStyle, height: size, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap }}>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[0]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[1]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}><img src={SAMPLE_IMAGES[2]} alt="" style={imgStyle} /><PlayOverlay /></div>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={SAMPLE_IMAGES[3]} alt="" style={imgStyle} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: "18px", fontWeight: "600" }}>+{extraCount}</span>
              </div>
            </div>
          </div>
        );
      case "horizontal":
        return (
          <div style={{ ...containerStyle, height: 140 }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: 140 }} />
            <PlayOverlay />
          </div>
        );
      case "vertical":
        return (
          <div style={{ ...containerStyle, height: 360 }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: 360 }} />
            <PlayOverlay />
          </div>
        );
      case "loading":
        return (
          <div style={{ ...containerStyle, height: size }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: size, filter: "blur(4px)" }} />
            <CancelOverlay />
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
            <CancelOverlay />
          </div>
        );
      case "sensitive":
        return (
          <div style={{ ...containerStyle, height: size, position: "relative" }}>
            <img src={SAMPLE_IMAGES[0]} alt="" style={{ ...imgStyle, height: size, filter: "blur(20px)", transform: "scale(1.1)" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--cometchat-spacing-2)", padding: "var(--cometchat-spacing-4)" }}>
              <span className="icon-rounded" style={{ fontSize: 36, color: "white", "--icon-fill": 0 } as React.CSSProperties}>visibility_off</span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "white", textAlign: "center" }}>Sensitive Content</span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", textAlign: "center", lineHeight: "18px" }}>This media may contain graphic or violent content.</span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.5)", padding: "var(--cometchat-spacing-3)", textAlign: "center" }}>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "white", cursor: "pointer" }}>See Video</span>
            </div>
          </div>
        );
      case "placeholder":
        return (
          <div style={{ ...containerStyle, height: size, background: "var(--cometchat-background-color-02)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="icon-rounded" style={{ fontSize: 40, color: "var(--cometchat-text-color-quaternary)", "--icon-fill": 0 } as React.CSSProperties}>videocam</span>
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

function ReceiptIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 8.5L5 11.5L11 4.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Wrapper({ children, width = 280 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--cometchat-background-color-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-03)" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--cometchat-background-color-01)" }}>
      <strong style={{ fontSize: "14px", fontWeight: "600", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "18px" }}>{description}</span>
    </div>
  );
}

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
