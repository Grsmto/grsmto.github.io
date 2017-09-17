import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Intro.module.css';
import Logo from './Logo';

export default class Intro extends Component {

  render() {
    const { onEnd } = this.props;

    return (
      <div className="">
        <Logo className={styles.logo} />
      </div>
    )
  }

}
