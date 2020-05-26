import React from 'react';
import fb from '../../../../images/fb.png';
import twitter from '../../../../images/twitter.png';
import linkedin from '../../../../images/linkedin.png';
import footerWaves from '../../../../images/footerWaves.png';

import styles from './BottomFooter.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.bottomFooter}>
      <div className={styles.bottomFooterHeaders}>
        <h1 className={styles.bottomFooterHeader}>Privacy</h1>
        <h1 className={styles.bottomFooterHeader}>Terms</h1>
      </div>
      <div className={styles.bottomFooterIcons}>
        <img src={fb} className={styles.footerIcon} alt="facebook icon" />
        <img src={twitter} className={styles.footerIcon} alt="twitter icon" />
        <img src={linkedin} className={styles.footerIcon} alt="linkedin icon" />
      </div>
    </div>
    <p className={styles.bottomFooterP}>© 2020 Saleswhale, Inc. All rights reserved.</p>
    <img src={footerWaves} className={styles.footerWaves} alt="background waves" />
  </div>
);

export {
  Component as BottomFooter,
  // Container as BottomFooter,
  Component as BottomFooterComponent,
};
