import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Logo.module.css';

export default class Logo extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={classnames(className, styles.logo)}>
        <span>
          <span className={styles.name}>adrien.</span>
          <span className={styles.subtitle}>dvlpr</span>
        </span>
      </div>
    );
  }
}
