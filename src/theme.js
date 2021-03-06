import { keyframes } from "@emotion/core";

const theme = {
  breakpoints: ["40em", "56em", "64em"],
  fonts: {
    body: "'Cooper Hewitt', system-ui, sans-serif",
    heading: "'Exo 2'",
  },
  fontWeights: {
    body: 500,
    heading: 800,
    bold: 700,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.25,
  },
  fontSizes: {
    0: "1rem", // 10px
    1: "1.2rem", // 12px
    2: "1.4rem", // 14px
    3: "1.6rem", // 16px
    4: "1.8rem", // 19px
    5: "2.3rem", // 23px
    6: "2.8rem", // 28px
    7: "3.8rem", // 38px
    8: "4.8rem", // 48px
    9: "7.2rem", // 72px
    10: "9rem", // 90px
  },
  colors: {
    white: "#FFF",
    black: "#000",
    fauxBlack: "#080808",
    red: "#FF302B",
    yellow: "#fff17c",
    grey: ["#79868e"],
  },
  space: [0, 5, 10, 15, 25, 40, 80, 120, 200],
  sizes: [],
  zIndices: {
    transition: 10,
    header: 9,
    intro: 8,
    projects: 7,
    footer: 6,
  },
  easings: {
    inOutExpo: "cubic-bezier(1, 0, 0, 1)",
    inOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    inOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
  text: {
    headings: {
      h1: {
        fontFamily: "heading",
        fontWeight: "heading",
        textTransform: "uppercase",
        fontSize: [7, 9, 9, 10],
      },
      h2: {
        fontFamily: "body",
        fontWeight: "body",
        textTransform: "uppercase",
        fontSize: [4, 5, 6],
      },
      h3: {
        fontFamily: "body",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 3,
      },
      h4: {
        textTransform: "uppercase",
        fontSize: 2,
        color: "grey.0",
      },
      h5: {
        textTransform: "uppercase",
        fontSize: 1,
      },
      h6: {
        textTransform: "uppercase",
        fontSize: 0,
      },
    },
  },
};

theme.colors.body = "white";
theme.fontSizes.body = theme.fontSizes[3];
theme.sizes.maxWidth = "128rem";
theme.space.gridGap = {
  small: theme.space[3],
  large: theme.space[5],
};

theme.animations = {
  appear: keyframes`
    0% { transform: translate3d(0, 100px, 0) rotateZ(5deg); opacity: 0; }
    100% { transform: translate3d(0, 0, 0); opacity: 1; }
  `,
  appearFlat: keyframes`
    0% { transform: translate3d(0, 40px, 0); opacity: 0; }
    100% { transform: translate3d(0, 0, 0); opacity: 1; }
  `,
  pageTransition: keyframes`
    0% { transform: translateY(125%) rotateZ(10deg); }
    50% { transform: translateY(0%) rotateZ(0deg); }
    100% { transform: translateY(-125%) rotateZ(-10deg); }
  `,
  appearLeft: keyframes`
    0% { transform: translate3d(0, 1.5em, 0) rotateZ(10deg); opacity: 0; }
    65% { transform: translate3d(0, 0, 0) rotateZ(0deg); opacity: 1; }
    100% { transform: translate3d(0, 0, 0) rotateZ(0deg); }
  `,
  appearRight: keyframes`
    0% { transform: translate3d(0, 1.5em, 0) rotateZ(10deg); opacity: 0; }
    65% { transform: translate3d(0, 0, 0); opacity: 1; }
    100% { transform: translate3d(0, 0, 0); }
  `,
  appearLeftSm: keyframes`
    0% { transform: translate3d(2.5em, 1.5em, 0) rotateZ(10deg); opacity: 0; }
    28% { transform: translate3d(2.5em, 0, 0); opacity: 1; }
    38% { transform: translate3d(2.5em, 0, 0); opacity: 1; }
    58% { transform: translate3d(1.5em, -1.5em, 0); opacity: 1; }
    100% { transform: translate3d(1.5em, -1.5em, 0); }
  `,
  appearRightSm: keyframes`
    0% { transform: translate3d(-2.5em, 1.5em, 0) rotateZ(10deg); opacity: 0; }
    28% { transform: translate3d(-2.5em, 0, 0); opacity: 1; }
    38% { transform: translate3d(-2.5em, 0, 0); opacity: 1; }
    58% { transform: translate3d(-1.5em, 1.5em, 0); opacity: 1; }
    100% { transform: translate3d(-1.5em, 1.5em, 0); }
  `,
  fadeIn: keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `,
  disappearRight: keyframes`
    70% { opacity: 0;  }
    100% { transform: translate3d(0, -90px, 0) rotateZ(-5deg); opacity: 0; }
  `,
};

export default theme;
