import styles from '@/styles/projects.module.scss';
import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            id: 1,
            author: 'Кузнецов Константин',
            title: 'Spons - создать свой ИИ.',
            categories: ['Web-дизайнер', 'Frontend-разработчик', 'Backend-разработчик', 'DevOps'],
            tools: ['Figma', 'Photoshop', 'UI-Kit', 'Анимация', 'Гайдлайны'],
        },
        {
            id: 2,
            author: 'Соларев Руслан',
            title: 'Petcher',
            categories: ['Web-дизайнер', 'Frontend-разработчик', 'Backend-разработчик', 'DevOps'],
            tools: [],
        },
        {
            id: 3,
            author: 'Плотников Кирилл',
            title: 'Filmora',
            categories: ['Web-дизайнер', 'Frontend-разработчик', 'Backend-разработчик', 'DevOps'],
            tools: ['HTML', 'CSS', 'JavaScript', 'DOM', 'TypeScript', 'React', 'Flexbox', 'Git'],
        },
    ];

    return (
        <div className={styles.projectsPage}>
            <h1 className={styles.title}>Проекты</h1>
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <p className={styles.author}>{project.author}</p>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <div className={styles.categories}>
                            {project.categories.map((category, index) => (
                                <span key={index} className={styles.category}>{category}</span>
                            ))}
                        </div>
                        {project.tools.length > 0 && (
                            <div className={styles.toolsSection}>
                                <p className={styles.toolsTitle}>Инструменты</p>
                                <div className={styles.tools}>
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className={styles.tool}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button className={styles.likeButton}>
                          <Image src="/heart-icon.svg" width={24} height={21} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
