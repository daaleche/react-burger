import { FC } from "react";
import { NavLink } from 'react-router-dom'
import styles from './nav-item.module.css'
import { TNavItem } from "../../types";

export const NavItem: FC<TNavItem> = ({ text, link, children }) => {
    return (
        <NavLink to={link} className={({ isActive }) => isActive ? styles.active : styles.link}>
            {children}
            <p className={styles.text}>{text}</p>
        </NavLink>
    )
}