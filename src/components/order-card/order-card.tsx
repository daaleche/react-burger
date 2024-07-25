import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './order-card.module.css'
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientData, TOrder } from "../../types";
import { useAppSelector } from "../../utils/hooks";
import { nanoid } from '@reduxjs/toolkit'
import { ORDER_STATUS } from "../../utils/constants";
import { calculatePrice } from "../../utils/utils";

interface IOrderCard {
    item: TOrder;
}

export const OrderCard: FC<IOrderCard> = ({ item }) => {
    const location = useLocation();
    const countItemsMax = 6;
    const { number, createdAt, name, status, ingredients } = item;

    const { ingredients: allIngredients } = useAppSelector(store => store.burgerIngredients);
    const formattedIngredients = ingredients.map((id) => allIngredients.find((item) => item._id === id))

    const price =
        formattedIngredients &&
        calculatePrice(formattedIngredients as TIngredientData[])

    return (
        <Link
            to={`${location.pathname}/${number}`}
            state={{ prevLocation: location }}
            className={styles.link}
        >
            {<article className={styles.card}>
                <header className={styles.header}>
                    <span className={styles.id}>#{number}</span>
                    <FormattedDate className={styles.time} date={new Date(createdAt)} />
                </header>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.status} >
                    {ORDER_STATUS[status]}
                </p>
                <div className={styles.filling}>
                    <div className={styles.images_selection}>
                        {formattedIngredients.slice(0, countItemsMax).map((item, i) => {
                            let countHide = ingredients.length - countItemsMax;
                            return (
                                <div
                                    key={nanoid()}
                                    className={styles.image_fill}>
                                    <img
                                        src={item!.image_mobile}
                                        alt={item!.name}
                                        className={styles.image_position} />
                                    {countHide > 0 && i === (countItemsMax - 1) &&
                                        <span className={styles.count_hidden}>+{countHide}</span>
                                    }
                                </div>
                            )
                        })}
                        <span className={styles.price}>
                            {price}
                            <CurrencyIcon type={'primary'} />
                        </span>
                    </div>
                </div>
            </article>}
        </Link >
    )
}