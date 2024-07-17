import React, { useContext } from 'react';
import AirportInput from './AirportInput';
import PassengerInput from './PassengerInput';
import CalculateButton from './Buttons/CalculateButton';
import ResetButton from './Buttons/ResetButton';
import Result from './Result';
import useAirportSelector from '../hooks/useAirportSelector';
import DarkModeContext from '../stores/DarkModeContext';

// FUNZIONE PRINCIPALE DEL COMPONENTE CHE UNISCE TUTTI I COMPONENTI
function FootprintCalculator() {
  const {
    departureAirport,
    arrivalAirport,
    passengers,
    footprint,
    suggestions,
    selectedIndex,
    setDepartureAirport,
    setArrivalAirport,
    setPassengers,
    handleSearch,
    handleKeyDown,
    handleSuggestionClick,
    calculateFootprint,
    resetFields,
    airportsLoading,
    airportsError,
    footprintLoading,
    footprintError,
  } = useAirportSelector();

  // Recupera il valore di darkMode dal contesto
  const { darkMode } = useContext(DarkModeContext);

  // Verifica se è possibile calcolare l'impronta ecologica
  const canCalculate = departureAirport.trim() !== '' && arrivalAirport.trim() !== '' && passengers > 0;

  // Funzioni per gestire il cambio di aeroporto di partenza e arrivo
  const handleDepartureChange = (e) => {
    setDepartureAirport(e.target.value);
    handleSearch(e.target.value, 'departure');
  };

  const handleArrivalChange = (e) => {
    setArrivalAirport(e.target.value);
    handleSearch(e.target.value, 'arrival');
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-2xl py-4 px-10 md:px-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white uppercase underline underline-offset-4 decoration-[#008037]">
          Calcolatore dell'impronta ecologica di un viaggio aereo
        </h2>
        {airportsLoading ? (
          <p>Sto caricando gli aeroporti...</p>
        ) : airportsError ? (
          <p>Errore caricamento aeroporti: {airportsError.message}</p>
        ) : (
          <>
            <AirportInput
              label="Aeroporto di partenza"
              placeholder="Cerca aeroporto (es. BGY / Orio al Serio / Italia)"
              value={departureAirport}
              onChange={(e) => handleDepartureChange(e, setDepartureAirport, handleSearch)}
              onKeyDown={(e) => handleKeyDown(e, 'departure')}
              suggestions={suggestions.departure}
              selectedIndex={selectedIndex.departure}
              handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'departure')}
            />
            <AirportInput
              label="Aeroporto di arrivo"
              placeholder="Cerca aeroporto (es. BGY / Orio al Serio / Italia)"
              value={arrivalAirport}
              onChange={(e) => handleArrivalChange(e, setArrivalAirport, handleSearch)}
              onKeyDown={(e) => handleKeyDown(e, 'arrival')}
              suggestions={suggestions.arrival}
              selectedIndex={selectedIndex.arrival}
              handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'arrival')}
            />
            <PassengerInput
              placeholder="Inserisci un numero"
              value={passengers}
              onChange={(newValue) => setPassengers(newValue)}
            />
            <div className="flex flex-col gap-3 md:flex-row mt-3">
              <CalculateButton onClick={calculateFootprint} disabled={!canCalculate || footprintLoading} />
              <ResetButton onClick={resetFields} />
            </div>
            {footprintLoading ? (
              <p>Sto calcolando...</p>
            ) : footprintError ? (
              <p>Errore nel calcolo: {footprintError.message}</p>
            ) : (
              <Result footprint={footprint} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FootprintCalculator;
