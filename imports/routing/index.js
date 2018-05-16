import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
import ReserveForm from  '/imports/ui/ReserveTicket.jsx';




route('/', Home);
route('/ContactUs',ContactUs);
route('/CreateAccount',CreateAccount);
route('/ReserveForm',ReserveForm);
