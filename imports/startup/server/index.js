import { Meteor } from 'meteor/meteor';
import moment from 'moment';

//imports from api
import '/imports/api/methods.js';
import '/imports/api/blog/methods.js';
import '/imports/startup/server/publications.js'
import '/imports/api/reservation/methods.js';

//printing the date on the terminal aka server side

const date = moment(new Date()).format('DD-MM-YYYY');
console.log(`This is the date: ${date}`);
