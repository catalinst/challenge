import styles from '../../styles/home/CardList.module.scss';
import { useEffect, useState } from 'react';
import { CardDetails, CardItem } from './index';
import { Spinner } from '../common';

function CardList({ setItems, items }) {
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={cards.length > 0 ? styles.container : styles['spinning-container'] }>
            {cards.length > 0 ? (
                cards.map(({ id, title, description, image }) => (
                    <CardItem key={id} {...{ title, description, image, id, setCurrentCard }} />
                ))
            ) : (
                <Spinner />
            )}
            {currentCard && (
                <CardDetails {...{ ...currentCard, setCurrentCard, setItems, items }} />
            )}
        </div>
    );
}

export default CardList;