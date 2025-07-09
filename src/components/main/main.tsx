import styles from './main.module.scss';
import Link from 'next/link';
import {Icon} from '@/src/common/icon/icon';

const Main = () => {
  return (
    <article className={styles.main_wrapper}>
      <section className={styles.name_company__wrapper}>
        <div className={styles.name_company}>
          <span className={styles.word_it}>it</span>
          <span className={styles.word_soft}>soft</span>
          <span className={styles.word_vision}>vision</span>
        </div>
      </section>
      <section className={styles.bottom_main}>
        <div className={styles.social_media}>
          <Link href="#">
            <Icon
              id={'linkedin'}
              pathIcon={'/linkedin.svg'}
              className={styles.social_media__icon}
            />
          </Link>
          <Link href="#">
            <Icon
              id="facebook"
              pathIcon="/facebook.svg"
              className={styles.social_media__icon}
            />
          </Link>
          <Link href="https://www.instagram.com/itsoftvision/">
            <Icon
              id="instagram"
              pathIcon="/instagram.svg"
              className={styles.social_media__icon}
            />
          </Link>
        </div>
        <div className={styles.button_request__wrapper}>
          <div className={styles.button_request}>
            <Link href="#">leave a request</Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Main;
