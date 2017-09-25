import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Intro.module.css';

export default class Intro extends Component {

  render() {
    const { className, onEnd, isVisible } = this.props;

    return (
      <div className={classnames(className, styles.logo, { [styles.hidden]: !isVisible })}>
        <span
          className={classnames(styles.logoInner)}
          onAnimationStart={e => {
            if(e.target === this.logo) {
              onEnd();
            }
          }}
          ref={r => { this.logo = r; }}
        >
          <span className={styles.name}>adrien</span>{' '}
          <span className={styles.subtitle}>dvlpr</span>{' '}
          <span className={styles.surname}>denat</span>
        </span>
      </div>
    )
  }

}
