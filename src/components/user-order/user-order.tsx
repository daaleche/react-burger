import { FC } from "react";
import styles from './user-order.module.css'
import { TOrder } from "../../types";
import { OrderCard } from "../order-card/order-card";

interface IUserOrder {
    orders: Array<TOrder>
}

export const UserOrder: FC<IUserOrder> = ({ orders }) => {

    return (
        <section className={styles.order_list} style={{ width: '100%' }}>
            <ul className={styles.scroller}>
                {orders
                    .map((item: TOrder, index: number) => (
                        <li className={styles.list_item} key={index}>
                            <OrderCard item={item} />
                        </li>
                    ))
                    .reverse()}
            </ul>
        </section>
    )
}