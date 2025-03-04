import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["contained", "text", "outlined"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    label: "Text Button",
    type: "text",
  },
};

export const Contained: Story = {
  args: {
    label: "Contained Button",
    type: "contained",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    type: "outlined",
  },
};
