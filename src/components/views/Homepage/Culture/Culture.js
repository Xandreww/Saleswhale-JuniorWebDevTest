import React from 'react';
import portrait1 from '../../../../images/portrait1.png';

import styles from './Culture.module.scss';

const image = portrait1;
const data = [
  {
    id: 1,
    header: 'Building for the future',
    content:
      'We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users.',
  },
  {
    id: 2,
    header: 'Promoting trust & transparency',
    content:
      'We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.',
  },
  {
    id: 3,
    header: 'Achieving our very best',
    content:
      'We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.',
  },
];

const Component = () => (
  <div className={styles.root}>
    <h1 className={styles.cultureHeader}>Our Culture</h1>
    <p className={styles.middleP}>At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.</p>
    <div className={styles.columns}>
      {data.map((i) => (
        <div key={i.id} className={styles.column}>
          <img className={styles.aPerson} src={image} alt="a person"></img>
          <h2 className={styles.cultureHeader2} key={i.id}>
            {i.header}
          </h2>
          <p className={styles.cultureP} key={i.id}>
            {i.content}
          </p>
        </div>
      ))}
    </div>
    <p className={styles.bottomP}>If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
    <button className={styles.cultureButton}>Join the team</button>
  </div>
);

export {
  Component as Culture,
  // Container as Culture,
  Component as CultureComponent,
};
