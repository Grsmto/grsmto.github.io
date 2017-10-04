import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Link from 'gatsby-link';

import styles from './Footer.module.css';

const Footer = () =>
  <footer className={styles.container}>
    <div className={styles.inner}>
      <h1 className={styles.title}>Any cool project you want to talk about?</h1>
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
    </div>
  </footer>;

const mapStateToProps = ({ isIntroDone }) => {
  return { isIntroDone };
};

export default withRouter(connect(mapStateToProps)(Footer));
