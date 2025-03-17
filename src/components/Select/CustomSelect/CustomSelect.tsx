import * as React from 'react';
import { useState } from 'react';

import * as styles from './CustomSelect.module.scss';

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  isSelected: boolean;
  selectedValue: string;
  customClassName?: string;
  customStyle?: React.CSSProperties;
}

function CustomSelect({
  isOpen,
  setOpen,
  isSelected,
  selectedValue,
  customClassName,
  customStyle,
}: Props) {
  const [isIconRotate, setIconRotate] = useState<boolean>(false);

  return (
    <div
      className={[styles.select, customClassName].filter(Boolean).join(' ')}
      style={customStyle}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls="custom-select-list"
      tabIndex={0}
      onClick={() => setOpen(true)}
    >
      <div className={styles.selected}>{isSelected ? selectedValue : ''}</div>

      <div
        className={[styles.icon, isIconRotate ? styles.icon_rotate : '']
          .filter(Boolean)
          .join(' ')}
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
