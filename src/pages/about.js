import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import mutateStore from '../state/mutateStore';

import styles from '../layouts/about.module.css';

import {
  IconTwitter,
  IconGithub,
  IconCodepen,
  IconLinkedIn
} from '../components/Icons';

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
        <div className={styles.container}>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Oi! <br className={styles.titleBr} /> I’m Adrien,
            </h1>
            <h2 className={styles.description}>
              freelance dev based in London,<br />
              currently working from Brazil.
            </h2>
            <p className={styles.shortBio}>
              I love building websites and products with a meaning. <br />
              Ready to work on a wide type of project but I specialise in
              software engineering.<br />
              I like sharing about frontend development on my{' '}
              <a
                href="https://twitter.com/Grsmto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{' '}
              and writting longer thoughts on{' '}
              <a
                href="https://tympanus.net/codrops/2016/05/11/distorted-button-effects-with-svg-filters/"
                target="blank"
                rel="noopener noreferrer"
              >
                articles
              </a>.
            </p>
            <a className={styles.email} href="mailto:oi@adriendenat.com">
              oi@adriendenat.com
            </a>
            <div className={styles.socialButtons}>
              <a
                className={styles.socialButton}
                href="https://github.com/Grsmto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub />
              </a>
              <a
                className={styles.socialButton}
                href="https://codepen.io/Grsmto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCodepen />
              </a>
              <a
                className={styles.socialButton}
                href="https://twitter.com/Grsmto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter />
              </a>
              <a
                className={styles.socialButton}
                href="https://www.linkedin.com/in/adriendenat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
        <picture className={styles.bg}>
          <source srcSet={bgWebP} type="image/webp" />
          <source srcSet={bgJpg} type="image/jpeg" />
          <img className={styles.bgImg} src={bgJpg} alt="Me" />
        </picture>
      </div>
    );
  }
}

export default connect(null, { mutateStore })(About);
