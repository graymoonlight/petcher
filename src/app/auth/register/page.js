'use client';

import { useState } from 'react';
import styles from '@/styles/register.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerUserCode, registerUser } from '@/app/api/api';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    login: '',
    code: '',
  });

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

  const handleRegistration = async () => {
    try {
      const { code, ...registrationData } = formData;
      const data = await registerUser(registrationData);
      alert('Регистрация прошла успешно');
      console.log("Отправляемые данные для регистрации:", data);
      nextStep();
    } catch (error) {
      alert('Ошибка при регистрации');
    }
  };

  const handleRegistrationCode = async () => {
    try {
      const data = await registerUserCode(formData);
      alert('Регистрация прошла успешно');
      console.log("Отправляемые данные для регистрации:", data)
      router.push('/project/create');
    } catch (error) {
      alert('Ошибка при регистрации');
    }
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div>
          <h1>Добро пожаловать в Petcher</h1>
          <p>1/4</p>
          <form>
            <label>
              Введите своё имя
              <input
                type="text"
                placeholder="Джон До"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Введите свой логин
              <input
                type="text"
                placeholder="custom"
                value={formData.login}
                onChange={(e) => setFormData({ ...formData, login: e.target.value })}
              />
            </label>
            <button type="button" onClick={nextStep}>Далее</button>
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
              <input
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label>Пароль
              <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
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
            <img src={formData.profileImage || '/placeholder.png'} alt="Аватар" />
            <button type="button">Изменить изображение</button>
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
            <select
            >
              <option value="">Выберите специальность</option>
              <option>Frontend разработчик</option>
              <option>Backend разработчик</option>
              <option>Fullstack разработчик</option>
            </select>
            <button type="button" onClick={handleRegistration}>Далее</button>
            <button type="button" onClick={previousStep}>Назад</button>
          </form>
        </div>
      )}

      {step === 5 && (
        <div>
          <h1>Введите код</h1>
          <form>
            <label>Код
              <input
                type="email"
                placeholder="12345"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              />
            </label>
            <button type="button" onClick={handleRegistrationCode}>Далее</button>
            <button type="button" onClick={previousStep}>Назад</button>
          </form>
        </div>
      )}

      {step === 6 && (
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
