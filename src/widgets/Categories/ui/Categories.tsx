import styles from './Categories.module.scss';
import Category_Item from './category_item/Category_Item';

export const Categories = () => {
    const categoriesData = [
        { id: 1, name: "Авто", icon: "src/shared/assets/icons/auto.svg" },
        { id: 2, name: "Недвижимость", icon: "src/shared/assets/icons/real_estate.svg" },
        { id: 3, name: "Одежда, обувь, аксессуары", icon: "src/shared/assets/icons/cloth.svg" },
        { id: 4, name: "Услуги", icon: "src/shared/assets/icons/services.svg" },
        { id: 5, name: "Работа", icon: "src/shared/assets/icons/job.svg" },
        { id: 6, name: "Электроника", icon: "src/shared/assets/icons/electronics.svg" },
        { id: 7, name: "Запчасти", icon: "src/shared/assets/icons/spares.svg" }
    ];

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.scroll_container}>
                <div className={styles.categories_wrapper}>
                    <Category_Item name={categoriesData[0].name} icon={categoriesData[0].icon} />
                    <Category_Item name={categoriesData[1].name} icon={categoriesData[1].icon} />
                    <Category_Item name={categoriesData[2].name} icon={categoriesData[2].icon} />
                </div>
                <div className={styles.categories_wrapper}>
                    <Category_Item name={categoriesData[3].name} icon={categoriesData[3].icon} />
                    <Category_Item name={categoriesData[4].name} icon={categoriesData[4].icon} />
                    <Category_Item name={categoriesData[5].name} icon={categoriesData[5].icon} />
                    <Category_Item name={categoriesData[6].name} icon={categoriesData[6].icon} />
                </div>
            </div>
        </div>
    );
}