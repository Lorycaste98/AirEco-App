import { useEffect, useState } from 'react';
import axios from 'axios';

const useAirportSelector = () => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [passengers, setPassengers] = useState('');
  const [footprint, setFootprint] = useState(null);
  const [suggestions, setSuggestions] = useState({ departure: [], arrival: [] });
  const [selectedIndex, setSelectedIndex] = useState({ departure: -1, arrival: -1 });
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchAirports();
  }, []);

  const fetchAirports = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_AIRPORTS_URL);
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
          airport.country.toLowerCase().includes(query.toLowerCase()) ||
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
          ? setDepartureAirport(`${selectedAirport.code} - ${selectedAirport.name} (${selectedAirport.country})`)
          : setArrivalAirport(`${selectedAirport.code} - ${selectedAirport.name} (${selectedAirport.country})`);
        setSuggestions((prev) => ({ ...prev, [type]: [] }));
      }
    }
  };

  const handleSuggestionClick = (airport, type) => {
    type === 'departure'
      ? setDepartureAirport(`${airport.code} - ${airport.name} (${airport.country})`)
      : setArrivalAirport(`${airport.code} - ${airport.name} (${airport.country})`);
    setSuggestions((prev) => ({ ...prev, [type]: [] }));
  };

  const calculateFootprint = async () => {
    try {
      const origin = departureAirport.split(' - ')[0];
      const destination = arrivalAirport.split(' - ')[0];

      const response = await axios.get('https://api.goclimate.com/v1/flight_footprint', {
        auth: {
          username: process.env.REACT_APP_EMISSION_API_KEY,
        },
        params: {
          'segments[0][origin]': origin,
          'segments[0][destination]': destination,
          cabin_class: 'economy',
        },
      });

      const footprintPerPassenger = response.data.footprint;
      const totalFootprint = footprintPerPassenger * Number(passengers);
      setFootprint(totalFootprint);
    } catch (error) {
      console.error('Error calculating footprint:', error);
    }
  };

  const resetFields = () => {
    setDepartureAirport('');
    setArrivalAirport('');
    setPassengers('');
    setFootprint(null);
    setSuggestions({ departure: [], arrival: [] });
    setSelectedIndex({ departure: -1, arrival: -1 });
  };

  return {
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
  };
};

export default useAirportSelector;
