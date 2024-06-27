import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './register.module.css';
import { postRegister } from "../../services/actions/register";

const defaultValue = { name: '', email: '', password: '' }

export default function RegisterPage() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(defaultValue);
    const { registerFailed } = useSelector(state => state.userData);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(postRegister(formData));
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className={styles.heading}>Регистрация</h1>
                <Input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    error={registerFailed}
                    autoComplete='on'
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    error={registerFailed}
                    autoComplete='on'
                />
                <PasswordInput
                    name='password'
                    value={formData.password}
                    onChange={onChange} 
                    autoComplete='on'/>
                <span className={styles.button}>
                    <Button htmlType="submit">Зарегистрироваться</Button>
                </span>
            </form>
            <p className={styles.text}>
                Уже зарегистрированы?&nbsp;
                <Link className={styles.link} to={'/login'}>
                    Войти
                </Link>
            </p>
        </div>
    );
}