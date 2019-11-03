import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "emotion-theming";

import "modern-normalize/modern-normalize.css";
import "typeface-cooper-hewitt";
import "typeface-exo-2";

import PageTransition from "../components/PageTransition";
import Header from "../components/Header";

import theme from "../theme";
import GlobalStyles from "../GlobalStyles";

export const AppContext = React.createContext();

const TemplateWrapper = ({ children, location }) => {
  const [isIntroDone, setIntroDone] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContext.Provider value={{ isIntroDone, setIntroDone }}>
        <div className="main-container">
          <Helmet
            title="Adrien Denat"
            meta={[
              { name: "description", content: "Frontend developer freelance" },
              { name: "keywords", content: "frontend, developer, freelance" },
            ]}
          />
          <Header isIntroDone={isIntroDone} sx={{ pt: 4 }} />
          <PageTransition location={location}>{children}</PageTransition>
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
