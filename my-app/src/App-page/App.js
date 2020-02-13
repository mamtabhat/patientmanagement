import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Img1 from '../images/banner-center.jpg'
import Img2 from '../images/banner.png'
import Img3 from '../images/banner2.jpg'
import Imgdata from '../images/secondimg.png'

import '../App-page/App.css'

import Footerdata from '../Templates/footer';
import Headerdata from '../Templates/Header'





//C:\Users\W4T\Desktop\Myreactapp\my-app\public\logo512.png


// const style1 = {
//     backgroundImage: "url(" + Img1 + ")",
//     width: "100%",
//     height: "450px",
//     backgroundSize: "cover",
//     backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       marginTop: "50px"
    
   
//   }


  const Imgfile = {
    backgroundImage: "url(" + Imgdata + ")",
    width: "100%",
    height: "450px",
    backgroundRepeat: 'no-repeat'
 
   
}



  
// const secondimg = {
//     backgroundImage: "url(" + Img3 + ")",
//     width: "100%",
//     height: "450px",
//     backgroundSize: "cover",
//   backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     marginTop: "50px"
   
   
// }
// const thirdimg = {
//   backgroundImage: "url(" + Img2 + ")",
//   width: "100%",
//   height: "450px",
//   position: "relative",
//   backgroundSize: "cover",
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   marginTop: "50px"
 
 
// }

const style3 = {
    fontSize:"40px",
    marginTop:"10px",
    color: "#f54785"
}

const working = {
   backgroundColor: "#33CCFF",
   height : "240px",
   color: "white"
}
const Doctors = {
    backgroundColor: "#3399FF",
    height : "240px",
    color: "white"
 }
 const Appoinments = {
    backgroundColor: "#3366FF",
    height : "240px",
    color: "white"
 }
 const Emergency = {
    backgroundColor: "#3333FF",
    height : "240px",
    color: "white"
 }
  

 const seconddata = {
    float : "right",
    paddingTop:"60px",
  }
 

