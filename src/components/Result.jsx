import React from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTE PER IL RISULTATO DEL CALCOLO
function Result({ footprint }) {
  // Traduzioni
  const { t } = useTranslation('footprintCalculator');

  return (
    footprint !== null && (
      <p className="mt-8 text-center text-2xl dark:text-white no-transition">
        <span dangerouslySetInnerHTML={{ __html: t('resultMessage', { footprint }) }} />
      </p>
    )
  );
}

export default Result;
