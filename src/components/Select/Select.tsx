import * as React from 'react';
import { useState } from 'react';

import CustomSelect from '@/components/Select/CustomSelect/CustomSelect';
import OptionsList from '@/components/Select/OptionsList/OptionsList';

import * as styles from './Select.module.scss';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  initialValue: string;
  options: Option[];
  onChange: (value: Option) => void;
  label?: string;
  selectClassName?: string;
  labelClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
}

const defaultOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const Select: React.FC<SelectProps> = ({
  initialValue = '',
  label = 'Your label',
  options = defaultOptions,
  onChange,
  selectClassName,
  labelClassName,
  listClassName,
                                         listItemClassName
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isSelected, setSelected] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const handleSelect = (selectedOption: Option) => {
    setSelectedValue(selectedOption.label);

    if (onChange) onChange(selectedOption);
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
      {label && (
        <label
          className={`
          ${styles.label} 
          ${isOpen || isSelected ? styles.label_focused : ''}
          ${labelClassName ? styles[labelClassName] : ''}
          `}
        >
          {label}
        </label>
      )}

      <div className={styles.selectWrapper}>
        <CustomSelect
          isOpen={isOpen}
          setOpen={setOpen}
          isSelected={isSelected}
          selectedValue={selectedValue}
          className={selectClassName && selectClassName}
        />
        {isOpen && (
          <OptionsList
            options={options}
            handleSelect={handleSelect}
            initialValue={initialValue}
            className={listClassName && listClassName}
            itemClassName={listItemClassName && listItemClassName}
          />
        )}
      </div>
    </div>
  );
};
export default Select;
