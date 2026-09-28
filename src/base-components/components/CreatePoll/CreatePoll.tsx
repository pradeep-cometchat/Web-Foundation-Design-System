import { useState } from "react";
import { T, useT } from "../../../cometchat-foundation/localization";
import "./CreatePoll.css";

export interface CreatePollProps {
  /** Whether the dialog is visible */
  open?: boolean;
  /** Callback when close/cancel is clicked */
  onClose?: () => void;
  /** Callback when create is clicked */
  onCreate?: (question: string, options: string[]) => void;
  /** Maximum number of options allowed. Default: 12 */
  maxOptions?: number;
}

export function CreatePoll({
  open = true,
  onClose,
  onCreate,
  maxOptions = 12,
}: CreatePollProps) {
  const t = useT();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [error, setError] = useState("");

  if (!open) return null;

  const addOption = () => {
    if (options.length >= maxOptions) {
      setError(t("You've reached the limit. You can add up to {n} options.").replace("{n}", String(maxOptions)));
      return;
    }
    setOptions([...options, ""]);
    setError("");
  };

  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
    setError("");
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) return;
    setOptions(options.filter((_, i) => i !== index));
    setError("");
  };

  const canCreate = question.trim().length > 0 && options.filter((o) => o.trim()).length >= 2;

  const handleCreate = () => {
    if (!canCreate) {
      setError(t("Please fill in all required fields before creating a poll."));
      return;
    }
    onCreate?.(question, options.filter((o) => o.trim()));
  };

  return (
    <div className="create-poll">
      {/* Header */}
      <div className="create-poll__header">
        <span className="create-poll__title"><T>Create Poll</T></span>
        <button type="button" className="create-poll__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
        </button>
      </div>

      {/* Body */}
      <div className="create-poll__body">
        {/* Question */}
        <div className="create-poll__section">
          <label className="create-poll__label"><T>Question</T></label>
          <input
            type="text"
            className="create-poll__question-input"
            placeholder={t("Ask a question")}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        {/* Options */}
        <div className="create-poll__section">
          {options.map((option, index) => (
            <div key={index} className="create-poll__option-row">
              <button type="button" className="create-poll__drag" tabIndex={-1} aria-label="Reorder">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 8H21M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <div className="create-poll__option-field">
                <input
                  type="text"
                  className="create-poll__option-input"
                  placeholder={t("Option")}
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                />
                <button type="button" className="create-poll__emoji-btn" tabIndex={-1} aria-label="Add emoji">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M8.5 14.5C9.33 15.33 10.67 16 12 16C13.33 16 14.67 15.33 15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
              <button type="button" className="create-poll__remove" onClick={() => removeOption(index)} aria-label="Remove option">
                <svg viewBox="0 0 24 24" fill="none"><path d="M6.4 18.65L5.35 17.6L10.95 12L5.35 6.4L6.4 5.35L12 10.95L17.6 5.35L18.65 6.4L13.05 12L18.65 17.6L17.6 18.65L12 13.05L6.4 18.65Z" fill="currentColor"/></svg>
              </button>
            </div>
          ))}

          {options.length < maxOptions && (
            <button type="button" className="create-poll__add-option" onClick={addOption}>
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span><T>Add an option</T></span>
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="create-poll__footer">
        {error && (
          <div className="create-poll__error">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 8V13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="white"/></svg>
            <span><T>{error}</T></span>
          </div>
        )}
        <div className="create-poll__buttons">
          <button type="button" className="create-poll__btn create-poll__btn--cancel" onClick={onClose}>
            <T>Cancel</T>
          </button>
          <button
            type="button"
            className={`create-poll__btn create-poll__btn--create ${canCreate ? "create-poll__btn--active" : ""}`}
            onClick={handleCreate}
          >
            <T>Create</T>
          </button>
        </div>
      </div>
    </div>
  );
}
