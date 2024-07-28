import { FC, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { useDrop } from "react-dnd";
import { v4 as new_uuid } from "uuid";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import { ConstructorList } from '../constructor-list/constructor-list'
import { Modal } from '../modal/modal'
import { OrderDetails } from '../order-details/order-detail'
import { ADD_INGREDIENT } from "../../services/actions/burger-constructor";
import { CLOSE_ORDER_DETAIL_MODAL, postOrder } from "../../services/actions/order-details";
import { TIngredient } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

export const BurgerConstructor: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { ingredients, bun } = useAppSelector(store => store.burgerConstructor);
    const orderDetailModalIsOpen = useAppSelector(store => store.orderDetails.modalIsOpen);
    const isAuth = useAppSelector(store => store.userData.isAuth);

    const totalPrice = useMemo(() => {
        return ingredients.reduce((acc, p) => acc + p.price, 0)
            + ((bun && bun.price) ? bun.price * 2 : 0)
    }, [ingredients, bun])

    const handleCloseModal = () => {
        dispatch({ type: CLOSE_ORDER_DETAIL_MODAL });
    };

    function handlePostOrder() {
        if (isAuth) {
            if (bun) {
                const orderIds = [bun._id, ...ingredients.map((item) => item._id), bun._id];
                dispatch(postOrder(orderIds))
            }
        }
        else {
            navigate('/login');
        }
    }

    const [, dropRef] = useDrop({
        accept: "ingredients",
        drop(item: TIngredient) {
            dispatch({
                type: ADD_INGREDIENT,
                ingredient: { ...item, uuid: new_uuid() }
            })
        },
    });

    return (
        <section className={styles.main} ref={dropRef}>
            <div className={styles.element}>
                {bun &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />}
                <div className={styles.scroller}>
                    <ConstructorList />
                </div>
                {bun &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>
            <div className={styles.order}>
                <span className={styles.price}>
                    {totalPrice}
                    <CurrencyIcon type="primary" />
                </span>
                <Button htmlType="button" onClick={handlePostOrder} disabled={!bun}>Оформить заказ</Button>
            </div>
            {orderDetailModalIsOpen && (
                <Modal onClose={handleCloseModal}>
                    <OrderDetails />
                </Modal>)
            }
        </section>
    );
}