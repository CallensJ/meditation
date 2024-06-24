import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          <Icon icon={isOpen ? x : menu} size={24} />
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
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
              to="/about"
              className={({ isActive }): string =>
                classNames(styles.navLinks, { [styles.active]: isActive })
              }
            >
              A propos
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
