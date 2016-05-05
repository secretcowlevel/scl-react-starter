import {addNotification} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';

const mapStateToProps = (state) => {
    const {notification: notification, user: user} = state;
    return {notification: notification, user: user};
};

const mapDispatchToProps = (dispatch) => {
    return {
        testNotification: () => {
            dispatch(addNotification('Hello World!', 'info'));
        },
        dismissNotification: () => {
            dispatch(addNotification(''));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
