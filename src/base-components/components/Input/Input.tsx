import "./Input.css";

export interface InputProps {
  /** Label text above the input */
  label?: string;
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: "text" | "email" | "password" | "url" | "number" | "tel";
  /** Current value */
  value?: string;
  /** Hint/helper text below the input */
  hint?: string;
  /** Error message (replaces hint when present) */
  error?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Leading icon (Material Symbol name) */
  leadingIcon?: string;
  /** Trailing icon (Material Symbol name) */
  trailingIcon?: string;
  /** Callback on value change */
  onChange?: (value: string) => void;
}

export function Input({
  label,
  required = false,
  placeholder = "",
  type = "text",
  value,
  hint,
  error,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onChange,
}: InputProps) {
  const hasError = !!error;

  return (
    <div className={`input-field ${hasError ? "input-field--error" : ""} ${disabled ? "input-field--disabled" : ""}`}>
      {label && (
        <div className="input-field__label-wrap">
          <label className="input-field__label">{label}</label>
          {required && <span className="input-field__required">*</span>}
        </div>
      )}
      <div className={`input-field__container ${hasError ? "input-field__container--error" : ""}`}>
        {leadingIcon && (
          <span className="input-field__icon input-field__icon--leading icon-outlined" style={{ fontFamily: "var(--cometchat-font-family)" }}>
            {leadingIcon}
          </span>
        )}
        <input
          className="input-field__input"
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {trailingIcon && (
          <span className="input-field__icon input-field__icon--trailing icon-outlined" style={{ fontFamily: "var(--cometchat-font-family)" }}>
            {trailingIcon}
          </span>
        )}
      </div>
      {(hint || error) && (
        <span className={`input-field__hint ${hasError ? "input-field__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
