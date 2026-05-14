import type { Meta, StoryObj } from "@storybook/react";
import { CreatePoll } from "../components/CreatePoll";

/**
 * A dialog for creating a new poll. Includes a question input, dynamic option list
 * with drag handles, emoji buttons, delete buttons, an "Add an option" link, error
 * states, and Cancel/Create action buttons.
 *
 * **Structure (from Figma):**
 * - Container: 420px, `--radius-3xl` (20px), `--shadow-lg`
 * - Header: 64px, "Create Poll" (20px, bold), close X, border-bottom
 * - Question: label (16px, medium) + rounded input (14px, border `--color-neutral-200`)
 * - Options: drag handle (≡) + rounded input with emoji icon (😊) + X delete button
 * - "+ Add an option": ⊕ icon + text in `--color-ep-600`
 * - Error: pink banner (`--color-error-50` bg) with error icon + message
 * - Buttons: Cancel (outlined) + Create (disabled: gray / active: `--color-ep-600`)
 * - Max options: 12
 *
 * **States:**
 * - Empty — 2 blank options, Create disabled
 * - Filled — question + options filled, Create active (purple)
 * - Validation error — "Please fill in all required fields before creating a poll."
 * - Max limit — "You've reached the limit. You can add up to 12 options."
 */
const meta: Meta<typeof CreatePoll> = {
  title: "Base Components/Create Poll",
  component: CreatePoll,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    open: { control: "boolean", description: "Whether the dialog is visible." },
    maxOptions: { control: { type: "number", min: 2, max: 20 }, description: "Maximum options allowed." },
    onClose: { control: false },
    onCreate: { control: false },
  },
};
export default meta;

/** Empty state — 2 blank options, Create disabled. */
export const Empty: StoryObj<typeof CreatePoll> = {
  args: { open: true },
};

/** Filled state — Create button active (purple). */
export const Filled: StoryObj = {
  render: () => <FilledDemo />,
};

/** Validation error state. */
export const ValidationError: StoryObj = {
  render: () => <ValidationErrorDemo />,
};

/** Max options reached (limit error). */
export const MaxOptions: StoryObj = {
  render: () => <MaxOptionsDemo />,
};

/** Interactive playground. */
export const Playground: StoryObj<typeof CreatePoll> = {
  args: { open: true, maxOptions: 12 },
  parameters: { docs: { disable: true } },
};

/* ─── Demo components for pre-filled states ─── */

function FilledDemo() {
  return (
    <div className="create-poll">
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <button type="button" className="create-poll__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
        </button>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__section">
          <label className="create-poll__label">Question</label>
          <input type="text" className="create-poll__question-input" defaultValue="How do you prefer to shop?" readOnly />
        </div>
        <div className="create-poll__section">
          <OptionRowDemo value="Online" />
          <OptionRowDemo value="In-store" />
          <OptionRowDemo value="Others" />
          <button type="button" className="create-poll__add-option">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span>Add an option</span>
          </button>
        </div>
      </div>
      <div className="create-poll__footer">
        <div className="create-poll__buttons">
          <button type="button" className="create-poll__btn create-poll__btn--cancel">Cancel</button>
          <button type="button" className="create-poll__btn create-poll__btn--create create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

function ValidationErrorDemo() {
  return (
    <div className="create-poll">
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <button type="button" className="create-poll__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
        </button>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__section">
          <label className="create-poll__label">Question</label>
          <input type="text" className="create-poll__question-input" defaultValue="How do you prefer to shop?" readOnly />
        </div>
        <div className="create-poll__section">
          <OptionRowDemo value="Online" />
          <OptionRowDemo value="In-store" />
          <OptionRowDemo value="Others" />
          <OptionRowDemo value="" />
          <OptionRowDemo value="" />
          <button type="button" className="create-poll__add-option">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span>Add an option</span>
          </button>
        </div>
      </div>
      <div className="create-poll__footer">
        <div className="create-poll__error">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 8V13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="white"/></svg>
          <span>Please fill in all required fields before creating a poll.</span>
        </div>
        <div className="create-poll__buttons">
          <button type="button" className="create-poll__btn create-poll__btn--cancel">Cancel</button>
          <button type="button" className="create-poll__btn create-poll__btn--create create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

function MaxOptionsDemo() {
  return (
    <div className="create-poll">
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <button type="button" className="create-poll__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
        </button>
      </div>
      <div className="create-poll__body">
        <div className="create-poll__section">
          <label className="create-poll__label">Question</label>
          <input type="text" className="create-poll__question-input" defaultValue="How do you prefer to shop?" readOnly />
        </div>
        <div className="create-poll__section">
          <OptionRowDemo value="Online" />
          <OptionRowDemo value="In-store" />
          <OptionRowDemo value="Others" />
          <OptionRowDemo value="" />
          <OptionRowDemo value="" />
          <OptionRowDemo value="" />
          <OptionRowDemo value="" />
        </div>
      </div>
      <div className="create-poll__footer">
        <div className="create-poll__error">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 8V13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="white"/></svg>
          <span>You've reached the limit. You can add up to 12 options.</span>
        </div>
        <div className="create-poll__buttons">
          <button type="button" className="create-poll__btn create-poll__btn--cancel">Cancel</button>
          <button type="button" className="create-poll__btn create-poll__btn--create create-poll__btn--active">Create</button>
        </div>
      </div>
    </div>
  );
}

function OptionRowDemo({ value }: { value: string }) {
  return (
    <div className="create-poll__option-row">
      <button type="button" className="create-poll__drag" tabIndex={-1}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M3 8H21M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
      <div className="create-poll__option-field">
        <input type="text" className="create-poll__option-input" defaultValue={value} placeholder="Option" readOnly />
        <button type="button" className="create-poll__emoji-btn" tabIndex={-1}>
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
      <button type="button" className="create-poll__remove">
        <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
      </button>
    </div>
  );
}
