import {TypeTitle} from '@/src/services/types';
import {FC} from 'react';
import styles from './title.module.scss';

export const TitleSection: FC<TypeTitle> = ({title}) => {
  return (
    <div className={styles.title_section__wrapper}>
      <span className={styles.divider_left}></span>
      <h1 className={styles.title_section__title}>{title}</h1>
      <span className={styles.divider_right}></span>
    </div>
  );
};
