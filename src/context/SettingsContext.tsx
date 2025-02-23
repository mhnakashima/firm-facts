import React from "react";
import { Theme } from "../enum";
import { createContext, useContext, useState } from "react";

interface SettingsContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
    theme: Theme.Light,
    toggleTheme: () => {}
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(Theme.Light);

    const toggleTheme = () => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    };

    return (
        <SettingsContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};