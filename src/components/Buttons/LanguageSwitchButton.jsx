import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';

// COMPONENTE PER IL PULSANTE DI CAMBIO LINGUA
function LanguageSwitchButton() {
  const { i18n } = useTranslation();

  // Funzione per il cambio di lingua
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLanguage);
  };

  // Funzione per ottenere il codice della bandiera
  const getFlagCode = () => {
    return i18n.language === 'it' ? 'GB' : 'IT';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed w-14 h-14 bottom-40 right-6 md:right-12 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-800 flex justify-center items-center z-[200]"
    >
      <FlagIcon code={getFlagCode()} size={24} />
    </button>
  );
}

export default LanguageSwitchButton;
