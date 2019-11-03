import React from "react";
import { keyframes } from "@emotion/core";
import { Heading, Flex, Box } from "rebass";

import { underlinedDouble } from "../utils/styles";

const appear = keyframes({
  "0%": { transform: "translate3d(0, -10px, 0) rotateZ(-10deg)", opacity: 0 },
  "100%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
});

const Logo = ({ sx, ...props }) => (
  <Heading
    sx={{
      textAlign: "center",
      fontSize: ["body", "body"],
      fontStyle: "italic",
      ...sx,
    }}
    variant="text.headings.h1"
    {...props}
  >
    <Flex>
      <Box sx={{ color: "white", ...underlinedDouble }}>Adrien.</Box>
      <Box
        sx={({ animations }) => ({
          color: "red",
          animation: `${appear} 1s 100ms ${animations.inOutQuint} backwards`,
        })}
      >
        Denat
      </Box>
    </Flex>
  </Heading>
);

export default Logo;
