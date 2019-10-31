/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ sx, ...props }) => (
  <GatsbyLink sx={sx} activeClassName="active" {...props} />
);

export default Link;
