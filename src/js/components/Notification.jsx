import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Notification = ({notification, onDismiss}) => {
    if (notification && notification.text) {
        return (
            <Card>
                <CardHeader
                    title="NOTIFICATION"
                    subtitle={notification.style}
                />
                <CardText>
                    {notification.text}
                </CardText>
                <CardActions>
                    <FlatButton label="close" onClick={onDismiss} />
                </CardActions>

            </Card>
        );
    }
    return <div />;
};

const {string, shape} = PropTypes;
Notification.propTypes = {
    notification: shape({
        text: string,
        style: string
    }),
    onDismiss: PropTypes.func.isRequired
};

export default Notification;
