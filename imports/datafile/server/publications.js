//coded by Mapalo Chibwe
import { Meteor } from 'meteor/meteor';
import Reservations from '../collections.js';

Meteor.publish('reservations',function(){
    
        return Reservations.find();
});