import { ThemeContext } from '../context/themeContext';

const Header = ({ children, style }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="nav-bar"         
        style={(style, { backgroundColor: theme.background , color: theme.foreground})}>
          <div className="button-container"
          style={(style, { backgroundColor: theme.background , color: theme.foreground})}>
              {children}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;