import styles from './SearchBar.module.scss';

export const SearchBar = () => {
    return (
        <div className={styles.search_bar}>
            <div className={styles.input_container}>
                <img className={styles.search_icon} src={'src/shared/assets/icons/loupe.svg'} alt="filter button" />
                <input type="text" placeholder="поиск ..." className={styles.search_input} />
            </div>
            <button className={styles.search_button}>
                <img src={'src/shared/assets/icons/filter.svg'} alt="filter button" />
            </button>
        </div>
    )
}