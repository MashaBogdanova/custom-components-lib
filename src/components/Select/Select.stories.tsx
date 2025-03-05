import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <Select {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '1',
  label: 'Choose',
};
