
import styles from '../styles/Footer.module.css';

function Footer({ name, tagline, copyright }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <h3 className={styles.name}>{name}</h3>

        <p className={styles.tagline}>{tagline}</p>

        <p className={styles.copyright}>{copyright}</p>

      </div>
    </footer>
  );
}

export default Footer;
