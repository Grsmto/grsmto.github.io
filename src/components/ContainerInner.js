import React from "react";
import { Box } from "@theme-ui/components";

const ContainerInner = ({ sx, ...props }) => (
  <Box
    sx={{
      padding: ["6rem 0", "3rem 0"],
      ...sx,
    }}
    {...props}
  />
);

export default ContainerInner;
