import React from 'react';
import classnames from 'classnames';
import { TrackedDiv } from 'react-track';
import { calculateScrollY } from 'react-track/tracking-formulas';

import styles from './Projects.module.css';

import Project from './Project';

const Projects = ({ data, documentElement, topTop, topBottom, isVisible }) =>
  <div className={classnames(styles.projects, { [styles.visible]: isVisible })}>
    {data.map(({ node }) =>
      <TrackedDiv
        formulas={[topTop, topBottom, calculateScrollY]}
        key={node.frontmatter.title}
      >
        {(posTopTop, posTopBottom, scrollY) =>
          <Project
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            html={node.html}
            videos={{
              mobile: node.frontmatter.videoMobile,
              desktop: node.frontmatter.videoDesktop
            }}
            scrollY={scrollY}
            posTop={posTopTop}
            posTopBottom={posTopBottom}
            isOnScreen={isVisible && documentElement.clientHeight >= -scrollY}
          />}

      </TrackedDiv>
    )}
  </div>;

export default Projects;
