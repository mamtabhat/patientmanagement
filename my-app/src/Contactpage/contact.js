import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';

import Footerdata from '../Templates/footer';
import Headerdata from '../Templates/Header';
import  '../Contactpage/contact.css'; 

class contactdata extends Component {
    render() {
       return (
        
          <div>
              <Headerdata/>            
              <Bodydata/>
              <Description/>
              <Contentdesc/>
              <Footerdata/>
          </div>
       );
    }
  }
  
  class Bodydata extends Component {

    render(){
        
        return (
          
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="stylecont">
              <div className="imgtextcont">
               <h1 style={{textAlign:"center",color:"white"}}>Contact Us</h1>
             </div>
             </div>  
             </div>
          </div>
       </div>

        
            );
        }
    }
    class Contentdesc extends Component {
      render(){
          
          return (
          <Container fluid={true}>
         <div style={{margin:"30px"}}>
          <Row>
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
                  <div  className="card text-center addstyle1">
                  <span className="fas fa-map-marked-alt style3" aria-hidden="true"></span>
                  <h5 className="addstyle">LOCATION</h5>
                  <p>Jansons MRI Opposite,Perunduari Road, Erode - 638 011</p>
                  </div>
              </Col>
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
              <div className="card text-center addstyle1">
              <span className="fas fa-phone style3" aria-hidden="true"></span>
              <h5 className="addstyle">Phone</h5>
              <p>86820 00055</p>
            </div>
              </Col>
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
              <div className="card text-center addstyle1">
              <span  className="fas fa-envelope-open style3" aria-hidden="true"></span>
              <h5 className="addstyle">EMAIL</h5>
              <p>info@yoursite.com</p>
              </div>
              </Col>
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
              <div className="card text-center addstyle1">
              <span  className="fa fa-globe style3" aria-hidden="true"></span>
               <h5 className="addstyle">WEBSITE</h5>
               <p>yoursite.com</p>
              </div>
              </Col>
          </Row>
         </div>
        
         </Container>
          
              );
          }
      }
    class Description extends Component {
        render(){
            
            return (
          
          
           <div  className="divstyle">
           
            <h4 className="divstyle1">Get In Touch With Us</h4>
              <p style={{textAlign:"justify"}}>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>
            </div>
        
                );
            }
        }

      
  export default contactdata;

  