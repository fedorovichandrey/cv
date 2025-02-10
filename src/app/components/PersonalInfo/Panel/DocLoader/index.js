import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

const DocLoader = ({
  href,
  download,
  alt,
  extension
}) => (
  <a
    href={href}
    download={download}
    className={styles.wrap}
  >
    <Image
      width={16}
      height={16}
      src="./download.svg"
      alt={alt}
    />
    <span className={styles.hint}>{extension}</span>
  </a>
);

export default DocLoader;
