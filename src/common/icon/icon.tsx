import {TypeIcon} from '@/src/services/types';
import {FC} from 'react';

export const Icon: FC<TypeIcon> = ({id, pathIcon, className}) => {
  return (
    <svg className={`${className} icon`}>
      <use href={`${pathIcon}#${id}`} />
    </svg>
  );
};
