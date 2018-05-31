import {Mongo} from 'meteor/mongo';
import  'imports/dataFile/methods.js';
import { Accounts } from 'meteor/accounts-base';

const Reservation = new Mongo.Collection('ReservationForm'); 
export default Reservation;