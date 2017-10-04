import React from 'react';
import Link from 'gatsby-link';

import styles from './Nav.module.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freq: 0
    };
  }
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
              data-text="prjcts"
            >
              prjcts
            </Link>
          </li>
          <li className="inline-block ml3">
            <Link
              className={styles.link}
              activeClassName={styles.active}
              to="/about"
              data-text="abt"
            >
              abt
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
