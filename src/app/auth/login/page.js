'use client';

import styles from '@/styles/login.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const redirectStep = () => {
    router.push('/profile');
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Добро пожаловать в Petcher</h1>
        <form>
          <label>
            Логин/Почта
            <input type="text" placeholder="Джон До" />
          </label>
          <label>
            Пароль
            <input type="password" placeholder="password" />
          </label>
          <button type="button" onClick={redirectStep}>Далее</button>
        </form>

        <div className={styles.loginLink}>
          <p>Еще нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link></p>
          <p>Забыли пароль? <Link href="/auth/recovery">Восстановить</Link></p>
        </div>
      </div>
    </div>
  );
}
