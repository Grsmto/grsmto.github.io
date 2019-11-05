/** @jsx jsx */
import { jsx } from "theme-ui";
import { style } from "styled-system";
import { Box } from "@theme-ui/components";

const span = style({
  prop: "span",
  cssProperty: "gridColumn",
  transformValue: n => `span ${n}`,
});

const Col = ({ sx, fullWidth, gridColumn, gridRow, ...otherProps }) => (
  <Box
    sx={theme => ({
      p: [
        `${theme.space.gridGap.small / 2}px`,
        `${theme.space.gridGap.large / 2}px`,
      ],
      "@supports (display: grid)": {
        p: 0,
      },
      ...span({ ...otherProps, theme }),
      ...(fullWidth && { gridColumn: "-1 / 1" }),
      ...(gridColumn && { gridColumn }),
      ...(gridRow && { gridRow }),
      ...(typeof sx === "function" ? sx(theme) : sx),
    })}
    {...otherProps}
  />
);

export default Col;
