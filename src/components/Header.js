import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './Header.module.css';

import Nav from './Nav';
import Logo from './Logo';

const Header = () =>
  <header className={`${styles.header} container`}>
    <div>
      <Logo className={styles.logo} short />
    </div>
    <Nav />
  </header>;

export default Header;
