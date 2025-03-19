import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        style={{
          color: '#1976d2',
          textTransform: 'uppercase',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        {args.children}
      </Modal>
    </>
  );
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  children: <div style={{ padding: '20px' }}>Modal content</div>,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  children: <div style={{ padding: '20px' }}>Modal content</div>,
};
