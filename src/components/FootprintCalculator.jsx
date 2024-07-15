import React, { useContext } from 'react';
import AirportInput from './AirportInput';
import PassengerInput from './PassengerInput';
import CalculateButton from './CalculateButton';
import ResetButton from './ResetButton';
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
      className={`flex flex-col items-center justify-center min-h-screen dark:bg-gray-700 ${darkMode ? 'dark' : ''}`}
    >
      <div className="w-full max-w-xl p-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">
          Calcolatore dell'impronta ecologica di un viaggio aereo
        </h2>
        {airportsLoading ? (
          <p>Loading airports...</p>
        ) : airportsError ? (
          <p>Error loading airports: {airportsError.message}</p>
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
            <PassengerInput value={passengers} onChange={(newValue) => setPassengers(newValue)} />
            <div className="flex space-x-2">
              <CalculateButton onClick={calculateFootprint} disabled={!canCalculate || footprintLoading} />
              <ResetButton onClick={resetFields} />
            </div>
            {footprintLoading ? (
              <p>Calculating footprint...</p>
            ) : footprintError ? (
              <p>Error calculating footprint: {footprintError.message}</p>
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
