import { use } from 'react';

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
        <div>
            <h1>{response.company}</h1>
            <p>{response.author}</p>
            <p>{response.description}</p>
            <p><strong>Нам нужны:</strong> {response.activePositions}</p>
            <p><strong>Комментарий</strong>{response.comment}</p>
            <p>Вы были приняты. Контакты для связи: {response.contact}</p>
        </div>
    );
}