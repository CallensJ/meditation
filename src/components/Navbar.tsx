import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>MyLogo</div>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          <Icon icon={isOpen ? x : menu} size={24} />
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}><a href="#home" className={styles.navLinks}>Home</a></li>
          <li className={styles.navItem}><a href="#about" className={styles.navLinks}>About</a></li>
          <li className={styles.navItem}><a href="#services" className={styles.navLinks}>Services</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLinks}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
