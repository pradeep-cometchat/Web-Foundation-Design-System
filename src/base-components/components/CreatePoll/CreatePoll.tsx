import { useState } from "react";
import "./CreatePoll.css";

export interface CreatePollProps {
  /** Whether the dialog is visible */
  open?: boolean;
  /** Callback when close is clicked */
  onClose?: () => void;
  /** Callback when create is clicked */
  onCreate?: (question: string, options: string[]) => void;
}

export function CreatePoll({
  open = true,
  onClose,
  onCreate,
}: CreatePollProps) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  if (!open) return null;

  const addOption = () => setOptions([...options, ""]);

  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) return;
    setOptions(options.filter((_, i) => i !== index));
  };

  const canCreate = question.trim().length > 0 && options.filter((o) => o.trim()).length >= 2;

  return (
    <div className="create-poll">
      {/* Header */}
      <div className="create-poll__header">
        <span className="create-poll__title">Create Poll</span>
        <div className="create-poll__header-actions">
          <button type="button" className="create-poll__header-icon" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="create-poll__body">
        <div className="create-poll__fields">
          {/* Question */}
          <div className="create-poll__field">
            <label className="create-poll__label">Question</label>
            <input
              type="text"
              className="create-poll__input"
              placeholder="Ask question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="create-poll__options">
            <span className="create-poll__label">Options</span>
            {options.map((option, index) => (
              <div key={index} className="create-poll__option-row">
                <button
                  type="button"
                  className="create-poll__drag-handle"
                  aria-label="Reorder"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 6H16M4 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
                <div className="create-poll__option-input-wrap">
                  <input
                    type="text"
                    className="create-poll__option-input"
                    placeholder="Add"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                  />
                  {options.length > 2 && (
                    <button
                      type="button"
                      className="create-poll__option-remove"
                      onClick={() => removeOption(index)}
                      aria-label="Remove option"
                    >
                      <svg viewBox="0 0 20 20" fill="none"><path d="M5.5 14.5L10 10L14.5 5.5M14.5 14.5L10 10L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" className="create-poll__add-option" onClick={addOption}>
              + Add Option
            </button>
          </div>
        </div>

        {/* Create button */}
        <div className="create-poll__footer">
          <button
            type="button"
            className={`create-poll__btn ${canCreate ? "create-poll__btn--active" : ""}`}
            disabled={!canCreate}
            onClick={() => onCreate?.(question, options.filter((o) => o.trim()))}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
