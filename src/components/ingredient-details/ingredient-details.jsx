import { useSelector } from "react-redux";
import styles from './ingredient-details.module.css';
import NutritionInfoItem from './nutrition-info-item/nutrition-info-item'

export default function IngredientDetails() {
    const { selectedIngredient } = useSelector(state => state.ingredientDetails);


    return (
        <div className={styles.detail}>
            <img src={selectedIngredient.image_large} alt={selectedIngredient.name} />
            <h3 className={styles.title}>{selectedIngredient.name}</h3>
            <ul className={styles.composition}>
                <NutritionInfoItem title='Калории,ккал' value={selectedIngredient.calories} />
                <NutritionInfoItem title='Белки, г' value={selectedIngredient.proteins} />
                <NutritionInfoItem title='Жиры, г' value={selectedIngredient.fat} />
                <NutritionInfoItem title='Углеводы, г' value={selectedIngredient.carbohydrates} />
            </ul>
        </div>
    )
}