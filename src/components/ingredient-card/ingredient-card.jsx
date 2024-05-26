import { useState } from "react";
import styles from './ingredient-card.module.css'
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IngredientPropTypes } from '../../utils/utils';

export default function IngredientCard({ item, count}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
    const handleClose = (e) => {
        e.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <article className={styles.item} key={item._id} onClick={openModal}>
            {count > 0 && <Counter count={count} />}
            <img className={styles.image} src={item.image} alt={item.name} />
            <span className={styles.price}>
                {item.price}
                <CurrencyIcon />
            </span>
            <p className={styles.text}>{item.name}</p>
            {isModalOpen && (
                <Modal title='Детали ингредиента' isOpen={isModalOpen} onClose={handleClose}>
                    <IngredientDetails item={item} />
                </Modal>)
            }
        </article>
    )
}

IngredientCard.propTypes = {
    item: IngredientPropTypes.isRequired,
    count: PropTypes.number
}