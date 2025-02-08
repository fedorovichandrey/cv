import { useEffect, useState } from 'react';
import { storage } from '../helpers/utils.helper';

const useGlobalContext = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    storage('mode', mode);
  }, [mode]);


  return {
    mode,
    setMode,
  };
}

export default useGlobalContext
