import { useSelector } from "react-redux";
import styles from './constructor-list.module.css'
import ConstructorItem from '../constructor-item/constructor-item'

export default function ConstructorList() {
    const { ingredients } = useSelector(state => state.burgerConstructor);

    return (
        <ul className={styles.main_container}>
            {ingredients && ingredients.map((item, index) => (
                <ConstructorItem item={item} index={index} key={item.uuid} />))
            }
        </ul>
    )
}