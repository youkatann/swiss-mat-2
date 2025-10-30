'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('fr');
  const [messages, setMessages] = useState({});

  // завантаження мови при старті
  useEffect(() => {
    const saved = localStorage.getItem('locale') || 'fr';
    setLocale(saved);
    import(`../messages/${saved}.json`).then((mod) => setMessages(mod.default));
  }, []);

  const changeLocale = async (newLocale) => {
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
    const mod = await import(`../messages/${newLocale}.json`);
    setMessages(mod.default);
  };

  return (
    <I18nContext.Provider value={{ locale, messages, changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
