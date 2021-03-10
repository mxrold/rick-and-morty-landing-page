import { useState } from 'react';

import Header from './components/Header';
import Characters from './components/Characters';

import './assets/styles/App.css';
import './assets/styles/components/DarkMode.css';
import './assets/styles/components/LightMode.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'App DarkMode' : 'App LightMode'}>
      <Header 
        onHandleClick={handleClick}
        darkMode={darkMode}
      />
      <Characters darkMode={darkMode}/>
    </div>
  );
}

export default App;
