import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../utils/hooks";
import { TIngredient, TIngredientData } from "../../types";
import styles from './order.module.css'
import { ORDER_STATUS } from "../../utils/constants";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderItem } from "../../components/order-item/order-item";
import { useParams } from "react-router-dom";
import { getOrderByNumber } from "../../utils/api";
import { calculatePrice } from "../../utils/utils";

export const OrderPage: FC = () => {
    const { id } = useParams()
    const { orders } = useAppSelector(store => store.ws);
    const [order, setOrder] = useState(orders.find(element => element._id === id))

    const { ingredients: allIngredients } = useAppSelector(store => store.burgerIngredients);
    const orderIngredients = allIngredients && order && order.ingredients.map((id) => allIngredients.find((item) => item._id === id))
    const price =
        orderIngredients &&
        calculatePrice(orderIngredients as TIngredientData[])

    useEffect(() => {
        if (!order && id) {
            getOrderByNumber(id).then(result => {
                setOrder(result.orders[0])
            }).catch(console.error);
        }
    }, [])

    return (
        <>
            {order ? (
                <article className={styles.card}>
                    <p className={styles.id}>#{order?.number}</p>
                    <section className={styles.header}>
                        <h2 className={styles.title}>{order.name}</h2>
                        <p className={styles.status}>{ORDER_STATUS[order.status]}</p>
                    </section>
                    <h3 className={styles.ingredients_title}>Состав:</h3>
                    <div className={styles.scroller}>
                        <ul className={styles.list}>
                            {orderIngredients && orderIngredients.map((item, index) => (
                                <li className={styles.item} key={index}>
                                    <OrderItem ingredient={item as TIngredient} price={item!.price} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <footer className={styles.footer}>
                        <p className={styles.wrapper}>
                            <FormattedDate className={styles.time} date={new Date(order.createdAt)} />
                        </p>
                        <span className={styles.price}>
                            {price}
                            <CurrencyIcon type={'primary'} />
                        </span>
                    </footer>
                </article>
            ) : (
                <></>
            )}
        </>
    )
}