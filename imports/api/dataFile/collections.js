import {Mongo} from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

const Reservation = new Mongo.Collection('ReservationForm'); 
export default Reservation;