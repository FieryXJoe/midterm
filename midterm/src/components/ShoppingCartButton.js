import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";


const ShoppingCartButton = () => {
    const navigate = useNavigate();
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                theme.background === "#fff" ?
                    <img className='shopping-cart-icon' src= "shopping-cart.png" alt='' onClick={() => navigate('cart')}/>
                :
                    <img className='shopping-cart-icon' src= "shopping-cart-dark.png" onClick={() => navigate('cart')} alt=''/>
            )}
        </ThemeContext.Consumer>
    );
  };
  
  export default ShoppingCartButton;