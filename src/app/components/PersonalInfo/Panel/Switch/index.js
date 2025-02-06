import React, {
  useEffect, useRef, createRef, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../../context';
import { options } from './data';
import styles from './switch.module.scss';

const Switcher = ({ size }) => {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);
  const elementsRef = useRef(options.map(() => createRef()));
  const { setMode, mode } = useContext(GlobalContext);

  const setSliderPosition = useCallback(() => {
    const idx = mode === 'light' ? 0 : 1;
    if (!(options.length > 1 && elementsRef.current?.[idx])) {
      return
    }

    const { left: parentLeft } = swiperRef.current.getBoundingClientRect();
    const { width, left } = elementsRef.current[idx].current.getBoundingClientRect();
    sliderRef.current.setAttribute('style', `width:${width}px; left:${left - parentLeft}px`);
  }, [mode]);

  useEffect(() => { setSliderPosition(); });

  const onSwitch = useCallback((event) => {
    event.target.blur();
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [setMode, mode]);

  return (
    <button
      onClick={(event) => onSwitch(event)}
      ref={swiperRef}
      className={styles[`size-${size}`]}
    >
      <span ref={sliderRef} className={styles.slider} />
      <span className={styles.options}>
        {options.map(({ title, element }, idx) => (
          <span className={styles.option} ref={elementsRef.current[idx]} key={title}>
            {element}
          </span>
        ))}
      </span>
    </button>
  );
};

Switcher.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
};

Switcher.defaultProps = {
  size: 's',
};

export default Switcher;
