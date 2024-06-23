import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import { postResetPassword } from "../../services/actions/reset-password";

const defaultValue = { password: '', token: '' };

export default function ResetPasswordPage() {
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState(defaultValue);

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postResetPassword(formValue))
        setFormValue(defaultValue)
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className={styles.heading}>Восстановление пароля</h1>
                <PasswordInput
                    name='password'
                    placeholder='Введите новый пароль'
                    value={formValue.password}
                    onChange={onChange} />
                <Input
                    type="text"
                    placeholder="Введите код из письма"
                    name="token"
                    value={formValue.token}
                    onChange={onChange}
                />
                <span>
                    <Button htmlType="submit">Сохранить</Button>
                </span>
            </form>
            <p className={styles.text}>
                Вспомнили пароль?&nbsp;
                <Link className={styles.link} to={'/login'}>
                    Войти
                </Link>
            </p>
        </div>
    );
}