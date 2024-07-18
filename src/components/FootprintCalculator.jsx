import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AirportInput from './AirportInput';
import PassengerInput from './PassengerInput';
import CalculateButton from './Buttons/CalculateButton';
import ResetButton from './Buttons/ResetButton';
import Result from './Result';
import useAirportSelector from '../hooks/useAirportSelector';
import DarkModeContext from '../stores/DarkModeContext';

// FUNZIONE PRINCIPALE DEL COMPONENTE CHE UNISCE TUTTI I COMPONENTI
function FootprintCalculator() {
  // Traduzioni
  const { t } = useTranslation('footprintCalculator');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canCalculate) {
      calculateFootprint();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetFields();
  };

  return (
    <section
      className={`py-36 lg:py-16 flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-700 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-2xl py-4 px-10 md:px-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 dark:text-white uppercase underline underline-offset-4 decoration-[#008037]">
          {t('title')}
        </h2>
        {airportsLoading ? (
          <p>{t('loadingAirports')}</p>
        ) : airportsError ? (
          <p>
            {t('errorLoadingAirports')}: {airportsError.message}
          </p>
        ) : (
          <form>
            <fieldset>
              <legend className="sr-only">{t('title')}</legend>
              <AirportInput
                label={t('departureAirport')}
                placeholder={t('searchAirport')}
                value={departureAirport}
                onChange={(e) => handleDepartureChange(e, setDepartureAirport, handleSearch)}
                onKeyDown={(e) => handleKeyDown(e, 'departure')}
                suggestions={suggestions.departure}
                selectedIndex={selectedIndex.departure}
                handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'departure')}
              />
              <AirportInput
                label={t('arrivalAirport')}
                placeholder={t('searchAirport')}
                value={arrivalAirport}
                onChange={(e) => handleArrivalChange(e, setArrivalAirport, handleSearch)}
                onKeyDown={(e) => handleKeyDown(e, 'arrival')}
                suggestions={suggestions.arrival}
                selectedIndex={selectedIndex.arrival}
                handleSuggestionClick={(airport) => handleSuggestionClick(airport, 'arrival')}
              />
              <PassengerInput
                label={t('passengersInput')}
                placeholder={t('enterNumber')}
                value={passengers}
                onChange={(newValue) => setPassengers(newValue)}
              />
            </fieldset>
            <div className="flex flex-col gap-3 md:flex-row mt-3">
              <CalculateButton onClick={handleSubmit} disabled={!canCalculate || footprintLoading} />
              <ResetButton onClick={handleReset} />
            </div>
          </form>
        )}
        {footprintLoading ? (
          <p>{t('calculating')}</p>
        ) : footprintError ? (
          <p>
            {t('errorCalculating')}: {footprintError.message}
          </p>
        ) : (
          <Result footprint={footprint} />
        )}
      </div>
    </section>
  );
}

export default FootprintCalculator;
