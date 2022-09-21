import React, {
  useState,
  createContext,
  ReactNode,
  FC,
  useContext,
} from "react";

import { DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME, LIGHT_ID } from "./theme";
import { Theme } from "./interfaces";

interface ContextProviderValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProviderValue>({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => console.log("Theme provider not rendered"),
});

interface ContextProviderProps {
  initialValue: Theme;
  children?: ReactNode;
}

export const ThemeProvider: FC<ContextProviderProps> = ({
  initialValue,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(initialValue);

  const toggleThemeCallback = () => {
    setTheme((currentTheme) => {
      return currentTheme.id === LIGHT_ID
        ? DEFAULT_DARK_THEME
        : DEFAULT_LIGHT_THEME;
    });
  };

  const providerValue: ContextProviderValue = {
    theme,
    toggleTheme: toggleThemeCallback,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
