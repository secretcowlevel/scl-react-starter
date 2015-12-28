import React from 'react';
import SiteStore from '../stores/SiteStore.js';
import Actions from '../actions/Actions.js';

export default class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.stateChanged = this.stateChanged.bind(this);
        this.state = {
            loginOpen: false,
            notification: null
        }
    }

    stateChanged() {

        this.setState({
            notification: SiteStore.getNotification()
        });
    }

    componentWillMount() {
        SiteStore.addChangeListener(this.stateChanged);
    }

    componentWillUnmount() {
        SiteStore.removeChangeListener(this.stateChanged);
    }

    closeNotification() {
        Actions.setNotification(null);
    }

    renderNotification() {

        if (this.state.notification) {
            let style = {
                position: 'absolute',
                width: 'inherit',
                zIndex: 9999
            };
            return (
                <div style={style} className="alert alert-h" role="alert">
                    {this.state.notification}
                    <button type="button" className="close" onClick={this.closeNotification}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
    }

    testNotification() {
        Actions.setNotification('This is an alert through flux');
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                {this.renderNotification()}
                <a onClick={this.testNotification}>test notification</a>
            </div>
        )
    }
}
// Header.propTypes = {
//     location: React.PropTypes.string.isRequired
// };
