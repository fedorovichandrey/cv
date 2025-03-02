import React, { memo } from 'react';
import s from './Contacts.module.scss';

const Contacts = () => {
  const phone = '+48 786 699 273';
  const mail = 'meta.ml@proton.me';

  return (
    <div className={s.wrap}>
      <a
        className={s.phone}
        href={`tel:${phone}`}
        aria-label={`Phone number: ${phone}`}
      >
        {phone}
      </a>
      <span className={s.separator} />
      <a href={`mailto:${mail}`} className={s.mail}>
        {mail}
      </a>
    </div>
  )
}

export default memo(Contacts);
