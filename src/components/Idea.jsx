import React, { useContext } from 'react';
import DarkModeContext from '../stores/DarkModeContext';
import languagesData from '../data/languagesData';

function Idea() {
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
          L'IDEA PER LA PROGETTAZIONE DELL'APP
        </h2>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-white">
            Questa app è stata sviluppata come progetto finale del percorso di studi di Start2Impact University.
          </p>
          <p className="text-gray-600 dark:text-white">
            L'obiettivo era quello di creare un interfaccia che andasse a calcolare il footprint (impronta ecologica) di
            un viaggio aereo.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium dark:text-white mb-2">PASSAGGI:</h2>
          <ul className="list-disc pl-5">
            <li className="text-gray-600 dark:text-white mb-2">
              Ho cominciato il mio progetto creando un layout di base molto semplice per lavorare subito sulla logica
              che recupera i dati degli aeroporti da un API.
            </li>
            <li className="text-gray-600 dark:text-white mb-2">
              Una volta funzionante ho reso il layout dell'app responsive e più intuitivo mentre al form ho aggiunto un
              menu a tendina per mostrare i suggerimenti degli aeroporti e il campo per il numero di passeggeri.
            </li>
            <li className="text-gray-600 dark:text-white mb-2">
              Successivamente ho lavorato sull'API che permette di calcolare l'impronta ecologica e ho fatto in modo che
              si possa calcolare solo se tutti i campi sono compilati correttamente inoltre ho aggiunto anche un
              pulsante di reset che permette di ripulire i campi. Il risultato viene mandato a schermo in un box
              dedicato sotto ai pulsanti.
            </li>
            <li className="text-gray-600 dark:text-white mb-2">
              Ho voluto creare due funzionalità aggiuntive: la prima è la possibilità di cambiare il tema dell'app, la
              seconda di cambiare lingua da italiano a inglese o viceversa. Queste funzionalità sono state implementate
              per migliorare l'esperienza utente e possono essere attivate da due pulsanti fissi in fondo allo schermo.
            </li>
            <li className="text-gray-600 dark:text-white">
              Infine ho creato un componente Navbar e Footer sempre per la navigazione e altri due componenti: uno per
              spiegare l'idea alla base dell'app e l'altro per i contatti.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-center dark:text-white mt-8">Tecnologie utilizzate:</h2>
          <div className="p-4 flex justify-center items-center gap-6">
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
