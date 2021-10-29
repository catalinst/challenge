import styles from '../../styles/home/CardDetails.module.scss';
import { useEffect, useState } from 'react';

function CardDetails({ title, description, image, id, setCurrentCard, setItems, items }) {
    const [added, setAdded] = useState(false);
    image = '/images/background.png';

    const addToCartHandler = () => {
        setCurrentCard(null);
        setItems(prevState => {
            const isPresent = prevState.some(item => item.id === id);

            if (isPresent) {
                return [...prevState ];
            } else {
                return [...prevState, { title, id, price: id * 10 }];
            }
        })
    }

    const closeModalHandler = () => setCurrentCard(null);
    
    useEffect(() => {
        const isPresent = items.some(item => item.id === id);
        setAdded(isPresent)
    }, [id, items]);

    const style = { backgroundImage: `url(${image})`}

    return (
        <div className={styles.container} onClick={closeModalHandler}>
           <div style={style} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div className={styles['button-wrapper']}>
                    <button onClick={addToCartHandler} className={!added ? styles.active : styles.disabled}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;