import React from 'react';
import inv1 from '../../../../images/inv1.png';
import inv2 from '../../../../images/inv2.svg';
import inv3 from '../../../../images/inv3.svg';
import inv4 from '../../../../images/inv4.svg';

import styles from './Investors.module.scss';

const invs = [inv1, inv2, inv3, inv4];

const Component = () => (
  <div className={styles.root}>
    <h1>Our Investors</h1>
    <div className={styles.investors}>
      {invs.map((inv) => (
        <div className={styles.invBox} key={'inv'}>
          <img src={inv} alt="investor logo"></img>
        </div>
      ))}
    </div>
  </div>
);

export {
  Component as Investors,
  // Container as Investors,
  Component as InvestorsComponent,
};
