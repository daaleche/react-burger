import { useRef, useEffect } from "react";
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({ isOpen, onClick }) {
    const overlay = useRef(null)
    useEffect(() => {
        const handleOverlayClick = (e) => {
            if (e.target === overlay.current) {
                onClick(e);
            }
        };
        document.addEventListener("click", handleOverlayClick);

        return () => {
            document.removeEventListener("click", handleOverlayClick);
        };
    }, [onClick]);

    return (
        <div className={isOpen ? `${styles.overlay} ${styles.overlay_open}` : styles.overlay}
            ref={overlay}>
        </div>
    );
}

ModalOverlay.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}