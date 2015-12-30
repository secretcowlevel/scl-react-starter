const _ajax = function(options) {
    if (options.type && options.url) {
        var xhr = new window.XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        if (options.headers) {
            for (var key in options.headers) {
                if (options.headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
        }
        if (options.beforeSend) {
            options.beforeSend(xhr);
        }

        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (options.success) {
                    options.success(JSON.parse(xhr.responseText));
                }
            } else {
                this.addNotificationMessage(JSON.parse(xhr.responseText).message, 'error');
            }
        };

        xhr.send(JSON.stringify(options.data) || null);
    }
};

exports.postData = function(options, callback) {
    _ajax({
        type: 'POST',
        url: options.url,
        data: options.data,
        success: function(response) {
            if (callback) {
                callback(response);
            }
        },
        error: function(response) {
            if (callback) {
                callback(response);
            }
        },
        'dataType': 'json',
        headers: options.headers || {}
    });
};

exports.patchData = function(options, callback) {
    _ajax({
        type: 'PATCH',
        url: options.url,
        data: options.data,
        success: function(response) {
            if (callback) {
                callback(response);
            }
        },
        error: function(response) {
            if (callback) {
                callback(response);
            }
        },
        'dataType': 'json',
        headers: options.headers || {}
    });
};

exports.deleteData = function(options, callback) {
    _ajax({
        type: 'DELETE',
        url: options.url,
        success: function(response) {
            if (callback) {
                callback(response);
            }
        },
        error: function(response) {
            if (callback) {
                callback(response);
            }
        },
        'dataType': 'json',
        headers: options.headers || {}
    });
};

exports.getData = function(options, callback) {
    _ajax({
        type: 'GET',
        url: options.url,
        crossDomain: true,
        success: function(response) {
            if (callback) {
                callback(response);
            }
        },
        headers: options.headers || {}
    });
};
