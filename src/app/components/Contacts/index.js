import React, { memo } from 'react';
import { phone, mail } from './data';
import s from './Contacts.module.scss';

const Contacts = () => (
  <div className={s.wrap}>
    <a className={s.phone} href={`tel:${phone}`} aria-label={`Phone number: ${phone}`}>
      {phone}
    </a>
    <span className={s.separator} />
    <a href={`mailto:${mail}`} className={s.mail}>
      {mail}
    </a>
  </div>
);

export default memo(Contacts);
