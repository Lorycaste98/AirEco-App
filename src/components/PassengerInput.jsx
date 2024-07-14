import React from 'react';

function PassengerInput({ value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className="block text-gray-700">Numero di passeggeri</label>
      <input
        type="number"
        className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300"
        value={value}
        onChange={handleChange}
        min="0"
      />
    </div>
  );
}

export default PassengerInput;
