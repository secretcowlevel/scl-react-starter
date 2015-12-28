import React from 'react';
import SiteStore from '../stores/SiteStore.js';
import Actions from '../actions/Actions.js';
import { Alert, Button } from 'react-bootstrap';

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
            return (
                <Alert onDismiss={this.closeNotification}>
                    {this.state.notification}
                </Alert>
            )
        }
    }

    testNotification() {
        Actions.setNotification('This is an alert through flux');
    }

    render() {
        return (
            <div>
                <h1>SCL Template v0.1</h1>
                {this.renderNotification()}
                 <Button onClick={this.testNotification} bsStyle="info">Test Notification</Button>
            </div>
        )
    }
}
// Header.propTypes = {
//     location: React.PropTypes.string.isRequired
// };
