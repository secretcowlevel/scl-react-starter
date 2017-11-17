import React from 'react';
import PropTypes from 'prop-types';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'block'
};

const Notification = ({notification, onDismiss}) => {
    if (notification && notification.text) {
        return (
            <Paper style={style} onClick={onDismiss} zDepth={5}>
                {notification.style}
                - {notification.text}
            </Paper>
        );
    }
    return <div />;
};

const {string, shape} = PropTypes;
Notification.propTypes = {
    notification: shape({text: string, style: string}),
    onDismiss: PropTypes.func.isRequired
};

export default Notification;
