import route from './router.js';
<<<<<<< HEAD
import Home from '/imports/ui/Home.jsx';

//import ContactUs from '/imports/ui/ContactUs.jsx';
//import AboutUs from '/imports/ui/AboutUs.jsx'
route('/', Home);
//route('/contact', ContactUs);
//route('/about', AboutUs);
=======
// import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import ReserveForm from  '/imports/ui/ReserveTicket.jsx';
// import  LogIn from '/imports/ui/LogIn.jsx';




// route('/',Home);
route('/ContactUs',ContactUs);
route('/CreateAccount',CreateAccount);
route('/ReserveForm',ReserveForm);
// route('/LogIn',LogIn);
>>>>>>> 48ba6e3a9229c2d5770fc286d2bb3dc03af1b6f0
