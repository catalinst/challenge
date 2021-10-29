import styles from '../styles/pages/Home.module.scss';
import { CardList, CartItem } from '../components/home';
import { useState } from 'react';

function Home() {
    const [items, setItems] = useState([]);

    return (
        <div className={styles.container}>
            <CartItem {...{ items }} />
            <CardList {...{ items, setItems }}/>
        </div>
    );
}

export default Home;
