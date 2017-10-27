import React from 'react';
import Link from 'gatsby-link';

import styles from './Nav.module.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <ul className="list-reset m0 right-align">
          <li className="inline-block">
            <Link
              className={styles.link}
              activeClassName={styles.active}
              to="/"
              exact
            >
              projects
            </Link>
          </li>
          <li className="inline-block ml3">
            <Link
              className={styles.link}
              activeClassName={styles.active}
              to="/about"
            >
              about
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
