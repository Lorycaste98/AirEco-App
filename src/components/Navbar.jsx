// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GoSun, GoMoon } from 'react-icons/go';
import DarkModeContext from '../stores/DarkModeContext';
import DarkModeButton from './DarkModeButton';
import Logo from '../assets/logo.png';

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
            <div className="flex-shrink-0 flex items-center gap-4">
              <img className="h-20 w-20" src={Logo} alt="Logo" />
              <p className="text-4xl  text-gray-800 dark:text-white font-sans">AIRECO</p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
