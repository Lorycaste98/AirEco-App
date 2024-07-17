import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 py-4 fixed bottom-0 w-full">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center font-thin text-sm ">
          <p className="dark:text-white">© 2024 AIRECO. Tutti i diritti riservati.</p>
          <p className="dark:text-white">Realizzato da Lorenzo Castelletti.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
