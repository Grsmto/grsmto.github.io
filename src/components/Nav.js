import React from "react";
import { Box } from "@theme-ui/components";

import Link from "./Link";

const linkStyles = ({ easings }) => ({
  position: "relative",
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: 2,

  "&:before": {
    position: "absolute",
    content: '""',
    width: "100%",
    top: "calc(100% - 0.05em)",
    left: 0,
    borderBottom: "0.1em solid",
    transition: `all 200ms ${easings.outQuad}`,
    transform: "translateY(5px)",
    opacity: 0,
  },

  "&:hover, &.active": {
    "&:before": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});

const Nav = ({ sx, ...props }) => (
  <Box as="nav" sx={sx} {...props}>
    <Box
      as="ul"
      sx={{
        textAlign: "right",
        li: {
          display: "inline-block",
        },
        "li + li": {
          ml: [4, 5],
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
