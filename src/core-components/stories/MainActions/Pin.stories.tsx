import type { Meta, StoryObj } from "@storybook/react";
import { PinScreen } from "./_shared";

/**
 * **Main Actions — Pin.** Pinning conversations and messages, mirrored from the
 * Web Desktop Chat UI Kit designs.
 *
 * Two flows:
 *
 * - **Pin Conversation** — from a conversation row's context menu: confirm in a
 *   dialog, the row gains a pin glyph and a toast confirms. Unpinning mirrors
 *   the same steps.
 * - **Pin Message** — from a message's context menu (*Organise → Pin message*):
 *   confirm in a dialog, the bubble gains a pin glyph next to its time and a
 *   toast confirms. Pinned messages collect in the **Pinned Messages** panel
 *   (chat header **⋮ → Pinned messages**), where each item can be unpinned,
 *   copied or muted; clicking one jumps to it in the conversation.
 *
 * Renders identically in dark mode via the theme toggle — every color is a
 * Foundations token.
 */
const meta: Meta = {
  title: "Core Components/Main Actions/Pin",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const s = (props: React.ComponentProps<typeof PinScreen>): Story => ({
  parameters: { controls: { disable: true } },
  render: () => <PinScreen {...props} />,
});

/* ─── Pin Conversation ─────────────────────────────────────────────────────── */

/** The conversation row's context menu offers "Pin conversation". */
export const ConversationMenu: Story = {
  ...s({ convoMenu: "pin" }),
  name: "Conversation · Menu",
};

/** Confirming the pin. */
export const PinConversationModal: Story = {
  ...s({ modal: "pin-convo" }),
  name: "Conversation · Pin Modal",
};

/** Pinned — the row gains a pin glyph and a toast confirms. */
export const ConversationPinned: Story = {
  ...s({ convoPinned: true, toast: "Conversation pinned" }),
  name: "Conversation · Pinned",
};

/** A pinned conversation's menu offers "Unpin conversation". */
export const UnpinConversationMenu: Story = {
  ...s({ convoPinned: true, convoMenu: "unpin" }),
  name: "Conversation · Unpin Menu",
};

/** Confirming the unpin. */
export const UnpinConversationModal: Story = {
  ...s({ convoPinned: true, modal: "unpin-convo" }),
  name: "Conversation · Unpin Modal",
};

/** Unpinned — the glyph is gone and a toast confirms. */
export const ConversationUnpinned: Story = {
  ...s({ toast: "Conversation unpinned" }),
  name: "Conversation · Unpinned",
};

/* ─── Pin Message ──────────────────────────────────────────────────────────── */

/** A sent message's menu — Organise ▸ Pin message / Save message. */
export const MessageMenuSent: Story = {
  ...s({ msgMenu: "sent" }),
  name: "Message · Menu (Sent)",
};

/** A received message's menu — same Organise submenu, plus receive-only items. */
export const MessageMenuReceived: Story = {
  ...s({ msgMenu: "received" }),
  name: "Message · Menu (Received)",
};

/** Confirming the pin. */
export const PinMessageModal: Story = {
  ...s({ modal: "pin-msg" }),
  name: "Message · Pin Modal",
};

/** Pinned sent message — pin glyph next to the time, toast confirms. */
export const MessagePinned: Story = {
  ...s({ pinnedIds: ["m4"], toast: "Message pinned", toastPos: "center" }),
  name: "Message · Pinned (Sent)",
};

/** Pinned received message. */
export const MessagePinnedReceived: Story = {
  ...s({ pinnedIds: ["m7"], toast: "Message pinned", toastPos: "center" }),
  name: "Message · Pinned (Received)",
};

/** The chat header's ⋮ menu holds the "Pinned messages" entry. */
export const HeaderMenu: Story = {
  ...s({ headerMenu: true, pinnedIds: ["m4"] }),
  name: "Header · Menu",
};

/** The Pinned Messages panel lists every pinned message in the chat. */
export const PinnedMessagesPanel: Story = {
  ...s({ panel: true, pinnedIds: ["m4", "m8"] }),
  name: "Pinned Messages · Panel",
};

/** A pinned item's menu — Unpin Message, Stop notifications… */
export const PinnedMessageMenu: Story = {
  ...s({ panel: true, panelItemMenu: true, pinnedIds: ["m4", "m8"] }),
  name: "Pinned Messages · Item Menu",
};

/** Confirming the unpin from the panel. */
export const UnpinMessageModal: Story = {
  ...s({ panel: true, modal: "unpin-msg", pinnedIds: ["m4", "m8"] }),
  name: "Pinned Messages · Unpin Modal",
};

/** Unpinned — removed from the panel, toast confirms. */
export const MessageUnpinned: Story = {
  ...s({
    panel: true,
    panelAfterUnpin: true,
    pinnedIds: ["m4"],
    toast: "Message unpinned",
    toastPos: "right",
  }),
  name: "Pinned Messages · Unpinned",
};

/** Clicking a pinned message jumps to it in the conversation (flash highlight). */
export const JumpToPinned: Story = {
  ...s({ panel: true, pinnedIds: ["m4", "m8"], highlightId: "m4" }),
  name: "Pinned Messages · Jump To Message",
};
