import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
import moment from 'moment';
import '/imports/api/methods.js'
import '/imports/routing/index.js'

//This is where we called the meteor method

// Meteor.call('printSomething', "HK1", "100", "Can do better");
// Meteor.call('alertSomething');
// Meteor.call();

const arrName = [ "HK1","100", "CAN DO BETTER"];

// Meteor.call('printSomething',arrName,(err,result)=>{
//   const element = document.getElementById('target');
//   element.innerHTML= `The message is: name: ${result[0]}, mark: ${result[1]}, remarks: ${result[2]}`;
// });

// Meteor.call('alertSomething');

const date = moment(new Date()).format('DD-MM-YYYY');
console.log("this is the date:" + date);


//Printing the date on the console
// const date = moment(new Date()).format('DD-MM-YYYY');
// console.log(`This is the date: ${date}`);
=======
// import  '/imports/routing/index.js';
import '/imports/routing';
>>>>>>> 48ba6e3a9229c2d5770fc286d2bb3dc03af1b6f0
