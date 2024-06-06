import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-card.module.css'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IngredientPropTypes } from '../../utils/utils';
import {
    OPEN_INGREDIENT_DETAIL_MODAL,
    CLOSE_INGREDIENT_DETAIL_MODAL,
    UNSELECT_INGREDIENT,
    selectIngredient
} from "../../services/actions/ingredient-details";

export default function IngredientCard({ item }) {
    const dispatch = useDispatch();

    const { counts, bun } = useSelector(store => store.burgerConstructor)
    const ingredientDetailModalIsOpen = useSelector(state => state.ingredientDetails.modalIsOpen);

    const handleOpenModal = () => {
        dispatch(selectIngredient(item));
        dispatch({ type: OPEN_INGREDIENT_DETAIL_MODAL, });
    }
    const handleClose = (e) => {
        dispatch({ type: CLOSE_INGREDIENT_DETAIL_MODAL });
        dispatch({ type: UNSELECT_INGREDIENT });
    };

    const [, dragRef] = useDrag({
        type: "ingredients",
        item: item,
    })

    let count = (item.type === 'bun' && bun && item._id === bun._id)
        ? 2
        : counts ? counts[item._id] : 0;

    return (
        <article className={styles.item} key={item._id} onClick={handleOpenModal} ref={dragRef}>
            {count > 0 && <Counter count={count} />}
            <img className={styles.image} src={item.image} alt={item.name} />
            <span className={styles.price}>
                {item.price}
                <CurrencyIcon />
            </span>
            <p className={styles.text}>{item.name}</p>
            {ingredientDetailModalIsOpen && (
                <Modal title='Детали ингредиента' onClose={handleClose}>
                    <IngredientDetails />
                </Modal>)
            }
        </article>
    )
}

IngredientCard.propTypes = {
    item: IngredientPropTypes.isRequired,
}