import React, { useRef, useEffect, useState } from 'react';

// COMPONENTE PER LA GESTIONE DELL'INPUT DEGLI AEROPORTI
function AirportInput({
  label,
  value,
  onChange,
  onKeyDown,
  suggestions,
  selectedIndex,
  handleSuggestionClick,
  placeholder,
}) {
  const suggestionRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  return (
    <div className="relative">
      <label className="block text-gray-700 dark:text-white">{label}</label>
      <input
        type="text"
        className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-slate-800 border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto">
          {suggestions.map((airport, index) => (
            <li
              key={index}
              ref={(el) => (suggestionRefs.current[index] = el)}
              className={`p-2 cursor-pointer dark:text-white ${
                selectedIndex === index || hoveredIndex === index ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleSuggestionClick(airport)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {airport.code} - {airport.name} ({airport.country})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AirportInput;
