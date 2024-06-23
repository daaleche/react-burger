import styles from './ingredient.module.css';
import IngredientDetails  from '../../components/ingredient-details/ingredient-details'

export default function IngredientPage(){
    return (
        <div className={styles.main}>
          <h2 className={styles.title}>Детали ингредиента</h2>
          <IngredientDetails />
        </div>
      );
}