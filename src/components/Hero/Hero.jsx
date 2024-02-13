import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Eddie</h1>
        <p className={styles.description}>
          I&apos;m a full-stack developer. Reach out if you&apos;d like to learn
          more!
        </p>
        <a
          href='mailto:eddie@edwardscott.dev'
          rel='noopener noreferrer'
          className={styles.glowingBtn}
        >
          <span className={styles.glowingTxt}>
            C<span className={styles.faultyLetter}>O</span>NT
            <span className={styles.faultyLetter}>A</span>CT
          </span>
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage2.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
