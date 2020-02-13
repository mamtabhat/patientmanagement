

import React, { Component } from 'react';
import { Container, Col} from 'react-bootstrap';
import bootbox from 'bootbox';
import Logoimg from '../images/logonew.png';
import axios from 'axios';
import config from '../config/config'
import  '../Templates/header.css'; 
import '../App-page/App.css'
import $ from 'jquery'; 

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
        menu: false
      }
    
      this.toggleShow = this.toggleShow.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
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
    toggleMenu(){
      console.log("hi")
      this.setState({ menu: !this.state.menu })
    }
 

   Logout = () => {

      console.log(window.innerWidth,"welcome")
      console.log(window.innerWidth < 991)
    if(window.innerWidth < 991)
   {
    this.setState({ menu: !this.state.menu })

   }
  

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
       const show = (this.state.menu) ? "show" : "" ;
       if(sadmin === '2'){
        var body = <div style={position}>
         <header>
          <nav  className="navbar navbar-expand-lg navbar-light bg-info">
         
         <Container fluid={true}>
            <button className="navbar-toggler bg-white" type="button"   onClick={ this.toggleMenu } aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Col md="3" xs="6" sm="4" lg="2">
            <img style={{width: "100%"}} src={Logoimg}></img>
            </Col>
            
           
            <Col  md="9" xs="12" sm="8" lg="10" id="navbarmenu">
            <div className={"float-right collapse navbar-collapse " + show}  >
             
           
            <ul style={{fontSize: "18px"}} className="navbar-nav mr-auto">
              <li className="nav-item ">
                 <a className="nav-link" style={{color:"#fff"}} href="/Appoinmentlist">Appointments</a>
               </li>
               <li className="nav-item ">
                 <a className="nav-link" style={{color:"#fff"}} href="/Patientlist">Patients</a>
               </li>
              
              <li className="nav-item ">
                  <a className="nav-link" style={{color:"#fff"}} href="/userdata">Users</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" style={{color:"#fff"}} href="/dischargetemplate">Discharge Templates</a>
                </li>
                </ul>
                <li className="navbar-nav mr-auto dropdown">
                <a href="#" className="dropdown-toggle" style={{fontSize: "18px",color:"#fff"}} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Welcome {username}<span><i class="downarrow"></i></span></a>
                <ul style={{padding:"5px"}} className="dropdown-menu newsfeed-home">
                  <li className="dropdown" ><a href="/changepassword" style={{color:"#17a2b8"}} >Change Password</a></li>
                  <li className="dropdown" ><a href="/changename" style={{color:"#17a2b8"}} >Change Username</a></li>
                  <li className="dropdown" ><a href="#" style={{color:"#17a2b8"}}  onClick={this.Logout} >Logout</a></li>

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
        <nav  className="navbar navbar-expand-lg navbar-light bg-info">
        
        <Container fluid={true}>
           <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
            <Col md="3" xs="6" sm="4" lg="2">
           <img style={{width: "100%"}} src={Logoimg}></img>
           </Col>
           
          
           <Col md="9" xs="12" sm="8" lg="10">
           <div className="collapse navbar-collapse float-right"  id="navbarSupportedContent">
            
          
             
           <ul style={{fontSize: "18px"}} className="navbar-nav mr-auto">
              <li className="nav-item ">
                 <a className="nav-link" style={{color:"#fff"}} href="/Appoinmentlist">Appointments</a>
               </li>
               <li className="nav-item ">
                 <a className="nav-link" style={{color:"#fff"}} href="/Patientlist">Patients</a>
               </li>
                </ul>
                <li className="navbar-nav mr-auto dropdown">
                <a href="#" className="dropdown-toggle" style={{fontSize: "18px",color:"#fff"}} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Welcome {username}<span><i class="downarrow"></i></span></a>
                <ul style={{padding:"5px"}} className="dropdown-menu newsfeed-home">
                  <li className="dropdown" ><a href="/changepassword" style={{color:"#17a2b8"}} >Change Password</a></li>
                  <li className="dropdown" ><a href="/changename" style={{color:"#17a2b8"}} >Change Username</a></li>
                  <li className="dropdown" ><a href="#" style={{color:"#17a2b8"}}  onClick={this.Logout} >Logout</a></li>

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
