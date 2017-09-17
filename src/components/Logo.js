import React from 'react';
import classnames from 'classnames';

import styles from './Logo.module.css';
import logoIcon from '../assets/images/logo.svg';

const Logo = ({ className, short = false }) =>
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
    {short
      ? <span className={styles.small}>
          <span className={styles.name}>ad.</span>
          <span className={styles.subtitle}>dvlpr</span>
        </span>
      : <span className={styles.big}>
          <span className={styles.name}>adrien</span>{' '}
          <span className={styles.subtitle}>dvlpr</span>{' '}
          <span className={styles.surname}>denat</span>
        </span>}
  </div>;

export default Logo;
