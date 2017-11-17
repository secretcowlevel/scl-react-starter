import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';

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
