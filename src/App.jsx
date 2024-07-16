import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FootprintCalculator from './components/FootprintCalculator';
import Idea from './components/Idea';
import Contacts from './components/Contacts';
import { DarkModeProvider } from './stores/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<FootprintCalculator />} />
              <Route path="/idea" element={<Idea />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
