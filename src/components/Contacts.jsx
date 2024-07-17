import React, { useContext } from 'react';
import DarkModeContext from '../stores/DarkModeContext';
import socialMediaData from '../data/socialMediaData';

function Contacts() {
  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-2xl py-4 px-10 md:px-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white uppercase underline underline-offset-4 decoration-[#008037]">
          Contatti
        </h2>
        <div className="min-w-full flex flex-col md:flex-row gap-6">
          {/* Form di contatto */}
          <form className="w-full">
            <div>
              <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">Nome e Cognome</label>
              <input
                type="text"
                className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                placeholder="Nome e Cognome"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                placeholder="E-mail"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">Messaggio</label>
              <textarea
                rows="4"
                className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
                placeholder="Messaggio"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900"
              >
                Invia
              </button>
            </div>
          </form>
        </div>

        {/* Box social media */}
        <h2 className="text-lg font-semibold text-center dark:text-white mt-8">Social Media:</h2>
        <div className="w-1/3 mx-auto flex justify-center gap-6 mt-4">
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
    </div>
  );
}

export default Contacts;
