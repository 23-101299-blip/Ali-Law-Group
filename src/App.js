import React from 'react';
import { useTheme } from './context/ThemeContext';
import Home from './home';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <Home />
    </div>
  );
}

export default App;
