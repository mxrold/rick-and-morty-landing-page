import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';

import '../assets/styles/components/Header.css';
import '../assets/styles/components/DarkMode.css';
import '../assets/styles/components/LightMode.css';


const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header">
      <h1 className={darkMode ? 'Header__title--DarkMode' : 'Header__title--LightMode'}>React Hooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default Header;