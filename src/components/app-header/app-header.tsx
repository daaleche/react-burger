import { FC } from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'
import { NavItem } from '../nav-item/nav-item'

export const AppHeader: FC = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <ul className={styles.subitem}>
                            <li>
                                <NavItem text="Конструктор" link={'/'}>
                                    <BurgerIcon type="primary" />
                                </NavItem>
                            </li>
                            <li>
                                <NavItem text="Лента заказов" link={'/feed'}>
                                    <ListIcon type="primary" />
                                </NavItem>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Logo />
                    </li>
                    <li className={styles.menu_item}>
                        <NavItem text="Личный кабинет" link={'/profile'}>
                            <ProfileIcon type="primary" />
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </header>
    );
}