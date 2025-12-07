import React from 'react';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';

/**
 * App component - Main application component
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
