import type { Meta, StoryObj } from "@storybook/react";
import { CreatePoll } from "../components/CreatePoll";

/**
 * A dialog for creating a new poll with a question and multiple options.
 * Includes a header with close button, question input, dynamic option list
 * with drag handles and delete buttons, an "Add Option" link, and a Create action.
 *
 * **Structure (from Figma node 4104:484476 — Poll page):**
 * - Container: 420px × 480px (expandable to 640px), `--radius-xl` (12px), `--shadow-lg`
 * - Header: 64px, title "Create Poll" (20px, bold), close + info icons, border-bottom
 * - Question field: label "Question" (16px, medium), input (14px, `--radius-md`)
 * - Options: label "Options" (16px, medium), each has drag handle + input (36px) + delete icon
 * - "+ Add Option": 12px, medium, `--color-ep-600`
 * - Error state: shows "You can add maximum 6 options" warning below options
 * - Create button: full width, 40px, disabled: `--color-neutral-200`; enabled: `--color-ep-600`
 *
 * **States (from Figma):**
 * - Empty (default) — 2 empty options, Create disabled
 * - Filled — question + options filled, Create enabled (purple)
 * - Multiple options — 4+ options with individual delete icons
 * - Max options — 6 options, shows error message, no more can be added
 * - Results view — shows poll results with progress bars and voter avatars
 */
const meta: Meta<typeof CreatePoll> = {
  title: "Base Components/Create Poll",
  component: CreatePoll,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the dialog is visible." },
    onClose: { control: false },
    onCreate: { control: false },
  },
};
export default meta;

/* ─── Stories ─── */

/** Empty state — 2 empty options, Create button disabled. Matches Figma node 4104:484476. */
export const Empty: StoryObj<typeof CreatePoll> = {
  args: { open: true },
};

/** Filled state — question and options have content, Create button enabled (purple). Matches Figma node 4104:484487. */
export const Filled: StoryObj = {
  parameters: { layout: "centered" },
  render: () => (
    <FilledPollDemo />
  ),
};

/** Multiple options — 4 options with delete icons visible. Matches Figma node 4104:484498. */
export const MultipleOptions: StoryObj = {
  parameters: { layout: "centered" },
  render: () => (
    <MultipleOptionsPollDemo />
  ),
};

/** Max options with error — 6 options filled, error message shown. Matches Figma node 4104:484520. */
export const MaxOptionsError: StoryObj = {
  parameters: { layout: "centered" },
  render: () => (
    <MaxOptionsPollDemo />
  ),
};

/** Interactive playground. */
export const Playground: StoryObj<typeof CreatePoll> = {
  args: { open: true },
  parameters: { docs: { disable: true } },
};

/* ─── Demo Components (pre-filled states) ─── */

function FilledPollDemo() {
  return (
    <div className="create-poll" >
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <div className="create-poll__header-actions">
          <button type="button" className="create-poll__header-icon" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__fields">
          <div className="create-poll__field">
            <label className="create-poll__label">Question</label>
            <input type="text" className="create-poll__input" defaultValue="Do you know what time it is?" readOnly />
          </div>
          <div className="create-poll__options">
            <span className="create-poll__label">Options</span>
            <OptionRow value="Yes, I do" />
            <OptionRow value="No, I don't" />
            <button type="button" className="create-poll__add-option">+ Add Option</button>
          </div>
        </div>
        <div className="create-poll__footer">
          <button type="button" className="create-poll__btn create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

function MultipleOptionsPollDemo() {
  return (
    <div className="create-poll" >
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <div className="create-poll__header-actions">
          <button type="button" className="create-poll__header-icon" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__fields">
          <div className="create-poll__field">
            <label className="create-poll__label">Question</label>
            <input type="text" className="create-poll__input" defaultValue="What's your favorite color?" readOnly />
          </div>
          <div className="create-poll__options">
            <span className="create-poll__label">Options</span>
            <OptionRow value="Red" showDelete />
            <OptionRow value="Blue" showDelete />
            <OptionRow value="Green" showDelete />
            <OptionRow value="Yellow" showDelete />
            <button type="button" className="create-poll__add-option">+ Add Option</button>
          </div>
        </div>
        <div className="create-poll__footer">
          <button type="button" className="create-poll__btn create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

function MaxOptionsPollDemo() {
  return (
    <div className="create-poll" >
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <div className="create-poll__header-actions">
          <button type="button" className="create-poll__header-icon" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__fields">
          <div className="create-poll__field">
            <label className="create-poll__label">Question</label>
            <input type="text" className="create-poll__input" defaultValue="What's your favorite programming language?" readOnly />
          </div>
          <div className="create-poll__options">
            <span className="create-poll__label">Options</span>
            <OptionRow value="JavaScript" showDelete />
            <OptionRow value="TypeScript" showDelete />
            <OptionRow value="Python" showDelete />
            <OptionRow value="Rust" showDelete />
            <OptionRow value="Go" showDelete />
            <OptionRow value="Swift" showDelete />
            <button type="button" className="create-poll__add-option" style={{ opacity: 0.5, cursor: "not-allowed" }}>+ Add Option</button>
          </div>
        </div>
        <div className="create-poll__footer">
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 12, padding: "0 0" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="var(--color-error)"/></svg>
            <span style={{ fontSize: 12, color: "var(--color-error)", fontFamily: "var(--font-family-body)" }}>You can add maximum 6 options</span>
          </div>
          <button type="button" className="create-poll__btn create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Helper ─── */
function OptionRow({ value, showDelete }: { value: string; showDelete?: boolean }) {
  return (
    <div className="create-poll__option-row">
      <button type="button" className="create-poll__drag-handle" tabIndex={-1}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M4 6H16M4 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
      <div className="create-poll__option-input-wrap">
        <input type="text" className="create-poll__option-input" defaultValue={value} readOnly />
        {showDelete && (
          <button type="button" className="create-poll__option-remove" aria-label="Remove">
            <svg viewBox="0 0 20 20" fill="none"><path d="M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}
