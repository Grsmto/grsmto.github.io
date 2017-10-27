import React, { Component } from 'react';
import classnames from 'classnames';
import { Motion, spring, presets } from 'react-motion';

import styles from './Project.module.css';

import { IconArrow } from './Icons';
import config from '../config';

const opacity = x => Math.max(0, Math.min(1, x));
const SM_BREAKPOINT = '600px';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.projectEl = null;
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('onresize', this.onResize);

    if (this.props.isOnScreen) {
      this.video.play();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onresize', this.onResize);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isOnScreen) {
      return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOnScreen !== nextProps.isOnScreen) {
      if (nextProps.isOnScreen) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }
  }

  onResize() {
    this.setState({
      isViewportSizeSm: window.matchMedia(`(min-width: ${SM_BREAKPOINT})`)
        .matches
    });
  }

  render() {
    const {
      title,
      description,
      html,
      videos,
      url,
      tech,
      year,
      scrollY,
      isOnScreen
    } = this.props;
    const elHeight = this.projectEl ? this.projectEl.offsetHeight : 1;

    return (
      <section
        className={classnames(styles.project, {
          [styles.isOnScreen]: isOnScreen
        })}
      >
        <Motion
          style={{
            opacityBg: spring(
              opacity(1 - (scrollY - 430) / (elHeight / 2.5)),
              presets.stiff
            ),
            opacityContent: spring(
              Math.max(opacity((scrollY - 50) / (elHeight / 20)), 0.2),
              presets.stiff
            ),
            y: spring(Math.max(-scrollY / 4, -40)),
            y2: spring(Math.max(-scrollY / 4, -80)),
            y3: spring(Math.max(-scrollY / 6, -80))
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
                <h1 className={classnames(styles.title)}>
                  <span>
                    {title}
                  </span>
                </h1>
                <h2
                  className={styles.description}
                  style={{
                    transform: `translateY(${currentStyles.y}px)`
                  }}
                >
                  <span>
                    {description}
                  </span>
                </h2>
                <div className={styles.contentContainer}>
                  <div
                    className={styles.content}
                    style={{
                      opacity: currentStyles.opacityContent,
                      transform: `translateY(${currentStyles.y2}px)`
                    }}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <div
                    className={styles.meta}
                    style={{
                      opacity: currentStyles.opacityContent,
                      transform: `translateY(${currentStyles.y3}px)`
                    }}
                  >
                    <div className={styles.metaContainer}>
                      <h4 className={styles.metaLabel}>Technology: </h4>
                      {tech}
                    </div>
                    <div className={styles.metaContainer}>
                      <h4 className={styles.metaLabel}>Year: </h4>
                      {year}
                    </div>
                  </div>
                  <div className={styles.siteLinkContainer}>
                    <a className={styles.siteLink} href={url} target="_blank">
                      Visit site <IconArrow className={styles.siteLinkIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>}
        </Motion>
        <div className={styles.videoContainer}>
          <video className={styles.video} ref={r => (this.video = r)} loop muted>
            <source
              src={`${config.s3BucketUrl}/${videos.desktop}.webm`}
              type="video/webm"
            />
            <source
              src={`${config.s3BucketUrl}/${videos.desktop}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    );
  }
}
