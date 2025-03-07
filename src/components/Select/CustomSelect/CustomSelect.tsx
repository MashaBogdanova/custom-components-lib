import * as React from 'react';

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

      <span className={styles.icon}>▼</span>
    </div>
  );
}

export default CustomSelect;
