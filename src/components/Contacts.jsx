import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import DarkModeContext from '../stores/DarkModeContext';
import socialMediaData from '../data/socialMediaData';
import { useTranslation } from 'react-i18next';

function Contacts() {
  // Traduzioni
  const { t } = useTranslation('contacts');

  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  // Collegamento a emailjs per ricezione delle mail dal form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uf5h184', 'template_slt769g', form.current, {
        publicKey: 'BbLOH8Uh0FrFsiM4T',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Messaggio inviato con successo!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section
      className={`py-36 lg:py-16 flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-2xl py-4 px-10 md:px-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white uppercase underline underline-offset-4 decoration-[#008037]">
          {t('contactsTitle')}
        </h2>
        <div className="min-w-full flex flex-col md:flex-row gap-6">
          {/* Form di contatto */}
          <form className="w-full" ref={form} onSubmit={sendEmail}>
            <fieldset className="mb-6">
              <legend className="text-lg font-medium italic text-gray-700 dark:text-white mb-4">
                {t('contactForm')}
              </legend>
              <div className="px-2">
                <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">{t('fullName')}</label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                  placeholder={t('fullNamePlaceholder')}
                  required
                />
              </div>
              <div className="px-2">
                <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">{t('email')}</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                  placeholder={t('emailPlaceholder')}
                  required
                />
              </div>
              <div className="px-2">
                <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">{t('message')}</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                  placeholder={t('messagePlaceholder')}
                  required
                ></textarea>
              </div>
              <div className="px-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900"
                >
                  {t('send')}
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Box social media */}
        <h2 className="text-lg font-semibold text-center dark:text-white mt-6">Social Media:</h2>
        <div className="w-1/3 mx-auto flex justify-center gap-2 md:gap-6 mt-4">
          {socialMediaData.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform hover:scale-110 duration-300"
            >
              <div style={{ color: social.color }}>{social.icon}</div>
              <div className="absolute top-10 right-1/2 transform translate-x-1/2 bg-black dark:bg-white text-white dark:text-slate-800 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
