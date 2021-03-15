import React from 'react';


const Search = ({ search, searchInput, handleSearch, darkMode }) => {
    return (
        <div className="Characters__search">
            <input 
            className={darkMode ? "Characters__search--darkmode" : "Characters__search--lightmode"} 
            type="text" value={search} 
            onChange={handleSearch}
            placeholder="Search characters"
            ref={searchInput}
            />
        </div>
    );
}

export default Search;