import type { Meta, StoryObj } from "@storybook/react";
import { ConversationStarter } from "../components/ConversationStarter";

/**
 * AI-powered conversation starter suggestions displayed above the message composer.
 * Presents a row of clickable pill-shaped tags with pre-written messages the user
 * can tap to quickly start a conversation.
 *
 * **Structure (from Figma node 4088:704041):**
 * - Container: full width, `--radius-2xl` (16px), wrapping flex layout
 * - Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200`
 * - Tag padding: 8px vertical, 20px horizontal
 * - Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900`
 * - Gap between tags: 8px
 * - Hover: `--color-neutral-100` bg, `--color-neutral-300` border
 */
const meta: Meta<typeof ConversationStarter> = {
  title: "Base Components/Conversation Starter",
  component: ConversationStarter,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    suggestions: { control: false, description: "Array of suggested conversation starter messages." },
    open: { control: "boolean", description: "Whether the component is visible." },
    onSelect: { control: false },
  },
};
export default meta;

/* ─── Data ─── */

const defaultSuggestions = [
  "Hi there! How's it going?",
  "Hey, how are you doing today?",
  "Hello! How's your day been so far?",
  "Hope all's well!",
];

const businessSuggestions = [
  "I'd like to know more about your services",
  "Can you help me with my order?",
  "What are your business hours?",
  "I have a question about pricing",
];

const casualSuggestions = [
  "What's up? 👋",
  "Long time no see!",
  "Got any plans this weekend?",
  "Did you see that movie?",
  "How's the family?",
];

const singleSuggestion = ["Say hello 👋"];

/* ─── Stories ─── */

/** Default — four greeting suggestions as shown in Figma. */
export const Default: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: defaultSuggestions,
    open: true,
  },
};

/** Business/support context with service-related starters. */
export const Business: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: businessSuggestions,
    open: true,
  },
};

/** Casual conversation starters with more options (wraps to second line). */
export const Casual: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: casualSuggestions,
    open: true,
  },
};

/** Single suggestion — minimal variant. */
export const Single: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: singleSuggestion,
    open: true,
  },
};

/** In context — shown above a message composer mock. */
export const InContext: StoryObj = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ marginBottom: 8 }}>
        <ConversationStarter suggestions={defaultSuggestions} />
      </div>
      <div style={{
        border: "1px solid var(--color-neutral-200)",
        borderRadius: "var(--radius-md)",
        background: "var(--color-white)",
        overflow: "hidden",
      }}>
        <div style={{ padding: "12px", fontSize: 14, color: "var(--color-neutral-600)" }}>
          Type your message...
        </div>
        <div style={{ height: 1, background: "var(--color-neutral-100)" }} />
        <div style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 16, color: "var(--color-neutral-500)" }}>
            <span style={{ fontSize: 20 }}>⊕</span>
            <span style={{ fontSize: 20 }}>🎤</span>
            <span style={{ fontSize: 20 }}>😊</span>
            <span style={{ fontSize: 20 }}>💬</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Aa</span>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "var(--color-neutral-200)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--color-neutral-500)", fontSize: 16,
          }}>▶</div>
        </div>
      </div>
    </div>
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof ConversationStarter> = {
  args: {
    suggestions: defaultSuggestions,
    open: true,
  },
  parameters: { docs: { disable: true } },
};
