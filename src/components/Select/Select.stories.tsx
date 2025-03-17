import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import Select, { defaultOptions, Option, SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args: SelectProps) => (
  <Select {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: defaultOptions,
  // eslint-disable-next-line
  onChange: (selectedOption: Option) => console.log(selectedOption.label),
};
