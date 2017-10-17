import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import mutateStore from '../state/mutateStore';

import styles from '../layouts/about.module.css';

import bgJpg from '../assets/images/me.jpg';
import bgWebP from '../assets/images/me.webp';

class About extends React.Component {
  componentDidMount() {
    this.props.mutateStore({
      isIntroDone: true
    });
  }

  render() {
    return (
      <div className={`page ${styles.about}`}>
        <Helmet title="Adrien Denat | About" />
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
            <div className={styles.grid}>
              <p className={styles.bio}>
                Within 7 years of experience in frontend development, I've been working on <a href="http://thefwa.com/cases/creaktif" target="_blank" rel="noopener noreferrer">awarded</a> marketing websites, products and mobile applications.
                I recently left my position of lead frontend developer at NEVERBLAND to start working as a freelancer.<br/>
                I now have about 5 projects in production using React, Redux and also GraphQL, but I'm open to other frameworks too!
                I'm always looking for the fastest, cleanest and most efficient way to build user interfaces.
                Recently I have been focusing on mobile applications using React Native and Java on Android.<br />
                I love remote work and I'll make you change your mind about how efficient it can be!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { mutateStore })(About);
