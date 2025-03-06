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
