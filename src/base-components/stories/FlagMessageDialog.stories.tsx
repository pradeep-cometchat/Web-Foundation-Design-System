import type { Meta, StoryObj } from "@storybook/react";
import { FlagMessageDialog } from "../components/FlagMessageDialog";

/**
 * A dialog for reporting or flagging inappropriate messages. Presents selectable
 * reason badges, an optional text area for additional context, and cancel/report actions.
 *
 * **Structure (from Figma node 4090:860298):**
 * - Container: 400px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100`
 * - Header: title (20px, bold, `--color-neutral-900`), close icon (24px), description (14px, `--color-neutral-700`)
 * - Badges: pill-shaped (`--radius-full`), border `--color-neutral-200`, 14px medium text, wrap layout
 * - Selected badge: `--color-ep-50` bg, `--color-ep-300` border, `--color-ep-700` text
 * - Text area: `--color-neutral-50` bg, `--radius-md`, border `--color-neutral-100`, placeholder in `--color-neutral-600`
 * - Cancel: outlined button, Report: disabled (`--color-neutral-200` bg) until a reason is selected, then `--color-error` bg
 */
const meta: Meta<typeof FlagMessageDialog> = {
  title: "Base Components/Flag Message Dialog",
  component: FlagMessageDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the dialog is visible." },
    reasons: { control: false, description: "Pre-defined report reasons." },
    onCancel: { control: false },
    onReport: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Default state — no reason selected, Report button disabled. Matches Figma exactly. */
export const Default: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
  },
};

/** Custom reasons for a different context. */
export const CustomReasons: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
    reasons: [
      "Harassment or bullying",
      "Impersonation",
      "Intellectual property violation",
      "Self-harm or suicide",
      "Other",
    ],
  },
};

/** Fewer reasons — minimal variant. */
export const MinimalReasons: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
    reasons: ["Spam", "Inappropriate content", "Other"],
  },
};

/** Interactive playground. */
export const Playground: StoryObj<typeof FlagMessageDialog> = {
  args: {
    open: true,
  },
  parameters: { docs: { disable: true } },
};
