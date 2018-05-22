import route from './router.js';
import HomePage from '/imports/ui/HomePage.jsx';
import  CreateAccount from '/imports/ui/CreateAccount.jsx';
import Login from '/imports/ui/LogIn.jsx'

route ('/Createaccount', CreateAccount);
route ('/Login', Login);
route('/', HomePage);
