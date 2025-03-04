import * as React from "react";
import * as styles from "./Button.module.scss"
import {useState} from "react";

export interface ButtonProps {
  label: string;
  type: 'text' | 'contained' | 'outlined';
  onClick?: () => void;
}

const MyButton: React.FC<ButtonProps> = ({label, type, onClick}) => {
  const [ripple, setRipple] = useState(false);
  const handleClick = (): void => {
    setRipple(true);
    if (onClick) onClick();
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <button
      className={`${styles.button} ${styles[type]} ${ripple ? styles.ripple : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default MyButton;
