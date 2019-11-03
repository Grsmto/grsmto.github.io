import React from "react";
import { Box } from "rebass";

const Container = ({ sx, ...props }) => (
  <Box
    sx={theme => ({
      maxWidth: "maxWidth",
      margin: "auto",
      px: [theme.space.gridGap.small * 2, theme.space.gridGap.large],
      ...sx,
    })}
    {...props}
  />
);

export default Container;
