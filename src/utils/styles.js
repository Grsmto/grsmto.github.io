export const underlinedDouble = {
  position: "relative",

  "&:before, &:after": {
    position: "absolute",
    content: '""',
    width: "100%",
    top: "calc(100% - 0.15em)",
    left: 0,
    borderBottom: "1px solid white",
  },

  "&:after": {
    marginTop: "2px",
  },
};
