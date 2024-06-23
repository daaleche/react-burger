import { NavLink } from 'react-router-dom'
import styles from './nav-item.module.css'
import PropTypes from 'prop-types';

export default function NavItem({ text, link, children }) {
    return (
        <NavLink to={link} className={({ isActive }) => isActive ? styles.active : styles.link}>
            {children}
            <p className={styles.text}>{text}</p>
        </NavLink>
    )
}

NavItem.propTypes = {
    children: PropTypes.element,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}