import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.navList}>
        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/evenement">Evenement</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.ctaLink}>
            Discutons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
