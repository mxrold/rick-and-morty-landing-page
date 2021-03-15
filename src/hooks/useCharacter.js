import { useState, useEffect } from 'react';


const useCharacter = URL => {
    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [URL]);

    return characters;
}

export default useCharacter;