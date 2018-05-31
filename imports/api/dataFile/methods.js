import { Meteor } from 'meteor/meteor';
import Roles from './collections.js';

Meteor.methods({
    'reservation.create':(reservation)=>{
       const res = Reservation.insert(reservations);
       console.log(res);
       return res;
      }
    });

  
