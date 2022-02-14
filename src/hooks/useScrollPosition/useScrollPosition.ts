import { useRef, useLayoutEffect, useCallback } from 'react';

const useScrollPosition = (): [() => void] => {
  const scrollPosition = useRef<number>(window.scrollY);
  const saveScrollPosition = useCallback<() => void>(() => {
    scrollPosition.current = window.scrollY;
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, scrollPosition.current);
  });

  return [saveScrollPosition];
};

export default useScrollPosition;
