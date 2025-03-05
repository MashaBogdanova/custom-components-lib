import * as React from 'react';
import * as styles from './TextField.module.scss';
import {capitalize} from "@/utils/capitalize-string";

export interface TextFieldProps {
  variant: 'outlined' | 'filled' | 'standard';
  label?: string;
  error?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({variant = 'outlined', label, error = false}) => {
  return (
    <div className={`${styles.textfield} ${styles[variant]} ${error ? styles.error : ''}`}>
      <label
        className={`${styles.label} ${label ? '' : styles['label-default']}`}>{label ? label : capitalize(variant)}</label>
      <input
        className={styles.input}
        placeholder={capitalize(variant)}
      />
    </div>
  );
};

export default TextField;
