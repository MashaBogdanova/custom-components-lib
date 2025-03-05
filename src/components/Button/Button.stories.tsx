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
    label: 'Text',
    variant: 'text',
    size: 'medium',
  },
};

export const Contained: Story = {
  args: {
    label: 'Contained',
    variant: 'contained',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    variant: 'contained',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    variant: 'contained',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    variant: 'contained',
    size: 'large',
  },
};
