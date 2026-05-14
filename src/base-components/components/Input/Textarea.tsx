import "./Textarea.css";

export interface TextareaProps {
  /** Label text above the textarea */
  label?: string;
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Number of visible rows. Default: 4 */
  rows?: number;
  /** Hint/helper text below the textarea */
  hint?: string;
  /** Error message (replaces hint when present) */
  error?: string;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Whether the textarea is resizable. Default: true */
  resizable?: boolean;
  /** Callback on value change */
  onChange?: (value: string) => void;
}

export function Textarea({
  label,
  required = false,
  placeholder = "",
  value,
  rows = 4,
  hint,
  error,
  disabled = false,
  resizable = true,
  onChange,
}: TextareaProps) {
  const hasError = !!error;

  return (
    <div className={`textarea-field ${hasError ? "textarea-field--error" : ""} ${disabled ? "textarea-field--disabled" : ""}`}>
      {label && (
        <div className="textarea-field__label-wrap">
          <label className="textarea-field__label">{label}</label>
          {required && <span className="textarea-field__required">*</span>}
        </div>
      )}
      <textarea
        className={`textarea-field__input ${hasError ? "textarea-field__input--error" : ""} ${!resizable ? "textarea-field__input--no-resize" : ""}`}
        placeholder={placeholder}
        value={value}
        rows={rows}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {(hint || error) && (
        <span className={`textarea-field__hint ${hasError ? "textarea-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
