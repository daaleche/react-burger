import { FC } from "react";
import { NavLink } from 'react-router-dom'
import styles from './nav-item.module.css'
import { TNavItem } from "../../types";

export const NavItem: FC<TNavItem> = ({ text, link, children }) => {
    return (
        <NavLink to={link} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.notactive}`}>
            {children}
            <p className={styles.text}>{text}</p>
        </NavLink>
    )
}