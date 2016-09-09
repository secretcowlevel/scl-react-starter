import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../containers/HeaderContainer.jsx';
import Footer from './Footer.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
if (typeof window !== 'undefined') {
    window.React = React;
}

export default class Root extends React.Component {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="container">
                    <div className="col-md-12">
                        <Header />
                        <div id="main-container center">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
