import { ThemeContext } from '../context/themeContext';
import { ThemeType } from '../types/ThemeType';

const Content = (props) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div className="container" style={(props.style, { backgroundColor: theme.background, color: theme.foreground })}>
                    {props.children}
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Content;