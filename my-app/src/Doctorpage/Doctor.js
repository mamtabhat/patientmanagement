import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import  './doctor.css'; 
import Footerdata from '../Templates/footer';

import Headerdata from '../Templates/Header';




class Doctordata extends Component {
    render() {
       return (
        
          <div>
              <Headerdata/>            
              <Bodydata/>
              <Secondimg/>
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
              <div className="styledr">
              <div className="imgtextdr">
      <h1 style={{textAlign:"center",color:"#fff"}}>Qualified Doctors</h1>
      </div>
    </div>  
    </div>
          </div>
            </div>

        
            );
        }
    }
    class Secondimg extends Component {

      nextpage(event){
        event.preventDefault();
        window.location = '/doctordetails';
      }


      render(){
        
        return (

          <Container fluid={true}>
          <div style={{marginTop:"30px"}}>
           <Row>
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div style={{padding:"5px"}} className="card text-center" onClick={this.nextpage}>
               <div className="firstimg" ></div>
               
               <h5 className="addstyle">Dr. Ian Smith</h5>
                   <span>DENTIST</span>
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
               </div>
               </Col>
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
                   <div  className="card text-center">
                   <div className="secondimg"  ></div>
                   <h5 className="addstyle">Dr.Lloyd Wilson</h5>
                   <span>NEUROLOGIST</span>
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
                   </div>
               </Col>
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div className="card text-center">
               <div className="thirdimg" ></div>
               <h5 className="addstyle">Dr.Rachel Parker</h5>
               <span>OPHTHALMOLOGIST</span>
              <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
             </div>
               </Col>
             
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div  className="card text-center">
                <div className="fourthimg"></div>
                <h5 className="addstyle">Dr.Alicia Henderson</h5>
                <span>PEDIATRICIAN</span>
                <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
               </div>
               </Col>
          
              <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div  className="card text-center">
               <div className="fiveimg" ></div>
               <h5 className="addstyle">Dr. Ian Smith</h5>
                   <span>DENTIST</span>
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
               </div>
               </Col>
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
                   <div  className="card text-center">
                   <div className="siximg" ></div>
                   <h5 className="addstyle">Dr.Lloyd Wilson</h5>
                   <span>NEUROLOGIST</span>
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
                   </div>
               </Col>
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div className="card text-center">
               <div className="sevenimg" ></div>
               <h5 className="addstyle">Dr.Rachel Parker</h5>
               <span>OPHTHALMOLOGIST</span>
              <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
             </div>
               </Col>
             
               <Col md="4" xs="12" lg="3" sm="6" className="addstyle">
               <div  className="card text-center">
                <div className="eightimg" ></div>
                <h5 className="addstyle">Dr.Alicia Henderson</h5>
                <span>PEDIATRICIAN</span>
                <p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
               </div>
               </Col>
           </Row>
          </div>
          </Container>

     
      );
    }
}

 export default Doctordata;