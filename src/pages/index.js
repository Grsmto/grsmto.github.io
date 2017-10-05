import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TrackDocument } from 'react-track';
import {
  getDocumentElement,
  topTop,
  topBottom
} from 'react-track/tracking-formulas';

import mutateStore from '../state/mutateStore';

import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

class IndexPage extends Component {
  onIntroEnd() {
    this.props.mutateStore({
      isIntroDone: true
    });
  }

  render() {
    const { data, isIntroDone } = this.props;
    const hideScrollStyle = {
      maxHeight: '100vh',
      overflow: 'hidden'
    };

    return (
      <TrackDocument formulas={[getDocumentElement, topTop, topBottom]}>
        {(documentElement, topTop, topBottom) =>
          <div className="page" style={!isIntroDone ? hideScrollStyle : null}>
            <Intro
              onEnd={this.onIntroEnd.bind(this)}
              isVisible={!isIntroDone}
            />
            <Projects
              data={data.allMarkdownRemark.edges}
              documentElement={documentElement}
              topTop={topTop}
              topBottom={topBottom}
              isVisible={isIntroDone}
            />
            <Footer />
          </div>}
      </TrackDocument>
    );
  }
}

export default connect(({ isIntroDone }) => ({ isIntroDone }), { mutateStore })(
  IndexPage
);

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
          }
          html
        }
      }
    }
  }
`;
