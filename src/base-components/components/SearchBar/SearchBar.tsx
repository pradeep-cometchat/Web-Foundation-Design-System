import { useState } from "react";
import "./SearchBar.css";

export interface SearchBarProps {
  /** Placeholder text. Default: "Search" */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when the input is cleared */
  onClear?: () => void;
  /** Whether to show the clear button when input has value. Default: true */
  showClear?: boolean;
  /** Additional className */
  className?: string;
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchBar({
  placeholder = "Search",
  value,
  onChange,
  onClear,
  showClear = true,
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (value === undefined) {
      setInternalValue("");
    }
    onChange?.("");
    onClear?.();
  };

  return (
    <div className={`search-bar ${className || ""}`}>
      <div className="search-bar__input-wrapper">
        <span className="search-bar__icon">
          <SearchIcon />
        </span>
        <input
          className="search-bar__input"
          type="text"
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          aria-label={placeholder}
        />
        {showClear && currentValue && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}
