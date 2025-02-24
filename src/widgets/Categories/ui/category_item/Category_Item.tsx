import styles from "./Category_Item.module.scss";

const Category_Item = ({ name, icon }:any) => {
  return (
    <div className={styles.category_item}>
        <span className={styles.category_name}>{name}</span>
        <img src={icon} alt={name} className={styles.category_icon} />
    </div>
  );
};

export default Category_Item;