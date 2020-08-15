const moment = require("moment-timezone");

let dateVal = "2020-09-01T13:00:00.000Z";
console.log(moment.tz(dateVal, moment.tz.guess()).format("LLL z"));

console.log(moment(dateVal).format("LLL z"));

console.log(moment(dateVal).format());
