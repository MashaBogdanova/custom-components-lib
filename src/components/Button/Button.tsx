import clsx from 'clsx';
import * as React from 'react';
import { useState } from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  type?: 'submit' | 'reset' | 'button';
  customStyle?: React.CSSProperties;
  customClassName?: string;
  onClick?: () => void;
}

export const DEFAULT_BUTTON_PROPS: ButtonProps = {
  variant: 'contained' as const,
  size: 'medium' as const,
  value: 'Button',
  disabled: false,
  autofocus: false,
  type: 'button' as const,
  customStyle: {},
  customClassName: '',
  // eslint-disable-next-line
  onClick: () => console.log('Button clicked'),
};

const Button: React.FC<ButtonProps> = ({
  variant = DEFAULT_BUTTON_PROPS.variant,
  size = DEFAULT_BUTTON_PROPS.size,
  value = DEFAULT_BUTTON_PROPS.value,
  disabled = DEFAULT_BUTTON_PROPS.disabled,
  autofocus = DEFAULT_BUTTON_PROPS.autofocus,
  type = DEFAULT_BUTTON_PROPS.type,
  customStyle = DEFAULT_BUTTON_PROPS.customStyle,
  customClassName = DEFAULT_BUTTON_PROPS.customClassName,
  onClick = DEFAULT_BUTTON_PROPS.onClick,
}: ButtonProps) => {
  const [ripple, setRipple] = useState(false);
  const handleClick = (): void => {
    if (disabled) return;
    setRipple(true);

    if (onClick) onClick();
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        customClassName,
        { [styles.ripple]: ripple && !disabled },
        { [styles.disabled]: disabled }
      )}
      style={customStyle}
      disabled={disabled}
      type={type}
      autoFocus={autofocus}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
