import { FC } from 'react';
import styles from './ingredient.module.css';
import { IngredientDetails } from '../../components/ingredient-details/ingredient-details'

export const IngredientPage: FC = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  );
}