import React, { useContext, useCallback } from "react";
import { graphql } from "gatsby";
import { TrackDocument } from "react-track";
import {
  getDocumentElement,
  topTop,
  topBottom,
} from "react-track/tracking-formulas";
import { RemoveScroll } from "react-remove-scroll";

import { AppContext } from "../layouts";

import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import RecentProjects from "../components/RecentProjects";

const IndexPage = ({ data }) => {
  const { isIntroDone, setIntroDone } = useContext(AppContext);

  const onIntroEnd = useCallback(() => {
    setIntroDone(true);
  }, [setIntroDone]);

  return (
    <TrackDocument formulas={[getDocumentElement, topTop, topBottom]}>
      {(documentElement, topTop, topBottom) => (
        <RemoveScroll enabled={!isIntroDone}>
          <Intro onEnd={onIntroEnd} isVisible={!isIntroDone} />
          <Projects
            data={data.projects.edges}
            documentElement={documentElement}
            topTop={topTop}
            topBottom={topBottom}
            isVisible={isIntroDone}
          />
          <RecentProjects
            data={data.recentProjects.edges}
            documentElement={documentElement}
            topTop={topTop}
            topBottom={topBottom}
            isVisible={isIntroDone}
          />
          <Footer />
        </RemoveScroll>
      )}
    </TrackDocument>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/projects/)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            videoDesktop
            videoMobile
            url
            tech
            year
          }
          html
        }
      }
    }
    recentProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/recent-projects/)/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            url
            tech
            year
          }
        }
      }
    }
  }
`;
