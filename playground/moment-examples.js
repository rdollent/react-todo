const moment = require('moment');


console.log(moment().format());

// January 1st 1970 @ 12:00am -> UNIX timestamp of 0
// January 1st 1970 @ 12:01am -> UNIX timestamp of 60
// December 31st 1969 @ 11:59pm -> Unix timestamp of -60

const now = moment();

// number of seconds since jan 1, 1970 12:00am
console.log('Current timestamp ', now.unix());

const timestamp = 1541801058;
const currentMoment = moment.unix(timestamp);

console.log('Current moment ', currentMoment.format('MMM D, YYYY @ hh:mm a'));
// https://momentjs.com/docs/#/displaying/