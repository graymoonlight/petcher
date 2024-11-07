"use client"

import styles from '@/styles/project.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Project() {
    const [role, setRole] = useState('designer');
    const router = useRouter();

    const redirectStepFind = () => {
      router.push('/projects');
    };

    const redirectStepCreate = () => {
      router.push('/project/create');
    };

    return (
        <div className={styles.projectContainer}>
            <div className={styles.roleSwitcher}>
                <span
                    className={`${styles.role} ${role === 'designer' ? styles.active : ''}`}
                    onClick={() => setRole('designer')}
                >
                    Дизайнер
                </span>
                <span
                    className={`${styles.role} ${role === 'employer' ? styles.active : ''}`}
                    onClick={() => setRole('employer')}
                >
                    Наниматель
                </span>
            </div>

            {role === 'designer' ? (
                <div className={styles.card}>
                    <p className={styles.text}>Вы ещё не вступили в проект</p>
                    <p className={styles.subText}>У вас есть уникальная возможность сделать это прямо сейчас!</p>
                    <button className={styles.button} onClick={redirectStepFind}>Найти проект</button>
                </div>
            ) : (
                <div className={styles.card}>
                    <p className={styles.text}>Вы ещё не создали проект</p>
                    <p className={styles.subText}>Не откладывайте его реализацию, создайте проект прямо сейчас!</p>
                    <button className={styles.button} onClick={redirectStepCreate}>Создать проект</button>
                </div>
            )}
        </div>
    );
}
