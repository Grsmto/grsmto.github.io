import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import styles from "./Header.module.css";

import Nav from "./Nav";
import Logo from "./Logo";

const Header = ({ isIntroDone }) => (
  <header
    className={classnames(styles.header, {
      [styles.visible]: isIntroDone,
    })}
  >
    <div className={styles.headerInner}>
      <div>
        {isIntroDone && (
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>
        )}
      </div>
      <Nav />
    </div>
  </header>
);

export default Header;
