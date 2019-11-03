import { createGlobalStyle } from "@xstyled/emotion";

const GlobalStyles = createGlobalStyle({
  html: {
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontSize: "62.5%",
  },
  body: {
    fontSize: "body",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
    color: "body",
    backgroundColor: "black",
    overflowY: "scroll",
    minHeight: "100vh",
  },
  "::selection": {
    backgroundColor: "rgba(255, 241, 124, 0.99)",
    color: "black",
    opacity: 1,
    textShadow: "none",
  },
  /* Remove list styles on ul, ol elements with a class attribute */
  /* Remove default padding */
  "ul[class], ol[class]": {
    padding: 0,
    listStyle: "none",
  },
  /* Remove default margin */
  [`
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd
  `]: {
    margin: 0,
  },
  blockquote: {
    fontStyle: "italic",
  },
  "b, strong": {
    fontWeight: "bold",
  },
  a: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
  "button, a": {
    transition: "all 150ms",
  },
  "img, video": {
    maxWidth: "100%",
  },
  "[hidden]": {
    display: "none!important",
  },
  "input, textarea": {
    width: "100%",
    maxWidth: "100%",
    border: "1px solid",
    borderColor: "gray",
    background: "#f9f9f9",
    borderRadius: 8,
    padding: 3,
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      background: "white",
    },
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "heading",
    fontWeight: "heading",
  },
});

export default GlobalStyles;
