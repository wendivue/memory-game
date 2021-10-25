import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.scss';

const Card = ({
  index,
  onClick,
  isInverted = false,
  isHidden = false,
  isDisabled = true,
  img,
}) => {
  const isNotClickable = !isInverted && !isHidden && !isDisabled;
  const handleClick = () => isNotClickable && onClick(index);

  return (
    <div
      className={clsx(
        styles.card,
        isInverted && styles.cardInverted,
        isHidden && styles.cardHidden,
      )}
      onClick={handleClick}
    >
      <img
        className={clsx(
          styles.cardFront,
          isInverted && styles.cardFrontInverted,
        )}
        src={img}
        alt="card"
      />
    </div>
  );
};

export { Card };
