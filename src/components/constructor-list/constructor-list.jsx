import styles from './constructor-list.module.css'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { IngredientPropTypes } from '../../utils/utils';

export default function ConstructorList({ data }) {
    return (
        <ul className={styles.main_container}>
            {data.map((item) => (
                <li className={styles.list_item} key={item._id}>
                    <div className={styles.item_container}>
                        <DragIcon />
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                </li>))
            }
        </ul>
    )
}

ConstructorList.propTypes = {
    data: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired
}