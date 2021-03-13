import { useState, useEffect, useContext, useReducer } from 'react';

import ThemeContext from '../context/ThemeContext';


import '../assets/styles/components/Characters.css';
import '../assets/styles/components/DarkMode.css';
import '../assets/styles/components/LightMode.css';
import logoAdd from '../assets/static/icon-add.svg';


const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default: 
      return state;
  }
}


const Characters = ( ) => {
  const [characters, setCharacters] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const [ favorites, dispath ] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    dispath({ type: 'ADD_TO_FAVORITES', payload: favorite })
  }

  return (
    <>
      {favorites.favorites.length > 0 && 
      <div className="Title__list">
        <h2 className={darkMode ? 'Title__list__darkmode' : 'Title__list__lightmode'}>List of favorites</h2>
      </div>
      }
      <div className={darkMode ? 'Characters Characters__DarkMode' : 'Characters Characters__LightMode'}>
        {favorites.favorites.map(favorite => (
          <div className="Characters__item" key={favorite.id}>
            <figure>
              <img src={favorite.image} alt={favorite.name}/>
            </figure>
            <div className="Characters__item--info">
              <div className="Characters__item--info-top">
                <h2>{favorite.name}</h2>
              </div>
              <div className="Characters__item--info-card">
                <p>{favorite.species}</p>
                <p>{favorite.gender}</p>
                <p>{favorite.status}</p>
              </div>
              <p><span>Location: </span>{favorite.location.name}</p>
            </div>
          </div>
        ))}
      </div>

      {characters.length > 0 &&
      <div className="Title__list">
        <h2 className={darkMode ? 'Title__list__darkmode' : 'Title__list__lightmode'}>List of characters</h2>
      </div>
      }
      <div className={darkMode ? 'Characters Characters__DarkMode' : 'Characters Characters__LightMode'}>
        {characters.map(character => (
          <div className="Characters__item" key={character.id}>
            <figure>
              <img src={character.image} alt={character.name}/>
            </figure>
            <div className="Characters__item--info">
              <div className="Characters__item--info-top">
                <h2>{character.name}</h2>
                <button type="button" onClick={() => handleClick(character)}>
                  <img src={logoAdd} alt="Add to favorites"/>
                </button>
              </div>
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

      {characters.length === 0 &&
        <h1>Opps... There are no any characters to show</h1>
      }
    </>

  );
}

export default Characters;