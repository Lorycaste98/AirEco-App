import React from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTE PER IL PULSANTE DI CALCOLO
function CalculateButton({ onClick, disabled }) {
  // Traduzioni
  const { t } = useTranslation('footprintCalculator');

  return (
    <button
      onClick={onClick}
      className={`w-full p-2 text-white rounded ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 active:bg-blue-900'
      }`}
      disabled={disabled}
    >
      {t('calculateButton')}
    </button>
  );
}

export default CalculateButton;
