import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import Select, {Option, SelectProps} from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args: SelectProps) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: '',
  label: 'Select an option',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  onChange: (selectedOption: Option) => alert(selectedOption.label),
};
