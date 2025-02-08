import Link from 'next/link';
import {
  iconAlt, cvExtension, cvDocument, cvTitle
} from './data';
import s from './Pdf.module.scss';
import Image from 'next/image';

const Pdf = () => (
  <a
    href='./Andrey_Fedorovich_-_Software_Developer.pdf'
    download='Andrey_Fedorovich_-_Software_Developer.pdf'
    className={s.wrap}
  >
    <Image
      width={16}
      height={16}
      src="./download.svg"
      alt={iconAlt}
    />
    <span className={s.hint}>{cvExtension}</span>
  </a>
);

export default Pdf;
