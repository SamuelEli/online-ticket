//coded by Mapalo Chibwe
import { Meteor } from 'meteor/meteor';
import Reservations from './collections.js';
import { check } from 'meteor/check'

Reservations.allow({
    insert: () => false,
	update: () => false,
	remove: () => false
})

Meteor.methods({
    'reservations.create': (reservation) =>{
        check(reservation, Object);
        Reservations.insert(resevation);
    }
});