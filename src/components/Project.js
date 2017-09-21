import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

import styles from './Project.module.css';
import videoFeastIt from '../assets/videos/feast-it.mp4';

const opacity = (x) => Math.max(0, Math.min(1, x));

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.projectEl = null;
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps) {
    if (nextProps.isOnScreen && this.props.scrollY !== nextProps.scrollY) {
      return true;
    }
    return false;
  }

  render() {
    const { title, description, html, scrollY } = this.props;
    const elHeight = this.projectEl ? this.projectEl.offsetHeight : 1;

    return (
      <section className={styles.project}>
        <div className={styles.videoContainer}>
          <video className={styles.video}>
            <source src={videoFeastIt} type="video/mp4" />
          </video>
        </div>
        <Motion
          style={{
            opacityBg: spring(
              opacity(1 - (scrollY - 300) / (elHeight / 2.5)),
              presets.stiff
            ),
            opacityDescription: spring(
              opacity((scrollY - 30) / (elHeight / 15)),
              presets.stiff
            ),
            opacityContent: spring(
              opacity((scrollY - 150) / (elHeight / 15)),
              presets.stiff
            ),
            y: spring(Math.max(-scrollY / 2, -120)),
            y2: spring(Math.max(-scrollY / 1.5, -200))
          }}
        >
          {currentStyles =>
            <div
              ref={r => (this.projectEl = r)}
              className={styles.projectInfos}
            >
              <div
                className={styles.background}
                style={{ opacity: currentStyles.opacityBg }}
              />
              <div className={styles.projectInfosInner}>
                <h1 className={styles.title}>
                  {title}
                </h1>
                <h2
                  className={styles.description}
                  style={{
                    opacity: currentStyles.opacityDescription,
                    transform: `translateY(${currentStyles.y}px)`
                  }}
                >
                  {description}
                </h2>
                <div
                  className={styles.content}
                  style={{
                    opacity: currentStyles.opacityContent,
                    transform: `translateY(${currentStyles.y2}px)`
                  }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>}
        </Motion>
      </section>
    );
  }
}
