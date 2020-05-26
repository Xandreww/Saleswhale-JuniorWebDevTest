import React from 'react';

import styles from './Future.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.future}>
      <h1 className={styles.futureHeader}>See the future</h1>
      <div className={styles.buttons}>
        <button className={styles.futureButton1}>Get a Demo</button>
        <button className={styles.futureButton2}>Read use cases</button>
      </div>
    </div>
  </div>
);

export {
  Component as Future,
  // Container as Future,
  Component as FutureComponent,
};
