import React from "react";

import Grid from "../Grid";
import Col from "./Col";

const GridRow = ({ sx, ...otherProps }) => (
  <Grid
    sx={{
      gridTemplateColumns: "repeat(12, 1fr)",
      ...sx,
    }}
    {...otherProps}
  />
);

GridRow.Col = Col;

export default GridRow;
