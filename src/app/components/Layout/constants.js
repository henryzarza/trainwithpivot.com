import { createContext, useContext, useRef, useEffect } from 'react';

export const AppContext = createContext();

export const useTransparentHeight = fixedValue => {
  const { setTransparentHeightLimit } = useContext(AppContext);
  const heroRef = useRef(null);

  useEffect(() => {
    setTransparentHeightLimit(heroRef.current?.clientHeight || fixedValue);
  }, [fixedValue, setTransparentHeightLimit, heroRef]);

  return heroRef;
};
