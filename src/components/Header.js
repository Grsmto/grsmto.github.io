import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Header.module.css';

import Nav from './Nav';
import Logo from './Logo';

const Header = ({ isIntroDone }) =>
  <header className={classnames(styles.header, {
    [styles.visible]: isIntroDone
  })}>
    <div className={styles.headerInner}>
      <div>
        {isIntroDone && <Logo className={styles.logo} />}
      </div>
      <Nav />
    </div>
  </header>;

const mapStateToProps = ({ isIntroDone }) => {
  return { isIntroDone };
}

export default withRouter(connect(mapStateToProps)(Header));
