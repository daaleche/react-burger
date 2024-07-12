import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import { postResetPassword } from "../../services/actions/reset-password";
import { TResetPassword } from '../../types';
import { useAppDispatch } from '../../utils/hooks';

const defaultValue = { password: '', token: '' };

export const ResetPasswordPage: FC = () => {
    const dispatch = useAppDispatch();

    const [formValue, setFormValue] = useState<TResetPassword>(defaultValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = (e: SyntheticEvent) => {
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
                    onChange={onChange}
                    autoComplete='on' />
                <Input
                    type="text"
                    placeholder="Введите код из письма"
                    name="token"
                    value={formValue.token}
                    onChange={onChange}
                    autoComplete='on'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined} />
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