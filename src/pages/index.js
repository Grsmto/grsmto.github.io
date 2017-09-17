import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TrackDocument, TrackedDiv } from 'react-track';
import {
  getDocumentElement,
  calculateScrollY,
  topTop,
  topBottom
} from 'react-track/tracking-formulas';

import styles from './index.module.css';

import mutateStore from '../state/mutateStore';

import Intro from '../components/Intro';
import Project from '../components/Project';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntroDone: false
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    // if (window) {
    //   window.setTimeout(
    //     () =>
    //       this.setState({
    //         isIntroDone: true
    //       }),
    //     100
    //   );
    // }
  }

  onIntroEnd() {
    this.props.mutateStore({
      isIntroDone: true
    });
  }

  render() {
    const { data } = this.props;
    const { isIntroDone } = this.state;

    return (
      <TrackDocument
        formulas={[getDocumentElement, calculateScrollY, topTop, topBottom]}
      >
        {(documentElement, documentScrollY, topTop, topBottom) =>
          <div className="page">
            {!isIntroDone
              ? <Intro onEnd={this.onIntroEnd.bind(this)} />
              : data.allMarkdownRemark.edges.map(({ node }) =>
                  <TrackedDiv
                    formulas={[topTop, topBottom, calculateScrollY]}
                    key={node.frontmatter.title}
                  >
                    {(posTopTop, posTopBottom, scrollY) =>
                      <Project
                        title={node.frontmatter.title}
                        description={node.frontmatter.description}
                        html={node.html}
                        scrollY={scrollY}
                        posTop={posTopTop}
                        posTopBottom={posTopBottom}
                        isOnScreen={documentElement.clientHeight >= -scrollY}
                      />}
                  </TrackedDiv>
                )}
          </div>}
      </TrackDocument>
    );
  }
}

export default connect(null, { mutateStore })(IndexPage);

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
