import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    variant: {
      options: ['contained', 'text', 'outlined'],
    },
    size: {
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    value: { control: 'text' },
    customStyle: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    value: 'Text',
    variant: 'text',
    size: 'medium',
  },
};

export const Contained: Story = {
  args: {
    value: 'Contained',
    variant: 'contained',
    size: 'medium',
    customClassName: '',
  },
};

export const Outlined: Story = {
  args: {
    value: 'Outlined',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    value: 'Small',
    variant: 'contained',
    size: 'small',
    customStyle: {},
  },
};

export const Medium: Story = {
  args: {
    value: 'Medium',
    variant: 'contained',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    value: 'Large',
    variant: 'contained',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled',
    variant: 'contained',
    size: 'medium',
    disabled: true,
  },
};

export const AutoFocus: Story = {
  args: {
    value: 'AutoFocus',
    variant: 'contained',
    size: 'medium',
    autofocus: true,
  },
};
