import { createContext, useState, ReactNode } from "react";

export type LanguageContextType = {
  english: boolean;
  setEnglish: (value: boolean) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const SetLanguage = createContext<LanguageContextType | undefined>(
  undefined
);

type SetLanguageProviderProps = {
  children: ReactNode;
};

export const SetLanguageProvider = ({ children }: SetLanguageProviderProps) => {
  const [english, setEnglish] = useState(false);

  return (
    <SetLanguage.Provider value={{ english, setEnglish }}>
      {children}
    </SetLanguage.Provider>
  );
};
