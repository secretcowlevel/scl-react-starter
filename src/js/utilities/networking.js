import fetch from 'isomorphic-fetch';

function _ajax(options) {
    return fetch(options.url, {
        method: options.type,
        headers: Object.assign({}, options.headers || {}, {
            'Content-Type': 'application/json; charset=utf-8'
        }),
        body: JSON.stringify(options.data)
    });
}

exports.postData = (options, callback) => {
    return _ajax({
        type: 'POST',
        url: options.url,
        data: options.data,
        success: (response) => {
            if (callback) {
                callback(response);
            }
        },
        error: (response) => {
            if (callback) {
                callback(response);
            }
        },
        dataType: 'json',
        headers: options.headers || {}
    });
};

exports.patchData = (options, callback) => {
    return _ajax({
        type: 'PATCH',
        url: options.url,
        data: options.data,
        success: (response) => {
            if (callback) {
                callback(response);
            }
        },
        error: (response) => {
            if (callback) {
                callback(response);
            }
        },
        dataType: 'json',
        headers: options.headers || {}
    });
};

exports.deleteData = (options, callback) => {
    return _ajax({
        type: 'DELETE',
        url: options.url,
        success: (response) => {
            if (callback) {
                callback(response);
            }
        },
        error: (response) => {
            if (callback) {
                callback(response);
            }
        },
        dataType: 'json',
        headers: options.headers || {}
    });
};

exports.getData = (options, callback) => {
    return _ajax({
        type: 'GET',
        url: options.url,
        crossDomain: true,
        success: (response) => {
            if (callback) {
                callback(response);
            }
        },
        headers: options.headers || {}
    });
};

exports.getBaseDomain = () => {
    return window.localStorage.getItem('scl-server-override') || 'http://localhost:1337';
};
