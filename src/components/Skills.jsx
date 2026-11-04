
import styles from '../styles/Skills.module.css';
import Card from './Card';
import SectionHeader from './SectionHeader';

function Skills({ eyebrow, title, groups }) {
    return (
        <section id="skills" className={styles.skills}>

            <SectionHeader eyebrow={eyebrow} title={title} />

            <div className={styles.grid}>
                {groups.map((group) => (
                    <Card key={group.id}>

                        <div className={styles.groupHeader}>
                            <span className={styles.icon}>{group.icon}</span>
                            <h3>{group.title}</h3>
                        </div>

                        <div className={styles.badges}>
                            {group.skills.map((skill) => (
                                <span key={skill.id} className={styles.badge}>
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                    </Card>
                ))}
            </div>

        </section>
    );
}

export default Skills;
