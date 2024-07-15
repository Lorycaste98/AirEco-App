import React from 'react';

// COMPONENTE PER L'INPUT DEL NUMERO DI PASSEGGERI
function PassengerInput({ value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 dark:text-white">Numero di passeggeri</label>
      <input
        type="number"
        className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300"
        value={value}
        onChange={handleChange}
        min="0"
      />
    </div>
  );
}

export default PassengerInput;
