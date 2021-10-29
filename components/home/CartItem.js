import styles from '../../styles/home/CartItem.module.scss';

function CartItem({ items }) {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <img src={'/images/contact.png'} alt={'contact'}/>
                <div>Contact</div>
            </div>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.cart}>
                <img src={'/images/cart.png'} alt={'cart'}/>
                <div>Cart </div>
                {items.length > 0 && (
                    <div>{`( ${items.length} )`}</div>
                )}
            </div>
            <div className={styles.items}>
                {items.length > 0 ? (
                    <div className={styles.list}>
                        {items.map(({ price, title, id }) => (
                            <div key={id} className={styles.item}>
                                <div className={styles.price}>{price}</div>
                                <div className={styles.title}>{title}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>Cart is empty</div>
                )}
            </div>
        </div>
    );
}

export default CartItem;