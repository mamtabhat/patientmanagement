

import React, { Component } from 'react';
import { Container, Col} from 'react-bootstrap';
import bootbox from 'bootbox';
import Logoimg from '../images/logonew.png';
import axios from 'axios';
import config from '../config/config'
import  '../Templates/header.css'; 
import '../App-page/App.css'

const position = {
  position: "fixed",
  zIndex: "9999",
  top: "0",
  right: "0",
  left: "0",
  marginRight: "auto",
  marginLeft: "auto"
}


export default class Headerdata extends Component {
   

    constructor(props){
      super(props);
  
      this.state = {
        show: false,
      
      }
    
      this.toggleShow = this.toggleShow.bind(this);
      this.hide = this.hide.bind(this);
    }
  
    toggleShow(){
      this.setState({show: !this.state.show});
    }
    hide(e){
      if(e && e.relatedTarget){
        e.relatedTarget.click();
      }
      this.setState({show: false});
    }
    
 

   Logout(){

    var data = sessionStorage.getItem('Auth');
    

 console.log("data", data);
 
  
  
    var auth =  sessionStorage.getItem('auth');
     var username =sessionStorage.getItem('username');
     var sadmin = sessionStorage.getItem('sadmin');
    bootbox.confirm({
      message: "Do you want to Logout?",
      buttons: {
        
          confirm: {
           
                label: 'Confirm',
                className: 'btn-success'
          },
          cancel: {
            
               label: 'Cancel',
               className: 'btn-danger float-right'
          }
      },
      callback: function (result) {

        if (result === true) {
          axios({
            method: 'get',
            url: config.url+'ctk/logout',
            headers: {
                'Content-Type': 'application/json',
                'auth': auth
            }
            })
            .then( (response) => {
                //handle success
          
      
             console.log(response);
      
             window.location = '/';
             
             sessionStorage.removeItem('auth', auth);
             sessionStorage.removeItem('sadmin', sadmin);
             sessionStorage.removeItem('username', username);
      
            })
            .catch( (response) => {
                //handle error
                console.log(response);
            });
        }

      }
  });

   
   

   
   }


    render(){
      const username = sessionStorage.getItem('username');
       const sadmin = sessionStorage.getItem('sadmin')  
        
       if(sadmin === '2'){
        var body = <div style={position}>
         <header>
          <nav  className="navbar navbar-expand-lg navbar-light bg-light">
         
         <Container fluid={true}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Col md="2" xs="4" sm="2" lg="2" >
            <img style={{width: "100%"}} src={Logoimg}></img>
            </Col>
            
           
            <Col md="10" xs="8" sm="10" lg="10" >
            <div className="collapse navbar-collapse float-right"  id="navbarSupportedContent">
             
           
              <ul style={{fontSize: "18px",padding:"10px"}} className="navbar-nav mr-auto">
              <li className="nav-item ">
                 <a className="nav-link" style={{color:"#007bff"}} href="/Appoinmentlist">Appointments</a>
               </li>
               <li className="nav-item ">
                 <a className="nav-link" style={{color:"#007bff"}} href="/Patientlist">Patients</a>
               </li>
              
              <li className="nav-item ">
                  <a className="nav-link" style={{color:"#007bff"}} href="/userdata">Users</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" style={{color:"#007bff"}} href="/dischargetemplate">Discharge Templates</a>
                </li>
                </ul>
                <li className="navbar-nav mr-auto dropdown">
                <a href="#" className="dropdown-toggle" style={{fontSize: "18px"}} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Welcome {username}<span><i class="downarrow"></i></span></a>
                <ul style={{padding:"5px"}} className="dropdown-menu newsfeed-home">
                  <li className="dropdown" ><a href="/changepassword"  >Change Password</a></li>
                  <li className="dropdown" ><a href="/changename"  >Change Username</a></li>
                  <li className="dropdown" ><a href="#"  onClick={this.Logout} >Logout</a></li>

                </ul>
              </li>
            
              
              
            </div>
            
              </Col>
            </Container>
            </nav>
            </header>
         </div>
       }
       else{
        var body = <div style={position}>
        <header>
         <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Container fluid={true}>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <Col md="2" xs="4" sm="2" lg="2" >
           <img style={{width: "100%"}} src={Logoimg}></img>
           </Col>
           
          
           <Col md="10" xs="8" sm="10" lg="10" >
           <div className="collapse navbar-collapse float-right"  id="navbarSupportedContent">
            
          
             <ul style={{fontSize: "18px",padding:"10px"}} className="navbar-nav mr-auto">
             
               <li className="nav-item ">
                 <a className="nav-link" style={{color:"#007bff"}} href="/Appoinmentlist">Appointments</a>
               </li>
               <li className="nav-item ">
                 <a className="nav-link" style={{color:"#007bff"}} href="/Patientlist">Patients</a>
               </li>
               </ul>
               <li className="navbar-nav mr-auto dropdown">
               <a href="#" className="dropdown-toggle" style={{fontSize: "18px"}} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Welcome {username}<span><i class="downarrow"></i></span></a>
               <ul style={{padding:"5px"}} className="dropdown-menu newsfeed-home">
               <li className="dropdown" ><a href="/changepassword"  >Change Password</a></li>
                  <li className="dropdown" ><a href="/changename"  >Change Username</a></li>
                 <li className="dropdown" ><a  href="#" onClick={this.Logout} >Logout</a></li>

               </ul>
             </li>
           
             
             
           </div>
           
             </Col>
           </Container>
           </nav>
           </header>
        </div>
       }
        return ( 
          <div>
            {body}
          </div>
        )
      }
  }