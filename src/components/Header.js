import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import styles from './Header.module.css';

import Nav from './Nav';
import Logo from './Logo';

const Header = ({ isIntroDone }) =>
  <header className={classnames(`${styles.header} container`, {
    [styles.visible]: isIntroDone
  })}>
    <div>
      {isIntroDone && <Logo className={styles.logo} />}
    </div>
    <Nav />
  </header>;

const mapStateToProps = ({ isIntroDone }) => {
  return { isIntroDone };
}

export default connect(mapStateToProps)(Header);
