import React, { useEffect, useContext } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Box, Heading } from "@theme-ui/components";
import { Motion, spring } from "react-motion";
import { TrackDocument } from "react-track";
import {
  getDocumentElement,
  calculateScrollY,
} from "react-track/tracking-formulas";
import { fluidRange, hideVisually } from "polished";
import { merge } from "lodash";

import { AppContext } from "../layouts";
import { underlinedDouble } from "../utils/styles";

import Container from "../components/Container";
import GridRow from "../components/GridRow";
import SEO from "../components/SEO";

const socialLinkStyle = merge({}, underlinedDouble, {
  textTransform: "uppercase",
  lineHeight: 1.15,
  textDecoration: "none",
  ...fluidRange({
    prop: "fontSize",
    fromSize: "40px",
    toSize: "100px",
  }),
  "&:hover": {
    "&:before, &:after": {
      border: "none",
    },
  },
});

const isSafari =
  typeof navigator !== "undefined"
    ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    : false;

const AboutPage = ({ data }) => {
  const context = useContext(AppContext);

  useEffect(() => {
    context.setIntroDone(true);
  }, [context]);

  return (
    <TrackDocument formulas={[getDocumentElement, calculateScrollY]}>
      {(documentElement, scrollY) => (
        <Box sx={{ position: "relative" }}>
          <SEO title="About" />
          {!isSafari && (
            <Motion
              style={{
                scrollY: spring(scrollY, { stiffness: 60, damping: 7 }),
              }}
            >
              {currentStyles => (
                <Box
                  as="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  sx={{
                    ...hideVisually(),
                  }}
                >
                  <defs>
                    <filter id="filter-glitch-1">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.02"
                        numOctaves="1"
                        result="warp"
                      />
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale={Math.min(currentStyles.scrollY / 5, 200)}
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>
                  </defs>
                </Box>
              )}
            </Motion>
          )}
          <Container
            sx={{
              position: "relative",
              zIndex: 1,
              mt: 6,
            }}
          >
            <GridRow>
              <GridRow.Col gridColumn="2 / -2" gridRow={1} sx={{ zIndex: 1 }}>
                <Heading
                  as="h1"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontStyle: "italic",
                    lineHeight: 1,

                    "& span:nth-of-type(2)": {
                      filter: "url(#filter-glitch-1)",
                    },
                  }}
                >
                  <Box
                    as="span"
                    sx={{
                      ...fluidRange({
                        prop: "fontSize",
                        fromSize: "150px",
                        toSize: "400px",
                      }),
                      ml: -3,
                    }}
                  >
                    Oi!
                  </Box>
                  <br />
                  <Box
                    as="span"
                    sx={{
                      alignSelf: "center",
                      textTransform: "uppercase",
                      ...fluidRange({
                        prop: "fontSize",
                        fromSize: "40px",
                        toSize: "150px",
                      }),
                    }}
                  >
                    I'm Adrien
                  </Box>
                </Heading>
              </GridRow.Col>
              <GridRow.Col
                gridColumn="6 / -1"
                gridRow={1}
                sx={{ position: "relative" }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: ["40px", "5vw"],
                    right: 0,
                  }}
                >
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    style={{
                      width: 400,
                      maxWidth: "40vw",
                      transform: "skew(-5deg)",
                    }}
                  />
                </Box>
              </GridRow.Col>
            </GridRow>
          </Container>
          <Container sx={{ mt: 7 }}>
            <GridRow>
              <GridRow.Col gridColumn={["1 / -1", "3 / -3", "4 / -4"]}>
                <Heading as="h2" variant="text.headings.h2" sx={{ mb: [4, 5] }}>
                  Freelance developer based in London,
                  <br />
                  currently working from Brazil. 🇧🇷
                </Heading>
                <p>
                  I love building websites and products with a meaning.
                  <br />
                  Beautiful and functional interfaces is my thing.
                  <br />
                  I specialise in frontend software engineering but I'm ready to
                  work on a wide variety of project.
                  <br />I like to share about frontend development on my{" "}
                  <a
                    href="https://twitter.com/adriendenat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{" "}
                  and sometimes write longer thoughts on{" "}
                  <a
                    href="https://tympanus.net/codrops/2016/05/11/distorted-button-effects-with-svg-filters/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    articles
                  </a>{" "}
                  or during{" "}
                  <a
                    href="https://slides.com/adriendenat"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    talks
                  </a>
                  .
                </p>
                <p>
                  I'm also a strong believer of open source and I try to
                  contribute on my free time. Check out my{" "}
                  <a
                    href="https://github.com/Grsmto/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  !
                </p>
                <Heading
                  as="span"
                  variant="text.headings.h3"
                  sx={{
                    display: "block",
                    fontSize: 5,
                    fontStyle: "italic",
                    my: 6,
                  }}
                >
                  <Box as="span" sx={{ color: "red" }}>
                    Email me:
                  </Box>{" "}
                  <a href="mailto:oi@adriendenat.com">oi@adriendenat.com</a>
                </Heading>
                <p>
                  Within 7 years of experience in frontend development, I've
                  been working on{" "}
                  <a
                    href="http://thefwa.com/cases/creaktif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    awarded
                  </a>{" "}
                  <a
                    href="http://www.awwwards.com/web-design-awards/neverbland-2-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    marketing
                  </a>{" "}
                  <a
                    href="http://www.awwwards.com/web-design-awards/savse-smoothies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    websites
                  </a>
                  , products and mobile applications. I recently left my
                  position of lead frontend developer at NEVERBLAND to start
                  working as a freelancer.
                  <br />
                  I now have a dozen of projects in production using React,
                  Redux and also GraphQL, but I'm open to other frameworks too!
                  I'm always looking for the fastest, cleanest and most
                  efficient way to build user interfaces.
                  <br />
                  Lately I have been focusing on Design Systems and products
                  frontend architecture.
                  <br />I love remote work and I would make you change your mind
                  about how efficient it can be!
                </p>
              </GridRow.Col>
            </GridRow>
            <GridRow sx={{ my: 7 }}>
              <GridRow.Col gridColumn={["4 / -1", "6 / -1"]}>
                <Box
                  as="ul"
                  sx={{
                    margin: "12em 0 0 4em",
                    fontStyle: "italic",
                  }}
                >
                  <li>
                    <Box
                      as="a"
                      sx={socialLinkStyle}
                      variant="text.headings.h1"
                      href="https://github.com/Grsmto/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-name="Github"
                    >
                      Github
                    </Box>
                  </li>
                  <li>
                    <Box
                      as="a"
                      sx={socialLinkStyle}
                      variant="text.headings.h1"
                      href="https://twitter.com/adriendenat"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-name="Twitter"
                    >
                      Twitter
                    </Box>
                  </li>
                  <li>
                    <Box
                      as="a"
                      sx={socialLinkStyle}
                      variant="text.headings.h1"
                      href="https://codepen.io/Grsmto/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-name="Codepen"
                    >
                      Codepen
                    </Box>
                  </li>
                  <li>
                    <Box
                      as="a"
                      sx={socialLinkStyle}
                      variant="text.headings.h1"
                      href="https://www.linkedin.com/in/adriendenat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-name="LinkedIn"
                    >
                      LinkedIn
                    </Box>
                  </li>
                </Box>
              </GridRow.Col>
            </GridRow>
          </Container>
        </Box>
      )}
    </TrackDocument>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    file(name: { eq: "me" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
