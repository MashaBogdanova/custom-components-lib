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
    label: 'Text Button',
    variant: 'text',
    size: 'medium',
  },
};

export const Contained: Story = {
  args: {
    label: 'Contained Button',
    variant: 'contained',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'contained',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    variant: 'contained',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'contained',
    size: 'large',
  },
};
