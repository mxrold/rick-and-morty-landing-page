import { useState, useEffect, useContext } from 'react';

import ThemeContext from '../context/ThemeContext';


import '../assets/styles/components/Characters.css';
import '../assets/styles/components/DarkMode.css';
import '../assets/styles/components/LightMode.css';


const Characters = ( ) => {
  const [characters, setCharacters] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className={darkMode ? 'Characters Characters__DarkMode' : 'Characters Characters__LightMode'}>
      {characters.map(character => (
        <div className="Characters__item" key={character.id}>
          <figure>
            <img src={character.image} alt={character.name}/>
          </figure>
          <div className="Characters__item--info">
            <h2>{character.name}</h2>
            <div className="Characters__item--info-card">
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.status}</p>
            </div>
            <p><span>Location: </span>{character.location.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;