import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  defaultChecked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked',
  defaultChecked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  defaultChecked: false,
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  label: 'Checked Disabled',
  defaultChecked: true,
  disabled: true,
};
