import { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    error: false,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    error: false,
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    error: false,
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'outlined',
    error: true,
  },
};
