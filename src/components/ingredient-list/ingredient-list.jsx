import { useMemo } from "react";
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card'
import PropTypes from 'prop-types';

function IngredientList({ data }) {
    const buns = useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
    const sauces = useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);
    const mains = useMemo(() => data.filter((item) => item.type === 'main'), [data]);

    return (
        <>
            <h2 className={styles.title}>Булки</h2>
            <div className={styles.items}>
                {buns.map(bun => (
                    <IngredientCard item={bun} />
                ))}
            </div>
            <h2 className={styles.title}>Соусы</h2>
            <div className={styles.items}>
                {sauces.map(sauce => (
                    <IngredientCard item={sauce} />
                ))}
            </div>
            <h2 className={styles.title}>Начинки</h2>
            <div className={styles.items}>
                {mains.map(main => (
                    <IngredientCard item={main} />
                ))}
            </div>
        </>
    )
}

export default IngredientList

IngredientList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}