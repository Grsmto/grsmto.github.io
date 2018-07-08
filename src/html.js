import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

class Html extends Component {
  render() {
    let css;

    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

    return (
      <html op="news" lang="en">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="Gatsby example site showing use with redux"
            content="Gatsby example site showing use with redux"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/favicons/apple-touch-icon.png')}>
          <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicons/favicon-32x32.png')}>
          <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicons/favicon-16x16.png')}>
          <link rel="manifest" href={withPrefix('/site.webmanifest')}>
          <link rel="mask-icon" href={withPrefix('/favicons/safari-pinned-tab.svg')} color="#5bbad5">
          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="theme-color" content="#ffffff">

          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

module.exports = Html;
