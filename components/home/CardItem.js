import styles from '../../styles/home/CardItem.module.scss';

function CardItem({ image, title, description, setCurrentCard, id }) {

    const seeDetails = () => setCurrentCard({ title, description, image, id })

    return (
        <div className={styles.container} onClick={seeDetails}>
            <div className={styles.logo}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
}

export default CardItem;