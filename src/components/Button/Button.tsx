import * as React from 'react';
import { useState } from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  label = 'Button',
  disabled = false,
  onClick,
}) => {
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
      `}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
