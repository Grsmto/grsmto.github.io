import React from "react";
import { TrackedDiv } from "react-track";
import { calculateScrollY } from "react-track/tracking-formulas";
import { Box, Heading } from "rebass";

import GridRow from "./GridRow";
import Container from "./Container";
import RecentProject from "./RecentProject";

const RecentProjects = ({
  data,
  documentElement,
  topTop,
  topBottom,
  isVisible,
}) => (
  <Box sx={{ backgroundColor: "red" }}>
    <Container
      as="section"
      sx={{
        position: "relative",
        color: "black",
        py: 7,
      }}
    >
      <GridRow>
        <GridRow.Col gridColumn={["1 / -1", "4 / -4"]}>
          <Heading variant="text.headings.h2">Recent projects</Heading>
        </GridRow.Col>
      </GridRow>
      {data.map(({ node }) => (
        <TrackedDiv
          formulas={[topTop, topBottom, calculateScrollY]}
          key={node.frontmatter.title}
        >
          {(posTopTop, posTopBottom, scrollY) => (
            <RecentProject
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              html={node.html}
              url={node.frontmatter.url}
              tech={node.frontmatter.tech}
              year={node.frontmatter.year}
              scrollY={scrollY}
              posTop={posTopTop}
              posTopBottom={posTopBottom}
              isOnScreen={isVisible && documentElement.clientHeight >= -scrollY}
            />
          )}
        </TrackedDiv>
      ))}
    </Container>
  </Box>
);

export default RecentProjects;
