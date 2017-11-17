import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Notification from './Notification';
import pjson from '../../../package.json';

const Header = ({testNotification, notification, dismissNotification}) => {
    return (
        <div>
            <h1>SCL Template v{pjson.version}</h1>
            <Notification notification={notification} onDismiss={dismissNotification} />
            <RaisedButton onClick={testNotification} label="Test Redux" primary />
        </div>
        );
};

const {shape, func, string} = PropTypes;
Header.propTypes = {
    notification: shape({
        text: string,
        style: string
    }),
    testNotification: func.isRequired,
    dismissNotification: func.isRequired
};

export default Header;
