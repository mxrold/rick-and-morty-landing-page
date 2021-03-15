import { useState, useEffect, useContext, useReducer, useMemo, useRef, useCallback } from 'react';

import ThemeContext from '../context/ThemeContext';

import '../assets/styles/components/Characters.css';
import '../assets/styles/components/DarkMode.css';
import '../assets/styles/components/LightMode.css';

import Search from './Search';
import FavoritesItem from './FavoritesItem';
import CharactersItem from './CharactersItem';


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
  const [ search, setSearch ] = useState('');
  const [ favorites, dispath ] = useReducer(favoriteReducer, initialState);
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);
  
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const handleClick = favorite => {
    dispath({ type: 'ADD_TO_FAVORITES', payload: favorite })
  };

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
        console.log(user.name.toLowerCase().includes(search.toLowerCase()))
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
      [characters, search]
    );

  return (
    <div className={darkMode ? 'Characters Characters__DarkMode' : 'Characters Characters__LightMode'}>
     <Search
      darkMode={darkMode}
      search={search}
      searchInput={searchInput}
      handleSearch={handleSearch}
     />

      {favorites.favorites.length > 0 && 
        <FavoritesItem 
          darkMode={darkMode}
          favorites={favorites}
        />
      }
      <CharactersItem 
        darkMode={darkMode}
        onCharacters={characters} 
        onFilteredUsers={filteredUsers}
        onHandleClick={handleClick}
      />

      {characters.length === 0 &&
        <h1>Opps... There are no any characters to show</h1>
      }
    </div>
  );
}

export default Characters;