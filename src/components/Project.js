import React, { Component } from 'react';
import classnames from 'classnames';
import { Motion, spring, presets } from 'react-motion';

import styles from './Project.module.css';

const opacity = x => Math.max(0, Math.min(1, x));
const SM_BREAKPOINT = '600px';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      scrollY,
      isOnScreen
    } = this.props;
    const elHeight = this.projectEl ? this.projectEl.offsetHeight : 1;

    return (
      <section className={styles.project}>
        <div className={styles.videoContainer}>
          <video className={styles.video} ref={r => (this.video = r)} loop>
            <source
              src={require(`../assets/videos/${videos.desktop}.webm`)}
              type="video/webm"
            />
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
            //freq: spring(Math.abs(wheelDelta.pixelY) > 10 ? Math.abs(wheelDelta.pixelY) : 0 )
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
                <h1
                  className={classnames(styles.title, {
                    [styles.titleAppear]: isOnScreen
                  })}
                >
                  <span>
                    {title}
                  </span>
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
              {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="svg-filters"
              >
                <defs>
                  <filter id="filter-glitch-3">

                    <feGaussianBlur in="SourceGraphic" stdDeviation={`0 ${currentStyles.freq / 3}} result="blur" />
                  </filter>
                </defs>
              </svg>*/}
            </div>}
        </Motion>
      </section>
    );
  }
}
