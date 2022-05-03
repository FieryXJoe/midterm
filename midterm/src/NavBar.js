import { Outlet, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();
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
            </div>
        </div>
        <Outlet />
    </>
  );
}

export default NavBar;
