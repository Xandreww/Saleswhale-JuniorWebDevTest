import React from 'react';
import mails from '../../../../images/mails.png';

import styles from './Progress.module.scss';

const data = [
  {
    id: 1,
    year: '2015',
    event: 'Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong',
  },
  {
    id: 2,
    year: '2016',
    event: 'Accepted into Y Combinator (S16) and moved to San Francisco',
  },
  {
    id: 3,
    year: '2017',
    event: 'Raised US$1.2M in seed funding and hired core engineers',
  },
  {
    id: 4,
    year: '2019',
    event: 'Raised US$5.3M in Series A and expanded team size',
  },
  {
    id: 5,
    year: '2020',
    event: 'Opened US office in Washington, DC and hired US sales team',
  },
];

const Component = () => (
  <div className={styles.root}>
    <h1 className={styles.progressHeader}>Our progress</h1>
    <div className={styles.progress}>
      <div className={styles.line}></div>
      <ul className={styles.progressUl}>
        {data.map((record) => (
          <li className={styles.progressLi} key={record.id}>
            <p className={styles.year} key={record.id}>
              {record.year}
            </p>
            <img key={record.id} className={styles.mails} src={mails} alt="mails"></img>
            <p className={styles.event} key={record.id}>
              {record.event}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export { Component as Progress, Component as ProgressComponent };
