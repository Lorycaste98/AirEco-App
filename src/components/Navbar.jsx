// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GoSun, GoMoon } from 'react-icons/go';
import DarkModeContext from '../stores/DarkModeContext';
import DarkModeButton from './DarkModeButton';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${darkMode ? 'dark' : ''} fixed w-full top-0`}>
      <div className="bg-white shadow-md w-full dark:bg-slate-800">
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}
        </DarkModeButton>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="/" className="flex-shrink-0 flex items-center gap-4">
              <img className="h-20 w-20" src={Logo} alt="Logo" />
              <p className="text-4xl hidden md:block text-gray-800 dark:text-white font-sans">AIRECO</p>
            </a>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Calcolatore
                </Link>
                <Link
                  to="/idea"
                  className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  L'idea
                </Link>
                <Link
                  to="/contacts"
                  className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Contatti
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="hover:text-black dark:hover:text focus:outline-none focus:text-gray-600"
              >
                {isOpen ? (
                  <AiOutlineClose className="text-gray-600 dark:text-white" size={25} />
                ) : (
                  <AiOutlineMenu className="text-gray-600 dark:text-white" size={25} />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Calcolatore
              </Link>
              <Link
                to="/idea"
                onClick={toggleMenu}
                className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                L'idea
              </Link>
              <Link
                to="/contacts"
                onClick={toggleMenu}
                className="text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contatti
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
