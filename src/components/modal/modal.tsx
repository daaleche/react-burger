import { FC, useEffect } from "react";
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { ModalOverlay } from './modal-overlay/modal-overlay';
import { ESCAPE_KEY } from '../../utils/constants'
import { TModal } from "../../types";

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal: FC<TModal> = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      //Escape
      if (e.key === ESCAPE_KEY) {
        onClose(e);
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc)
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        {!!title && (
          <h2 className={styles.title}>{title}</h2>
        )}
        <span className={styles.close} onClick={onClose} data-test="close-icon">
          <CloseIcon type="primary" />
        </span>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>
    , modalRoot
  )
}