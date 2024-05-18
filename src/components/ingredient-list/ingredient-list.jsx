import React from "react";
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card'

function IngredientList({ data }) {
    return (
        <>
            <h2 className={styles.title}>Булки</h2>
            <div className={styles.items}>
                {data.filter(item => item.type === 'bun').map(bun => (
                    <IngredientCard item={bun} />
                ))}
            </div>
            <h2 className={styles.title}>Соусы</h2>
            <div className={styles.items}>
                {data.filter(item => item.type === 'sauce').map(sauce => (
                    <IngredientCard item={sauce} />
                ))}
            </div>
            <h2 className={styles.title}>Начинки</h2>
            <div className={styles.items}>
                {data.filter(item => item.type === 'main').map(main => (
                    <IngredientCard item={main} />
                ))}
            </div>

        </>
    )
}

export default IngredientList