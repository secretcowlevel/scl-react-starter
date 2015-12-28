import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <Header />
                    <div id="main-container center">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
