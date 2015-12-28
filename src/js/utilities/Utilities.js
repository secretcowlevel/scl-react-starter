// import _ from 'underscore';

let methods = {
    //http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
    formatNumber: (num, isMoney) => {
        num = Number(num);
        return (isMoney ? '$' : '') + num.toFixed(isMoney ? 2 : 0).replace(/./g, function (c, i, a) {
            return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
    },

    formatDate: (date, full, time) => {
        date = new Date(date);
        var datemap = {
            'day': {
                0: 'Sun',
                1: 'Mon',
                2: 'Tues',
                3: 'Wed',
                4: 'Thur',
                5: 'Fri',
                6: 'Sat'
            },

            'month': {
                0: 'Jan',
                1: 'Feb',
                2: 'Mar',
                3: 'Apr',
                4: 'May',
                5: 'Jun',
                6: 'Jul',
                7: 'Aug',
                8: 'Sep',
                9: 'Oct',
                10: 'Nov',
                11: 'Dec'
            },

            'monthFull': {
                0: 'January',
                1: 'February',
                2: 'March',
                3: 'April',
                4: 'May',
                5: 'June',
                6: 'July',
                7: 'August',
                8: 'September',
                9: 'October',
                10: 'November',
                11: 'December'
            }
        };

        // var date = new Date();
        // var day = datemap.day[date.getDay()];
        var year = 1900 + date.getYear();
        var formattedDate = datemap.month[date.getMonth()] + ' ' + year;
        if (full) {
            formattedDate = datemap.monthFull[date.getMonth()] + ' ' + date.getDate() + ', ' + year;
        }

        if (time) {
            var _h = date.getHours();
            var h = _h > 12 ? _h - 12 : _h === 0 ? 12 : _h;
            var _m = date.getMinutes();
            var a = _h > 11 ? 'pm' : 'am';
            var m = ('' + _m).length === 2 ? _m : '0' + _m;
            formattedDate += ' ' + h + ':' + m + a;
        }
        return formattedDate;
    }
};

module.exports = methods;
