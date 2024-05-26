import styles from './ingredient-details.module.css';
import NutritionInfoItem from './nutrition-info-item/nutrition-info-item'
import { IngredientPropTypes } from '../../utils/utils';

export default function IngredientDetails({ item }) {
    return (
        <div className={styles.detail}>
            <img src={item.image_large} alt={item.name} />
            <h3 className={styles.title}>{item.name}</h3>
            <ul className={styles.composition}>
                <NutritionInfoItem title='Калории,ккал' value={item.calories} />
                <NutritionInfoItem title='Белки, г' value={item.proteins} />
                <NutritionInfoItem title='Жиры, г' value={item.fat} />
                <NutritionInfoItem title='Углеводы, г' value={item.carbohydrates} />
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = {
    item: IngredientPropTypes.isRequired
}