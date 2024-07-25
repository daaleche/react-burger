import { FC, useEffect } from "react";
import styles from './feed.module.css'
import { OrderDashboard } from "../../components/order-dashboard/order-dashboard";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { WS_ALL_ORDERS_URL } from "../../utils/constants";
import { wsConnectionClosedAction, wsConnectionStartAction } from "../../services/actions/ws";
import { OrderCard } from "../../components/order-card/order-card";

export const FeedPage: FC = () => {
    const dispatch = useAppDispatch()
    const { orders } = useAppSelector(store => store.ws);

    useEffect(() => {
        dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL));
        return () => {
            dispatch(wsConnectionClosedAction());
        }
    }, [dispatch]);

    return (
        <>
            <main className={styles.wrapper}>
                <div className={styles.order_list}>
                    <h1 className={styles.heading}>Лента заказов</h1>
                    <ul className={styles.scroller} >
                        {orders.map((item, index) => (
                            <li className={styles.list_item} key={index}>
                                <OrderCard item={item} />
                            </li>
                        ))}
                    </ul>
                </div>

                <OrderDashboard />
            </main>
        </>
    );
}