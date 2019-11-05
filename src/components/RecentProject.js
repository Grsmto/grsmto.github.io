import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";
import { Box, Heading } from "@theme-ui/components";

import GridRow from "./GridRow";

const opacity = x => Math.max(0, Math.min(1, x));
const SM_BREAKPOINT = "600px";

export default class RecentProject extends Component {
  constructor(props) {
    super(props);
    this.projectEl = null;
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("onresize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("onresize", this.onResize);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isOnScreen) {
      return true;
    }
    return false;
  }

  onResize() {
    this.setState({
      isViewportSizeSm: window.matchMedia(`(min-width: ${SM_BREAKPOINT})`)
        .matches,
    });
  }

  render() {
    const {
      title,
      description,
      url,
      tech,
      year,
      scrollY,
      isOnScreen,
    } = this.props;
    const elHeight = this.projectEl ? this.projectEl.offsetHeight : 1;

    return (
      <Motion
        style={{
          opacityBg: spring(
            opacity(1 - (scrollY - 430) / (elHeight / 2.5)),
            presets.stiff
          ),
          opacityContent: spring(
            Math.max(opacity((scrollY - 50) / (elHeight / 20)), 0.2),
            presets.stiff
          ),
        }}
      >
        {currentStyles => (
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
            ref={r => (this.projectEl = r)}
          >
            <GridRow
              sx={{
                zIndex: 1,
              }}
            >
              <GridRow.Col gridColumn={["1 / -1", "2 / -2", "4 / -2"]}>
                <Heading as="h1" variant="text.headings.h1" sx={{ mb: [4, 0] }}>
                  {title}
                </Heading>
              </GridRow.Col>
              <GridRow.Col gridColumn={["1 / -1", "2 / span 3", "4 / span 3"]}>
                <Box>
                  <Heading variant="text.headings.h3" sx={{ mb: 3 }}>
                    Infos
                  </Heading>
                  <p>
                    <strong>Project: </strong>
                    {description}
                  </p>
                  <p>
                    <strong>Year: </strong>
                    {year}
                  </p>
                </Box>
              </GridRow.Col>
              <GridRow.Col gridColumn={["1 / -1", "6 / span 4", "7 / span 3"]}>
                <Box>
                  <Heading variant="text.headings.h3" sx={{ mb: 3 }}>
                    Tech
                  </Heading>
                  <p>{tech}</p>
                </Box>
              </GridRow.Col>
              <GridRow.Col gridColumn={["1 / -1", "10 / -1"]}>
                <Box
                  as="a"
                  sx={{
                    display: "inline-block",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                  href={url}
                  target="_blank"
                >
                  Visit site
                </Box>
              </GridRow.Col>
            </GridRow>
          </Box>
        )}
      </Motion>
    );
  }
}
