import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { themes } from './context/themeContext';
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
      setTheme((prevValue) =>
        prevValue === themes.dark ? themes.light : themes.dark
      );
    };
  return (
    <>
        <div className="nav-bar">
            <div className="button-container">
                <button onClick = {() => navigate('home')} className="button">
                    Home
                </button>
                <button onClick = {() => navigate('items')} className="button">
                    Items
                </button>
                <ToggleSwitch onToggle={toggleTheme} />
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default NavBar;
