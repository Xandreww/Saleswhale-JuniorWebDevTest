import React from 'react';
import logomark from '../../../images//logomark.png';
// import logomark from '../../../images/logomark.png';

import styles from './SWLogo.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src={logomark} className={styles.logoMark} alt="saleswhale icon" />
      <h1 className={styles.logoHeader}>saleswhale</h1>
    </div>
  </div>
);

export {
  Component as SWLogo,
  // Container as SWLogo,
  Component as SWLogoComponent,
};
