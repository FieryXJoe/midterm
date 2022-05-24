import { ThemeContext } from '../context/themeContext';

const BodyComponent = ({ children, style }) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div className="body"
                    style={(style, { backgroundColor: theme.background, color: theme.foreground })}>
                    {children}
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default BodyComponent;