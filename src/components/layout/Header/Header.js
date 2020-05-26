import React from 'react';
import logomark from '../../../images/logomark.png';

import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src={logomark} className={styles.logoMark} alt="saleswhale icon" />
      <h1 className={styles.logoHeader}>saleswhale</h1>
    </div>
    <div className={styles.headers}>
      <h2 className={styles.header}>Why Saleswhale?</h2>
      <h2 className={styles.header}>Product</h2>
      <h2 className={styles.header}>Company</h2>
    </div>
    <div className={styles.buttons}>
      <button className={styles.button1}>Log In</button>
      <button className={styles.button2}>Get a demo</button>
    </div>
  </div>
);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
