import React from "react";
import { Link } from "gatsby";
import { Heading, Text } from "rebass";

import Container from "./Container";
import GridRow from "./GridRow";

import SocialButtons from "./SocialButtons";

const Footer = () => (
  <Container as="footer" sx={{ py: 7 }}>
    <GridRow>
      <GridRow.Col gridColumn={["1 / -1", "4 / -4"]}>
        <Heading as="h2" sx={{ mb: 5, fontSize: 7 }}>
          Any cool project you want to talk about?
        </Heading>
        <Heading as="p" sx={{ fontSize: 7 }}>
          I’m always looking for new interfaces to build and challenging
          projects to work on.
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
      </GridRow.Col>
    </GridRow>
  </Container>
);

export default Footer;
