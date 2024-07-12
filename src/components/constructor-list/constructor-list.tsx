import { FC } from "react";
import { useSelector } from "react-redux";
import styles from './constructor-list.module.css'
import { ConstructorItem } from '../constructor-item/constructor-item'
import { RootState } from "../../services/store";

export const ConstructorList: FC = () => {
    const { ingredients } = useSelector((store: RootState) => store.burgerConstructor);

    return (
        <ul className={styles.main_container}>
            {ingredients && ingredients.map((item, index) => (
                <ConstructorItem item={item} index={index} key={item.uuid} />))
            }
        </ul>
    )
}