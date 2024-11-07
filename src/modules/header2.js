import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/modules/header1.module.scss';

const HeaderAuth = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logoPetcher.png" alt="Логотип Petcher" width={91} height={27} />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/project">Проект</Link>
        <Link href="/responses">Отклики</Link>
      </nav>
      <div className={styles.iconContainer}>
        <Image src="/search-icon.svg" alt="Поиск" width={24} height={24} />
        <Link href="/profile">
          <Image src="/placeholder.png" alt="Профиль" width={24} height={24} />
        </Link>
        <Link href="/project/liked">
          <Image src="/heart-icon.svg" alt="Избранное" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderAuth;

