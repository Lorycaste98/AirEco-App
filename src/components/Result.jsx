import React from 'react';

function Result({ footprint }) {
  return (
    footprint !== null && (
      <p className="mt-4 text-center">
        L'impronta ecologica del tuo viaggio è: <b>{footprint}</b> unità di CO2
      </p>
    )
  );
}

export default Result;
