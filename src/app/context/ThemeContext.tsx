'use client';

import { FC, createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
        }
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (isHydrated) {
            const root = document.documentElement;
            root.classList.remove(theme === "light" ? "dark" : "light");
            root.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, isHydrated]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    if (!isHydrated) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
