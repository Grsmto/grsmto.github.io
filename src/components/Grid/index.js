/** @jsx jsx */
import { jsx } from "theme-ui";
import { forwardRef } from "react";
import { Box } from "rebass";

const Grid = forwardRef(({ sx, ...props }, ref) => {
  return (
    <Box
      sx={theme => ({
        display: "grid",
        gridGap: ["gridGap.small", "gridGap.large"],
        mx: 0,
        "@supports not (display: grid)": {
          display: "flex",
          flexWrap: "wrap",
          mx: [
            `-${theme.space.gridGap.small / 2}px`,
            `-${theme.space.gridGap.large / 2}px`,
          ],
        },
        ...sx,
      })}
      {...props}
      ref={ref}
    />
  );
});

Grid.displayName = "Grid";

export default Grid;
