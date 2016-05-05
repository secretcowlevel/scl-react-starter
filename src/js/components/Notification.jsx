import React, {PropTypes} from 'react';
import Alert from 'react-bootstrap/lib/Alert';

const Notification = ({notification, onDismiss}) => {
    if (notification && notification.text) {
        return (
            <Alert bsStyle={notification.style} onDismiss={onDismiss}>
                {notification.text}
            </Alert>
        );
    }
    return <div />;
};

Notification.propTypes = {
    notification: PropTypes.object.isRequired,
    onDismiss: PropTypes.func.isRequired
};

export default Notification;
