import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import mutateStore from '../state/mutateStore';

import styles from './About.module.css';

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
      <div className={styles.about}>
        <Helmet
          title="Adrien Denat | About"
        />
        <div className={styles.container}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Oi! <br /> I’m Adrien,</h1>
            <h2 className={styles.description}>freelance dev based in London,<br/>
              currently working from Brazil.
            </h2>
            <p>
              I love building websites and products with a meaning. <br/>
              I like sharing about frontend development on my Twitter and sometimes publish articles.
            </p>
            <a href="mailto:oi@adriendenat.com">oi@adriendenat.com</a>
          </div>
        </div>
        <picture className={styles.bg}>
          <source srcSet={bgWebP} type="image/webp" />
          <source srcSet={bgJpg} type="image/jpeg" />
          <img className={styles.bgImg} src={bgJpg} alt="Me" />
        </picture>
      </div>
    )
  }
}

export default connect(
  null,
  { mutateStore }
)(About);
