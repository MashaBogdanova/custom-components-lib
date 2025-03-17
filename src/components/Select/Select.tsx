import * as React from 'react';
import { useState } from 'react';

import CustomSelect from './CustomSelect/CustomSelect';
import OptionsList from './OptionsList/OptionsList';
import * as styles from './Select.module.scss';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  initialValue?: string;
  options?: Option[];
  label?: string;
  customSelectStyle?: React.CSSProperties;
  customLabelStyle?: React.CSSProperties;
  customListStyle?: React.CSSProperties;
  customListItemStyle?: React.CSSProperties;
  customSelectClassName?: string;
  customLabelClassName?: string;
  customListClassName?: string;
  customListItemClassName?: string;
  onClick?: (value: Option) => void;
}

export const defaultOptions: Option[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const DEFAULT_SELECT_PROPS: SelectProps = {
  initialValue: '',
  label: 'Your label',
  options: defaultOptions,
  customSelectStyle: {},
  customLabelStyle: {},
  customListStyle: {},
  customListItemStyle: {},
  customSelectClassName: '',
  customLabelClassName: '',
  customListClassName: '',
  customListItemClassName: '',
  // eslint-disable-next-line
  onClick: (value) => console.log(`Selected value ${value.label}`),
};

const Select: React.FC<SelectProps> = ({
  initialValue = DEFAULT_SELECT_PROPS.initialValue,
  label = DEFAULT_SELECT_PROPS.label,
  options = DEFAULT_SELECT_PROPS.options,
  customSelectStyle = DEFAULT_SELECT_PROPS.customSelectStyle,
  customLabelStyle = DEFAULT_SELECT_PROPS.customLabelStyle,
  customListStyle = DEFAULT_SELECT_PROPS.customListStyle,
  customListItemStyle = DEFAULT_SELECT_PROPS.customListItemStyle,
  customSelectClassName = DEFAULT_SELECT_PROPS.customSelectClassName,
  customLabelClassName = DEFAULT_SELECT_PROPS.customLabelClassName,
  customListClassName = DEFAULT_SELECT_PROPS.customListClassName,
  customListItemClassName = DEFAULT_SELECT_PROPS.customListItemClassName,
  onClick = DEFAULT_SELECT_PROPS.onClick,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isSelected, setSelected] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const handleSelect = (selectedOption: Option) => {
    setSelectedValue(selectedOption.label);

    if (onClick) onClick(selectedOption);
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
          className={[
            styles.label,
            isOpen || isSelected ? styles.label_focused : '',
            customLabelClassName,
          ]
            .filter(Boolean)
            .join(' ')}
          style={customLabelStyle}
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
          customClassName={customSelectClassName}
          customStyle={customSelectStyle}
        />
        {isOpen && (
          <OptionsList
            options={options}
            handleSelect={handleSelect}
            initialValue={initialValue}
            customListClassName={customListClassName}
            customListItemClassName={customListItemClassName}
            customListStyle={customListStyle}
            customListItemStyle={customListItemStyle}
          />
        )}
      </div>
    </div>
  );
};
export default Select;
