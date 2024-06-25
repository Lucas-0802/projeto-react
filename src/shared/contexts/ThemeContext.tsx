import { createContext, useCallback, useState, useMemo, useContext } from "react";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { ThemeProvider } from "@emotion/react"
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IAppThemeProvider {
    children: React.ReactNode
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({children}) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if(themeName === 'light') return LightTheme
        return DarkTheme
    }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <ThemeProvider theme={theme}>
            <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
            {children}
            </Box>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
