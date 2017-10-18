import React from 'react';
import Link from 'gatsby-link';
import { Motion, spring } from 'react-motion';

import styles from './Nav.module.css';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freq0: 0,
      freq1: 0
    };
  }
  onMouseOver(index) {
    this.setState({
      [`freq${index}`]: Math.random() < 0.5 ? -getRandomArbitrary(10, 15) : getRandomArbitrary(10, 15)
    });
  }
  onMouseOut(index) {
    this.setState({
      [`freq${index}`]: 0
    });
  }
  render() {
    return (
      <Motion
        style={{
          freq1: spring(this.state.freq0, { stiffness: 200, damping: 10 }),
          freq2: spring(this.state.freq1, { stiffness: 200, damping: 10 })
        }}
      >
        {currentStyles =>
          <nav className={styles.nav}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
              <defs>
                <filter id="filter-glitch-2">
                  <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="warp" />
                  <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale={currentStyles.freq1} in="SourceGraphic" in2="warp" />
                </filter>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
              <defs>
                <filter id="filter-glitch-3">
                  <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="warp" />
                  <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale={currentStyles.freq2} in="SourceGraphic" in2="warp" />
                </filter>
              </defs>
            </svg>
            <ul className="list-reset m0 right-align">
              <li className="inline-block">
                <Link
                  className={styles.link}
                  activeClassName={styles.active}
                  to="/"
                  exact
                  onMouseOver={() => this.onMouseOver(0)}
                  onMouseOut={() => this.onMouseOut(0)}
                  style={{ filter: 'url(#filter-glitch-2)' }}
                >
                  projects
                </Link>
              </li>
              <li className="inline-block ml3">
                <Link
                  className={styles.link}
                  activeClassName={styles.active}
                  to="/about"
                  style={{ filter: 'url(#filter-glitch-3)' }}
                >
                  about
                </Link>
              </li>
            </ul>
          </nav>
        }
      </Motion>
    );
  }
}

export default Nav;
