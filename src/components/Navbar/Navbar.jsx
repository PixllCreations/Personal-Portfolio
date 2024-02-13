import React, { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href='#about' className={`${styles.hoverable} ${styles.bounce}`}>
              About
            </a>
          </li>
          <li>
            <a
              href='#experience'
              className={`${styles.hoverable} ${styles.bounce}`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={`${styles.hoverable} ${styles.bounce}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`${styles.hoverable} ${styles.bounce}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
