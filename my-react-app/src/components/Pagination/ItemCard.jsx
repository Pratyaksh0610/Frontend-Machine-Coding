import styles from './Pagination.module.css'
export default function ItemCard(props) {
  const { name, imgSrc } = props;
  return (
    <>
      <div className={styles.itemCard} >
        <img src={imgSrc} className={styles.itemImg}/>
        <p>{name}</p>
      </div>
    </>
  );
}
