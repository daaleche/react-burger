import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export default function ModalOverlay({ onClick }) {
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
        <div className={styles.overlay} ref={overlay} />
    );
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}