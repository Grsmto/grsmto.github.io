import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { format } from 'date-fns';
import { Motion, spring } from 'react-motion';
import { TrackDocument } from 'react-track';
import {
  getDocumentElement,
  calculateScrollY
} from 'react-track/tracking-formulas';

import mutateStore from '../state/mutateStore';
import mzone from '../utils/timezone';

import styles from '../layouts/about.module.css';

import bgJpg from '../assets/images/me.jpg';
import bgWebP from '../assets/images/me.webp';
import rippleImg from '../assets/images/ripple.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wave: 0,
      brazilTime: undefined
    };
    this.setLocalTime = this.setLocalTime.bind(this);
    this.flagWave = this.flagWave.bind(this);
  }

  componentDidMount() {
    this.props.mutateStore({
      isIntroDone: true
    });

    setInterval(this.setLocalTime, 1000);
    setInterval(this.flagWave, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.setLocalTime);
  }

  setLocalTime() {
    this.setState({
      brazilTime: format(mzone.tz(new Date, 'America/Sao_Paulo'), 'HH:mm:ss')
    });
  }

  flagWave() {
    this.setState({
      wave: 100
    });

    setTimeout(() => {
      this.setState({
        wave: 0
      });
    }, 3000);
  }

  render() {
    return (
      <TrackDocument formulas={[getDocumentElement, calculateScrollY]}>
        {(documentElement, scrollY) =>
          <div className={`page ${styles.about}`}>
            <Helmet title="Adrien Denat | About" />
            <Motion
              style={{
                scrollY: spring(scrollY, { stiffness: 60, damping: 7 }),
                wave: this.state.wave ? spring(this.state.wave, { stiffness: 10, damping: 20 }) : 0
              }}
            >
              {currentStyles =>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
                    <defs>
                      <filter id="filter-glitch-1">
                        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="warp" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale={Math.min(currentStyles.scrollY / 5, 200)} in="SourceGraphic" in2="warp" />
                      </filter>
                    </defs>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="svg-filters">
                    <defs>
                      <filter id="filter-wave-1">
                        <feImage xlinkHref={rippleImg} x={(-currentStyles.wave * 3) - 20} y={(-currentStyles.wave * 2) + 35} width={currentStyles.wave * 11} height={currentStyles.wave * 4} result="ripple"></feImage>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" colorInterpolationFilters="sRGB" in="SourceGraphic" in2="ripple" scale="6" result="dm" />
                        <feComposite operator="in" in2="ripple"></feComposite>
                        <feComposite in2="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                  </svg>
                </div>
              }
            </Motion>
            <div className={styles.hero}>
              <div className={styles.heroInner}>
                <h1 className={styles.title}>
                  <span>Oi!</span><br/>
                  <span>I’M</span><br/>
                  <span>DEV!</span>
                </h1>
              </div>
              <picture className={styles.bg}>
                <source srcSet={bgWebP} type="image/webp" />
                <source srcSet={bgJpg} type="image/jpeg" />
                <img className={styles.bgImg} src={bgJpg} alt="Me" />
              </picture>
            </div>
            <div className={styles.container}>
              <div className={styles.inner}>
                <ul className={classnames('list-reset', styles.socialLinks)}>
                  <li>
                    <a
                      className={styles.socialLink}
                      href="https://github.com/Grsmto/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.socialLink}
                      href="https://codepen.io/Grsmto/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Codepen
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.socialLink}
                      href="https://twitter.com/Grsmto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.socialLink}
                      href="https://www.linkedin.com/in/adriendenat/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    LinkedIn
                    </a>
                  </li>
                </ul>
                <h2 className={styles.description}>
                  Freelance dev based in London,<br />
                  currently working from Brazil.
                </h2>
                <p className={styles.shortBio}>
                  I love building websites and products with a meaning. <br />
                  Beautiful interfaces is my thing.<br />
                  I specialise in software engineering but I'm ready to work on a wide variety of project.<br />
                  I like to share about frontend development on my{' '}
                  <a
                    href="https://twitter.com/Grsmto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{' '}
                  and sometimes write longer thoughts on{' '}
                  <a
                    href="https://tympanus.net/codrops/2016/05/11/distorted-button-effects-with-svg-filters/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    articles
                  </a>.
                </p>
                <span className={styles.email}>
                  Email me:{' '}
                  <a href="mailto:oi@adriendenat.com">
                    oi@adriendenat.com
                  </a>
                </span>
              </div>
            </div>
            <div className={styles.containerLight}>
              <div className={styles.bioContainer}>
                <p className={styles.bio}>
                  Within 7 years of experience in frontend development, I've been working on{' '}
                  <a href="http://thefwa.com/cases/creaktif" target="_blank" rel="noopener noreferrer">awarded</a>{' '}
                  <a href="http://www.awwwards.com/web-design-awards/neverbland-2-0" target="_blank" rel="noopener noreferrer">marketing</a>{' '}
                  <a href="http://www.awwwards.com/web-design-awards/savse-smoothies" target="_blank" rel="noopener noreferrer">websites</a>,
                  products and mobile applications.
                  I recently left my position of lead frontend developer at NEVERBLAND to start working as a freelancer.<br/>
                  I now have about 5 projects in production using React, Redux and also GraphQL, but I'm open to other frameworks too!
                  I'm always looking for the fastest, cleanest and most efficient way to build user interfaces.<br/>
                  Lately I have been focusing on mobile applications using React Native and Java on Android.<br />
                  I love remote work and I would make you change your mind about how efficient it can be!
                </p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.inner}>
                <span className={styles.localDateLabel}>My local time is: </span>
                <span className={styles.localDate}>{this.state.brazilTime}<span className={styles.flag}>🇧🇷</span></span>
              </div>
            </div>
          </div>
        }
      </TrackDocument>
    );
  }
}

export default connect(null, { mutateStore })(About);
