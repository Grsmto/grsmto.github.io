import React from 'react';

import styles from './SocialButtons.module.css';

import {
  IconTwitter,
  IconGithub,
  IconCodepen,
  IconLinkedIn
} from './Icons';

const SocialButtons = () =>
  <div className={styles.socialButtons}>
    <a
      className={styles.socialButton}
      href="https://github.com/Grsmto/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub />
    </a>
    <a
      className={styles.socialButton}
      href="https://codepen.io/Grsmto/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconCodepen />
    </a>
    <a
      className={styles.socialButton}
      href="https://twitter.com/Grsmto"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconTwitter />
    </a>
    <a
      className={styles.socialButton}
      href="https://www.linkedin.com/in/adriendenat/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedIn />
    </a>
  </div>;

export default SocialButtons;
