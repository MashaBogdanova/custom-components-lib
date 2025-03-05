import * as React from 'react';

import * as styles from './Select.module.scss';

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
}

const defaultOptions = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
  },
];

const Select: React.FC<SelectProps> = ({
  value,
  label,
  options = defaultOptions,
  onChange,
}) => (
  <div className={styles.container}>
    {label && <label className={styles.label}>{label}</label>}
    <div className={styles.selectWrapper}>
      <select className={styles.select} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className={styles.icon}>▼</span>
    </div>
  </div>
);
export default Select;
