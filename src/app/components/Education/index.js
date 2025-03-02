import React, { memo } from 'react';
import { title, list } from './data';
import s from './Education.module.scss';

const Education = () => (
  <div className={s.wrap}>
    <h2 className={s.title}>{title}</h2>
    <div>{list.map(({
      title: listTitle, description, field, start, end,
    }) => (
      <div className={s.text} key={listTitle}>
        <p>{listTitle}</p>
        <p>{description}</p>
        <p>{field} <span className={s.period}>({start} - {end})</span></p>
      </div>
    ))}
    </div>
  </div>
);

export default memo(Education);
