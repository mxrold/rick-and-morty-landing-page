import { useState } from 'react';

import ThemeContext from './context/ThemeContext';

import Header from './components/Header';
import Characters from './components/Characters';

import './assets/styles/App.css';


function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'App DarkMode' : 'App LightMode'}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
