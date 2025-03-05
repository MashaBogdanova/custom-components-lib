import * as React from 'react';
import { useState } from 'react';

import * as styles from './Button.module.scss';

export interface ButtonProps {
  label?: string;
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  variant = 'contained',
  size = 'medium',
  onClick,
}) => {
  const [ripple, setRipple] = useState(false);
  const handleClick = (): void => {
    setRipple(true);

    if (onClick) onClick();
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${ripple ? styles.ripple : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
