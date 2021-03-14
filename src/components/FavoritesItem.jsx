import '../assets/styles/components/FavoritesItem.css';
import logoAdd from '../assets/static/icon-add.svg';


const FavoritesItem = (props) => {
    return (
        <div className={props.darkMode ? "FavoritesItem FavoritesItem__darkmode" : "FavoritesItem FavoritesItem__lightmode"}>
            {props.favorites.favorites.length > 0 && 
            <div className="FavoritesItem__title">
                <h2>List of favorites</h2>
            </div>
            }
            {props.favorites.favorites.map(favorite => (
               <div className="FavoritesItem__item" key={favorite.id}>
                   <figure>
                        <img src={favorite.image} alt={favorite.name}/>
                    </figure>
                    <div className="FavoritesItem__item--info">
                        <h2>{favorite.name}</h2>
                    </div>
               </div>
            ))}
        </div>
    );
}

export default FavoritesItem;