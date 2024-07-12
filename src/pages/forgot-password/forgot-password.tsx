import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-password.module.css'
import { postForgotPassword } from "../../services/actions/forgot-password";
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

export const ForgotPasswordPage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { forgotPasswordSuccess, forgotPasswordFailed } = useAppSelector(store => store.userData);

    const [email, setEmail] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onSubmit = (e: SyntheticEvent) => {
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
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined} />
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