import React from "react";
import { Link } from "gatsby";
import { Heading, Box } from "@theme-ui/components";

import Container from "./Container";
import GridRow from "./GridRow";

import SocialButtons from "./SocialButtons";

const Footer = () => (
  <Container as="footer" sx={{ py: 7 }}>
    <GridRow>
      <GridRow.Col gridColumn={["1 / -1", "4 / -4"]}>
        <Heading as="h2" sx={{ mb: 5, fontSize: [5, 7] }}>
          Any cool project you want to talk about?
        </Heading>
        <Heading as="p" sx={{ fontSize: [5, 7] }}>
          I’m always looking for new interfaces to build and challenging
          projects to work on.
          <br />
          <Box
            as="a"
            sx={{ display: "block", my: 5 }}
            href="mailto:oi@adriendenat.com"
          >
            Email me!
          </Box>
        </Heading>
        <Heading
          as="span"
          sx={{
            fontSize: [2, 3],
            color: "red",
          }}
        >
          <Link to="/about">or learn more about me.</Link>
        </Heading>
        <SocialButtons />
      </GridRow.Col>
    </GridRow>
  </Container>
);

export default Footer;
