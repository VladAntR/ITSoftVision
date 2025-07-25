import React, {FC} from 'react';
import 'slick-carousel/slick/slick.css';
import {SliderCasesProps, TypeSlide} from '@/src/services/cases';
import styles from './cases.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';

export const SliderCases: FC<SliderCasesProps> = data => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
  };

  const Slide: FC<TypeSlide> = props => {
    const {id, image, title, description, caseUrl} = props;

    return (
      <div key={id} className={styles.slide}>
        <Image src={image} alt={title} width={200} height={200} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={caseUrl}>View Case</a>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.items?.length
          ? data.items.map((item: TypeSlide) => (
              <Slide key={item.id} {...item} />
            ))
          : null}
      </Slider>
    </div>
  );
};
