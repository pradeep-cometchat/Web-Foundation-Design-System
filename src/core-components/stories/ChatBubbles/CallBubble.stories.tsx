import type { Meta, StoryObj } from "@storybook/react";
import "./ChatBubbles.css";

const meta: Meta = {
  title: "Core Components/Chat Bubbles/Call Bubble",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO CALL — OUTGOING
   ═══════════════════════════════════════════════════════════════════════════ */

export const AudioCallEnded: StoryObj = {
  name: "Audio — Ended (outgoing)",
  parameters: { docs: { description: { story: "Outgoing audio call that was answered and ended." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

export const AudioCallCancelled: StoryObj = {
  name: "Audio — Cancelled (outgoing)",
  parameters: { docs: { description: { story: "Outgoing audio call that was cancelled by the caller." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO CALL — INCOMING
   ═══════════════════════════════════════════════════════════════════════════ */

export const AudioCallMissed: StoryObj = {
  name: "Audio — Missed (incoming)",
  parameters: { docs: { description: { story: "Incoming audio call that was missed." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

export const AudioCallRejected: StoryObj = {
  name: "Audio — Rejected (incoming)",
  parameters: { docs: { description: { story: "Incoming audio call that was rejected." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO CALL — OUTGOING
   ═══════════════════════════════════════════════════════════════════════════ */

export const VideoCallEnded: StoryObj = {
  name: "Video — Ended (outgoing)",
  parameters: { docs: { description: { story: "Outgoing video call that was answered and ended." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

export const VideoCallCancelled: StoryObj = {
  name: "Video — Cancelled (outgoing)",
  parameters: { docs: { description: { story: "Outgoing video call that was cancelled by the caller." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO CALL — INCOMING
   ═══════════════════════════════════════════════════════════════════════════ */

export const VideoCallMissed: StoryObj = {
  name: "Video — Missed (incoming)",
  parameters: { docs: { description: { story: "Incoming video call that was missed." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 05:23 PM" />
    </Wrapper>
  ),
};

export const VideoCallRejected: StoryObj = {
  name: "Video — Rejected (incoming)",
  parameters: { docs: { description: { story: "Incoming video call that was rejected." } } },
  render: () => (
    <Wrapper>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 03:29 PM" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   WITH CALL BACK BUTTON
   ═══════════════════════════════════════════════════════════════════════════ */

export const WithCallBackButton: StoryObj = {
  name: "With Call Back Button",
  parameters: { docs: { description: { story: 'Call bubble with an optional "Call Back" action button.' } } },
  render: () => (
    <Wrapper>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" showCallBack />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: StoryObj = {
  name: "All States",
  parameters: { layout: "padded" },
  render: () => (
    <Wrapper width={500}>
      <Label>Audio — Ended (outgoing)</Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>Video — Ended (outgoing)</Label>
      <CallBubble type="video" variant="outgoing" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label>Audio — Missed (incoming)</Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>Video — Missed (incoming)</Label>
      <CallBubble type="video" variant="incoming" label="Video call" timestamp="19 May, 05:23 PM" />

      <Label>Audio — Cancelled (outgoing)</Label>
      <CallBubble type="audio" variant="outgoing" label="Voice call" timestamp="19 May, 05:23 PM" />

      <Label>With Call Back Button</Label>
      <CallBubble type="audio" variant="incoming" label="Voice call" timestamp="19 May, 03:29 PM" showCallBack />
    </Wrapper>
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
          code={`<!-- Outgoing Call Bubble (purple) -->
<div class="call-bubble call-bubble--outgoing">
  <div class="call-bubble__icon-wrapper">
    <!-- Voice call icon -->
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- Incoming/Missed Call Bubble (gray) -->
<div class="call-bubble call-bubble--incoming">
  <div class="call-bubble__icon-wrapper">
    <svg>...</svg>
  </div>
  <div class="call-bubble__content">
    <span class="call-bubble__label">Voice call</span>
    <span class="call-bubble__timestamp">19 May, 05:23 PM</span>
  </div>
</div>

<!-- With Call Back Button -->
<div class="call-bubble call-bubble--incoming call-bubble--with-action">
  <div class="call-bubble__main">
    <div class="call-bubble__icon-wrapper">
      <svg>...</svg>
    </div>
    <div class="call-bubble__content">
      <span class="call-bubble__label">Voice call</span>
      <span class="call-bubble__timestamp">19 May, 03:29 PM</span>
    </div>
  </div>
  <div class="call-bubble__action">
    <button class="call-bubble__callback-btn">Call Back</button>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="CSS (Foundation Variables)">
        <CodeCard
          language="CSS"
          code={`.call-bubble {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  min-width: 220px;
}

.call-bubble--outgoing {
  background: var(--color-send-bubble-bg);
}

.call-bubble--incoming {
  background: var(--color-received-bubble-bg);
}

.call-bubble__icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--color-static-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-bubble--outgoing .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble--incoming .call-bubble__icon-wrapper svg {
  color: var(--color-icon-highlight-primary);
}

.call-bubble__label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-body);
}

.call-bubble--outgoing .call-bubble__label {
  color: var(--color-static-white);
}

.call-bubble--incoming .call-bubble__label {
  color: var(--color-text-primary);
}

.call-bubble__timestamp {
  font-size: var(--font-size-1);
  line-height: var(--line-height-caption-1);
}

.call-bubble--outgoing .call-bubble__timestamp {
  color: rgba(255, 255, 255, 0.7);
}

.call-bubble--incoming .call-bubble__timestamp {
  color: var(--color-text-tertiary);
}

.call-bubble__callback-btn {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  background: none;
  border: none;
  border-top: 1px solid var(--color-border-default);
  padding: var(--space-2) var(--space-4);
  width: 100%;
  text-align: center;
  cursor: pointer;
}`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Audio — Ended (outgoing)" description="Purple background. Phone icon in white circle. White text. Shown when an outgoing voice call ends normally." />
          <StateCard title="Audio — Cancelled (outgoing)" description="Purple background. Same as ended — caller hung up before answer." />
          <StateCard title="Audio — Missed (incoming)" description="Gray background. Phone icon in white circle. Dark text. Shown when an incoming call was not answered." />
          <StateCard title="Audio — Rejected (incoming)" description="Gray background. Same as missed — user actively declined the call." />
          <StateCard title="Video — Ended (outgoing)" description="Purple background. Video camera icon in white circle. White text." />
          <StateCard title="Video — Cancelled (outgoing)" description="Purple background. Same as ended for video calls." />
          <StateCard title="Video — Missed (incoming)" description="Gray background. Video camera icon in white circle. Dark text." />
          <StateCard title="Video — Rejected (incoming)" description="Gray background. Same as missed for video calls." />
          <StateCard title="With Call Back Button" description="Gray bubble with a 'Call Back' action button below the call info. Separated by a border-top divider." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Icon Circle" description="36×36 white circle containing the call type icon (phone or video camera) in purple." />
          <StateCard title="Label" description="'Voice call' or 'Video call' — semibold, primary text color (white on outgoing, dark on incoming)." />
          <StateCard title="Timestamp" description="Date and time (e.g. '19 May, 05:23 PM') — smaller, muted color." />
          <StateCard title="Call Back Button (optional)" description="Full-width text button below the bubble content, separated by a top border." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <StateCard title="Outgoing Background" description="var(--color-send-bubble-bg) — Primary purple" />
          <StateCard title="Incoming Background" description="var(--color-received-bubble-bg) — Light gray" />
          <StateCard title="Icon Circle" description="var(--color-static-white) background, 36×36, full radius" />
          <StateCard title="Icon Color" description="var(--color-icon-highlight-primary) — Purple on both variants" />
          <StateCard title="Border Radius" description="var(--radius-lg) — Rounded corners on the bubble" />
          <StateCard title="Padding" description="var(--space-3) vertical, var(--space-4) horizontal" />
        </div>
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function CallBubble({
  type,
  variant,
  label,
  timestamp,
  showCallBack,
}: {
  type: "audio" | "video";
  variant: "outgoing" | "incoming";
  label: string;
  timestamp: string;
  showCallBack?: boolean;
}) {
  const isOutgoing = variant === "outgoing";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: isOutgoing ? "var(--color-send-bubble-bg)" : "var(--color-received-bubble-bg)",
        minWidth: 220,
        alignSelf: isOutgoing ? "flex-end" : "flex-start",
      }}
    >
      {/* Main content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          padding: "var(--space-3) var(--space-4)",
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "var(--radius-full)",
            background: "var(--color-static-white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {type === "audio" && isOutgoing && <VoiceOutgoingIcon />}
          {type === "audio" && !isOutgoing && <VoiceIncomingIcon />}
          {type === "video" && isOutgoing && <VideoOutgoingIcon />}
          {type === "video" && !isOutgoing && <VideoIncomingIcon />}
        </div>

        {/* Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: "var(--font-size-2)",
              fontWeight: "var(--font-weight-semibold)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-body)",
              color: isOutgoing ? "var(--color-static-white)" : "var(--color-text-primary)",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontSize: "var(--font-size-1)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-caption-1)",
              color: isOutgoing ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-tertiary)",
            }}
          >
            {timestamp}
          </span>
        </div>
      </div>

      {/* Call Back button */}
      {showCallBack && (
        <div>
          <div
            style={{
              height: 1,
              background: "rgba(0, 0, 0, 0.12)",
              marginTop: "var(--space-2)",
            }}
          />
          <div
            style={{
              padding: "var(--space-3) var(--space-4)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: "var(--font-size-2)",
                fontWeight: "var(--font-weight-semibold)",
                fontFamily: "var(--font-family-body)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
              }}
            >
              Call Back
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function VoiceOutgoingIcon() {
  return (
    <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-icon-highlight-primary)", "--icon-fill": 1 } as React.CSSProperties}>
      phone_callback
    </span>
  );
}

function VoiceIncomingIcon() {
  return (
    <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-icon-highlight-primary)", "--icon-fill": 1 } as React.CSSProperties}>
      phone_missed
    </span>
  );
}

function VideoOutgoingIcon() {
  return (
    <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-icon-highlight-primary)", "--icon-fill": 1, "--icon-wght": 300 } as React.CSSProperties}>
      missed_video_call
    </span>
  );
}

function VideoIncomingIcon() {
  return (
    <span className="icon-rounded" style={{ fontSize: 20, color: "var(--color-icon-highlight-primary)", "--icon-fill": 1, "--icon-wght": 300 } as React.CSSProperties}>
      missed_video_call
    </span>
  );
}

function Wrapper({ children, width = 400 }: { children: React.ReactNode; width?: number }) {
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
    <span
      style={{
        fontSize: "var(--font-size-0)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-text-tertiary)",
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
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        style={{
          fontSize: "var(--font-size-1)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "var(--space-2)",
          paddingBottom: "var(--space-2)",
          borderBottom: "1px solid var(--color-border-default)",
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
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--color-bg-02)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-2) var(--space-3)",
          borderBottom: "1px solid var(--color-border-default)",
          background: "var(--color-bg-03)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-0)",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-text-secondary)",
          }}
        >
          {language}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "var(--space-3-5)",
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-1)",
          lineHeight: 1.6,
          color: "var(--color-text-primary)",
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
        padding: "var(--space-3-5) var(--space-4)",
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-xl)",
        background: "var(--color-bg-01)",
      }}
    >
      <strong
        style={{
          fontSize: "var(--font-size-2)",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-text-primary)",
          display: "block",
          marginBottom: "var(--space-1)",
        }}
      >
        {title}
      </strong>
      <span
        style={{
          fontSize: "var(--font-size-1)",
          color: "var(--color-text-tertiary)",
          lineHeight: "var(--line-height-caption-1)",
        }}
      >
        {description}
      </span>
    </div>
  );
}
