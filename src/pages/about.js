import React, { useState, useEffect, useCallback, useContext } from "react";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import { format } from "date-fns";
import { Motion, spring } from "react-motion";
import { TrackDocument } from "react-track";
import {
  getDocumentElement,
  calculateScrollY,
} from "react-track/tracking-formulas";

import { AppContext } from "../layouts";
import mzone from "../utils/timezone";

import styles from "../layouts/about.module.css";

import bgJpg from "../assets/images/me.jpg";
import bgWebP from "../assets/images/me.webp";

const AboutPage = () => {
  const [time, setTime] = useState();
  const isSafari =
    typeof navigator !== "undefined"
      ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      : false;
  const context = useContext(AppContext);

  useEffect(() => {
    const localTimeInterval = setInterval(setLocalTime, 1000);

    return () => {
      clearInterval(localTimeInterval);
    };
  }, [setLocalTime]);
  const setLocalTime = useCallback(() => {
    setTime(format(mzone.tz(new Date(), "America/Sao_Paulo"), "HH:mm:ss"));
  });

  useEffect(() => {
    context.setIntroDone(true);
  }, [context]);

  return (
    <TrackDocument formulas={[getDocumentElement, calculateScrollY]}>
      {(documentElement, scrollY) => (
        <div className={`page ${styles.about}`}>
          <Helmet title="Adrien Denat | About" />
          {!isSafari && (
            <Motion
              style={{
                scrollY: spring(scrollY, { stiffness: 60, damping: 7 }),
              }}
            >
              {currentStyles => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="svg-filters"
                >
                  <defs>
                    <filter id="filter-glitch-1">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.02"
                        numOctaves="1"
                        result="warp"
                      />
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale={Math.min(currentStyles.scrollY / 5, 200)}
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>
                  </defs>
                </svg>
              )}
            </Motion>
          )}
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <h1 className={styles.title}>
                  <span>Oi!</span>
                  <br />
                  <span>I’M</span>
                  <br />
                  <span>DEV!</span>
                </h1>
              </div>
            </div>
            <picture className={styles.bg}>
              <source srcSet={bgWebP} type="image/webp" />
              <source srcSet={bgJpg} type="image/jpeg" />
              <img className={styles.bgImg} src={bgJpg} width={450} alt="Me" />
            </picture>
          </div>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div>
                <h2 className={styles.description}>
                  Freelance dev based in London,
                  <br />
                  currently working from Brazil.
                </h2>
                <p className={styles.shortBio}>
                  I love building websites and products with a meaning.
                  <br />
                  Beautiful and functional interfaces is my thing.
                  <br />
                  I specialise in software engineering but I'm ready to work on
                  a wide variety of project.
                  <br />I like to share about frontend development on my{" "}
                  <a
                    href="https://twitter.com/adriendenat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{" "}
                  and sometimes write longer thoughts on{" "}
                  <a
                    href="https://tympanus.net/codrops/2016/05/11/distorted-button-effects-with-svg-filters/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    articles
                  </a>
                  .
                </p>
                <span className={styles.email}>
                  Email me:{" "}
                  <a href="mailto:oi@adriendenat.com">oi@adriendenat.com</a>
                </span>
              </div>
              <ul className={classnames("list-reset", styles.socialLinks)}>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://github.com/Grsmto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-name="Github"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://twitter.com/adriendenat"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-name="Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://codepen.io/Grsmto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-name="Codepen"
                  >
                    Codepen
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://www.linkedin.com/in/adriendenat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-name="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.containerLight}>
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
                Within 7 years of experience in frontend development, I've been
                working on{" "}
                <a
                  href="http://thefwa.com/cases/creaktif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  awarded
                </a>{" "}
                <a
                  href="http://www.awwwards.com/web-design-awards/neverbland-2-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  marketing
                </a>{" "}
                <a
                  href="http://www.awwwards.com/web-design-awards/savse-smoothies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  websites
                </a>
                , products and mobile applications. I recently left my position
                of lead frontend developer at NEVERBLAND to start working as a
                freelancer.
                <br />
                I now have about 5 projects in production using React, Redux and
                also GraphQL, but I'm open to other frameworks too! I'm always
                looking for the fastest, cleanest and most efficient way to
                build user interfaces.
                <br />
                Lately I have been focusing on mobile applications using React
                Native and Java on Android.
                <br />I love remote work and I would make you change your mind
                about how efficient it can be!
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.localDate}>
              <span className={styles.localDateLabel}>My local time is: </span>
              <span className={styles.localDateTime}>
                {time}
                <span className={styles.flag}>🇧🇷</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </TrackDocument>
  );
};

export default AboutPage;
