import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { timerCardSetResults } from 'Src/store/TimerCard/timerCardActions';

import styles from './TimerCard.module.scss';

const TimerCard = () => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);
  const { isActive, results } = useSelector((state) => state.timerCard);

  useEffect(() => {
    if (isActive) {
      setTimeout(setSeconds, 1000, seconds + 1);
    } else {
      setSeconds(0);
    }
  }, [seconds, isActive]);

  useEffect(() => {
    if (seconds > 0) dispatch(timerCardSetResults(seconds));
  }, [isActive]);

  const convertFullTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const fullTime = `${minutes} minutes ${sec} seconds`;

    return fullTime;
  };

  return (
    <div className={styles.timerCard}>
      <p className={styles.currentTime}>{convertFullTime(seconds)}</p>
      {results && (
        <ol>
          {results.map((result, index) => (
            <li className={styles.item} key={index}>
              {convertFullTime(result)}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export { TimerCard };
