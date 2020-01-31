import React, { Component } from 'react';
import { Container,Row, Col, Media} from 'react-bootstrap';
import '../App-page/App.css';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/Header';
import  './doctordetails.css'; 
import dctimg from '../images/doctor_01.jpg';



class App extends Component {
    
  
    render(){
          
          return (
            
              <div>
              <Headerdata/>
              <Fullview/>
             <Footerdata/>
              </div>
              
        );
      }
  }

  
class Fullview extends Component {
    
  
    render(){
          
          return (
            
              <div className="col-md-12 col-lg-12 col-xs-12 " >
             <div className="cardstyle1">
             <div className="row" >
             <div className="col-md-6 col-sm-3 col-xs-12 col-lg-6" >
               <img src={dctimg} style={{height:"100%",width:"100%"}} />
             </div>
             <div className="col-md-6  col-sm-9 col-xs-12  col-lg-6" > 
             <div style={{marginLeft:"10px"}}>
             <h3 className="hstyle">Dr. Ian Smith</h3>

             <div className="divstyle">
             <div className="row mainstyle">
                 <span className="spanstyle1">Speciality:</span>
                 <p className="pstyle">Ophthalmology</p>
             </div>
             <div className="row mainstyle">
                 <span className="spanstyle1">Area of Expertise:</span>
                 <div className="form-group">
                 <p className="pstyle">Cataract Treatment</p>
                 <p className="pstyle">Laser Eye Surgery</p>
                 </div>
             </div>
             <div className="row mainstyle">
                 <span className="spanstyle1">Year of Practice:</span>
                 <p className="pstyle">10 years</p>
             </div>
             <div className="row mainstyle">
                 <span className="spanstyle1">Working Time:</span>
                 <div className="form-group">
                 <p className="pstyle">Mon-Thu: 8.00 - 20.00</p>
                 <p className="pstyle">Fri- Sat : 7.00 - 22.00</p>
                 <p className="pstyle">Sunday : 8.00 - 18.00</p>
                 </div>
             </div>
             <div className="row mainstyle">
                 <span className="spanstyle1">Contact:</span>
                 <p className="pstyle">1-800-267-0000</p>
             </div>
          
             <input type="submit"  className="btn btnstyle" value="Book Appointment" /> 
             </div>
             </div>
             </div>
             </div>
              </div>
              </div>
              
        );
      }
  }
  export default App;