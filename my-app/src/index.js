import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import Popper from 'popper.js';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App-page/App'
import Login from './loginpage/Login';
import Doctor from './Doctorpage/Doctor';
import Appoinment from './Appoinmentpage/Appoinment';
import Register from './Registerpage/Register';
import department from './Departmentpage/department';
import contact from './Contactpage/contact';
import login2 from './loginpage/login2';
import Appoinmentlist from './Appoinmentlist-page/Appoinmentlist';
import doctordetails from './Doctordetail-page/doctordetails';
import createuser from './user/createuser';
import Edituser from './user/edituser';
import userdata from './user/userdata';
import Casesheets from './Casesheets/casesheets';
import Createcasesheets from './Casesheets/createcasesheet'
import Editcasesheetdata from './Casesheets/Editcasesheet'
import Createappointment from './Appoinmentlist-page/CreateAppointment'
import Patientlist from './Patient-page/patientlist'
import Createpatient from './Patient-page/Createpatient'
import Editpatient from './Patient-page/Editpatient'
import Editappointment from './Appoinmentlist-page/EditAppointment'
import changepassword from './loginpage/changepassword'
import Viewpatient from './Patient-page/Viewpatient'
import dischargetemplate from './discharge-templates/dischargetemplate'
import createtemplate from './discharge-templates/createtemplate'
import Edittemplate from './discharge-templates/edittemplate'
import createdischarge from './discharge-sheets/createdischarge'
import editdischarge from './discharge-sheets/modifydischarge'
import changename from './loginpage/changeusername'


const routs = (
   <Router>
      
         <Route exact path="/" component={App} />
         <Route path="/Login" component={Login} />
         <Route path="/Doctor" component={Doctor} />
         <Route path="/Appoinment" component={Appoinment} />
         <Route path="/Register" component={Register} />
         <Route path="/department" component={department} />
         <Route path="/contact" component={contact} />
         <Route path="/login2" component={login2} />
         <Route path="/Appoinmentlist" component={Appoinmentlist} />
         <Route path="/doctordetails" component={doctordetails} />
         <Route path="/createuser" component={createuser} />
         <Route path="/Edituser/:id/:phone/:name/:sadmin" component={Edituser} />
         <Route path="/userdata" component={userdata} />
         <Route path="/Createappointment/:id/" component={Createappointment} />
         <Route path="/Editappointment/:id/:type/:adate/:reference" component={Editappointment} />
         <Route path="/Patientlist" component={Patientlist} />
         <Route path="/Createpatient" component={Createpatient} />
         <Route path="/changepassword" component={changepassword} />
         <Route path="/Editpatient/:id/:gender/" component={Editpatient } />
         <Route path="/Viewpatient/:id/" component={Viewpatient } />
         <Route path="/dischargetemplate/" component={dischargetemplate } />
         <Route path="/createtemplate/" component={createtemplate } />
         <Route path="/Edittemplate/:id/:name/:content/" component={Edittemplate } />
         <Route path="/editdischarge/:id/" component={editdischarge}></Route>
         <Route path="/createdischarge/" component={createdischarge}></Route>
         <Route path="/changename/" component={changename} />
         <Route path="/Casesheets/:pid" component={Casesheets} />
         <Route path="/Createcasesheets/:pid" component={Createcasesheets} />
         <Route path="/Editcasesheet/:pid/:cid/:aseg/:pseg" component={Editcasesheetdata} />
   </Router>
);
ReactDOM.render(routs, document.getElementById('root'));