import { useState, useEffect } from 'react';
import BREAKPOINTS from '../shared/constants/breakpoints';

const useViewport = (breakpoint = BREAKPOINTS.md) => {
  const value = breakpoint.replace('px', '');

  const [isSmall, setisSmall] = useState(window.innerWidth < +value);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < +value) {
        return setisSmall(true);
      }

      if (window.innerWidth > +value) {
        return setisSmall(false);
      }

      return;
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [value]);

  return { isSmall };
};

export default useViewport;
