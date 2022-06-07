import { useState, createContext } from "react";

// 1.Create context
// 2.Provider
// 3.Consumer

const ThemeContext = createContext(); //will return react component

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext, ThemeProvider };