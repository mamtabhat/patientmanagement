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
              
             
      
              <Col md="2"></Col>

              <Col md="8" className="card p-1" >

             <Container>
             
              <h5 className='mt-2'>Dear {this.state.name} ,</h5>

              <p>Your Appointment booked successfully for this date and time <strong>({new Date(this.state.date).toLocaleString() })</strong>.If you want know more details contact this below information. </p>
             
              <div className='form-group'>
                
                <strong >Phone</strong>
                <div className='row'>

                 <a><i className='fa fa-phone-alt text-primary ml-3'></i></a>
                 <label className='ml-3'>86820 00055</label>
                </div> 
                <strong >Email</strong>
                <div className='row'>

                 <a><i className='fa fa fa-envelope text-primary ml-3'></i></a>
                 <label className='ml-3'>avy@gmail.com</label>
                </div>
                </div>
                <div className='float-right mb-2'>
                <a href='/' className="btn btn-success text-white ">Home</a>
                </div>
                </Container>
              </Col>
              <Col md="2"></Col>
              </Row>
              </Container>
          <Footerdata/>
        </div>
      );


    }

}

export default Contactdetail;