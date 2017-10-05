import React from 'react';
import classnames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './PageTransition.module.css';

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
      isChangingPage: false
    };
  }

  render() {
    const { children, location } = this.props;

    return (
      <div className="transition-container">
        <div
          className={classnames(styles.transition, {
            [styles.isAnimating]: this.state.isChangingPage
          })}
        />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames={{
              enter: styles.enter,
              exit: 'lol'
            }}
            timeout={{ enter: 600, exit: 1000 }}
            onEnter={() => {
              this.setState({
                isChangingPage: true
              });
            }}
            onExited={() => {
              // Prevent a bug with TransitionGroup where
              // element is not removed from the DOM
              // if a re-render occurs here :/
              setTimeout(() => {
                this.setState({
                  isChangingPage: false
                });
              }, 0);
            }}
          >
            <TransitionHandler location={location}>
              {children}
            </TransitionHandler>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default PageTransition;
