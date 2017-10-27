import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Link from 'gatsby-link';

import styles from './Footer.module.css';

import SocialButtons from './SocialButtons';

const Footer = () =>
  <footer className={styles.container}>
    <div className={styles.inner}>
      <h2 className={styles.title}>Any cool project you want to talk about?</h2>
      <p>
        I’m always looking for new interfaces to build <br />
        and challenging projects to work on.<br />
        <a href="mailto:oi@adriendenat.com">Email me!</a>
      </p>
      <span className={styles.learnMore}>
        or learn more{' '}
        <Link to="/about" className={styles.learnMoreCta}>
          about me
        </Link>.
      </span>
      <SocialButtons />
    </div>
  </footer>;

const mapStateToProps = ({ isIntroDone }) => {
  return { isIntroDone };
};

export default withRouter(connect(mapStateToProps)(Footer));
