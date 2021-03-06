import { useLayoutEffect, useState } from 'react';

const useMediaQuery = mediaQuery => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(mediaQuery).matches,
  );
  useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const listener = event => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
