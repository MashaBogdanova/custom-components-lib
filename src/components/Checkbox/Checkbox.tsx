import * as React from 'react';

import * as styles from './Checkbox.module.scss';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}

function Checkbox({
  label = 'Your label',
  checked,
  defaultChecked = false,
  disabled = false,
  className,
  labelClassName,
}: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        className={`
        ${styles.input}
        ${className ? styles[className] : ''}
        `}
        type="checkbox"
        checked={checked && checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {label && (
        <span
          className={`
          ${styles.label} 
          ${labelClassName ? styles[labelClassName] : ''}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
}

export default Checkbox;
