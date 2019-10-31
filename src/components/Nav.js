import React from "react";
import { Box } from "rebass";

import Link from "./Link";

const linkStyles = {
  display: "inline-block",
  position: "relative",
  color: "white",
  textDecoration: "none",
  fontWeight: 400,
  textTransform: "uppercase",
  paddingBottom: 1,

  "&:before, &:after": {
    transition: "all 200ms var(--ease-out-quad)",
    transform: "translateY(5px)",
    opacity: 0,
    top: "calc(100% - 0.15em - 5px)",
  },

  "&:hover": {
    color: "grey",

    "&:before, &:after": {
      borderColor: "grey",
      transform: "translateY(0)",
      opacity: 1,
    },
  },
};

const Nav = ({ sx, ...props }) => (
  <Box as="nav" sx={{ fontSize: "1rem", ...sx }} {...props}>
    <Box
      as="ul"
      sx={{
        textAlign: "right",
        li: {
          display: "inline-block",
        },
        "li + li": {
          ml: 3,
        },
      }}
    >
      <li>
        <Link sx={linkStyles} to="/">
          projects
        </Link>
      </li>
      <li>
        <Link sx={linkStyles} to="/about">
          about
        </Link>
      </li>
    </Box>
  </Box>
);

export default Nav;
