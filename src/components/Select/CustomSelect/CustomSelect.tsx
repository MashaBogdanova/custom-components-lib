import * as React from 'react';
import { useState } from 'react';

import * as styles from './CustomSelect.module.scss';

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  isSelected: boolean;
  selectedValue: string;
  className?: string;
}

function CustomSelect({
  isOpen,
  setOpen,
  isSelected,
  selectedValue,
  className,
}: Props) {
  const [isIconRotate, setIconRotate] = useState<boolean>(false);

  return (
    <div
      className={`
      ${styles.select} 
      ${className ? styles[className] : ''}
      `}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls="custom-select-list"
      tabIndex={0}
      onClick={() => setOpen(true)}
    >
      <div className={styles.selected}>{isSelected ? selectedValue : ''}</div>

      <div
        className={`
        ${styles.icon}
        ${isIconRotate ? styles.icon_rotate : ''}
        `}
        onClick={() => setIconRotate(true)}
        onBlur={() => setIconRotate(false)}
        tabIndex={0}
      >
        ▼
      </div>
    </div>
  );
}

export default CustomSelect;
