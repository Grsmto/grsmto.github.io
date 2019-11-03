import React from "react";
import { Link } from "gatsby";
import { Flex } from "rebass";

import Container from "./Container";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = ({ isIntroDone, sx }) => (
  <Container
    as="header"
    sx={{
      position: "fixed",
      zIndex: "header",
      width: "100%",
      opacity: 0,
      visibility: "hidden",
      transition: "all 300ms",
      top: 0,
      left: 0,
      right: 0,

      ...(isIntroDone && {
        opacity: 1,
        visibility: "visible",
      }),

      "&:before": {
        position: "absolute",
        content: '"Boing!"',
        top: "-3rem",
        left: "50%",
        transform: "translateX(-50 %)",
      },

      ...sx,
    }}
  >
    <Flex>
      {isIntroDone && (
        <Link to="/">
          <Logo
            sx={{
              display: "inline-block",
            }}
          />
        </Link>
      )}
      <Nav sx={{ ml: "auto" }} />
    </Flex>
  </Container>
);

export default Header;
