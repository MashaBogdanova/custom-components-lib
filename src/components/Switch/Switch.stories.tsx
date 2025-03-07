import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import Switch, { SwitchProps } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args: SwitchProps) => (
  <Switch {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DefaultCheckedDisabled = Template.bind({});
DefaultCheckedDisabled.args = {
  defaultChecked: true,
  disabled: true,
};
