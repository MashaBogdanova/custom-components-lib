import * as React from 'react';

import * as styles from './Select.module.scss';
import {useState} from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  initialValue: string;
  options: Option[];
  onChange: (value: Option) => void;
  label?: string;
}

const defaultOptions = [
  {value: '1', label: 'Option 1'},
  {value: '2', label: 'Option 2'},
  {value: '3', label: 'Option 3'},
];

const Select: React.FC<SelectProps> = ({
                                         initialValue = '',
                                         label= 'Your label',
                                         options = defaultOptions,
                                         onChange,
                                       }) => {

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isSelected, setSelected] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const handleSelect = (selectedOption: Option) => {
    setSelectedValue(selectedOption.label);
    onChange && onChange(selectedOption);
    setOpen(false);
    setSelected(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div className={styles.container} onBlur={handleBlur}>
      {label && <label className={`
      ${styles.label} 
      ${isOpen ? styles.label_focused : ''}
      ${isSelected ? styles.hidden : ''}
      `}
      >{label}</label>}

      <div className={styles.selectWrapper}>
        <div
          className={styles.select}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="custom-select-list"
          tabIndex={0}
          onClick={() => setOpen(true)}
        >
          <div className={styles.selected}>
            {isSelected
              ? selectedValue
              : ''
            }
          </div>
          <span className={styles.icon}>▼</span>
        </div>

        {isOpen && (
          <ul className={styles.optionsList} role="listbox" id="custom-select-list">
          {options.map((option: Option) => (
            <li
              className={styles.option}
              key={option.value}
              role="option"
              aria-selected={option.value === initialValue}
              tabIndex={0}
              onClick={() => handleSelect(option)}
              >
              {option.label}
            </li>
          ))}
          </ul>
          )}
      </div>
    </div>
  );
}
export default Select;
