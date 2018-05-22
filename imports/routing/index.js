import route from './router.js';
import HomePage from '/imports/ui/HomePage.jsx';
import ReservationForm from '/imports/ui/ReservationForm';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import Login from '/imports/ui/LogIn.jsx'
import RoutesComponent from '/imports/ui/RoutesComponent.jsx';



route ('/CreateAccount', CreateAccount);
route ('/Login', Login);
route('/', HomePage);
route('/ReservationForm', ReservationForm)
route('/Routes',RoutesComponent);
