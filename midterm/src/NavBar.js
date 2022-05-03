import { useNavigate } from 'react-router-dom';
import './App.css';

function NavBar() {
    const navigate = useNavigate();
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
