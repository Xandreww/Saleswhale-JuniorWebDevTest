import React from 'react';
import { UpperFooter } from './UpperFooter/UpperFooter';
import { BottomFooter } from './BottomFooter/BottomFooter';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <UpperFooter />
    <BottomFooter />
  </div>
);

export { Component as Footer, Component as FooterComponent };
