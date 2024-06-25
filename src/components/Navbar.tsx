import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import styles from './Navbar.module.css';
import Logo from './Logo';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(navbarRef.current, { y: -100 }, { y: 0, duration: 1 });
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, { x: 0, duration: 0.5 });
      } else {
        gsap.to(menuRef.current, { x: '0', duration: 0.5 });
      }
    }
  }, [isOpen]);

  return (
    <nav
      className={classNames(styles.navbar, {
        [styles.scrolled]: scrollPosition > 0,
      })}
      id="navbar"
      ref={navbarRef}
    >
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          <Icon icon={isOpen ? x : menu} size={24} />
        </div>
        <ul
          className={classNames(styles.navMenu, { [styles.active]: isOpen })}
          ref={menuRef}
        >
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(styles.navLinks, { [styles.active]: isActive })
              }
            >
              Accueil
            </NavLink>
          </li>
  
          <li className={styles.navItem}>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                classNames(styles.navLinks, { [styles.active]: isActive })
              }
            >
              Événements
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                classNames(styles.navLinks, { [styles.active]: isActive })
              }
            >
              Services
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                classNames(styles.navLinks,styles.buttonCTA, { [styles.active]: isActive })
              }
            >
              Discutons
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;