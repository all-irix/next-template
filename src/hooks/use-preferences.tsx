"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Preferences = {
  cookiesAccepted: boolean;
  theme: "light" | "dark" | "system";
  language: string;
  setCookiesAccepted: (accepted: boolean) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  setLanguage: (lang: string) => void;
};

const PreferencesContext = createContext<Preferences | undefined>(undefined);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [language, setLanguage] = useState("en");

  return (
    <PreferencesContext.Provider
      value={{
        cookiesAccepted,
        theme,
        language,
        setCookiesAccepted,
        setTheme,
        setLanguage,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
