import styles from './faq.module.scss';
import {FC} from 'react';
import {TypeQuestionProps} from '@/src/services/question';

export const Question: FC<TypeQuestionProps> = props => {
  const {title, text, isOpen, openDescription} = props;
  return (
    <li className={styles.faq_question}>
      <div className={styles.faq_question__title} onClick={openDescription}>
        <h4>{title}</h4>
        <span className={isOpen ? styles.active : ''}>+</span>
      </div>
      <p
        className={`${styles.faq_question__text} ${
          isOpen ? styles.active : ''
        }`}>
        {text}
      </p>
    </li>
  );
};
