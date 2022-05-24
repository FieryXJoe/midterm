import { ThemeContext, themes } from "../context/themeContext";

const ShoppingCartButton = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                theme.background === "#fff" ?
                    <img className='shopping-cart-icon' src= "shopping-cart.png" alt=''/>
                :
                    <img className='shopping-cart-icon' src= "shopping-cart-dark.png" alt=''/>
            )}
        </ThemeContext.Consumer>
    );
  };
  
  export default ShoppingCartButton;