import * as React from 'react';

import { Option } from '@/components/Select/Select';

import * as styles from './OptionList.module.scss';

interface Props {
  options: Option[];
  handleSelect: (selectedOption: Option) => void;
  initialValue: string;
}

function OptionsList({ options, handleSelect, initialValue }: Props) {
  return (
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
  );
}

export default OptionsList;
