import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";
import { Box, Heading } from "rebass";

import Container from "./Container";
import GridRow from "./GridRow";

import config from "../config";

const opacity = x => Math.max(0, Math.min(1, x));
const SM_BREAKPOINT = "600px";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.projectEl = null;
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("onresize", this.onResize);

    if (this.props.isOnScreen) {
      this.video.play();
    }
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

  componentWillReceiveProps(nextProps) {
    if (this.props.isOnScreen !== nextProps.isOnScreen) {
      if (nextProps.isOnScreen) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }
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
      html,
      videos,
      url,
      tech,
      year,
      scrollY,
      isOnScreen,
    } = this.props;
    const elHeight = this.projectEl ? this.projectEl.offsetHeight : 1;

    return (
      <Container
        as="section"
        sx={{
          position: "relative",
          py: 8,
        }}
      >
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
                <GridRow.Col gridColumn={["1 / -1", "4 / -4"]}>
                  <Heading as="h1" variant="text.headings.h1">
                    <span>{title}</span>
                  </Heading>
                  <Heading
                    as="h2"
                    variant="text.headings.h2"
                    sx={{ color: "red", mt: 4, mb: 4 }}
                  >
                    <span>{description}</span>
                  </Heading>
                </GridRow.Col>
                <GridRow
                  sx={{
                    gridColumn: "1 / -1",
                    p: {
                      gridColumn: ["1 / -1", "4 / -4"],
                    },
                    blockquote: {
                      fontSize: [4, 6],
                      fontWeight: "bold",
                      lineHeight: "heading",
                      gridColumn: ["1 / -1", "3 / -5"],
                      my: 5,
                      em: {
                        display: "inline-block",
                        fontWeight: "body",
                        fontSize: [2, 3],
                        mt: 2,
                        "&:before": {
                          content: '"/"',
                          fontSize: [4, 7],
                        },
                      },
                    },
                  }}
                  style={
                    {
                      // opacity: currentStyles.opacityContent,
                    }
                  }
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <GridRow.Col gridColumn="2 / 12">
                  <Box
                    as="video"
                    sx={{
                      my: 4,
                      backgroundColor: "black",
                    }}
                    ref={r => (this.video = r)}
                    loop
                    muted
                  >
                    <source
                      src={`${config.s3BucketUrl}/${videos.desktop}.webm`}
                      type="video/webm"
                    />
                    <source
                      src={`${config.s3BucketUrl}/${videos.desktop}.mp4`}
                      type="video/mp4"
                    />
                  </Box>
                </GridRow.Col>
                <GridRow.Col gridColumn={["1 / -1", "4 / -4"]}>
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      // fontSize: [0, 1],
                    }}
                    style={{
                      opacity: currentStyles.opacityContent,
                    }}
                  >
                    <div>
                      <strong>Tech: </strong>
                      {tech}
                    </div>
                    <div>
                      <strong>Year: </strong>
                      {year}
                    </div>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Box
                      as="a"
                      sx={{
                        display: "inline-block",
                        color: "red",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                      href={url}
                      target="_blank"
                    >
                      Visit site
                    </Box>
                  </Box>
                </GridRow.Col>
              </GridRow>
            </Box>
          )}
        </Motion>
      </Container>
    );
  }
}
