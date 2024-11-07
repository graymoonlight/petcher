"use client"

import { useState } from 'react';
import styles from "@/styles/create.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Create() {
    const [step, setStep] = useState(1);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const router = useRouter();

    const specialists = [
        { category: 'Бизнес-аналитик', skills: ['SPIN', 'Trello', 'SQL', 'Miro', 'Интервью', 'Google Sheets'] },
        { category: 'Web-дизайнер', skills: ['Figma', 'Photoshop', 'UI/UX', 'Анимация', 'Поддержка'] },
    ];
    const additionalSpecialists = ['Frontend-разработчик', 'Python-разработчик', 'Java-разработчик', '1C-разработчик'];

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handlePrev = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

    const redirectStep = () => {
      router.push('/project');
    }

    return (
        <div className={styles.createContainer}>
            {step === 1 && (
                <div className={styles.stepContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Создание проекта</h2>
                        <span className={styles.stepIndicator}>1/4</span>
                    </div>
                    <div className={styles.inputLabel}> 
                      <label className={styles.label}>Введите название проекта</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="petcher"
                      />
                      <button className={styles.button} onClick={handleNext}>Далее</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className={styles.stepContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Добавление специалистов</h2>
                        <span className={styles.stepIndicator}>2/4</span>
                    </div>
                    <div className={styles.specialistsContainer}>
                        <div className={styles.categoryList}>
                            {specialists.map((specialist, index) => (
                                <div key={index} className={styles.categoryCard}>
                                    <h3 className={styles.categoryTitle}>{specialist.category}</h3>
                                    <div className={styles.skillsList}>
                                        {specialist.skills.map((skill, i) => (
                                            <span key={i} className={styles.skill}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.additionalList}>
                            {additionalSpecialists.map((spec, index) => (
                                <span key={index} className={styles.additionalSpecialist}>{spec}</span>
                            ))}
                        </div>
                    </div>
                    <button className={styles.button} onClick={handleNext}>Далее</button>
                    <button className={styles.button} onClick={handlePrev}>Назад</button>
                </div>
            )}
            {step === 3 && (
                <div className={styles.stepContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Напишите информацию о проекте</h2>
                        <span className={styles.stepIndicator}>3/4</span>
                    </div>
                    <div className={styles.inputLabel}> 
                      <label className={styles.label1}>Описание</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Petcher - платформа, которая позволит..."
                      />
                      <button className={styles.button} onClick={handleNext}>Далее</button>
                      <button className={styles.button} onClick={handlePrev}>Назад</button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div className={styles.stepContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Последнее действие</h2>
                        <span className={styles.stepIndicator}>4/4</span>
                    </div>
                    <div className={styles.inputLabel}> 
                      <label className={styles.label2}>Добавьте комментарий (необязательно)</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="На данный момент уже готово..."
                      />
                      <button className={styles.button} onClick={handleNext}>Далее</button>
                      <button className={styles.button} onClick={handlePrev}>Назад</button>
                    </div>
                </div>
            )}
            {step === 5 && (
                <div className={styles.stepContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Проект добавлен<br/>успешно!<br/>Поздравляем</h2>
                    </div>
                    <div className={styles.checkContainer}>
                      <Image 
                            src="/check.png" 
                            alt="check" 
                            className={styles.check}
                            width={128}
                            height={128}
                      />
                      <p>Проект был добавлен</p>
                      <button className={styles.button} onClick={redirectStep}>Посмотреть</button>
                      <button className={styles.button} onClick={redirectStep}>Перейти</button>
                    </div>
                </div>
            )}
        </div>
    );
}
