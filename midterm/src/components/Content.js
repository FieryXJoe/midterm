import { ThemeContext } from '../context/themeContext';

const Content = ({ children, style }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div className="container" style={(style, { backgroundColor: theme.background, color: theme.foreground })}>
                    
                    {children}
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Content;