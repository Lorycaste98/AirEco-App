import React, { useContext } from 'react';
import DarkModeContext from '../stores/DarkModeContext';

function Idea() {
  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="w-auto mx-10 md:w-full md:max-w-xl p-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Idee per lo sviluppo dell'app</h2>
        <ul className="list-disc pl-5 ">
          <li className="text-gray-600 dark:text-white">Step 1: Descrizione...</li>
          <li className="text-gray-600 dark:text-white">Step 2: Descrizione...</li>
          <li className="text-gray-600 dark:text-white">Step 3: Descrizione...</li>
        </ul>
      </div>
    </div>
  );
}

export default Idea;
