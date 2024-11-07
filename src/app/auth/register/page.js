'use client';

import { useState } from 'react';
import styles from '@/styles/register.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const redirectStep = () => {
    router.push('/project/create');
  }

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div>
          <h1>Добро пожаловать в Petcher</h1>
          <p>1/4</p>
          <form>
            <label>
              Введите своё имя
              <input type="text" placeholder="Джон До" />
            </label>
            <label>
              Введите свой логин
              <input type="text" placeholder="custom" />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
            <button type="button" onClick={() => signIn('google')}>
              Продолжить с Google
            </button>
          </form>
          <div className={styles.loginLink}>
            <p>Уже есть аккаунт? <Link href="/auth/login">Войти</Link></p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Регистрация</h1>
          <p>2/4</p>
          <form>
            <label>Email
              <input type="email" placeholder="example@mail.com" />
            </label>
            <label>Пароль
              <input type="password" placeholder="password" />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
            <button type="button" onClick={previousStep}>Назад</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Добавьте фото профиля</h1>
          <p>3/4</p>
          <div className={styles.avatar}>
            <img src="/placeholder.png" alt="Аватар" />
            <button>Изменить изображение</button>
          </div>
          <form>
            <button type="button" onClick={nextStep}>Далее</button>
            <button type="button" onClick={previousStep}>Назад</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1>Выберите свою специальность</h1>
          <p>4/4</p>
          <form>
            <select>
              <option>Frontend разработчик</option>
              <option>Backend разработчик</option>
              <option>Fullstack разработчик</option>
            </select>
            <button type="button" className={styles.primaryButton} onClick={nextStep}>Далее</button>
            <button type="button" className={styles.secondaryButton} onClick={previousStep}>Назад</button>
          </form>
        </div>
      )}

      {step === 5 && (
        <div>
          <h1>Регистрация прошла успешно!</h1>
          <p>Поздравляем!</p>
          <form>
            <button type="button" onClick={redirectStep}>Добавить проект</button>
            <button type="submit">Перейти</button>
          </form>
        </div>
      )}
    </div>
  );
}

