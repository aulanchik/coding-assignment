import { FC } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const ThemeButton: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {theme === 'light' ? <FaMoon size='24px' /> : <FaSun size='24px' />}
        </button>
    )
}

export default ThemeButton;
