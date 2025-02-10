import React, { memo } from 'react';
import Switch from './Switch';
import DocLoader from './DocLoader';
import s from './Panel.module.scss';

const Panel = () => (
  <div className={s.panel}>
    <DocLoader
      href="./Andrey_Fedorovich_-_Software_Developer.pdf"
      download="Andrey_Fedorovich_-_Software_Developer.pdf"
      alt="download pdf"
      extension=".PDF"
    />
    <DocLoader
      href="./Andrey_Fedorovich_-_Software_Developer.docx"
      download="Andrey_Fedorovich_-_Software_Developer.docx"
      alt="download docx"
      extension=".DOCX"
    />
    <Switch />
  </div>
);

export default memo(Panel);
