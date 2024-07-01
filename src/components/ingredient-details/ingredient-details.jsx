import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './ingredient-details.module.css';
import NutritionInfoItem from './nutrition-info-item/nutrition-info-item'
import { SELECT_INGREDIENT } from "../../services/actions/ingredient-details";

export default function IngredientDetails() {
    const dispatch = useDispatch();
    const { selectedIngredient } = useSelector(state => state.ingredientDetails);
    const { ingredients } = useSelector(state => state.burgerIngredients);
    const { id } = useParams();

    useEffect(() => {
        if (!selectedIngredient && id && ingredients) {
            const ingredient = ingredients.find((ingredient) => ingredient._id === id);
            dispatch({
                type: SELECT_INGREDIENT,
                selectedIngredient: ingredient,
            })
        }
    }, [selectedIngredient, id, ingredients, dispatch]);

    return (selectedIngredient ?
        (
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
        ) : (
            <></>
        )
    );
}