import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface LanguageProps {
  children: React.ReactNode;
}

interface LanguageContextProps {
  language?: string;
  setLanguage?: Dispatch<SetStateAction<string>>;
}

const LanguageContext = React.createContext<LanguageContextProps>({});

function LanguageProvider({ children }: LanguageProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ENG');

  return (
    <div className="grid grid-cols-4 mx-10">
      <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
    </div>
  );
}

export { LanguageContext, LanguageProvider };
