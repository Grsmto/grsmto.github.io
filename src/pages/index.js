import React, { Component } from 'react';
import Link from 'gatsby-link';
import { TrackDocument, TrackedDiv } from 'react-track';
import { calculateScrollY, topTop, topBottom } from 'react-track/tracking-formulas';

import styles from './index.module.css';

import Logo from '../components/Logo';
import Project from '../components/Project';

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogoVisible: false
    }
  }

  componentDidMount() {
    if (window) {
      window.setTimeout(() =>
        this.setState({
          isLogoVisible: true
        })
      , 100);
    }
  }

  render() {
    const { data } = this.props;
    const { isLogoVisible } = this.state;

    return (
      <TrackDocument formulas={[calculateScrollY, topTop, topBottom]}>
        {(documentScrollY, topTop, topBottom) =>
          <div className="page">
            {data.allMarkdownRemark.edges.map(({ node }) =>
              <TrackedDiv formulas={[topTop, topBottom, calculateScrollY]} key={node.frontmatter.title}>
                {(posTopTop, posTopBottom, scrollY) =>
                  <Project
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    html={node.html}
                    documentScrollY={documentScrollY}
                    scrollY={scrollY}
                    posTop={posTopTop}
                    posTopBottom={posTopBottom}
                  />
                }
              </TrackedDiv>
            )}
          </div>
        }
      </TrackDocument>
    )
  }
}

export default IndexPage;

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
`
