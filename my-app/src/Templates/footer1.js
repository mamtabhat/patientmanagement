
import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import '../Templates/footer.css'
export default class Footer extends Component {

    render(){
        
        return (
          
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="footerstyle" style={{position: "fixed",bottom:"0"}} >
              <Container fluid={true}>
          
        <div className="borderstyend">
        <Row>
        <Col md="12" lg="12" xs="12" sm="12">

        <p className="text-center"  style={{color:"#cccccc"}}>@Copyright 2020. All Rights Reserved By AVY EYE CARE & OPTICALS</p>

        </Col>
          </Row>
          </div>
       
        </Container>
            
            </div>
              </div>
             
              
          </div>
         
    
         

            </div>

        
            );
        }
    }

