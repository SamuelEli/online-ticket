import route from './router.js';
import HomePage from '/imports/ui/HomePage.jsx';
import ReservationForm from '/imports/ui/ReservationForm';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import Login from '/imports/ui/LogIn.jsx'
import RoutesForm from '/imports/ui/RoutesComponent.jsx';



route ('/Createaccount', CreateAccount);
route ('/Login', Login);
route('/', HomePage);
route('/ReservationForm', ReservationForm)
route('/RoutesForm',RoutesForm);
// route('/CreateAccount',CreateAccount);
// route('/ReserveForm',ReserveForm);
// route('/LogIn',LogIn);
