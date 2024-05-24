import { useEffect } from "react";
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ title, isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      //Escape
      if (e.keyCode === 27) {
        onClose(e);
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc)
    };
  },);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.close} onClick={onClose}>
          <CloseIcon />
        </span>
        {children}
      </div>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
    </div>
    , modalRoot
  )
}


Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}