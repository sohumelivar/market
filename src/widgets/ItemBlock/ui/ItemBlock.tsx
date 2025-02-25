import styles from './ItemBlock.module.scss';

export const ItemBlock = ({item}: any) => {
    return (
        <div className={styles.item_block}>
            <div className={styles.image_container}>
                <img src={'https://picsum.photos/200/300'} alt={item.title} className={styles.item_image} />
            </div>
            <div className={styles.info_container}>
                <div className={styles.top_info}>
                    <span className={styles.item_title}>{item.title}</span>
                    <img src={'src/shared/assets/icons/heart.svg'} alt={'heart icon'} className={styles.heart_icon} />
                </div>
                <div className={styles.bottom_info}>
                    <span className={styles.item_price}>{200} ₪</span>
                </div>
            </div>
        </div>
    )
};