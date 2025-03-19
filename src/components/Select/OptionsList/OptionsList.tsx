import clsx from 'clsx';
import * as React from 'react';

import { Option } from '@/components/Select/Select';

import * as styles from './OptionList.module.scss';

interface Props {
  options: Option[];
  handleSelect: (selectedOption: Option) => void;
  initialValue: string;
  customListClassName?: string;
  customListItemClassName?: string;
  customListStyle?: React.CSSProperties;
  customListItemStyle?: React.CSSProperties;
}

function OptionsList({
  options,
  handleSelect,
  initialValue,
  customListClassName,
  customListItemClassName,
  customListStyle,
  customListItemStyle,
}: Props) {
  return (
    <ul
      className={clsx(styles.optionsList, customListClassName)}
      style={customListStyle}
      role="listbox"
      id="custom-select-list"
    >
      {options.map((option: Option) => (
        <li
          className={clsx(styles.option, customListItemClassName)}
          style={customListItemStyle}
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
