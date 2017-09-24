import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Logo.module.css';

export default class Logo extends Component {
  render() {
    const { className } = this.props;

    return (
      <div
        className={classnames(className, styles.logo)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="svg-filters"
        >
          <defs>
            <filter id="filter-glitch-1">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.000001"
                numOctaves="1"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
        <span>
          <span className={styles.name}>ad.</span>
          <span className={styles.subtitle}>dvlpr</span>
        </span>
      </div>
    );
  }
}
