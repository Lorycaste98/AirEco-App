import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

// UTILIZZATO REACT-QUERY PER GESTIRE IL CALCOLO DELL'IMPRONTA AMBIENTALE
const calculateFootprintAPI = async ({ departureAirport, arrivalAirport, passengers }) => {
  const origin = departureAirport.split(' - ')[0];
  const destination = arrivalAirport.split(' - ')[0];

  const response = await axios.get(process.env.REACT_APP_EMISSION_URL, {
    auth: {
      username: process.env.REACT_APP_EMISSION_API_KEY,
    },
    params: {
      'segments[0][origin]': origin,
      'segments[0][destination]': destination,
      cabin_class: 'economy',
    },
  });

  // Moltiplico l'impronta ambientale per il numero di passeggeri
  const footprintPerPassenger = response.data.footprint;
  return footprintPerPassenger * Number(passengers);
};

// HOOK PERSONALIZZATO PER CALCOLARE L'IMPRONTA AMBIENTALE
function useCalculateFootprint() {
  const [footprint, setFootprint] = useState(null);

  const mutation = useMutation({
    mutationFn: calculateFootprintAPI,
    onSuccess: (data) => {
      setFootprint(data);
    },
  });

  return {
    footprint,
    setFootprint,
    calculateFootprint: (departureAirport, arrivalAirport, passengers) =>
      mutation.mutate({ departureAirport, arrivalAirport, passengers }),
    footprintLoading: mutation.isLoading,
    footprintError: mutation.isError,
  };
}

export default useCalculateFootprint;
