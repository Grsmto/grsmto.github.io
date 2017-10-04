import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'typeface-roboto';

if (
  process.env.NODE_ENV === `development` ||
  (process.env.NODE_ENV === `production` && process.browser !== true)
) {
  require('./index.css');
}

import PageTransition from '../components/PageTransition';
import Header from '../components/Header';

const TemplateWrapper = ({ children, location }) =>
  <div className="main-container">
    <Helmet
      title="Adrien Denat"
      meta={[
        { name: 'description', content: 'Frontend developer freelance' },
        { name: 'keywords', content: 'frontend, developer, freelance' }
      ]}
    />
    <Header />
    <PageTransition location={location}>
      {children()}
    </PageTransition>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
