import React, { useContext, useCallback } from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { TrackDocument } from "react-track";
import {
  getDocumentElement,
  topTop,
  topBottom,
} from "react-track/tracking-formulas";

import { AppContext } from "../layouts";

import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const IndexPage = ({ data }) => {
  const { isIntroDone, setIntroDone } = useContext(AppContext);
  const hideScrollStyle = {
    maxHeight: "100vh",
    overflow: "hidden",
  };

  const onIntroEnd = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <TrackDocument formulas={[getDocumentElement, topTop, topBottom]}>
      {(documentElement, topTop, topBottom) => (
        <div className="page" style={!isIntroDone ? hideScrollStyle : null}>
          <Intro onEnd={onIntroEnd} isVisible={!isIntroDone} />
          <Projects
            data={data.allMarkdownRemark.edges}
            documentElement={documentElement}
            topTop={topTop}
            topBottom={topBottom}
            isVisible={isIntroDone}
          />
          <Footer />
        </div>
      )}
    </TrackDocument>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
  }
`;
