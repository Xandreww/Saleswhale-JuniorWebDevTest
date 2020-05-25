import React from 'react';
import PropTypes from 'prop-types';
import logomark from '../../../images/logomark.png';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <img src={logomark} className={styles.logoMark} alt="saleswhale icon" />
      <h1>saleswhale</h1>
    </div>
    <div className={styles.headers}>
      <h2>Why Saleswhale?</h2>
      <h2>Product</h2>
      <h2>Company</h2>
    </div>
    <div className={styles.buttons}>
      <button variant="contained" className={styles.button1}>
        Log In
      </button>
      <button variant="contained" className={styles.button2}>
        Get a demo
      </button>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
