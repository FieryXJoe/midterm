import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, themes } from './context/themeContext';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };
  return (
    <ThemeContext.Provider value = {{theme: theme}}>
      <NavBar style = {{}}>
        <button onClick={() => navigate('home')} className="button">
          Home
        </button>
        <button onClick={() => navigate('items')} className="button">
          Items
        </button>
        <ToggleSwitch onToggle={toggleTheme} />
      </NavBar>
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
