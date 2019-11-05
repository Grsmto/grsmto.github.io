import React, { useRef } from "react";
import { Box, Text, Heading } from "@theme-ui/components";

const Intro = ({ onEnd, isVisible }) => {
  const ref = useRef();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "intro",
        backgroundColor: "black",
        overflow: "hidden",

        ...(!isVisible && {
          transition: "all 0.5s",
          opacity: 0,
          visibility: "hidden",
        }),
      }}
    >
      <Heading
        sx={({ easings, animations }) => ({
          position: "relative",
          fontSize: ["2rem", "5rem"],
          animation: `${animations.disappearRight} 0.5s 3.4s ${easings.inOutQuint} forwards`,
          willChange: "transform opacity",
          whiteSpace: "nowrap",
          textAlign: "center",
        })}
        variant="text.headings.h1"
        onAnimationEnd={e => {
          if (e.target === ref.current) {
            onEnd();
          }
        }}
        ref={ref}
      >
        <Text
          as="span"
          sx={({ easings, animations }) => ({
            display: "inline-block",
            animation: `${animations.appearLeft} 2s 1s ${easings.inOutQuint} both`,
          })}
        >
          Adrien
        </Text>{" "}
        <Text
          as="span"
          sx={({ easings, animations }) => ({
            display: "inline-block",
            animation: `${animations.appearRight} 2s 1.1s ${easings.inOutQuint} both`,
          })}
        >
          Denat
        </Text>
        <Text
          sx={({ animations }) => ({
            fontSize: ["1.5rem", "4.2rem"],
            fontFamily: "body",
            fontWeight: 500,
            fontStyle: "italic",
            color: "red",
            mt: "-5px",
            animation: `${animations.fadeIn} 300ms 1.7s both`,
          })}
        >
          developer
        </Text>
      </Heading>
    </Box>
  );
};

export default Intro;
