import React from 'react';
import iconMoon from './IconMoon.svg';
import iconSun from './IconSun.svg';

export const options = [{
  title: 'light',
  element: <img src={iconSun} alt="light theme switcher" />,
}, {
  title: 'dark',
  element: <img src={iconMoon} alt="dark theme switcher" />,
}];
