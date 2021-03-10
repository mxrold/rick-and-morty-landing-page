import '../assets/styles/components/Header.css';


const Header = ( props ) => {
  return (
    <div className="Header">
      <h1 className={props.darkMode ? 'Header__title--DarkMode' : 'Header__title--LightMode'}>React Hooks</h1>
      <button type="button" onClick={props.onHandleClick}>{props.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default Header;