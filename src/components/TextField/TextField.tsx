import * as React from 'react';
import { useState } from 'react';

import { capitalize } from '../../utils/capitalize-string';
import * as styles from './TextField.module.scss';

export interface TextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
  placeholder?: string;
  error?: boolean;
  customTextFieldClassName?: string;
  customInputClassName?: string;
  customLabelClassName?: string;
  customTextFieldStyle?: React.CSSProperties;
  customInputStyle?: React.CSSProperties;
  customLabelStyle?: React.CSSProperties;
  onChange?: (value: string) => void;
}

export const DEFAULT_TEXT_FIELD_PROPS: TextFieldProps = {
  variant: 'outlined',
  placeholder: '',
  error: false,
  customTextFieldClassName: '',
  customInputClassName: '',
  customLabelClassName: '',
  customTextFieldStyle: {},
  customInputStyle: {},
  customLabelStyle: {},
  // eslint-disable-next-line
  onChange: (value) => console.log(`Current value: ${value}`),
};

const TextField: React.FC<TextFieldProps> = ({
  variant = DEFAULT_TEXT_FIELD_PROPS.variant,
  label = DEFAULT_TEXT_FIELD_PROPS.label,
  placeholder = DEFAULT_TEXT_FIELD_PROPS.placeholder,
  error = DEFAULT_TEXT_FIELD_PROPS.error,
  customTextFieldClassName = DEFAULT_TEXT_FIELD_PROPS.customTextFieldClassName,
  customInputClassName = DEFAULT_TEXT_FIELD_PROPS.customInputClassName,
  customLabelClassName = DEFAULT_TEXT_FIELD_PROPS.customLabelClassName,
  customTextFieldStyle = DEFAULT_TEXT_FIELD_PROPS.customTextFieldStyle,
  customInputStyle = DEFAULT_TEXT_FIELD_PROPS.customInputStyle,
  customLabelStyle = DEFAULT_TEXT_FIELD_PROPS.customLabelStyle,
  onChange = DEFAULT_TEXT_FIELD_PROPS.onChange,
}) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div
      className={[
        styles.textfield,
        styles[variant],
        error ? styles.error : '',
        customTextFieldClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={customTextFieldStyle}
      data-testid="textfield-container"
    >
      <label
        className={[
          styles.label,
          isFocused || value ? styles.label_focused : '',
          customLabelClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        style={customLabelStyle}
        data-testid="textfield-label"
      >
        {label ? label : capitalize(variant)}
      </label>
      <input
        className={[styles.input, customInputClassName]
          .filter(Boolean)
          .join(' ')}
        style={customInputStyle}
        placeholder={isFocused ? placeholder : ''}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
