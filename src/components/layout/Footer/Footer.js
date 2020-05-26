import React from 'react';
import { UpperFooter } from './UpperFooter/UpperFooter';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <UpperFooter />
  </div>
);

export { Component as Footer, Component as FooterComponent };
