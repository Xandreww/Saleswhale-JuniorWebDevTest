import React from 'react';
import portrait from '../../../../images/portrait2.png';

import styles from './Offices.module.scss';

const data = [
  {
    id: 1,
    city: 'Singapore',
    address: ['155B Telok Ayer Street', <br key={'br'} />, 'Singapore, 068611', <br key={'br'} />],
  },
  {
    id: 2,
    city: 'Washington DC',
    address: ['1701 Rhode Island Ave NW', <br key={'br'} />, 'Washington, DC 20036', <br key={'br'} />],
  },
];

const Component = () => (
  <div className={styles.root}>
    <h1>Our offices</h1>
    <div className={styles.offices}>
      {data.map((office) => (
        <div key={office.id} className={styles.office}>
          <img className={styles.portrait} src={portrait} alt="girl"></img>
          <h2 className={styles.city} key={office.id}>
            {office.city}
          </h2>
          <p className={styles.address} key={office.id}>
            {office.address}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export {
  Component as Offices,
  // Container as Offices,
  Component as OfficesComponent,
};
