import React from "react";
import { Box } from "@theme-ui/components";

import { IconTwitter, IconGithub, IconCodepen, IconLinkedIn } from "./Icons";

const iconStyle = {
  "&:hover": {
    color: "red",
  },
  "& + &": {
    ml: 2,
  },
};

const SocialButtons = () => (
  <Box
    sx={{
      mt: 5,
      "* + *": {
        ml: 2,
      },
    }}
  >
    <Box
      as="a"
      sx={iconStyle}
      href="https://github.com/Grsmto/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub />
    </Box>
    <Box
      as="a"
      sx={iconStyle}
      href="https://codepen.io/Grsmto/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconCodepen />
    </Box>
    <Box
      as="a"
      sx={iconStyle}
      href="https://twitter.com/Grsmto"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconTwitter />
    </Box>
    <Box
      as="a"
      sx={iconStyle}
      href="https://www.linkedin.com/in/adriendenat/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedIn />
    </Box>
  </Box>
);

export default SocialButtons;
