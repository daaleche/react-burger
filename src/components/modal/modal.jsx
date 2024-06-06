import { useEffect } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import { ESCAPE_KEY } from '../../utils/constants'

const modalRoot = document.getElementById('modal-root');

export default function Modal({ title, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      //Escape
      if (e.keyCode === ESCAPE_KEY) {
        onClose(e);
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc)
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.close} onClick={onClose}>
          <CloseIcon />
        </span>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </div>
    , modalRoot
  )
}


Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}