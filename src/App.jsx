import React from 'react';
import FootprintCalculator from './components/FootprintCalculator';
import Navbar from './components/Navbar';
import { DarkModeProvider } from './stores/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <div>
        <Navbar />
        <FootprintCalculator />
      </div>
    </DarkModeProvider>
  );
};

export default App;
