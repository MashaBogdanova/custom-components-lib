import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import Modal from '../components/Modal/Modal';

jest.mock('../components/Modal/Modal.module.scss', () => ({
  modal: 'modal',
  content: 'content',
}));

const MODAL_ROOT_ID = 'modal-root';

describe('Modal Component', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', MODAL_ROOT_ID);
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById(MODAL_ROOT_ID);

    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test('renders when isOpen is true', () => {
    render(<Modal isOpen={true}>Modal Content</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(<Modal isOpen={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('calls onClose when clicked outside the content', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Inside Modal</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole('dialog'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking inside the content', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div data-testid="modal-content">Inside Modal</div>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-content'));
    expect(onClose).not.toHaveBeenCalled();
  });

  test('applies custom class name', () => {
    render(
      <Modal isOpen={true} customClassName="custom-modal">
        Styled Modal
      </Modal>
    );

    const contentDiv = screen.getByTestId('content');
    expect(contentDiv).toHaveClass('custom-modal');
  });
});
