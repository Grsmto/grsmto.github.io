import React, { Component } from 'react';

import styles from './Intro.module.css';
import Logo from './Logo';

export default class Intro extends Component {

  render() {
    const { className, onEnd } = this.props;

    return (
      <div className={className}>
        <Logo
          className={styles.logo}
          onAnimEnd={() => onEnd()}
        />
      </div>
    )
  }

}
