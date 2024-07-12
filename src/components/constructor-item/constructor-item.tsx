import { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { DELETE_INGREDIENT, MOVE_INGREDIENT } from '../../services/actions/burger-constructor'
import { TConstructorItem } from '../../types';
import { AppDispatch } from '../../services/store';

export const ConstructorItem: FC<TConstructorItem> = ({ item, index }) => {
    const dispatch: AppDispatch = useDispatch();
    const ref = useRef<HTMLLIElement>(null);

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
        hover: (item: { index: number }, monitor: DropTargetMonitor) => {
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
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

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
                <DragIcon type="primary" />
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