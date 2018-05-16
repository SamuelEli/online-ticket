import route from './router.js';
// import Home from '/imports/ui/Home.jsx';
// import ContactUs from '/imports/ui/ContactUs.jsx';
// import CreateAccount from '/imports/ui/CreateAccount.jsx';
// import ReserveForm from  '/imports/ui/ReserveTicket.jsx';
// import  LogIn from '/imports/ui/LogIn.jsx';
import Home from './../../imports/ui/Home';
import ReservationForm from '/imports/ui/ReservationForm';




route('/',Home);
route('/ReservationForm', ReservationForm);
// route('/ContactUs',ContactUs);
// route('/CreateAccount',CreateAccount);
// route('/ReserveForm',ReserveForm);
// route('/LogIn',LogIn);
