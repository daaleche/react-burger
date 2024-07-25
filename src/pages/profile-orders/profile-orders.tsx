import { FC, useEffect } from 'react';
import styles from './profile-orders.module.css'
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import { UserOrder } from '../../components/user-order/user-order';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { wsConnectionClosedAction, wsConnectionStartAction } from '../../services/actions/ws';
import { getCookie } from '../../utils/utils';
import { WS_USER_ORDERS_URL } from '../../utils/constants';

export const ProfileOrdersPage: FC = () => {
    const dispatch = useAppDispatch();
    const { orders } = useAppSelector(store => store.ws);

    const cookie = getCookie('accessToken');
    const accessToken = cookie && cookie.split(' ')[1];
    const wsUrl = WS_USER_ORDERS_URL + `?token=${accessToken}`;

    useEffect(() => {
        dispatch(wsConnectionStartAction(wsUrl));
        return () => {
            dispatch(wsConnectionClosedAction());
        }
    }, [dispatch]);

    return (
        <div className={styles.main}>
            <ProfileNav text='В этом разделе вы можете просмотреть свою историю заказов' />
            <UserOrder orders={orders} />
        </div>
    )
}