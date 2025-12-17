import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, PaletteIcon } from '../../icons';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const themes = ['light', 'dark', 'precision-audit'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];

        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === 'light' ? <SunIcon /> : theme === 'dark' ? <MoonIcon /> : <PaletteIcon />}
        </button>
    );
};
