"use client"

import useBodyClass from './hooks/useBodyClass';
import useGlobalContext from './hooks/useGlobalContext';
import { GlobalContext } from './context';
import Stack from './components/Stack';
import About from './components/About';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import './assets/styles/global.scss';
import s from './App.module.scss';

const App = () => {
  const state = useGlobalContext();
  const { mode } = state;
  useBodyClass(mode);

  return (
    <GlobalContext.Provider value={state}>
      <div className={s.root} >
        <div className={s.wrap}>
          <PersonalInfo />
          <Contacts />
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Education />
        </div>
      </div>
    </GlobalContext.Provider >

  );
};

export default App;
