import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.circle}>
                    <img src="https://picsum.photos/200/300" alt="Logo" className={styles.circle_image} />
                </div>
            </div>
            <div className={styles.favorite}>
                <img src="src/shared/assets/icons/favorite_navbar.svg" alt="Favorite" className={styles.nav_icon} />
                <span className={styles.nav_text}>Избранное</span>
            </div>
            <div className={styles.createItem}>
                <img src="src/shared/assets/icons/create_item_navbar.svg" alt="Add Item" className={styles.nav_icon} />
                <span className={styles.nav_text}>Объявления</span>
            </div>
            <div className={styles.messages}>
                <img src="src/shared/assets/icons/message_navbar.svg" alt="Messages" className={styles.nav_icon} />
                <span className={styles.nav_text}>Сообщения</span>
            </div>
            <div className={styles.photo}>
                <div className={styles.circle}>
                    <img src="https://picsum.photos/200/300" alt="Logo" className={styles.circle_image} />
                </div>
            </div>
        </div>
    )
}