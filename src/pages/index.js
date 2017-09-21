import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { TrackDocument } from 'react-track';
import {
  getDocumentElement,
  topTop,
  topBottom
} from 'react-track/tracking-formulas';

import mutateStore from '../state/mutateStore';

import Intro from '../components/Intro';
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
    }

    return (
      <TrackDocument
        formulas={[getDocumentElement, topTop, topBottom]}
      >
        {(documentElement, topTop, topBottom) =>
          <div className="page" style={!isIntroDone ? hideScrollStyle : null}>
            {!isIntroDone && <Intro onEnd={this.onIntroEnd.bind(this)} />}
            <Projects
              data={data.allMarkdownRemark.edges}
              documentElement={documentElement}
              topTop={topTop}
              topBottom={topBottom}
              isVisible={isIntroDone}
            />
          </div>
        }
      </TrackDocument>
    );
  }
}

export default connect(
  ({ isIntroDone }) => ({ isIntroDone }),
  { mutateStore }
)(IndexPage);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
          }
          html
        }
      }
    }
  }
`;
