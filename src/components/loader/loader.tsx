import { FC } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from './loader.module.css'

export const Loader: FC = () => {
    return (
        <>
            <div className={styles.overlay}>
                <TailSpin color='#00cccc' height={100} width={100} />
            </div>
        </>
    )
}