import styles from '../styles/About.module.css';
import Card from './Card';

function About({
    name,
    eyebrow,
    title,
    photo,
    photoAlt,
    plumbob,
    role,
    bio,
    hobbiesTitle,
    hobbies,
    timeline,
}) {
    return (
        <section id="about" className={styles.about}>

            {/* the header */}
            <header className={styles.header}>
                <p className={styles.eyebrow}>✦ {eyebrow} ✦</p>
                <h2 className={styles.title}>{title}</h2>
            </header>

            <div className={styles.layout}>

                {/* left: the profile card */}
                <Card>
                    <div className={styles.profile}>
                        <div className={styles.photoWrap}>
                            <img className={styles.plumbob} src={plumbob} alt="" />
                            <img className={styles.photo} src={photo} alt={photoAlt} />
                        </div>

                        <div className={styles.info}>
                            <h3>{name}</h3>
                            <p className={styles.role}>{role}</p>
                            <p className={styles.bio}>{bio}</p>
                        </div>
                    </div>
                </Card>

                {/* right: hobbies + timeline */}
                <div className={styles.right}>
                    <Card>
                        <p className={styles.hobbiesTitle}>{hobbiesTitle}</p>
                        <ul className={styles.hobbies}>
                            {hobbies.map((hobby) => (
                                <li key={hobby.id}>
                                    <span className={styles.hobbyIcon}>{hobby.icon}</span>
                                    {hobby.label}
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <ol className={styles.timeline}>
                        {timeline.map((entry) => (
                            <li key={entry.id} className={styles.entry}>
                                <span className={styles.year}>{entry.year}</span>
                                <h3>{entry.title}</h3>
                                {entry.description && <p>{entry.description}</p>}
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        </section>
    );
}

export default About;