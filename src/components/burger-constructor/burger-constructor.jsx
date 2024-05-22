import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from '../constructor-list/constructor-list'
import PropTypes from 'prop-types';

function BurgerConstructor({ ingredients }) {
    const bun = ingredients.find(item => item.type === 'bun');
    const listData = ingredients.filter(item => item.type !== 'bun');
    const total = ingredients.reduce((acc, p) => acc + p.price, 0);

    return (
        <section className={styles.constructor}>
            <div className={styles.element}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                <div className={styles.scroller}>
                    <ConstructorList data={listData} />
                </div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            <div className={styles.order}>
                <span className={styles.price}>
                    {total}
                    <CurrencyIcon />
                </span>
                <Button htmlType="button">Оформить заказ</Button>
            </div>
        </section>
    );
}

export default BurgerConstructor

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}