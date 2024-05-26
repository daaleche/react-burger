import styles from './nutrition-info-item.module.css'
import PropTypes from 'prop-types';

export default function NutritionInfoItem({ title, value }) {
    return (
        <li className={styles.nutrition_item}>
            <p className={styles.text}>{title}</p>
            <p className={styles.value}>{value}</p>
        </li>
    )
}

NutritionInfoItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}