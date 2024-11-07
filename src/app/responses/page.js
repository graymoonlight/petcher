"use client"

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/responces.module.scss';

export default function Responces() {
    const [role, setRole] = useState('designer');

    const responses = {
        designer: [
            { id: 1, status: 'Принято', company: 'Skifer', position: 'Frontend-разработчик' },
            { id: 2, status: 'Принято', company: 'Skifer', position: 'Web-дизайнер' },
            { id: 3, status: 'На рассмотрении', company: 'Skifer', position: 'Бизнес-аналитик' },
            { id: 4, status: 'Отказ', company: 'Skifer', position: 'Frontend-разработчик' },
            { id: 5, status: 'Отказ', company: 'Petcher', position: 'Frontend-разработчик' },
        ],
        employer: [
            { id: 6, status: 'Принято', company: 'Skifer', position: 'Frontend-разработчик' },
            { id: 7, status: 'На рассмотрении', company: 'Skifer', position: 'Web-дизайнер' },
            { id: 8, status: 'Отказ', company: 'Petcher', position: 'Backend-разработчик' },
        ],
    };

    return (
        <div className={styles.responcesContainer}>
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

            <h2 className={styles.header}>Отклики</h2>

            <div className={styles.responseList}>
                {responses[role].map((response) => (
                    <Link key={response.id} href={`/responses/${response.id}`}>
                        <div className={styles.responseCard}>
                            <div className={styles.responseContent}>
                                <p className={styles.status}>{response.status}</p>
                                <p className={styles.company}>{response.company}</p>
                                <p className={styles.position}>{response.position}</p>
                            </div>
                            <Image 
                                src="/arrow_right.svg" 
                                alt="arrow right" 
                                width={20} 
                                height={20} 
                                className={styles.arrow} 
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

