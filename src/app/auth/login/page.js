'use client';

import { useState } from 'react';
import styles from '@/styles/login.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginUser } from '@/app/api/api';

export default function Login() {
  const router = useRouter();
  const [loginOrEmail, setLoginOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser(loginOrEmail, password);
      console.log("Вход успешен:", response);
      router.push('/profile');
    } catch (error) {
      console.error("Ошибка при входе:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Добро пожаловать в Petcher</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Логин/Почта
            <input 
              type="text" 
              placeholder="Джон До" 
              value={loginOrEmail}
              onChange={(e) => setLoginOrEmail(e.target.value)}
            />
          </label>
          <label>
            Пароль
            <input 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin}>Войти</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.loginLink}>
          <p>Еще нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link></p>
          <p>Забыли пароль? <Link href="/auth/recovery">Восстановить</Link></p>
        </div>
      </div>
    </div>
  );
}
