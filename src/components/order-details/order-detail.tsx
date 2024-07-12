import { FC } from "react";
import { useSelector } from "react-redux";
import styles from './order-detail.module.css';
import image from '../../images/order.png';
import { RootState } from "../../services/store";

export const OrderDetails: FC = () => {
    const { orderId } = useSelector((store: RootState) => store.orderDetails);

    return (
        <>
            <p className={styles.order_number}>{orderId}</p>
            <p className={styles.subtitle}>идентификатор заказа</p>
            <img src={image} className={styles.icon} alt="order" />
            <p className={styles.text}>Ваш заказ начали готовить</p>
            <p className={styles.text_secondary}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}