import React from 'react';
import { Statement } from '../Homepage/Statement/Statement';
import { Culture } from '../Homepage/Culture/Culture';
import { Progress } from '../Homepage/Progress/Progress';
import { Offices } from '../Homepage/Offices/Offices';
import { Investors } from '../Homepage/Investors/Investors';
import { Future } from '../Homepage/Future/Future';

import styles from './Homepage.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Statement />
    <Culture />
    <Progress />
    <Offices />
    <Investors />
    <Future />
  </div>
);

export { Component as Homepage, Component as HomepageComponent };
