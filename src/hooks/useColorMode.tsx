import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  // set the default color mode to whatever is being used by the browser light/dark mode
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;

// import { useEffect, useState } from 'react';
// import useLocalStorage from './useLocalStorage';

// const useColorMode = () => {
//   const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

//   useEffect(() => {
//     const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const defaultColorMode = prefersDarkMode ? 'dark' : 'light';

//     if (colorMode === 'light' && defaultColorMode === 'dark') {
//       setColorMode('dark');
//     }

//     const className = 'dark';
//     const bodyClass = window.document.body.classList;

//     colorMode === 'dark'
//       ? bodyClass.add(className)
//       : bodyClass.remove(className);
//   }, [colorMode]);

//   return [colorMode, setColorMode];
// };

// export default useColorMode;
