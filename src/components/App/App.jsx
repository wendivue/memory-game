import React from 'react';

import { Cards } from 'Src/components/Cards/Cards';
import { TimerCard } from 'Src/components/TimerCard/TimerCard';

import styles from './App.module.scss';

const App = () => (
  <main className={styles.main}>
    <div className={styles.layout}>
      <Cards />
      <div className={styles.timerCard}>
        <TimerCard />
      </div>
    </div>
  </main>
);

export { App };
