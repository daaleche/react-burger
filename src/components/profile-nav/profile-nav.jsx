import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import styles from './profile-nav.module.css'
import { logout } from "../../services/actions/profile";

export default function ProfileNav({ text }) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.navmenu}>
            <ul className={styles.menu}>
                <li className={styles.menu_item}>
                    <NavLink to={'/profile'} end className={({ isActive }) => isActive ? styles.active : styles.link} >
                        Профиль
                    </NavLink>
                </li>
                <li className={styles.menu_item}>
                    <NavLink to={'/profile/orders'} className={({ isActive }) => isActive ? styles.active : styles.link} >
                        История заказов
                    </NavLink>
                </li>
                <li className={styles.menu_item}>
                    <NavLink to={'/'} className={styles.link} onClick={onClick}>
                        Выход
                    </NavLink>
                </li>
            </ul>
            <p className={styles.text}>{text}</p>
        </div>
    )
}