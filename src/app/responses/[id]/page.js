import { use } from 'react';
import styles from "@/styles/responceData.module.scss"

async function getResponseData(id) {
    const responses = {
        1: { status: 'Принято', company: 'Skifer', position: 'Frontend-разработчик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username'},
        2: { status: 'Принято', company: 'Skifer', position: 'Web-дизайнер', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username'},
        3: { status: 'На рассмотрении', company: 'Skifer', position: 'Бизнес-аналитик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username' },
        4: { status: 'Отказ', company: 'Skifer', position: 'Frontend-разработчик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username' },
        5: { status: 'Отказ', company: 'Petcher', position: 'Frontend-разработчик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username'  },
        6: { status: 'Принято', company: 'Skifer', position: 'Frontend-разработчик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username'  },
        7: { status: 'На рассмотрении', company: 'Skifer', position: 'Web-дизайнер', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username'  },
        8: { status: 'Отказ', company: 'Petcher', position: 'Backend-разработчик', author: 'Кузнецов Константин', description: 'description1', comment: 'comment1', activePositions: ['position1', 'position2'], contact: 'username' },
    };


    return responses[id];
}

export default function ResponseDetailPage({ params }) {
    const { id } = params;
    const response = use(getResponseData(id));

    if (!response) {
        return <p>Отклик не найден</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.companyName}>{response.company}</h1>
            <p className={styles.author}>{response.author}</p>
            <p className={styles.description}>{response.description}</p>

            <div className={styles.positions}>
                <h2>Нам нужны:</h2>
                <div className={styles.tags}>
                    {response.activePositions && response.activePositions.map((position, index) => (
                        <span key={index} className={styles.positionTag}>{position}</span>
                    ))}
                </div>
            </div>

            <div className={styles.comment}>
                <h2>Комментарий</h2>
                <p>{response.comment}</p>
            </div>

            {response.status === 'Принято' && (
                <div className={styles.accepted}>
                    <p>Вы были приняты, контакты для связи:</p>
                    <span className={styles.contact}>{response.contact}</span>
                </div>
            )}
            {response.status === 'На рассмотрении' && (
                <div className={styles.accepted}>
                    <p>На рассмотрении</p>
                </div>
            )}
            {response.status === 'Отказ' && (
                <div className={styles.accepted}>
                    <p>Вам было отказано</p>
                </div>
            )}
        </div>
    );
}
