// src/components/Navbar.jsx
import styles from "../styles/Navbar.module.css";

function Navbar({ name, links }) {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.logo}>{name}</a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;