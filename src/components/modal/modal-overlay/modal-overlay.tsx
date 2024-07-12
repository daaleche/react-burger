import { useRef, useEffect, FC } from "react";
import styles from './modal-overlay.module.css';
import { TModalOverlay } from "../../../types";

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
    const overlay = useRef(null)
    useEffect(() => {
        const handleOverlayClick = (e: MouseEvent) => {
            if (e.target === overlay.current) {
                onClose(e);
            }
        };
        document.addEventListener("click", handleOverlayClick);

        return () => {
            document.removeEventListener("click", handleOverlayClick);
        };
    }, [onClose]);

    return (
        <div className={styles.overlay} ref={overlay} />
    );
}