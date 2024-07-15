// FUNZIONE PER GESTIRE LA RICERCA DEGLI AEROPORTI
export const handleSearch = (query, type, airports, setSuggestions, setSelectedIndex) => {
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

// FUNZIONE PER GESTIRE I TASTI FRECCIA E INVIO SU UN SUGGERIMENTO
export const handleKeyDown = (
  e,
  type,
  suggestions,
  selectedIndex,
  setSelectedIndex,
  setDepartureAirport,
  setArrivalAirport,
  setSuggestions
) => {
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

// FUNZIONE PER GESTIRE IL CLICK SU UN SUGGERIMENTO
export const handleSuggestionClick = (airport, type, setDepartureAirport, setArrivalAirport, setSuggestions) => {
  type === 'departure'
    ? setDepartureAirport(`${airport.code} - ${airport.name} (${airport.country})`)
    : setArrivalAirport(`${airport.code} - ${airport.name} (${airport.country})`);
  setSuggestions((prev) => ({ ...prev, [type]: [] }));
};
