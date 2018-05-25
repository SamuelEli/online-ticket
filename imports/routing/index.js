import route from './router.js';
import HomePage from '/imports/ui/HomePage.jsx';
import ReservationForm from '/imports/ui/ReservationForm';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import RoutesComponent from '/imports/ui/RoutesComponent.jsx';
import Operators from '/imports/ui/Operators.jsx';


route('/', HomePage);
route ('/CreateAccount', CreateAccount);
route('/ReservationForm', ReservationForm)
route('/Routes',RoutesComponent);
route('/Operators', Operators)
