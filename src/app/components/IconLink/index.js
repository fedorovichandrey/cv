import Link from 'next/link';
import Image from 'next/image';
import s from './IconLink.module.scss';

const IconLink = ({
  url,
  image,
  alt,
  width,
  height,
}) => (
  <Link
    className={s.icon}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    <Image
      width={width}
      height={height}
      src={`./${image}`}
      alt={alt}
    />
  </Link>
);

export default IconLink;
