import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/Header';
import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import axios from 'axios';
import config from '../config/config'
import { Container,Row,Col} from 'react-bootstrap';
import '../Patient-page/patient.css';
import $ from 'jquery';

class Contactdetail extends Component {

   
    constructor(props){
        super(props); 

        var match = props.match;
        this.state = { 
        
           name:match.params.name,
           date:match.params.date
         
             
      };
     
    }

    render(){
        
        return (
          <div>
          <Headerdata/>
          <Container>
          <div className="margindata">
                <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item  ml-1"><a  className="breadcrumb-item text-decoration-none text-muted" href='/'>Home</a></li>
                   <li className="breadcrumb-item  ml-1"><a  className="breadcrumb-item text-decoration-none text-muted" href='/Appoinment'>Appointment Booking</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Contact Detail</strong></li>
                </ol>
             </div>
              <Row>
              
             
      
              <Col md="3"></Col>

              <Col md="6" className="margindata">

              <h5 >Dear {this.state.name} ,</h5>

              <p>Your Appointment booked successfully for this date and time <strong>({new Date(this.state.date).toLocaleString() })</strong>.If you want know more details contact this number <strong>86820 00055 .</strong></p>
              <a href='/' className="btn btn-success text-white">Home</a>
              </Col>
              <Col md="3"></Col>
              </Row>
              </Container>
          <Footerdata/>
        </div>
      );


    }

}

export default Contactdetail;