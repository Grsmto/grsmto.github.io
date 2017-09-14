import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';
import { Motion, spring, presets } from 'react-motion';

import styles from './Project.module.css';
import videoFeastIt from '../assets/videos/feast-it.mp4';

export default class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.projectEl = null;
  }

  componentDidMount() {

  }

  render() {
    const { title, description, html, documentScrollY, scrollY, posTop, posTopBottom } = this.props;

    return (
      <section className={styles.project}>
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay={scrollY > posTopBottom}>
            <source
              src={videoFeastIt}
              type="video/mp4" />
          </video>
        </div>
        <Motion
          style={{
            opacity: this.projectEl ? spring(1 - scrollY / (this.projectEl.offsetHeight / 2), presets.noWobble) : 1
          }}
        >
          {currentStyles =>
            <div
              ref={r => this.projectEl = r}
              className={styles.projectInfos}
              style={{ opacity: currentStyles.opacity }}
            >
              <div className={styles.projectInfosInner}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.description}>{description}</h2>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          }
        </Motion>
      </section>
    )
  }
}
