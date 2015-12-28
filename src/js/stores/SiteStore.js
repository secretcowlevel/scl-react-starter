import Dispatcher from '../dispatcher/Dispatcher.js';
import EventEmitter from 'events';
import Constants from '../constants/Constants.js';

class SiteStore extends EventEmitter {
    constructor() {
        super();
        this.notification = null;
        this.addChangeListener = this.addChangeListener.bind(this);
        this.removeChangeListener = this.removeChangeListener.bind(this);

        Dispatcher.register((payload) => {
            switch (payload.actionType) {
                case Constants.SET_NOTIFICATION:
                    this.notification = payload.notification;
                    this.emit('change');
                break;
                default:
                break;
            }
            return true; // Needed for Flux promise resolution
        });
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    getNotification() {
        return this.notification;
    }

}

export default new SiteStore();
