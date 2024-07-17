import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  // Traduzioni
  const { t } = useTranslation('common');

  return (
    <footer className="bg-white dark:bg-slate-800 py-4 fixed bottom-0 w-full">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center font-thin text-sm ">
          <p className="dark:text-white">{t('copyrights')}</p>
          <p className="dark:text-white">{t('author')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
