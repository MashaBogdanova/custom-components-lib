import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: '',
  label: 'Select an option',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  onChange: (selectedOption) => console.log(selectedOption),
};
