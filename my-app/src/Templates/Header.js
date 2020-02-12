

import React, { Component } from 'react';
import { Container, Col} from 'react-bootstrap';

import Logoimg from '../images/logonew.png';

import  '../Templates/header.css'; 



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
        show: false
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
    
    render(){
         
          return (
        <div style={position}>
         <header>
          <nav  className="navbar navbar-expand-lg navbar-light bg-info">
         
         <Container fluid={true}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Col md="3" xs="8" sm="6" lg="2">
            <img style={{width:"70%"}} src={Logoimg}></img>
            </Col>
            
           
            <Col md="9" xs="12" sm="10" lg="6">
            <div className="collapse navbar-collapse float-right"  id="navbarSupportedContent">
              <ul style={{fontSize: "18px"}} className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link text-white" href="/Doctor">Doctors</a>
                </li>
                <li className="nav-item">
                <a  className="nav-link text-white"  href="/department">Departments</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link text-white" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/login">Login</a>
                </li>
              </ul>
              
            </div>
            
              </Col>
            </Container>
            </nav>
            </header>
            </div>
         
        )
      }
  }