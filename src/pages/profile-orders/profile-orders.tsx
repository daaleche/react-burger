import { FC } from 'react';
import styles from './profile-orders.module.css'
import { ProfileNav } from '../../components/profile-nav/profile-nav';

export const ProfileOrdersPage: FC = () => {

    return (
        <div className={styles.main}>
            <ProfileNav text='В этом разделе вы можете просмотреть свою историю заказов' />
        </div>
    )
}