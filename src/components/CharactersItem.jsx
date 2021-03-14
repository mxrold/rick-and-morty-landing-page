
import '../assets/styles/components/CharactersItem.css';
import logoAdd from '../assets/static/icon-add.svg';


const CharactersItem = (props) => {
    
    return (
        <div className={props.darkMode ? 'CharactersItem CharactersItem__darkmode' : 'CharactersItem CharactersItem__lightmode'}>
            {props.onCharacters.length > 0 &&
                <div className="CharactersItem__title">
                    <h2>List of characters</h2>
                </div>
            }

            {props.onFilteredUsers.map(character => (
                <div className="CharactersItem__item" key={character.id}>
                    <figure>
                        <img src={character.image} alt={character.name}/>
                    </figure>
                    <div className="CharactersItem__item--info">
                        <div className="CharactersItem__item--info-top">
                            <h2>{character.name}</h2>
                            <button type="button" onClick={() => props.onHandleClick(character)}>
                                <img src={logoAdd} alt="Add to favorites"/>
                            </button>
                        </div>
                        <div className="CharactersItem__item--info-card">
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

export default CharactersItem;