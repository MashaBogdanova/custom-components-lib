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
  // eslint-disable-next-line
  onClose: () => console.log('Modal closed'),
};

const Modal = ({
  isOpen = DEFAULT_MODAL_PROPS.isOpen,
  children = DEFAULT_MODAL_PROPS.children,
  customStyle = DEFAULT_MODAL_PROPS.customStyle,
  customClassName = DEFAULT_MODAL_PROPS.customClassName,
  onClose = DEFAULT_MODAL_PROPS.onClose,
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

  return createPortal(
    <div className={styles.modal} onClick={onClose} role="dialog">
      <div
        className={[styles.content, customClassName].filter(Boolean).join(' ')}
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
