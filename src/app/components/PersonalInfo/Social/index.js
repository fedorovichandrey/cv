import React, { memo } from 'react';
import IconLink from '../../IconLink';
import { list } from './data';
import s from './Social.module.scss';

const Social = () => (
  <div className={s.wrap}>
    {list.map(({ title, image, url }) => (
      <IconLink
        key={title}
        image={image}
        width={24}
        height={24}
        url={url}
        alt={title}
      />
    ))}
  </div>
);

export default memo(Social);
