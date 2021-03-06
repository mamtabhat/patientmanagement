
import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import '../Templates/footer.css'
export default class Footer extends Component {

    render(){
        
        return (
          
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="footerstyle">
              <Container fluid={true}>
           <div >
           <Row style={{margin:"50px"}}>
        <Col md="4" xs="12" lg="3" sm="6">
            <div >
           
            <h5 className="menustyle">Avy Eye Care {'&'} Opticals</h5>
            <div className="row">
            <div  className="bordersty1">
            </div>
            <div  className="bordersty2">
            </div>

           
            </div>
           
            <p className="parasty">Our ophthalmology services are geared to constantly challenge the status quo and explore new means to protect and restore sight. Eye care specialists at Westminster have the skills and technology to offer the best possible preventive care and corrective procedures for your vision. As it deserves nothing less.</p>
           
           
            </div>
        </Col>
        <Col md="4" xs="12" lg="3" sm="6">
            <div >
          
            <h5 className="menustyle">OUR DEPEARTMENT</h5>
            <div className="row">
            <div  className="bordersty1">
            </div>
            <div  className="bordersty2">
            </div>
            </div>
            <ul >
            <li className="ulstyle">&#10140;  Lasik.</li>
            <li className="ulstyle">&#10140;  Glaucoma.</li>
            <li className="ulstyle">&#10140;  Neuro-Ophthalmology.</li>
            <li className="ulstyle">&#10140;  Retina Care.</li>
            <li className="ulstyle">&#10140;  Diabetic Retinopathy.</li>
            <li className="ulstyle">&#10140;  Lasers.</li>
            <li className="ulstyle">&#10140;  Cataract.</li>
            </ul>
            </div>
        </Col>
       

        <Col md="4" xs="12" lg="3" sm="6">
            <div style={{marginBottom:"20px"}} >
          
            <h5 className="menustyle">CONTACT</h5>
            <div className="row">
            <div  className="bordersty1">
            </div>
            <div  className="bordersty2">
            </div>
            </div>
             <div className="row" style={{marginTop:"20px",padding:"5px"}}>

               <i style={{fontSize:"25px"}} className="fas fa-phone listyle"></i>
               <label className="spanstyle" >Phone</label>
               <div className="input-group margin-bottom-sm ">
                
               <p className="listyle1" > 86820 00055</p>
               </div>
               </div> 
               <div  className="borderstyend">
              <div className="row" style={{padding:"5px"}}>

            <i style={{fontSize:"25px"}} className="fas fa-envelope listyle"></i>
           <label className="spanstyle" >Email</label>
            <div className="input-group margin-bottom-sm ">
           
            <p className="listyle1" > support@validtheme.com</p>
            </div> 
            </div> 
            </div> 
            <div  className="borderstyend">
            <div className="row" style={{padding:"5px"}}>

               <i style={{fontSize:"25px"}} className="fas fa-map listyle"></i>
                <label className="spanstyle" >Address</label>
                <div className="input-group margin-bottom-sm ">
               
               <p className="listyle1" > Jansons MRI Opposite,</p>
               <p className="listyle1">Perunduari Road,</p>
               <p className="listyle1" > Erode - 638 011</p>
             </div> 
             </div> 
             </div>
             {/* <div className="from-group" style={{padding:"10px"}}>

                <h6 style={{color:"#fff"}} >SUBSCRIBE NEWSLETTER</h6>

                 <div  class="input-group margin-bottom-sm">
                
                 <input
                 type="email"
                 name="email"
                 className="form-control inputstyle"
                 placeholder="Enter your e-mail here"
                 
                  />
                 <span> <i  className="fa fa-paper-plane form-control inputstyle1"></i></span>
                    </div> 
               
                </div>*/}

            </div>
        </Col>
        <Col md="4" xs="12" lg="3" sm="6">
            <div style={{marginBottom:"20px"}} >
          


            <h5 className="menustyle">CONSULTING TIME</h5>
            <div className="row">
            <div  className="bordersty1">
            </div>
            <div  className="bordersty2">
            </div>
            </div>
          <p className="parasty1">Monday - Sunday</p>
          <p className="parasty2">&#10140; 10.00 am - 02.00 pm </p>
          <p className="parasty2">&#10140; 4.00 pm - 8.00 pm</p>
        
            {/* <h5 className="menustyle">LATEST TWEETS</h5>
            <div className="row">
            <div  className="bordersty1">
            </div>
            <div  className="bordersty2">
            </div>
            </div>
            <p className="parasty"> @Becare Looking for an awesome CREATIVE WordPress Theme? Find it here: http://t.co/0WWEMQEQ48</p>
          
            
             <div className="row">

               <i  className="fab fa-twitter listyle"></i>
               <p className="listyle1" > 01 day ago</p>
               </div> 
               </div> 
               <p className="listyle2">@Jisham It is a long established fact that a reader will be distracted by the readable . Find it here: http://t.co/0WWEMQEQ48</p>
          
              <div className="row">

            <i  className="fab fa-twitter listyle"></i>
            <p className="listyle1" > 02 day ago</p> */}
            </div> 
            
        </Col>
        </Row>
        </div>
        
        
       
        </Container>
       
        <div className="borderstyend bg-info">
        <Container fluid={true}>
        <Row>
        <Col md="12" lg="12" xs="12" sm="12" >

        <p className="text-white text-center mt-1" >@Copyright 2020. All Rights Reserved By AVY EYE CARE & OPTICALS</p>

        </Col>

        {/* <Col md="6" lg="6" xs="12" sm="8" >
        <div className="row" style={{float:"right",margin:"10px"}}>
         <p className="spanstyle">Terms of user</p>
         <p className="spanstyle">License</p>
         <p className="spanstyle">Support</p>
         </div>
         </Col> */}
          </Row>
          </Container>
          </div>
         
            </div>
              </div>
             
              
          </div>
         
    
         

            </div>

        
            );
        }
    }

