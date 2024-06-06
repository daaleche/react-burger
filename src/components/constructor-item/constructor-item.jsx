import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { IngredientPropTypes } from '../../utils/utils';
import { DELETE_INGREDIENT, MOVE_INGREDIENT } from '../../services/actions/burger-constructor'

export default function ConstructorItem({ item, index }) {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const handleClose = () => {
        dispatch({
            type: DELETE_INGREDIENT,
            id: item._id,
            uuid: item.uuid,
        });
    }

    const { uuid } = item;

    const [{ isDragging }, dragRef] = useDrag({
        type: 'move',
        item: () => {
            return { uuid, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ handlerId }, dropRef] = useDrop({
        accept: 'move',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover: (item, monitor) => {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch({
                type: MOVE_INGREDIENT,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex,
            });

            item.index = hoverIndex;
        }
    });

    const opacity = isDragging ? 0 : 1;
    dragRef(dropRef(ref));

    return (
        <li className={styles.list_item} key={item.uuid} ref={ref} style={{ opacity }} data-handler-id={handlerId} >
            <div className={styles.item_container} >
                <DragIcon />
                <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    handleClose={handleClose}
                />
            </div>
        </li >
    )
}

ConstructorItem.propTypes = {
    item: IngredientPropTypes.isRequired,
    index: PropTypes.number.isRequired
}