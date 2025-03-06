import * as React from 'react';
import { useState } from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  value = 'Button',
  disabled = false,
  autofocus = false,
  type = 'button',
  className,
  onClick,
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
      className={`
      ${styles.button} 
      ${styles[variant]} 
      ${styles[size]} 
      ${ripple && !disabled ? styles.ripple : ''}
      ${disabled ? styles.disabled : ''} 
      ${className ? styles[className] : ''}
      `}
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
