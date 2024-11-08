"use client"

import { useEffect, useState } from 'react';
import { getProjects } from '@/app/api/api';
import styles from '@/styles/projects.module.scss';
import Image from 'next/image';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data = await getProjects();
                setProjects(data.projects);
            } catch (err) {
                setError(err.message);
                console.error('Ошибка при загрузке проектов:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <p>Загрузка проектов...</p>;
    }

    if (error) {
        return <p>Ошибка загрузки проектов: {error}</p>;
    }

    return (
        <div className={styles.projectsPage}>
            <h1 className={styles.title}>Проекты</h1>
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <p className={styles.author}>{project.user.name}</p>
                        <h2 className={styles.projectTitle}>{project.name}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.categories}>
                            {project.categories?.map((category, index) => (
                                <span key={index} className={styles.category}>{category}</span>
                            ))}
                        </div>
                        {project.tools?.length > 0 && (
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
                            <Image src="/heart-icon.svg" width={24} height={21} alt='like'/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

