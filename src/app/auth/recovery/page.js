'use client';

import { useState } from 'react';
import styles from '@/styles/recovery.module.scss';
import { useRouter } from 'next/navigation';

export default function Recovery() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const redirectStep = () => {
    router.push('/project/create');
  }

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>
              Введите свой логин / почту
              <input type="text" placeholder="custom" />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>Введите полученный код
              <input type="code" placeholder="12345" />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>Пароль
              <input type="password" placeholder="password" />
              <input type="password" placeholder="password" />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1>Восстановление прошло успешно</h1>
          <p>Поздравляем!</p>
          <form>
            <button type="button" onClick={redirectStep}>Продолжить работу</button>
          </form>
        </div>
      )}
    </div>
  );
}

