import React from 'react';
import { SWLogo } from '../../../common/SWLogo/SWLogo';

import styles from './UpperFooter.module.scss';

const data = [
  {
    key: 1,
    header: 'Why Saleswhale',
    tags: [
      'Collaborative Intelligence',
      'AI Assistant Capabilities',
      'Customer Stories',
      'Use Case - Technology',
      'Use Case - Education',
      'Use Case - Events',
    ],
  },
  {
    key: 2,
    header: 'Product',
    tags: ['AI Conversations', 'Lead Enrichment', 'Deal Intelligence', 'Workflow Integration'],
  },
  {
    key: 3,
    header: 'Company',
    tags: ['About us', 'Blog', 'Resources', 'Careers', 'Help Centre'],
  },
];

const offices = [
  {
    id: 1,
    city: 'US Office',
    address: ['1701 Rhode Island Ave NW', <br key={'br'} />, 'Washington, DC 20036', <br key={'br'} />],
  },
  {
    id: 2,
    city: 'Singapore office',
    address: ['155B Telok Ayer Street', <br key={'br'} />, 'Singapore, 068611', <br key={'br'} />],
  },
];

const Component = () => (
  <div className={styles.root}>
    <div>
      <SWLogo />
    </div>
    <div className={styles.columns}>
      {data.map((column) => (
        <div className={styles.column} key={column.id}>
          <h2 className={styles.columnsHeader} key={column.id}>
            {column.header}
          </h2>
          <ul className={styles.footerUL}>
            {column.tags.map((tag) => (
              <li className={styles.footerLi} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.column}>
        <h2 className={styles.columnsHeader}>Contact</h2>
        <p className={styles.footerP}>hello@saleswhale.com</p>
        {offices.map((office) => (
          <>
            <h2 className={styles.footerOfficesHeader} key={office.id}>
              {office.city}
            </h2>
            <p className={styles.footerOfficesP}>{office.address}</p>
          </>
        ))}
      </div>
    </div>
  </div>
);

export { Component as UpperFooter, Component as UpperFooterComponent };
