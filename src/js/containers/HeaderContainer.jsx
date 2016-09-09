import {connect} from 'react-redux';
import {addNotification} from '../actions';
import Header from '../components/Header.jsx';

const mapStateToProps = (state) => {
    const {notification, user} = state.app;
    return {notification, user};
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
