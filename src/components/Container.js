import React from "react";
import { Box } from "rebass";

const Container = ({ sx, ...props }) => (
  <Box
    sx={theme => ({
      maxWidth: "maxWidth",
      margin: "auto",
      padding: "2rem",

      "@supports (display: grid)": {
        "&": {
          display: "grid",
          gridTemplateColumns: [
            `[full-start] minmax(2rem, 1fr) [main-start] minmax(
              0,
              ${theme.sizes.maxWidth}
            ) [main-end] minmax(2rem, 1fr) [full-end]`,
            `[full-start] minmax(1rem, 1fr) [main-start] minmax(
                0,
                ${theme.sizes.maxWidth}
              )
              [main-end] minmax(1rem, 1fr) [full-end]`,
          ],
          maxWidth: "initial",
          padding: 0,
        },
      },
      ...sx,
    })}
    {...props}
  />
);

export default Container;
