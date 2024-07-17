import React from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTE PER IL PULSANTE DI RESET
function ResetButton({ onClick }) {
  // Traduzioni
  const { t } = useTranslation('footprintCalculator');

  return (
    <button className="w-full p-2 text-white bg-red-500 rounded hover:bg-red-700" onClick={onClick}>
      {t('resetButton')}
    </button>
  );
}

export default ResetButton;
