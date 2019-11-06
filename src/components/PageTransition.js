import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Box } from "@theme-ui/components";

class TransitionHandler extends React.Component {
  shouldComponentUpdate() {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

class PageTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChangingPage: false,
    };
  }

  render() {
    const { children, location } = this.props;

    return (
      <Box
        sx={{
          ".enter": {
            display: "none",
          },
        }}
      >
        <Box
          sx={({ easings, animations }) => ({
            position: "fixed",
            top: 0,
            left: "-50vw",
            width: "200vw",
            height: "100vh",
            backgroundColor: "red",
            zIndex: "transition",
            visibility: "hidden",
            ...(this.state.isChangingPage && {
              visibility: "visible",
              animation: `${animations.pageTransition} 1.2s ${easings.inOutQuint} both`,
            }),
          })}
        />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames={{
              enter: "enter",
              exit: "exit",
            }}
            timeout={{ enter: 600, exit: 1000 }}
            onEnter={() => {
              this.setState({
                isChangingPage: true,
              });
            }}
            onExited={() => {
              // Prevent a bug with TransitionGroup where
              // element is not removed from the DOM
              // if a re-render occurs here :/
              setTimeout(() => {
                this.setState({
                  isChangingPage: false,
                });
              }, 0);
            }}
          >
            <TransitionHandler location={location}>
              {children}
            </TransitionHandler>
          </CSSTransition>
        </TransitionGroup>
      </Box>
    );
  }
}

export default PageTransition;
