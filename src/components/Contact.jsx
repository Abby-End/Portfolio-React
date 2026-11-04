
import Card from './Card';
import SectionHeader from './SectionHeader';
import styles from '../styles/Contact.module.css';

function Contact({ eyebrow, title, intro, details }) {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>

                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                />

                <p className={styles.intro}>{intro}</p>

                {/* Contact Information */}
                <div className={styles.details}>
                    {details.map((detail) => (
                        <div key={detail.id} className={styles.detailCard}>
                            <Card>
                                <span className={styles.detailIcon}>
                                    {detail.icon}
                                </span>

                                <div>
                                    <p className={styles.detailLabel}>
                                        {detail.label}
                                    </p>

                                    {detail.href && detail.href !== "#" ? (
                                        <a
                                            href={detail.href}
                                            className={styles.detailValue}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <p className={styles.detailValue}>
                                            {detail.value}
                                        </p>
                                    )}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Contact;
