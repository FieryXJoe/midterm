import { Navigate,useNavigate } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <div className="App">
        <button onClick = {() => navigate('home')}>
            Home
        </button>
        <button onClick = {() => navigate('items')}>
            Items
        </button>
    </div>
  );
}

export default NavBar;
