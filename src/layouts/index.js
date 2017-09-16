import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'typeface-roboto';

import './index.css';

import Header from '../components/Header';

const TemplateWrapper = ({ children }) =>
  <div className="main-container">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
