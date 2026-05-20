import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Audio Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SENT VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const SentDefault: StoryObj = {
  name: "Sent — Default",
  render: () => (
    <Wrapper>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentDelivered: StoryObj = {
  name: "Sent — Delivered",
  render: () => (
    <Wrapper>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentRead: StoryObj = {
  name: "Sent — Read",
  render: () => (
    <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
  ),
};

export const SentPlaying: StoryObj = {
  name: "Sent — Playing",
  render: () => (
    <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
  ),
};

export const SentPaused: StoryObj = {
  name: "Sent — Paused",
  render: () => (
    <Wrapper>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   RECEIVED VARIANTS
   ═══════════════════════════════════════════════════════════════════════════ */

export const ReceivedDefault: StoryObj = {
  name: "Received — Default",
  render: () => (
    <Wrapper>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
    </Wrapper>
  ),
};

export const ReceivedPlaying: StoryObj = {
  name: "Received — Playing",
  render: () => (
    <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
    </Wrapper>
  ),
};

export const ReceivedPaused: StoryObj = {
  name: "Received — Paused",
  render: () => (
    <Wrapper>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllSentStates: StoryObj = {
  name: "All Sent States",
  render: () => (
    <Wrapper width={420}>
      <Label>Sent — Default (Sent)</Label>
      <AudioBubble variant="sent" status="sent" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Delivered</Label>
      <AudioBubble variant="sent" status="delivered" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Read</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Sent — Playing</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label>Sent — Paused</Label>
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
  ),
};

export const AllReceivedStates: StoryObj = {
  name: "All Received States",
  render: () => (
    <Wrapper width={420}>
      <Label>Received — Default</Label>
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <Label>Received — Playing</Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <Label>Received — Paused</Label>
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" progress={0.44} />
    </Wrapper>
  ),
};

export const AllVariants: StoryObj = {
  name: "All Variants",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", width: 500, padding: "var(--cometchat-spacing-4)" }}>
      <AudioBubble variant="sent" status="read" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="received" currentTime="00:00" duration="00:32" time="4:56 pm" />
      <AudioBubble variant="sent" status="read" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
      <AudioBubble variant="received" currentTime="00:14" duration="00:32" time="4:56 pm" playing progress={0.44} />
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
          code={`<!-- Sent Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--sent">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars (dynamic heights) -->
          <span class="chat-bubble-audio-bar" style="height: 4px"></span>
          <span class="chat-bubble-audio-bar" style="height: 10px"></span>
          <span class="chat-bubble-audio-bar" style="height: 18px"></span>
          <!-- ... more bars ... -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
      <span class="chat-bubble-meta-receipt chat-bubble-meta-receipt--read">✓✓</span>
    </div>
  </div>
</div>

<!-- Received Audio Bubble -->
<div class="chat-bubble-wrapper chat-bubble-wrapper--received">
  <div class="chat-bubble-body">
    <div class="chat-bubble-audio">
      <button class="chat-bubble-audio-btn">
        <span class="icon-rounded">play_arrow</span>
      </button>
      <div class="chat-bubble-audio-content">
        <div class="chat-bubble-audio-wave">
          <!-- Waveform bars -->
        </div>
        <span class="chat-bubble-audio-time">00:00/00:32</span>
      </div>
    </div>
    <div class="chat-bubble-meta">
      <span class="chat-bubble-meta-time">4:56 pm</span>
    </div>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.chat-bubble-audio {
  display: flex;
  align-items: center;
  gap: var(--cometchat-spacing-2);
  padding: var(--cometchat-spacing-2);
  min-width: 200px;
}

.chat-bubble-audio-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-background-color-solid);
  color: var(--cometchat-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-bubble-wrapper--received .chat-bubble-audio-btn {
  background: var(--cometchat-background-color-solid);
}

.chat-bubble-audio-wave {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.chat-bubble-audio-bar {
  width: 3px;
  border-radius: 1px;
  background: var(--cometchat-icon-color-tertiary);
}

.chat-bubble-wrapper--sent .chat-bubble-audio-bar {
  background: rgba(255, 255, 255, 0.6);
}

.chat-bubble-audio-time {
  font-size: 10px;
  color: var(--cometchat-text-color-tertiary);
  white-space: nowrap;
}

.chat-bubble-wrapper--sent .chat-bubble-audio-time {
  color: rgba(255, 255, 255, 0.7);
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent — Default" description="Purple background, white play button, white waveform bars. Shows single check for sent status." />
          <StateCard title="Sent — Delivered" description="Same as default with double check (✓✓) in white/muted color indicating delivery." />
          <StateCard title="Sent — Read" description="Double check (✓✓) in green/highlight color indicating the message was read." />
          <StateCard title="Sent — Playing" description="Play button becomes pause icon. Waveform shows progress with highlighted portion." />
          <StateCard title="Received — Default" description="Light gray background, purple play button, purple waveform bars. No receipt indicator." />
          <StateCard title="Received — Playing" description="Play button becomes pause icon. Waveform shows progress with highlighted portion." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Play/Pause Button" description="Circular button (48×48) with play_arrow or pause icon. White bg with purple icon on both variants." />
          <StateCard title="Waveform" description="Series of vertical bars with varying heights representing audio amplitude. Animates on playback." />
          <StateCard title="Duration Label" description="Shows current time / total duration (e.g. 00:00/00:32). Updates during playback." />
          <StateCard title="Timestamp" description="Message time displayed below the audio content (e.g. 4:56 pm)." />
          <StateCard title="Receipt Status" description="Sent bubbles show delivery status: ✓ sent, ✓✓ delivered, ✓✓ (green) read." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Sent Background" description="var(--cometchat-send-bubble-background) — Primary purple" />
          <StateCard title="Received Background" description="var(--cometchat-received-bubble-background) — Light gray" />
          <StateCard title="Sent Waveform" description="rgba(255, 255, 255, 0.6) — Semi-transparent white" />
          <StateCard title="Received Waveform" description="var(--cometchat-icon-color-highlight) — Purple" />
          <StateCard title="Play Button (Sent)" description="var(--cometchat-background-color-solid) white background, purple icon" />
          <StateCard title="Play Button (Received)" description="var(--cometchat-background-color-solid) white background, purple icon" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-3) — 12px uniform on all corners" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard
          title="Source File"
          description="Web Desktop — Chat UI Kits → Audio section (node 4072:76974)"
        />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function AudioBubble({
  variant,
  status,
  currentTime,
  duration,
  time,
  playing,
  progress = 0,
}: {
  variant: "sent" | "received";
  status?: "sent" | "delivered" | "read";
  currentTime: string;
  duration: string;
  time: string;
  playing?: boolean;
  progress?: number;
}) {
  const isSent = variant === "sent";
  const waveformBars = generateWaveform();

  return (
    <div className={`chat-bubble-wrapper chat-bubble-wrapper--${variant}`}>
      <div
        className="chat-bubble-body"
        style={{ padding: "var(--cometchat-spacing-3)", minWidth: 240 }}
      >
        {/* Audio player row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--cometchat-spacing-3)",
          }}
        >
          {/* Play button — large circular */}
          <button
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--cometchat-radius-max)",
              background: "var(--cometchat-static-white)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <PlayIcon playing={playing} color={isSent ? "var(--cometchat-icon-color-highlight)" : "var(--cometchat-icon-color-highlight)"} />
          </button>

          {/* Waveform + duration stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
            {/* Waveform */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                height: 28,
                overflow: "hidden",
              }}
            >
              {waveformBars.map((h, i) => {
                const barProgress = i / waveformBars.length;
                const isActive = barProgress <= progress;
                return (
                  <span
                    key={i}
                    style={{
                      width: 3,
                      minWidth: 2,
                      height: `${h}px`,
                      borderRadius: 1.5,
                      background: isSent
                        ? isActive
                          ? "var(--cometchat-static-white)"
                          : "rgba(255, 255, 255, 0.5)"
                        : isActive
                          ? "var(--cometchat-icon-color-highlight)"
                          : "rgba(108, 92, 231, 0.4)",
                      flexShrink: 0,
                    }}
                  />
                );
              })}
            </div>

            {/* Duration */}
            <span
              style={{
                fontSize: "12px",
                fontFamily: "var(--cometchat-font-family)",
                color: isSent ? "rgba(255, 255, 255, 0.8)" : "var(--cometchat-text-color-secondary)",
                lineHeight: 1,
              }}
            >
              {currentTime}/{duration}
            </span>
          </div>
        </div>

        {/* Meta row — timestamp + receipt at bottom right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--cometchat-spacing-1)",
            marginTop: "var(--cometchat-spacing-2)",
          }}
        >
          <span className="chat-bubble-meta-time">{time}</span>
          {isSent && status && <ReceiptIcon status={status} />}
        </div>
      </div>
    </div>
  );
}

function PlayIcon({ playing, color }: { playing?: boolean; color: string }) {
  if (playing) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" />
    </svg>
  );
}

function ReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  const isRead = status === "read";
  const color = isRead ? "var(--cometchat-message-seen-color)" : "rgba(255, 255, 255, 0.7)";

  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8.5L5 11.5L11 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function generateWaveform(): number[] {
  // Simulated waveform bar heights matching the Figma design
  // Pattern: dots, short bars, tall bars, medium bars, dots, tall bars, dots, short bars
  return [
    2, 3, 4, 6, 8, 5, 10, 14, 20, 24, 18, 22, 16, 20, 14, 18, 22, 16, 12,
    20, 24, 18, 14, 20, 24, 16, 10, 4, 2, 2, 3, 2, 2, 3, 4, 2, 6, 10, 14,
    10, 8, 6, 10, 14, 10, 8,
  ];
}

function Wrapper({ children, width = 360 }: { children: React.ReactNode; width?: number }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-4)",
        padding: "var(--cometchat-spacing-4)",
        background: "var(--cometchat-background-color-01)",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-border-color-default)",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "10px",
        fontWeight: "600",
        color: "var(--cometchat-text-color-tertiary)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--cometchat-spacing-2)",
          paddingBottom: "var(--cometchat-spacing-2)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-3)",
        overflow: "hidden",
        background: "var(--cometchat-background-color-02)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
          background: "var(--cometchat-background-color-03)",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--cometchat-text-color-secondary)",
          }}
        >
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "var(--cometchat-spacing-3-5)",
          fontFamily: "var(--cometchat-font-family)",
          fontSize: "12px",
          lineHeight: 1.6,
          color: "var(--cometchat-text-color-primary)",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)",
        border: "1px solid var(--cometchat-border-color-default)",
        borderRadius: "var(--cometchat-radius-3)",
        background: "var(--cometchat-background-color-01)",
      }}
    >
      <strong
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "var(--cometchat-text-color-primary)",
          display: "block",
          marginBottom: "var(--cometchat-spacing-1)",
        }}
      >
        {title}
      </strong>
      <span
        style={{
          fontSize: "12px",
          color: "var(--cometchat-text-color-tertiary)",
          lineHeight: "18px",
        }}
      >
        {description}
      </span>
    </div>
  );
}

/** Interactive playground. */
export const Playground: StoryObj = {
  parameters: { docs: { disable: true } },
};
