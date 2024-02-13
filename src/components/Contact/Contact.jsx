import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const openLinkedInProfile = () => {
    window.open(
      'https://www.linkedin.com/in/EddiScott',
      '_blank',
      'noopener,noreferrer',
    );
  };
  const openGithubProfile = () => {
    window.open(
      'https://github.com/PixllCreations',
      '_blank',
      'noopener,noreferrer',
    );
  };
  const openMailTo = () => {
    (window.location.href = 'mailto:eddie@edwardscott.dev'),
      'noopener,noreferrer';
  };
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      setIsOverFooter(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOverFooter, setIsOverFooter] = useState(false);

  return (
    <footer id='contact' className={styles.footerContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <div className={styles.socialLinks}>
          <div
            className={`${styles.socialBtn} ${styles.flexCenter}`}
            id='email'
            onClick={openMailTo}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 128 96'
              fill='#1da1f2'
            >
              <g data-name='Layer 2'>
                <path d='M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z'></path>
              </g>
            </svg>
            <span>Eddie@ES.dev</span>
          </div>
          <div
            className={`${styles.socialBtn} ${styles.flexCenter}`}
            id='linkedin'
            onClick={openLinkedInProfile}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#0e76a8'
            >
              <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
            </svg>
            <span className={styles.linkedinSpan}>in/EddiScott</span>
          </div>
          <div
            className={`${styles.socialBtn} ${styles.flexCenter}`}
            id='github'
            onClick={openGithubProfile}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#333'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            <span>PixllCreations</span>
          </div>
        </div>
        <div
          className={`${styles.backToTopBtn} ${
            isOverFooter ? styles.overFooter : ''
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            version='1.2'
            id='up-arrow'
          >
            <path d='M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3.002 3.002 0 0 1 0-4.242L12 1.758l7.121 7.121a3.002 3.002 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3zM11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L12 4.586l-5.707 5.707a.999.999 0 0 0 0 1.414 1.023 1.023 0 0 0 1.414 0L11 8.414z'></path>
          </svg>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {getCurrentYear()} Edward Scott. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
