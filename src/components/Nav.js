import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './Nav.module.css';

const Nav = () =>
  <nav className={styles.nav}>
    <ul className="list-reset m0 right-align">
      <li className="inline-block ml3">
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/"
          exact
        >
          prjcts
        </Link>
      </li>
      <li className="inline-block ml3">
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/about"
        >
          abt
        </Link>
      </li>
    </ul>
  </nav>;

export default Nav;
