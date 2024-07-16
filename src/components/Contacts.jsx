import React, { useContext } from 'react';
import DarkModeContext from '../stores/DarkModeContext';

function Contacts() {
  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="w-auto mx-10 md:w-full md:max-w-xl p-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Contatti</h2>
        <h3 className="text-center dark:text-white">E-mail: your.email@example.com</h3>
        <h3 className="text-center dark:text-white">Telefono: +39 123 456 789</h3>
      </div>
    </div>
  );
}

export default Contacts;
