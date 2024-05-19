import styles from './ingredient-card.module.css'
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function IngredientCard({ item }) {
    return (
        <article className={styles.item} key={item._id}>
            <Counter count={0} />
            <img className={styles.image} src={item.image} alt={item.name} />
            <span className={styles.price}>
                {item.price}
                <CurrencyIcon />
            </span>
            <p className={styles.text}>{item.name}</p>
        </article>
    )
}

export default IngredientCard

IngredientCard.propTypes = {
    item: PropTypes.object.isRequired
}