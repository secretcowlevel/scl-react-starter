// import PledgeUtils from '../utilities/PledgeUtils.js';
import Constants from '../constants/Constants.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let methods = {

    setNotification: (notification) => {
        Dispatcher.dispatch({
            actionType: Constants.SET_NOTIFICATION,
            notification: notification
        });
    }
};

module.exports = methods;
