import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "modern-normalize/modern-normalize.css";
import "basscss/css/basscss-cp.css";
import "typeface-cooper-hewitt";

import "./index.css";

import PageTransition from "../components/PageTransition";
import Header from "../components/Header";

export const AppContext = React.createContext();

const TemplateWrapper = ({ children, location }) => {
  const [isIntroDone, setIntroDone] = useState(false);

  return (
    <AppContext.Provider value={{ isIntroDone, setIntroDone }}>
      <div className="main-container">
        <Helmet
          title="Adrien Denat"
          meta={[
            { name: "description", content: "Frontend developer freelance" },
            { name: "keywords", content: "frontend, developer, freelance" },
          ]}
        />
        <Header isIntroDone={isIntroDone} />
        <PageTransition location={location}>{children}</PageTransition>
      </div>
    </AppContext.Provider>
  );
};

export default TemplateWrapper;
