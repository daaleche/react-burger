import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login.module.css'
import { postLogin } from "../../services/actions/login";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginSuccess, loginFailed } = useSelector(state => state.userData);
    const [form, setForm] = useState({ email: '', password: '' })

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postLogin(form))
    }

    if (loginSuccess) {
        navigate('/');
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Вход</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <Input
                    name='email'
                    type='email'
                    value={form.email}
                    placeholder='E-mail'
                    onChange={onChange}
                    error={loginFailed}
                />
                <PasswordInput
                    name='password'
                    value={form.password}
                    onChange={onChange} />
                <span>
                    <Button htmlType="submit">Войти</Button>
                </span>
            </form>
            <p className={styles.text}>
                Вы - новый пользователь?&nbsp;
                <Link className={styles.link} to={'/register'}>
                    Зарегистрироваться
                </Link>
            </p>
            <p className={styles.text}>
                Забыли пароль?&nbsp;
                <Link className={styles.link} to={'/forgot-password'}>
                    Восстановить пароль
                </Link>
            </p>
        </div>
    )
}