import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Card } from 'Src/components/Card/Card';
import { cardsList } from 'Src/const/cards';
import { timerCardSetActive } from 'Src/store/TimerCard/timerCardActions';
import { shuffleCards } from 'Src/helpers/swapArray';

import styles from './Cards.module.scss';

const Cards = () => {
  const arrayDoubleValue = cardsList.concat(cardsList);
  const addCards = () => shuffleCards(arrayDoubleValue);
  const [cards, setCards] = useState(addCards());
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [isDisableCards, setIsDisableCards] = useState(true);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const dispatch = useDispatch();
  const timeout = useRef(null);

  const compare = () => {
    const [first, second] = openCards;
    const [firstItem, secondItem] = [cards[first].type, cards[second].type];

    if (firstItem === secondItem) {
      setClearedCards((prev) => ({ ...prev, [firstItem]: true }));
    }

    setOpenCards([]);
  };

  const restart = () => {
    setClearedCards({});
    setOpenCards([]);
    setIsDisableCards(false);
    setIsTimerActive(false);
    setCards(arrayDoubleValue);
  };

  const checkIsInverted = (index) => openCards.includes(index);
  const checkIsHidden = (type) => Boolean(clearedCards[type]);

  const handleCardClick = (index) => {
    setIsTimerActive(true);

    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setIsDisableCards(true);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) timeout = setTimeout(compare, 300);
    if (openCards.length === 1) {
      timeout = setTimeout(() => setOpenCards([]), 5000);
    }

    setIsDisableCards(false);

    return () => clearTimeout(timeout);
  }, [openCards]);

  useEffect(() => {
    const pairsLength = Object.keys(clearedCards).length * 2;
    if (pairsLength === cards.length) restart();
  }, [clearedCards]);

  useEffect(() => {
    dispatch(timerCardSetActive(isTimerActive));
  }, [isTimerActive]);

  return (
    <ul className={styles.cardsList}>
      {cards.map((item, index) => (
        <Card
          key={index}
          index={index}
          type={item.type}
          img={item.img}
          onClick={handleCardClick}
          isInverted={checkIsInverted(index)}
          isHidden={checkIsHidden(item.type)}
          isDisabled={isDisableCards}
        />
      ))}
    </ul>
  );
};

export { Cards };
