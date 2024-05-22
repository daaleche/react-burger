import styles from './app-header.module.css'
import NavItem from '../nav-item/nav-item'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";


function AppHeader() {
    return (
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <ul className={styles.subitem}>
                            <li>
                                <NavItem text="Конструктор" >
                                    <BurgerIcon />
                                </NavItem>
                            </li>
                            <li>
                                <NavItem text="Лента заказов" >
                                    <ListIcon />
                                </NavItem>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Logo />
                    </li>
                    <li className={styles.menu_item}>
                        <NavItem text="Личный кабинет" >
                            <ProfileIcon />
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader