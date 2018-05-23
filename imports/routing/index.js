import route from './router.js';
import HomePage from '/imports/ui/HomePage.jsx';
import ReservationForm from '/imports/ui/ReservationForm';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import Login from '/imports/ui/LogIn.jsx'
import Routes from '/imports/ui/RoutesComponent.jsx';
import RoutesForm2 from '/imports/ui/RoutesComponent2.jsx';


route ('/CreateAccount', CreateAccount);
route ('/Login', Login);
route('/', HomePage);
route('/ReservationForm', ReservationForm)
route('/Routes',Routes);
route('/RoutesForm2',RoutesForm2);
