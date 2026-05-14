import React from "react";
import { Checkbox } from "../Checkbox";
import type { CheckboxSize } from "../Checkbox";

export type RadioButtonSize = CheckboxSize;

export interface RadioButtonProps {
  /** Whether this radio is selected. */
  checked?: boolean;
  /** Change handler. */
  onChange?: (checked: boolean) => void;
  /** Size. Default: "md". */
  size?: RadioButtonSize;
  /** Primary label text. */
  label?: string;
  /** Supporting description below the label. */
  description?: string;
  /** Disabled state. */
  disabled?: boolean;
  /** Additional className. */
  className?: string;
}

/**
 * RadioButton — a single-select option within a group.
 * Wraps the Checkbox component with `type="radio"`.
 */
export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return <Checkbox {...props} type="radio" />;
};
