import { FC } from 'react';
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import { ProfileForm } from '../../components/profile-form/profile-form'
import styles from './profile.module.css'

export const ProfilePage: FC = () => {

    return (
        <div className={styles.main}>
            <ProfileNav text='В этом разделе вы можете изменить свои персональные данные' />
            <ProfileForm />
        </div>
    )
}