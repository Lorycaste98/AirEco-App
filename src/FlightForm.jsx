import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FlightEcoFootprintCalculator() {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [passengers, setPassengers] = useState('');
  const [footprint, setFootprint] = useState(null);
  const [suggestions, setSuggestions] = useState({ departure: [], arrival: [] });
  const [selectedIndex, setSelectedIndex] = useState({ departure: -1, arrival: -1 });
  const [airports, setAirports] = useState([]);

  const calculateFootprint = () => {
    const calculatedFootprint = Number(passengers) * 100; // Valore fittizio
    setFootprint(calculatedFootprint);
  };

  const resetFields = () => {
    setDepartureAirport('');
    setArrivalAirport('');
    setPassengers('');
    setFootprint(null);
    setSuggestions({ departure: [], arrival: [] });
    setSelectedIndex({ departure: -1, arrival: -1 });
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  const fetchAirports = async () => {
    try {
      const response = await axios.get(
        'https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json'
      );
      setAirports(response.data);
    } catch (error) {
      console.error('Error fetching airports:', error);
    }
  };

  const handleSearch = (query, type) => {
    if (query.length >= 1) {
      const filteredSuggestions = airports.filter(
        (airport) =>
          airport.name.toLowerCase().includes(query.toLowerCase()) ||
          airport.city.toLowerCase().includes(query.toLowerCase()) ||
          airport.code.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions((prev) => ({ ...prev, [type]: filteredSuggestions }));
      setSelectedIndex((prev) => ({ ...prev, [type]: -1 }));
    } else {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
    }
  };

  const handleKeyDown = (e, type) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const nextIndex = (prev[type] + 1) % suggestions[type].length;
        return { ...prev, [type]: nextIndex };
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const nextIndex = (prev[type] - 1 + suggestions[type].length) % suggestions[type].length;
        return { ...prev, [type]: nextIndex };
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex[type] >= 0) {
        const selectedAirport = suggestions[type][selectedIndex[type]];
        type === 'departure'
          ? setDepartureAirport(`${selectedAirport.code} - ${selectedAirport.name}, (${selectedAirport.country})`)
          : setArrivalAirport(`${selectedAirport.code} - ${selectedAirport.name}, (${selectedAirport.country})`);
        setSuggestions((prev) => ({ ...prev, [type]: [] }));
      }
    }
  };

  const handleSuggestionClick = (airport, type) => {
    type === 'departure'
      ? setDepartureAirport(`${airport.code} - ${airport.name}, (${airport.country})`)
      : setArrivalAirport(`${airport.code} - ${airport.name}, (${airport.country})`);
    setSuggestions((prev) => ({ ...prev, [type]: [] }));
  };

  const canCalculate = departureAirport && arrivalAirport && passengers;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">
          Calcolatore dell'impronta ecologica di un viaggio aereo
        </h2>
        <div className="relative">
          <input
            type="text"
            className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300"
            placeholder="Aeroporto di partenza"
            value={departureAirport}
            onChange={(e) => {
              setDepartureAirport(e.target.value);
              handleSearch(e.target.value, 'departure');
            }}
            onKeyDown={(e) => handleKeyDown(e, 'departure')}
          />
          {suggestions.departure.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto">
              {suggestions.departure.map((airport, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${selectedIndex.departure === index ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleSuggestionClick(airport, 'departure')}
                >
                  {airport.code} - {airport.name}, ({airport.country})
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300"
            placeholder="Aeroporto di arrivo"
            value={arrivalAirport}
            onChange={(e) => {
              setArrivalAirport(e.target.value);
              handleSearch(e.target.value, 'arrival');
            }}
            onKeyDown={(e) => handleKeyDown(e, 'arrival')}
          />
          {suggestions.arrival.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto">
              {suggestions.arrival.map((airport, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${selectedIndex.arrival === index ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleSuggestionClick(airport, 'arrival')}
                >
                  {airport.code} - {airport.name}, ({airport.country})
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300"
          type="number"
          placeholder="Numero di passeggeri"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <div className="flex gap-5">
          <button
            className={`w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700 ${!canCalculate && 'bg-blue-300'}`}
            onClick={calculateFootprint}
            disabled={!canCalculate}
          >
            Calcola
          </button>
          <button className="w-full p-2 text-white bg-red-500 rounded hover:bg-red-700" onClick={resetFields}>
            Reset
          </button>
        </div>
        {footprint !== null && (
          <p className="mt-4 text-center">L'impronta ecologica del tuo viaggio è: {footprint} unità di CO2</p>
        )}
      </div>
    </div>
  );
}

export default FlightEcoFootprintCalculator;
