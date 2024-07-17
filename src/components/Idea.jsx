import React, { useContext } from 'react';
import DarkModeContext from '../stores/DarkModeContext';
import languagesData from '../data/languagesData';
import { useTranslation } from 'react-i18next';

function Idea() {
  //Traduzioni
  const { t } = useTranslation('idea');

  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`py-36 lg:py-16
         flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
           darkMode ? 'dark' : ''
         }`}
    >
      <div className="mx-auto w-full max-w-[320px] sm:max-w-md md:max-w-3xl py-4 px-10 md:px-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white uppercase underline underline-offset-4 decoration-[#008037]">
          {t('ideaTitle')}
        </h2>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white">{t('paragrapgh1')} </p>
          <p className="text-gray-600 dark:text-white">{t('paragrapgh2')}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium dark:text-white mb-2">{t('steps')}</h2>
          <ul className="list-disc pl-5">
            <li className="text-gray-600 dark:text-white mb-2">{t('step1')} </li>
            <li className="text-gray-600 dark:text-white mb-2">{t('step2')} </li>
            <li className="text-gray-600 dark:text-white mb-2">{t('step3')} </li>
            <li className="text-gray-600 dark:text-white mb-2">{t('step4')} </li>
            <li className="text-gray-600 dark:text-white">{t('step5')} </li>
          </ul>

          <h2 className="text-lg font-semibold text-center dark:text-white mt-8">{t('technologies')}</h2>
          <div className="p-4 flex justify-center items-center gap-2 md:gap-6">
            {languagesData.map((language, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300 cursor-default group"
              >
                <div className="w-8 flex-shrink-0">
                  <img src={language.icon} alt={language.name} />
                </div>
                <div className="absolute top-10 right-1/2 transform translate-x-1/2 bg-black dark:bg-white text-white dark:text-slate-800 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {language.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Idea;
