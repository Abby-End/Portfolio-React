
import Card from './Card';
import SectionHeader from './SectionHeader';
import styles from '../styles/Projects.module.css';

function Projects({ eyebrow, title, projects }) {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>

                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                />

                <div className={styles.projectList}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>

                            <Card>
                                {/* Project Image */}
                                <div className={styles.projectImage}>
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Project Information */}
                                <div className={styles.projectInfo}>

                                    <p className={styles.projectCategory}>
                                        {project.category}
                                    </p>

                                    <h3 className={styles.projectTitle}>
                                        {project.title}
                                    </h3>

                                    <p className={styles.projectDescription}>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className={styles.projectTech}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.techTag}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className={styles.projectLinks}>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub
                                        </a>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    </div>

                                    {/* Decorative Number */}
                                    <span className={styles.projectNumber}>
                                        {project.number}
                                    </span>

                                </div>
                            </Card>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;
