'use client';

import {TitleSection} from '@/src/common/title/title';
import {questions, TypeQuestion} from '@/src/services/question';
import {FC, useState} from 'react';
import styles from './faq.module.scss';
import {Question} from './question';

const Faq: FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(33);

  return (
    <section className={styles.faq}>
      <div className={styles.faq_title}>
        <TitleSection title="Faq" />
      </div>
      <p className={`${styles.faq_text} text`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul className={styles.faq_wrapper}>
        {questions.length
          ? questions.map((question: TypeQuestion) => (
              <Question
                key={question.id}
                {...question}
                isOpen={openFaqId === question.id}
                openDescription={() =>
                  setOpenFaqId((prevState: number | null) =>
                    prevState === question.id ? null : question.id,
                  )
                }
              />
            ))
          : null}
      </ul>
    </section>
  );
};

export default Faq;
