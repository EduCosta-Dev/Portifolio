import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function handleSystemChange(event) {
      if (!localStorage.getItem('theme')) {
        const nextTheme = event.matches ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', event.matches);
        setTheme(nextTheme);
      }
    }

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  }

  return { theme, toggleTheme };
}