import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GoSun, GoMoon } from 'react-icons/go';
import DarkModeContext from '../stores/DarkModeContext';
import DarkModeButton from './Buttons/DarkModeButton';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import LanguageSwitchButton from './Buttons/LanguageSwitchButton';
import { useTranslation } from 'react-i18next';

// COMPONENTE PER LA NAVBAR
function Navbar() {
  // Recupera il valore di darkMode e la funzione per cambiarlo dal contesto
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Traduzioni
  const { t } = useTranslation('common');

  // Stato per il menu mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${darkMode ? 'dark' : ''} fixed w-full top-0 z-[1000]`}>
      <nav className="bg-white shadow-md w-full dark:bg-slate-800">
        <div className="flex justify-between items-center max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 h-24">
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-4">
            <img className="h-20 w-20" src={Logo} alt="Logo" />
            <p className="text-4xl hidden md:block text-gray-800 dark:text-white font-sans">AIRECO</p>
          </NavLink>
          <div className="flex items-center">
            <LanguageSwitchButton />
            <DarkModeButton onClick={toggleDarkMode}>
              {darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}
            </DarkModeButton>
            <div className="hidden md:flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 text-lg font-semibold'
                }
              >
                {t('home')}
              </NavLink>
              <NavLink
                to="/idea"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 text-lg font-semibold'
                }
              >
                {t('idea')}
              </NavLink>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 px-3 py-2 text-lg font-semibold'
                }
              >
                {t('contacts')}
              </NavLink>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="hover:text-black dark:hover:text focus:outline-none focus:text-gray-600"
                aria-label="Toggle menu"
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
          <ul className="md:hidden bg-white dark:bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 text-base font-semibold'
                }
              >
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/idea"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 text-base font-semibold'
                }
              >
                {t('idea')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#008037] uppercase underline underline-offset-4 decoration-[#008037] px-3 py-2 text-lg font-bold'
                    : 'text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-400 block px-3 py-2 text-base font-semibold'
                }
              >
                {t('contacts')}
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
