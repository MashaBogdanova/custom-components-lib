import clsx from 'clsx';
import * as React from 'react';
import { useState } from 'react';

import * as styles from './Switch.module.scss';

export interface SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  customClassName?: string;
  customStyle?: React.CSSProperties;
  onChange?: (checked: boolean) => void;
}

export const DEFAULT_SWITCH_PROPS: SwitchProps = {
  defaultChecked: false,
  disabled: false,
  customClassName: '',
  customStyle: {},
  // eslint-disable-next-line
  onChange: (checked) => console.log(`Switch checked: ${checked}`),
};

const Switch = ({
  defaultChecked = DEFAULT_SWITCH_PROPS.defaultChecked,
  disabled = DEFAULT_SWITCH_PROPS.disabled,
  customClassName = DEFAULT_SWITCH_PROPS.customClassName,
  customStyle = DEFAULT_SWITCH_PROPS.customStyle,
  onChange = DEFAULT_SWITCH_PROPS.onChange,
}: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const switchHandler = () => {
    if (disabled) return;
    setChecked((prev) => !prev);

    if (onChange) onChange(!checked);
  };

  return (
    <label className={clsx(styles.switch, { [styles.disabled]: disabled })}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={switchHandler}
      />
      <span
        className={clsx(
          styles.slider,
          { [styles.slider_checked]: checked },
          customClassName
        )}
        style={customStyle}
      />
    </label>
  );
};

export default Switch;
