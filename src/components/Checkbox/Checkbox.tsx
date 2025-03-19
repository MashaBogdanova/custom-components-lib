import clsx from 'clsx';
import * as React from 'react';
import { useState } from 'react';

import * as styles from './Checkbox.module.scss';

export interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  customInputStyle?: React.CSSProperties;
  customInputClassName?: string;
  customLabelStyle?: React.CSSProperties;
  customLabelClassName?: string;
  onChange?: (checked: boolean) => void;
}

export const DEFAULT_CHECKBOX_PROPS: CheckboxProps = {
  label: 'Your label',
  disabled: false,
  checked: false,
  customInputStyle: {},
  customInputClassName: '',
  customLabelStyle: {},
  customLabelClassName: '',
  // eslint-disable-next-line
  onChange: (checked) => console.log(`Checkbox checked: ${checked}`),
};

function Checkbox({
  label = DEFAULT_CHECKBOX_PROPS.label,
  disabled = DEFAULT_CHECKBOX_PROPS.disabled,
  checked = DEFAULT_CHECKBOX_PROPS.checked,
  customInputStyle = DEFAULT_CHECKBOX_PROPS.customInputStyle,
  customInputClassName = DEFAULT_CHECKBOX_PROPS.customInputClassName,
  customLabelStyle = DEFAULT_CHECKBOX_PROPS.customLabelStyle,
  customLabelClassName = DEFAULT_CHECKBOX_PROPS.customLabelClassName,
  onChange = DEFAULT_CHECKBOX_PROPS.onChange,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;

    setIsChecked((prev) => !prev);

    if (onChange) onChange(isChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        className={clsx(styles.input, customInputClassName)}
        style={customInputStyle}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
      />
      {label && (
        <span
          className={clsx(styles.label, customLabelClassName)}
          style={customLabelStyle}
        >
          {label}
        </span>
      )}
    </label>
  );
}

export default Checkbox;
