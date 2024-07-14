import React from 'react';

function ResetButton({ onClick }) {
  return (
    <button className="w-full p-2 text-white bg-red-500 rounded hover:bg-red-700" onClick={onClick}>
      Reset
    </button>
  );
}

export default ResetButton;
