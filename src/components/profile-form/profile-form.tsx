import { useState, useEffect, FC, SyntheticEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './profile-form.module.css'
import { editProfile } from "../../services/actions/profile";
import { getUser } from "../../services/actions/profile";
import { AppDispatch, RootState } from '../../services/store';
import { TProfile } from '../../types';

export const ProfileForm: FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const { name, email } = useSelector((store: RootState) => store.userData.user);
    const [formData, setFormData] = useState<TProfile>({ name: name, email: email, password: '' })
    const [isEditable, setIsEditable] = useState(false)

    useEffect(() => {
        if (!name && !email) {
            dispatch(getUser())
        }
        if (name && email) {
            setFormData({ name: name, email: email, password: '', })
        }

    }, [name, email, dispatch])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (!isEditable) {
            setIsEditable(true)
        }
    };

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        if (formData.name && formData.email) {
            dispatch(editProfile(formData));
            setIsEditable(false)
        }
    }

    const onCancel = () => {
        setFormData({ name: name, email: email, password: '' });
        setIsEditable(false);
    }

    return (
        <form className={styles.main} onSubmit={onSubmit}>
            <Input
                icon={'EditIcon'}
                name="name"
                type="text"
                value={formData.name}
                placeholder="Имя"
                onChange={onChange}
                autoComplete='on'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined} />
            <Input
                icon={'EditIcon'}
                name="email"
                type="email"
                value={formData.email}
                placeholder="Логин"
                onChange={onChange}
                autoComplete='on'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined} />
            <Input
                icon={'EditIcon'}
                name="password"
                type="password"
                value={formData.password}
                placeholder="Пароль"
                onChange={onChange}
                autoComplete='on'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined} />
            {isEditable && (
                <span className={styles.button}>
                    <Button htmlType="submit">Сохранить</Button>
                    <Button htmlType="button" size='medium' type='secondary' onClick={onCancel}>Отмена</Button>
                </span>
            )}
        </form>
    );
}