import React from 'react';
import banner from '../../../../images/banner.png';

import styles from './Statement.module.scss';

const text = [
  'At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.',
  <br key={'br'} />,
  <br key={'br'} />,
  'AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.',
  <br key={'br'} />,
  <br key={'br'} />,
  // eslint-disable-next-line quotes
  "Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.",
  <br key={'br'} />,
  <br key={'br'} />,
  'The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.',
  <br key={'br'} />,
  <br key={'br'} />,
];

const Component = () => (
  <div className={styles.root}>
    <img className={styles.banner} src={banner} alt="banner - town painting"></img>
    <div className={styles.statement}>
      <h1 className={styles.statementHeader}>A future where AI and humans work hand in hand</h1>
      <article className={styles.statementArticle}>{text}</article>
    </div>
  </div>
);

export {
  Component as Statement,
  // Container as Statement,
  Component as StatementComponent,
};
