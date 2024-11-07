"use client"

import styles from '@/styles/accept.module.scss';
import { useRouter } from 'next/navigation';

const Accept = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/profile');
  };

  const handleContinue = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Почему вы хотите удалить аккаунт?</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Пожалуйста, укажите причину" />
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles['btn--continue']}`} onClick={handleContinue}>
          Продолжить
        </button>
        <button className={`${styles.btn} ${styles['btn--cancel']}`} onClick={handleCancel}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default Accept;
