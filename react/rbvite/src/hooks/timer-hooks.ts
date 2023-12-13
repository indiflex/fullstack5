import { useEffect } from 'react';

export const useTimer = () => {
  const useInterval = <T extends unknown[]>(
    cb: (...args: T) => void,
    delay: number
  ) => {
    useEffect(() => {
      const timer = setInterval(cb, delay);

      return () => clearInterval(timer);
    }, []);
  };

  const useTimeout = <T extends unknown[]>(
    cb: (...args: T) => void,
    delay: number,
    ...args: T
  ) => {
    useEffect(() => {
      const timer = setTimeout(cb, delay, ...args);

      return () => clearTimeout(timer);
    }, []);
  };

  return { useInterval, useTimeout };
};
