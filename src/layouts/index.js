import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";

import "modern-normalize/modern-normalize.css";
import "typeface-cooper-hewitt";
import "typeface-exo-2";

import PageTransition from "../components/PageTransition";
import Header from "../components/Header";
import SEO from "../components/SEO";

import theme from "../theme";
import GlobalStyles from "../GlobalStyles";

export const AppContext = React.createContext();

const TemplateWrapper = ({ children, location }) => {
  const [isIntroDone, setIntroDone] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ isIntroDone, setIntroDone }}>
        <GlobalStyles />
        <SEO />
        <Header isIntroDone={isIntroDone} sx={{ pt: 4 }} />
        <PageTransition location={location}>{children}</PageTransition>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
