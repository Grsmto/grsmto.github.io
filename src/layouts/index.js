import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'typeface-roboto';

import './index.css';

import Header from '../components/Header';

const TemplateWrapper = ({ children }) =>
  <div className="main-container">
    <Helmet
      title="Adrien Denat"
      meta={[
        { name: 'description', content: 'Frontend developer freelance' },
        { name: 'keywords', content: 'frontend, developer, freelance' }
      ]}
    />
    <Header />
    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
