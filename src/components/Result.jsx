import React from 'react';

// COMPONENTE PER IL RISULTATO DEL CALCOLO
function Result({ footprint }) {
  return (
    footprint !== null && (
      <p className="mt-8 text-center text-2xl dark:text-white no-transition">
        L'impronta ecologica del tuo viaggio è: <b>{footprint}</b> unità di CO2
      </p>
    )
  );
}

export default Result;
