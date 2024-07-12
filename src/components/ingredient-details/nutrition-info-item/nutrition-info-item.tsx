import { FC } from 'react';
import styles from './nutrition-info-item.module.css'
import { TNutritionInfoItem } from '../../../types';

export const NutritionInfoItem: FC<TNutritionInfoItem> = ({ title, value }) => {
    return (
        <li className={styles.nutrition_item}>
            <p className={styles.text}>{title}</p>
            <p className={styles.value}>{value}</p>
        </li>
    )
}