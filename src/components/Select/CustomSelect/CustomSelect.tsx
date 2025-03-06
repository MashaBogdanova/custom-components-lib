import * as React from 'react';

import * as styles from '@/components/Select/Select.module.scss';

interface Props {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  isSelected: boolean;
  selectedValue: string;
}

function CustomSelect({ isOpen, setOpen, isSelected, selectedValue }: Props) {
  return (
    <div
      className={styles.select}
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
