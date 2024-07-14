import React from 'react';

function CalculateButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 text-white rounded ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
      }`}
      disabled={disabled}
    >
      Calcola
    </button>
  );
}

export default CalculateButton;
