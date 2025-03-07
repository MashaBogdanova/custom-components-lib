import * as React from 'react';
import { useState } from 'react';

import { capitalize } from '@/utils/capitalize-string';

import * as styles from './TextField.module.scss';

export interface TextFieldProps {
  variant: 'outlined' | 'filled' | 'standard';
  label?: string;
  placeholder?: string;
  error?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  label,
  placeholder = '',
  error = false,
  className,
  inputClassName,
  labelClassName,
}) => {
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <div
      className={`
      ${styles.textfield} 
      ${styles[variant]} 
      ${error ? styles.error : ''}
      ${className ? styles[className] : ''}
      `}
      onClick={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <label
        className={`
        ${styles.label} 
        ${isFocused ? styles.label_focused : ''}
        ${labelClassName ? styles[labelClassName] : ''}
        `}
      >
        {label ? label : capitalize(variant)}
      </label>
      <input
        className={`
        ${styles.input} 
        ${inputClassName ? styles[inputClassName] : ''}
        `}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
