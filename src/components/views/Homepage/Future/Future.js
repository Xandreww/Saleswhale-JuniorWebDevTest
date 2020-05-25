import React from 'react';

import styles from './Future.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.future}>
      <h1>See the future</h1>
      <div className={styles.buttons}>
        <button className={styles.button1}>
          <p className={styles.button1p}>Get a Demo</p>
        </button>
        <button className={styles.button2}>
          <p className={styles.button2p}>Read use cases</p>
        </button>
      </div>
    </div>
  </div>
);

export {
  Component as Future,
  // Container as Future,
  Component as FutureComponent,
};