class App extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Bodydata/>
            <Desctiption/>
            <Secondimg/>
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

           
      <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>


          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="firstdata imgmargin">
              <Container>
                      <div style={seconddata}>
                         <h3 style={{color:"chocolate"}}>BUILDING THE RELATIONSHIP FOR A</h3>
                         <h1  style={{color:"coral"}}>LIFETIME OF EYECARE</h1>
                         <div>
                         <a className="btn btn-success" style={{textDecoration:"none",color:"white"}} href={"/Appoinment"}>Book Appointment</a>
                         </div>
                      </div>
                  </Container>
     
                </div>  
              </div>
              <div className="carousel-item">

                  <div className="seconddata imgmargin">
                  <Container>
                      <div style={seconddata}>
                      
                      
                      <Col md="7" xs="12">
                      <h1>Welcome to Avy Eye Care !</h1>
                     <h2>Best OPHTHALMOLOGY Services</h2>
                       
                         <p style={{textAlign:"justify"}}>Our ophthalmology services are geared to constantly challenge the status quo and explore new means to protect and restore sight.
                             Eye care specialists at Avy Eye Care have the skills and technology to offer the best possible preventive care and corrective procedures for your vision.
                         </p>

                         <div>
                       <a className="btn btn-success" style={{textDecoration:"none",color:"white"}} href={"/Appoinment"}>Book Appointment</a>
                        </div>
                         
                      </Col>
 
                      </div>
                  </Container>
                  </div>
              </div>
              <div className="carousel-item">
              <div className="thirddata imgmargin">
              <Container> 
              
      <div style={{paddingTop:"150px",color:"white"}}>
      <h1>Online Appointments & Prescriptions</h1>
      <p style={{textAlign:"justify"}}>You can now book a limited amount of doctors’ appointments online</p>
      <div>
      <a className="btn btn-success" style={{textDecoration:"none",color:"white"}} href={"/Appoinment"}>Book Appointment</a>
      </div>
      
      </div>
      
      </Container>
              </div>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" style={{marginLeft:"-100px"}} aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
          
      </div>
        
            );
        }
    }

    class Desctiption extends Component {
        render(){
            
            return (
                <Container>
                    <div style={{marginBottom:"50px"}}>
                    <Row style={{marginTop:"20px"}}>
                 <Col md="3" style={{height:"220px"}}>
                     <div className="card text-center" style={Emergency}>
                     <Container fluid={true}>
                         <h5 style={{marginTop:"15px"}}>MEDICAL SERVICES</h5>
                         <p style={{marginTop:"15px",textAlign:"justify"}}>Get world class eye care services and treatment from highly qualified and certified Eye Care Doctors in Avy Eye Care Super Specialty Eye Hospital.</p>
                         </Container> 
                     </div>
                     </Col> 
                     <Col md="3" style={{height:"220px"}}>
                     <div className="card text-center" style={Appoinments}>
                     <Container fluid={true}>
                     <h5 style={{marginTop:"15px"}}>Doctors</h5>
                     <p style={{marginTop:"15px",textAlign:"justify"}}>Avy Eye Care Super Specialty Eye Hospital has an impressive list of highly qualified and dedicated Eye Specialists and Surgeons offering a wide range of super specialty Ophthalmic care.</p>
                     </Container> 
                     </div>
                     </Col>
                     <Col md="3" style={{height:"220px"}}>
                     <div className="card text-center" style={Doctors}>
                     <Container fluid={true}>
                         <h5 style={{marginTop:"15px"}}>Appointments</h5>
                         <p style={{marginTop:"15px",textAlign:"justify"}}>Book an Appointment Online with a Avy Eye Care Super Specialty Eye Hospital. The information you provide will enable us to assist you as efficiently as possible.</p>
                         </Container> 
                     </div>
                     </Col>
                     <Col md="3" style={{height:"220px"}}>
                     <div className="card text-center" style={working} >
                     <Container fluid={true}>
                         <h5 style={{marginTop:"15px"}}>Emergency Cases</h5>
                         <h5 style={{marginTop:"15px"}}><i class="fas fa-phone">  1-800-123-4560</i></h5>
                         <p style={{marginTop:"15px",textAlign:"justify"}}> Specialist Emergency and trauma crew are well-trained medical specialists and response crew, ever-ready to handle emergencies effectively and efficiently.</p>
                         </Container> 
                     </div>
                     </Col>
             </Row>
                </div>
              </Container> 
                
                );
            }
        }

        class Secondimg extends Component {
            render(){
                
                return (
                      <div style={Imgfile}>
                        <Container>
                            <Row>
                        <Col md="6"></Col>
                        <Col md="6">
                            <div style={seconddata}>
                               <h1>Complete Medical </h1>
                               <h1>Solutions in One Place</h1>
                               <div style={{paddingTop:"50px"}}>
                               <p>Our aim is to provide an unrivalled solution for a wide range of eye health problems. That's why we offer much more than just laser eye surgery, lens replacement and cararact surgery. Some of our leading medical treatments offer cutting edge solutions for glaucoma, floaters, keratoconus, eyelid conditions and more. All carried out by one of our highly qualified specialists at one of our modern dedicated Eye Care Centre.</p>
                               </div>
                               
                            </div>
                            </Col>
                            </Row>
                        </Container>
                      </div>
                    );
                }
            }
    class Contentdesc extends Component {
        render(){
            
            return (
            <Container fluid={true}>
           <div style={{marginTop:"30px"}}>
            <Row>
                <Col md="3">
                    <div style={{height:"300px"}} className="card text-center">
                    <span style={style3} className="fa fa-wheelchair" aria-hidden="true"></span>
                    <h5 style={{marginTop:"10px"}}>Modern Equipment</h5>
                    <p style={{textAlign:"justify",padding:"5px"}}> Avy Eye Care hospital is well-equipped with state-of-the-art surgical and diagnostic equipment, Sterile operation theatres and total productivity systems with emphasis on patient satisfaction</p>
                    </div>
                </Col>
                <Col md="3">
                <div style={{height:"300px"}} className="card text-center">
                <span style={style3} className="fa fa-user-md" aria-hidden="true"></span>
                <h5 style={{marginTop:"10px"}}>Famous Doctors</h5>
                <p style={{textAlign:"justify",padding:"5px"}}>we have a dedicated team of specialist ophthalmologists, nursing staffs and administrative staffs and support staffs and expert trained eye care professionals and clinical & non clinical staffs</p>
              </div>
                </Col>
                <Col md="3">
                <div style={{height:"300px"}} className="card text-center">
                <span style={style3} className="fa fa-life-ring" aria-hidden="true"></span>
                <h5 style={{marginTop:"10px"}}>Health Monitoring</h5>
                <p style={{textAlign:"justify",padding:"5px"}}>We offer both out-patient services and in-patient services at our hospitals. We have a dedicated team of Specialist Ophthalmologists, nursing staff, administrative staff and support staff to ensure that all our patients receive excellent treatment.</p>
                </div>
                </Col>
                <Col md="3">
                <div style={{height:"300px"}} className="card text-center">
                <span style={style3} className="far fa-folder-open" aria-hidden="true"></span>
                 <h5 style={{marginTop:"10px"}}>Booking a Visit</h5>
                 <p style={{textAlign:"justify",padding:"5px"}}>Now fix your appointment with our expert professional online and experience hassle-free consultation</p>
                </div>
                </Col>
            </Row>
           </div>
         
           </Container>
            
                );
            }
        }

        

       
export default App;
