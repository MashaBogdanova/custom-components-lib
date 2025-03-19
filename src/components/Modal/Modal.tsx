import clsx from 'clsx';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './Modal.module.scss';

export interface ModalProps {
  isOpen?: boolean;
  children?: ReactNode;
  customStyle?: React.CSSProperties;
  customClassName?: string;
  onClose?: () => void;
}

export const DEFAULT_MODAL_PROPS: ModalProps = {
  isOpen: false,
  children: <h1>Your modal</h1>,
  customStyle: {},
  customClassName: '',
};

const Modal = ({
  isOpen = DEFAULT_MODAL_PROPS.isOpen,
  children = DEFAULT_MODAL_PROPS.children,
  customStyle = DEFAULT_MODAL_PROPS.customStyle,
  customClassName = DEFAULT_MODAL_PROPS.customClassName,
  onClose,
}: ModalProps) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    let root = document.getElementById('modal-root');

    if (!root) {
      root = document.createElement('div');
      root.setAttribute('id', 'modal-root');
      document.body.appendChild(root);
    }
    setModalRoot(root);
  }, []);

  if (!isOpen || !modalRoot) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // eslint-disable-next-line
      console.log('Modal closed');
    }
  };

  return createPortal(
    <div className={styles.modal} onClick={handleClose} role="dialog">
      <div
        className={clsx(styles.content, customClassName)}
        style={customStyle}
        onClick={(e) => e.stopPropagation()}
        data-testid="content"
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
