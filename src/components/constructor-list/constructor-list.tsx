import { FC } from "react";
import styles from './constructor-list.module.css'
import { ConstructorItem } from '../constructor-item/constructor-item'
import { useAppSelector } from "../../utils/hooks";

export const ConstructorList: FC = () => {
    const { ingredients } = useAppSelector(store => store.burgerConstructor);

    return (
        <ul className={styles.main_container}>
            {ingredients && ingredients.map((item, index) => (
                <ConstructorItem item={item} index={index} key={item.uuid} />))
            }
        </ul>
    )
}