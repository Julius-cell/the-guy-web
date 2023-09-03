import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface LanguageProps {
  children: React.ReactNode;
  className: string;
}

interface LanguageContextProps {
  language?: string;
  setLanguage?: Dispatch<SetStateAction<string>>;
}

const LanguageContext = React.createContext<LanguageContextProps>({});

function LanguageProvider({ children, className }: LanguageProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ENG');

  return (
    <div className={className}>
      <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
    </div>
  );
}

export { LanguageContext, LanguageProvider };
