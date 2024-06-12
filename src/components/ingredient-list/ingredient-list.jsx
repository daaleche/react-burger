import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card'

export default function IngredientList({ setActiveTab }) {
    const { ingredients } = useSelector(state => state.burgerIngredients);

    const [bunRef, inViewBun] = useInView();
    const [sauceRef, inViewSauce] = useInView();
    const [mainRef, inViewMain] = useInView();

    useEffect(() => {
        if (inViewBun) {
            setActiveTab('bun')
        } else if (inViewSauce) {
            setActiveTab('sauce')
        } else if (inViewMain) {
            setActiveTab('main')
        }
    }, [setActiveTab, inViewBun, inViewSauce, inViewMain])

    const buns = useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
    const sauces = useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
    const mains = useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);

    return (
        <>
            <h2 className={styles.title} ref={bunRef}>Булки</h2>
            <div className={styles.items} >
                {buns.map(bun => (
                    <IngredientCard item={bun} key={bun._id} />
                ))}
            </div>
            <h2 className={styles.title} ref={sauceRef}>Соусы</h2>
            <div className={styles.items} >
                {sauces.map(sauce => (
                    <IngredientCard item={sauce} key={sauce._id} />
                ))}
            </div>
            <h2 className={styles.title} ref={mainRef}>Начинки</h2>
            <div className={styles.items} >
                {mains.map(main => (
                    <IngredientCard item={main} key={main._id} />
                ))}
            </div>
        </>
    )
}

IngredientList.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}