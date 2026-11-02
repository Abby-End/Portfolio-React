// src/components/Hero.jsx
import styles from "../styles/Hero.module.css";

function Hero({ name, eyebrow, headline, intro, primaryCta, secondaryCta }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.avatar}>{name}</div>

      <div className={styles.card}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.actions}>
          <a href={primaryCta.href} className={styles.primary}>
            {primaryCta.label}
          </a>
          <a href={secondaryCta.href} className={styles.secondary}>
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;