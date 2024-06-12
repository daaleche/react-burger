import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../ingredient-list/ingredient-list";
import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
    const [activeTab, setActiveTab] = useState('bun')

    return (
        <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tab_container}>
                <Tab value="bun" active={activeTab === 'bun'} onClick={setActiveTab}>Булки</Tab>
                <Tab value="sauce" active={activeTab === 'sauce'} onClick={setActiveTab}>Соусы</Tab>
                <Tab value="main" active={activeTab === 'main'} onClick={setActiveTab}>Начинки</Tab>
            </div>
            <div className={styles.list}>
                <IngredientList setActiveTab={setActiveTab} />
            </div>
        </section>
    )
}