import React, { memo } from 'react';
import Switch from './Switch';
import Pdf from './Pdf';
import s from './Panel.module.scss';

const Panel = () => (
  <div className={s.panel}>
    <Pdf />
    <Switch />
  </div>
);

export default memo(Panel);
