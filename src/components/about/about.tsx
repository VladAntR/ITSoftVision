import {TitleSection} from '@/src/common/title/title';
import styles from './about.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="#about-us">
      <TitleSection title={'About Us'} />
      <div className={styles.about_text__wrapper}>
        <p className={`${styles.about_paragraph__1} text`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className={`${styles.about_paragraph__2} text`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  );
};

export default About;
