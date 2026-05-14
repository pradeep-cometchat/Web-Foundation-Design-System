import type { Meta, StoryObj } from "@storybook/react";
import { SmartReplies } from "../components/SmartReplies";

/**
 * AI-suggested quick reply popup that appears above the message composer.
 * Shows a list of contextual reply suggestions the user can tap to send.
 *
 * **Structure (from Figma node 4088:736840):**
 * - Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px
 * - Header: "Suggest a reply" (16px, medium, `--color-neutral-900`) + close icon (20px)
 * - Gap between header and content: 16px
 * - Content gap: 8px between items
 *
 * **States:**
 * - Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation)
 * - Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px)
 *
 * **Interactions:**
 * - Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border
 * - Click reply: fires `onSelect` with the reply text
 * - Close button dismisses the popup
 */
const meta: Meta<typeof SmartReplies> = {
  title: "Base Components/Smart Replies",
  component: SmartReplies,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the component is visible." },
    loading: { control: "boolean", description: "Whether replies are loading." },
    replies: { control: false, description: "Array of suggested reply texts." },
    onSelect: { control: false },
    onClose: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Loading state — skeleton shimmer bars. Matches Figma node 4088:736840. */
export const Loading: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: true,
  },
};

/** Loaded state — reply suggestions displayed. */
export const Loaded: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Yes, it's still available! Would you like to see more photos?",
      "Sure, I can ship it. Where are you located?",
      "Thanks for your interest! Let me check the shipping options.",
    ],
  },
};

/** Two replies — shorter list. */
export const TwoReplies: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Sounds good, let's do it!",
      "I'll think about it and get back to you.",
    ],
  },
};

/** Single reply suggestion. */
export const SingleReply: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: ["Thanks! I appreciate it."],
  },
};

/** All states side by side. */
export const AllStates: StoryObj = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-10)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", textAlign: "center" }}>Loading</div>
        <SmartReplies open loading />
      </div>
      <div>
        <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)", textAlign: "center" }}>Loaded</div>
        <SmartReplies
          open
          replies={[
            "Yes, it's still available!",
            "Sure, I can ship it.",
            "Thanks for your interest!",
          ]}
        />
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof SmartReplies> = {
  args: {
    open: true,
    loading: false,
    replies: [
      "Yes, it's still available! Would you like to see more photos?",
      "Sure, I can ship it. Where are you located?",
      "Thanks for your interest! Let me check the shipping options.",
    ],
  },
  parameters: { docs: { disable: true } },
};
