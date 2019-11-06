exports.shouldUpdateScroll = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 600);

  return false;
};
