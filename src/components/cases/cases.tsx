'use client';
import {TitleSection} from '@/src/common/title/title';
import {
  navCases,
  shopifySlider,
  TypeItemMenu,
  wordpressSlider,
} from '@/src/services/cases';
import {useState} from 'react';
import styles from './cases.module.scss';
import {SliderCases} from './slider';

const Cases = () => {
  const [activeItem, setActiveItem] = useState<TypeItemMenu>(navCases[0]);

  const caseBody = (category: string) => {
    switch (category.toLowerCase()) {
      case 'wordpress':
        return <SliderCases items={[...wordpressSlider]} />;
      case 'shopify':
        return <SliderCases items={[...shopifySlider]} />;
      case 'design':
        return <p>Design Cases</p>;
      case 'webbuilder':
        return <p>Webbuilder Cases</p>;
      case 'programmes':
        return <p>Programmes Cases</p>;
      case 'crm':
        return <SliderCases items={[...wordpressSlider]} />;
    }
  };

  return (
    <section className={styles.cases}>
      <div className={styles.cases_title}>
        <TitleSection title="Our Cases" />
      </div>
      <nav className={styles.menu}>
        <ul className={styles.menu_wrapper}>
          {navCases.map((itemMenu: TypeItemMenu) => (
            <li
              key={itemMenu.id}
              className={`${styles.menu_item} ${
                activeItem.id === itemMenu.id ? styles.active : ''
              }`}
              onClick={() =>
                setActiveItem((prevState: TypeItemMenu) => ({
                  ...prevState,
                  ...itemMenu,
                }))
              }>
              {itemMenu.name}
            </li>
          ))}
        </ul>
      </nav>
      <div>{caseBody(activeItem.name)}</div>
    </section>
  );
};

export default Cases;
