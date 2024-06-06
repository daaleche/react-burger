import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import ConstructorList from '../constructor-list/constructor-list'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-detail'
import { ADD_INGREDIENT } from "../../services/actions/burger-constructor";
import { CLOSE_ORDER_DETAIL_MODAL, postOrder } from "../../services/actions/order-details";

export default function BurgerConstructor() {
    const dispatch = useDispatch();

    const { ingredients, bun } = useSelector(state => state.burgerConstructor);
    const orderDetailModalIsOpen = useSelector(state => state.orderDetails.modalIsOpen);

    const totalPrice = useMemo(() => {
        return ingredients.reduce((acc, p) => acc + p.price, 0) + ((bun && bun.price) ? bun.price * 2 : 0)
    }, [ingredients, bun])

    const handleCloseModal = () => {
        dispatch({ type: CLOSE_ORDER_DETAIL_MODAL });
    };

    function handlePostOrder() {
        const orderIds = [bun._id, bun._id, ...ingredients.map((item) => item._id)];
        dispatch(postOrder(orderIds));
    }

    const [, dropRef] = useDrop({
        accept: "ingredients",
        drop(item) {
            dispatch({
                type: ADD_INGREDIENT,
                ingredient: item
            })
        },
    });

    return (
        <section className={styles.constructor} ref={dropRef}>
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
                    <CurrencyIcon />
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