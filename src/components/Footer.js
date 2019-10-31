import React from "react";
import { Link } from "gatsby";
import { Heading, Text } from "rebass";

import Container from "./Container";
import ContainerInner from "./ContainerInner";

import SocialButtons from "./SocialButtons";

const Footer = () => (
  <Container
    as="footer"
    sx={{
      p: "9rem 0",
    }}
  >
    <ContainerInner>
      <Heading as="h2" sx={{ mb: 5, fontSize: 7 }}>
        Any cool project you want to talk about?
      </Heading>
      <Heading as="p" sx={{ fontSize: 7 }}>
        I’m always looking for new interfaces to build and challenging projects
        to work on.
        <br />
        <a href="mailto:oi@adriendenat.com">Email me!</a>
      </Heading>
      <Text
        sx={{
          fontSize: 3,
          fontWeight: "heading",
          color: "red",
        }}
      >
        <Link to="/about">or learn more about me.</Link>
      </Text>
      <SocialButtons />
    </ContainerInner>
  </Container>
);

export default Footer;
