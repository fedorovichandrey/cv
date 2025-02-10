import { useContext } from 'react';
import { GlobalContext } from '../../../../context';
import Image from 'next/image';
import styles from './switch.module.scss';


const Switcher = () => {
  const options = ['light', 'dark'];
  const { setMode, mode } = useContext(GlobalContext);

  const onSwitch = event => {
    event.target.blur();

    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const sliderClass = mode === 'light' ? styles.sliderLight : styles.sliderDark;

  return (
    <button
      onClick={onSwitch}
      className={styles.root}
    >
      <span className={`${styles.slider} ${sliderClass}`} />
      <span className={styles.options}>
        {options.map((title, idx) => (
          <span
            className={styles.option}
            key={title}
          >
            <Image
              width={24}
              height={24}
              src={idx === 0 ? './IconSun.svg' : './IconMoon.svg'}
              alt='Theme Switcher'
            />
          </span>
        ))}
      </span>
    </button>
  );
};

export default Switcher;
