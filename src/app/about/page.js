import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/about.module.scss';

const About = () => {
  return (
    <main className={styles.aboutMain}>
      <h1 className={styles.title}>О нас</h1>
      
      <div className={styles.imageContainer}>
        <Image
          src="/aboutimage.png"
          alt="Логотип Petcher"
          width={200}
          height={200}
          className={styles.aboutImage}
        />
      </div>

      <div className={styles.description}>
        <p>Мы - команда студентов из Владивостока, разработавшая данный сервис уже по окончании первого курса IT-Колледжа.</p>
        <p>Petcher мы начали разрабатывать в марте 2024 года и продолжаем до сих пор.</p>
        <p>Также, мы получили грант от Росмолодёжи на разработку данного проекта и успешно его реализовали.</p>
      </div>

      <Link href="/contact" className={styles.contactLink}>
        Связаться с нами
      </Link>
    </main>
  );
};

export default About;
