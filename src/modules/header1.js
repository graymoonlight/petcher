import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/modules/header.module.scss';

const HeaderGuest = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logoPetcher.png" alt="Логотип Petcher" width={91} height={27} />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/projects">Проекты</Link>
        <Link href="/about">О нас</Link>
      </nav>
      <Link href="/auth/register">
        <button className={styles.registerButton}>Зарегистрироваться</button>
      </Link>
    </header>
  );
};

export default HeaderGuest;

