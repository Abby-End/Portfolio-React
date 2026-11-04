import styles from '../styles/SectionHeader.module.css';

function SectionHeader({ eyebrow, title }) {
    return (
        <header className={styles.header}>
            <p className={styles.eyebrow}>✦ {eyebrow} ✦</p>
            <h2 className={styles.title}>{title}</h2>
        </header>
    );
}

export default SectionHeader;