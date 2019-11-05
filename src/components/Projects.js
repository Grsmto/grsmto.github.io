import React from "react";
import { TrackedDiv } from "react-track";
import { calculateScrollY } from "react-track/tracking-formulas";
import { Box } from "@theme-ui/components";

import Project from "./Project";

const Projects = ({ data, documentElement, topTop, topBottom, isVisible }) => (
  <Box>
    {data.map(({ node }) => (
      <Box
        as="section"
        sx={{ "&:nth-of-type(even)": { backgroundColor: "fauxBlack" } }}
        key={node.frontmatter.title}
      >
        <TrackedDiv formulas={[topTop, topBottom, calculateScrollY]}>
          {(posTopTop, posTopBottom, scrollY) => (
            <Project
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              html={node.html}
              videos={{
                mobile: node.frontmatter.videoMobile,
                desktop: node.frontmatter.videoDesktop,
              }}
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
      </Box>
    ))}
  </Box>
);

export default Projects;
