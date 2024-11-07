import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/modules/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image src="/logoPetcher2.png" alt="Логотип Petcher" width={256} height={74} />
      </div>
      <nav className={styles.nav}>
        <Link href="/about">О нас</Link>
        <Link href="/">Главная</Link>
        <Link href="/contact">Связаться с нами</Link>
      </nav>
    </footer>
  );
};

export default Footer;
