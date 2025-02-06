import React, { memo } from 'react';
import { title } from './data';
import { stack } from './constants';
import s from './Stack.module.scss';

const Stack = () => (
  <>
    <h2 className={s.title}>{title}</h2>
    <div className={s.stack}>
      {stack.map(({ value, image }) => (
        <div className={s.block} key={value}>
          <img loading="lazy" src={image} alt={value} />
          <span>{value}</span>
        </div>
      ))}
    </div>
  </>
);

export default memo(Stack);
