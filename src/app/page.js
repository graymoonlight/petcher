import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home.module.scss';

const Home = () => {
  return (
    <main className={styles.homeMain}>
      <div className={styles.UpperContainer}>
        <div className={styles.phoneContainer}>
          <Image
            src="/phone.png"
            alt="Изображение телефона с приложением Petcher"
            width={488}
            height={1126}
            className={styles.phoneImage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.logoText}>Petcher</h1>
          <p className={styles.description}>(pet-проект + кетчер)</p>
          <p className={styles.subtitle}>
            Petcher — это платформа, которая позволяет находить pet-проекты,
            подходящие пользователю.
          </p>
          <Link href="/auth/register" className={styles.registerLink}>
            Зарегистрироваться
          </Link>
        </div>
      
        <div className={styles.arrowContainer}>
          <Link href="#footer">
            <Image
              src="/arrow.svg"
              alt="Прокрутить вниз"
              width={40}
              height={40}
              className={styles.arrowIcon}
            />
          </Link>
        </div>
      </div>
      <div className={styles.middle1container}>
        <h1>Кому это нужно?</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Компаниям,</h2>
            <p>которые ищут талантливых разработчиков для своих проектов.</p>
          </div>
          <div className={styles.card}>
            <h2>Людям,</h2>
            <p>тем, кто хочет участвовать в проекте в качестве волонтёра.</p>
          </div>
          <div className={styles.card}>
            <h2>Инвесторам,</h2>
            <p>Retcher может стать источником интересных pet-проектов для инвестирования.</p>
          </div>
          <div className={styles.card}>
            <h2>Студентам,</h2>
            <p>Для них площадка может стать возможностью найти интересные проекты для практики.</p>
          </div>
        </div>
        <div className={styles.middle2container}>
          <h2>Наши преимущества</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <Image src="/figures.svg" alt="Индивидуальный подход" width={60} height={60} />
              <p>Индивидуальный подход</p>
            </div>
            <div className={styles.advantageCard}>
              <Image src="/option.svg" alt="Большой функционал" width={60} height={60} />
              <p>Большой функционал</p>
            </div>
            <div className={styles.advantageCard}>
              <Image src="/graphic.svg" alt="Оптимизированная работа" width={60} height={60} />
              <p>Оптимизированная работа</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomcontainer}>
          <h2>Как начать?</h2>
          <div className={styles.howToStartImage}>
            <p>Для начала, вам необходимо зарегистрироваться</p>
            <Image
              src="/desktop.png"
              alt="Регистрационная форма Petcher"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
