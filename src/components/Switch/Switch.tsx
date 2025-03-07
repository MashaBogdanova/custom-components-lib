import * as React from 'react';
import { useState } from 'react';

import * as styles from './Switch.module.scss';

export interface SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = ({
  defaultChecked = false,
  disabled = false,
  onChange,
}: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const switchHandler = () => {
    if (disabled) return;
    setChecked((prev) => !prev);

    if (onChange) onChange(!checked);
  };

  return (
    <label
      className={`
      ${styles.switch} 
      ${disabled ? styles.disabled : ''}`}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={switchHandler}
      />
      <span
        className={`
        ${styles.slider}
        ${checked ? styles.slider_checked : ''}
        `}
      />
    </label>
  );
};

export default Switch;
