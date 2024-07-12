import { FC } from "react";
import { useDrag } from "react-dnd";
import { useLocation, useNavigate } from 'react-router-dom';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-card.module.css'
import {
    OPEN_INGREDIENT_DETAIL_MODAL,
    selectIngredient
} from "../../services/actions/ingredient-details";
import { TIngredientCard } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

export const IngredientCard: FC<TIngredientCard> = ({ item }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { counts } = useAppSelector(store => store.burgerConstructor)

    const { bun } = useAppSelector(store => store.burgerConstructor)

    const handleOpenModal = () => {
        dispatch(selectIngredient(item));
        dispatch({ type: OPEN_INGREDIENT_DETAIL_MODAL, });
        navigate(`/ingredients/${item._id}`, { state: { fromCardClick: location } })
    }

    const [, dragRef] = useDrag({
        type: "ingredients",
        item: item,
    })

    let count = (item.type === 'bun' && bun && item._id === bun._id)
        ? 2
        //@ts-ignore        
        : counts ? counts[item._id] : 0;

    return (
        <article className={styles.item} key={item._id} onClick={handleOpenModal} ref={dragRef}>
            {count > 0 && <Counter count={count} />}
            <img className={styles.image} src={item.image} alt={item.name} />
            <span className={styles.price}>
                {item.price}
                <CurrencyIcon type="primary" />
            </span>
            <p className={styles.text}>{item.name}</p>
        </article>
    )
}