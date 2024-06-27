import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-password.module.css'
import { postForgotPassword } from "../../services/actions/forgot-password";

export default function ForgotPasswordPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { forgotPasswordSuccess, forgotPasswordFailed } = useSelector(state => state.userData);

    const [email, setEmail] = useState("");

    const onChange = (e) => {
        setEmail(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postForgotPassword(email))
    }

    if (forgotPasswordSuccess) {
        navigate('/reset-password');
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className={styles.heading}>Восстановление пароля</h1>
                <Input
                    type="email"
                    placeholder="Укажите e-mail"
                    name="email"
                    value={email}
                    onChange={onChange}
                    error={forgotPasswordFailed}
                    autoComplete='on'
                />
                <span >
                    <Button htmlType="submit">Восстановить</Button>
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