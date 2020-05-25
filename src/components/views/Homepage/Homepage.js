import React from 'react';
import { Statement } from '../Homepage/Statement/Statement';
import { Culture } from '../Homepage/Culture/Culture';
import { Progress } from '../Homepage/Progress/Progress';

import styles from './Homepage.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Statement />
    <Culture />
    <Progress />
  </div>
);

export {
  Component as Homepage,
  // Container as Culture,
  Component as HomepageComponent,
};
