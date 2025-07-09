import {TitleSection} from '@/src/common/title/title';
import {services, TypeService} from '@/src/services/services';
import styles from './services.module.scss';
import {Icon} from '@/src/common/icon/icon';

const Services = () => {
  return (
    <section className={styles.services_wrapper}>
      <div className={styles.services_title_wrapper}>
        <TitleSection title="Services" />
      </div>
      <p className={`${styles.services_text} text`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul className={styles.services}>
        {services.map((service: TypeService) => (
          <li key={service.id} className={styles.card}>
            <Icon
              id={service.icon.id}
              pathIcon={service.icon.pathIcon}
              className={styles.card_icon}
            />
            <h2 className={styles.card_title}>{service.name}</h2>
            <p className={styles.card_description}>{service.description}</p>
            <div className={styles.card_price}>
              Price: <span>{service.price} $</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
