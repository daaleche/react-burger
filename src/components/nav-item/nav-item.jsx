import React from "react";
import styles from './nav-item.module.css'

function NavItem({ children, text }) {
    return (
        <div className={styles.navlink}>
            {children}
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default NavItem