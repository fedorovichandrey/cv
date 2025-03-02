import { useContext } from 'react';
import { GlobalContext } from '../../../../context';
import Image from 'next/image';
import styles from './switch.module.scss';


const Switcher = () => {
  const { setMode, mode } = useContext(GlobalContext);

  const onSwitch = event => {
    event.target.blur();

    setMode(mode === 'light' ? 'dark' : 'light');
  };



  const modeClass = mode === 'light' ? styles.light : styles.dark;

  return (
    <button
      onClick={onSwitch}
      className={`${styles.root} ${modeClass}`}
    >
      <span className={styles.slider} />
      {mode === 'light' ?
        <Image
          className={styles.icon}
          width={16}
          height={16}
          src='./IconMoon.svg'
          alt='Theme Switcher'
        /> : <Image
          className={styles.icon}
          width={16}
          height={16}
          src={'./IconSun.svg'}
          alt='Theme Switcher'
        />
      }
    </button>
  );
};

export default Switcher;
