import React from 'react';

// COMPONENTE PER L'INPUT DEL NUMERO DI PASSEGGERI
function PassengerInput({ label, value, onChange, placeholder }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 dark:text-white text-sm md:text-base mb-2">{label}</label>
      <input
        type="number"
        className="w-full p-2 mb-4 text-gray-700 dark:text-white bg-gray-200 dark:bg-slate-800 rounded border border-gray-300 text-sm md:text-base"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min="0"
      />
    </div>
  );
}

export default PassengerInput;
