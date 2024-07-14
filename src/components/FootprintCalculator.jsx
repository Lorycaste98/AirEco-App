import React from 'react';
import AirportInput from './AirportInput';
import PassengerInput from './PassengerInput';
import CalculateButton from './CalculateButton';
import ResetButton from './ResetButton';
import Result from './Result';
import useAirportSelector from '../hooks/useAirportSelector';

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
  } = useAirportSelector();

  const canCalculate = departureAirport.trim() !== '' && arrivalAirport.trim() !== '' && passengers > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">
          Calcolatore dell'impronta ecologica di un viaggio aereo
        </h2>
        <AirportInput
          label="Aeroporto di partenza"
          placeholder="Cerca aeroporto (es. BGY / Orio al Serio / Italia)"
          value={departureAirport}
          onChange={(e) => {
            setDepartureAirport(e.target.value);
            handleSearch(e.target.value, 'departure');
          }}
          onKeyDown={(e) => handleKeyDown(e, 'departure')}
          suggestions={suggestions.departure}
          selectedIndex={selectedIndex.departure}
          handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'departure')}
        />
        <AirportInput
          label="Aeroporto di arrivo"
          placeholder="Cerca aeroporto (es. BGY / Orio al Serio / Italia)"
          value={arrivalAirport}
          onChange={(e) => {
            setArrivalAirport(e.target.value);
            handleSearch(e.target.value, 'arrival');
          }}
          onKeyDown={(e) => handleKeyDown(e, 'arrival')}
          suggestions={suggestions.arrival}
          selectedIndex={selectedIndex.arrival}
          handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'arrival')}
        />
        <PassengerInput value={passengers} onChange={(newValue) => setPassengers(newValue)} />{' '}
        <div className="flex space-x-2">
          <CalculateButton onClick={calculateFootprint} disabled={!canCalculate} />
          <ResetButton onClick={resetFields} />
        </div>
        <Result footprint={footprint} />
      </div>
    </div>
  );
}

export default FootprintCalculator;
