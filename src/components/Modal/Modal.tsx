import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  children = <h1>Your modal</h1>,
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
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
