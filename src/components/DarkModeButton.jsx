import React from 'react';

function DarkModeButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="fixed w-16 h-16 bottom-16 right-16 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-800 flex justify-center items-center no-transition"
    >
      {children}
    </button>
  );
}

export default DarkModeButton;
