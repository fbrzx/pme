import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, PaletteIcon, SuccessIcon } from '../../icons';

type Theme = 'light' | 'dark' | 'precision-audit' | 'ralph';
const validThemes: Theme[] = ['light', 'dark', 'precision-audit', 'ralph'];

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme: Theme = validThemes.includes(savedTheme as Theme) ? (savedTheme as Theme) : systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const currentIndex = validThemes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % validThemes.length;
        const newTheme = validThemes[nextIndex];

        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const themeIcons: Record<Theme, JSX.Element> = {
        light: <SunIcon />,
        dark: <MoonIcon />,
        'precision-audit': <PaletteIcon />,
        ralph: <SuccessIcon />,
    };

    return (
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            { themeIcons[theme] }
        </button>
    );
};
