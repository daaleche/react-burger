import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './profile-form.module.css'
import { editProfile } from "../../services/actions/profile";
import { getUser } from "../../services/actions/profile";

export default function ProfileForm() {
    const dispatch = useDispatch();

    const { name, email } = useSelector(state => state.userData.user);
    const [formData, setFormData] = useState({ name: name, email: email, password: '' })
    const [isEditable, setIsEditable] = useState(false)

    useEffect(() => {
        if (!name && !email) {
            dispatch(getUser())
        }
        if (name && email) {
            setFormData({ name: name , email: email, password: '', })
        }

    }, [name, email])

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (!isEditable) {
            setIsEditable(true)
        }
    };

    const onSubmit = (e) => {
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
            />
            <Input
                icon={'EditIcon'}
                name="email"
                type="email"
                value={formData.email}
                placeholder="Логин"
                onChange={onChange}
                autoComplete='on'
            />
            <Input
                icon={'EditIcon'}
                name="password"
                type="password"
                value={formData.password}
                placeholder="Пароль"
                onChange={onChange}
                autoComplete='on'
            />
            {isEditable && (
                <span className={styles.button}>
                    <Button htmlType="submit">Сохранить</Button>
                    <Button htmlType="button" size='medium' type='secondary' onClick={onCancel}>Отмена</Button>
                </span>
            )}
        </form>
    );
}