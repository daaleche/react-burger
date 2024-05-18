import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../ingredient-list/ingredient-list";
import styles from "./burger-ingredients.module.css";


function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = React.useState('bun')

    return (
        <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tab_container}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
            </div>
            <div className={styles.list}>
                <IngredientList data={ingredients} />
            </div>
        </section>
    )
}

export default BurgerIngredients