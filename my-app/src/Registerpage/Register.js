import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import '../loginpage/login.css';
import '../App-page/App.css';

import axios from 'axios';

import Footerdata from '../Templates/footer';
import Headerdata from '../Templates/Header'

import config from '../config/config'

class App extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Bodydata/>
            <Desctiption/>
            <Secondimg/>
            <Contentdesc/>
            <Imgcorosel/>
            <Footerdata/>
            </div>
            
      );
    }
}



class Bodydata extends Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        phone: '',
        password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
  })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();

    console.log("config", config.url);

    var data = {
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      sadmin : 1
    }

    var postdata = JSON.stringify(data);

  axios({
    method: 'post',
    url: config.url+'user/ctk/createadmin',
    data: postdata,
    headers: {'Content-Type': 'application/json' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
       
        window.location = '/login';
       

    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

   }

    render(){
        
        return (
          
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="stylelogin">
              <Col md="6">
           <div className="login-form" >
           <form onSubmit={this.handleSubmit}>
           <div className="form-group" style={{marginTop:"20px"}} >
           <Container>
              <h2 className="text-center" style={{color:"#007bff"}}>Register</h2>
        
           <Row>
         <Col md="3"></Col>
           <Col md="6" style={{marginTop:"20px"}}>
           <div  class="input-group margin-bottom-sm">
           <span > <i className="fa fa-user form-control spandata"></i></span>
           <input
           type="text"
           name="username"
           className="form-control"
           value={this.state.username}
           onChange={this.handleChange}
           placeholder="User Name"
           style={{borderRadius:"0px"}}
         />
         
         </div>
         </Col>
         <Col md="3"></Col>
         <Col md="3"></Col>
           <Col md="6" style={{marginTop:"20px"}}>
           <div  class="input-group margin-bottom-sm">
           <span > <i  className="fa fa-phone form-control spandata"></i></span>
           <input
           type="number"
           name="phone"
           className="form-control"
           value={this.state.phone}
           onChange={this.handleChange}
           placeholder="Phone"
           style={{borderRadius:"0px"}}
         />
         
         </div>
         </Col>
         <Col md="3"></Col>
        
         <Col md="3"></Col>
         <Col md="6" style={{marginTop:"20px"}}>
         <div  class="input-group margin-bottom-sm">
           <span > <i  className="fa fa-lock form-control spandata"></i></span>
           <input
           type="password"
           name="password"
           className="form-control"
           value={this.state.password}
           onChange={this.handleChange}
           placeholder="Password"
           style={{borderRadius:"0px"}}
         />
         
         </div>
        
         </Col>
         <Col md="3"></Col>
         <Col md="3"></Col>
         <Col md="6" style={{marginTop:"20px"}}>
         <input type="submit" style={{width: "100%"}} className="btn btn-primary text-center" value="Sign Up" /> 
         <ul className="spandata1"><li><a  href={"/Login"}>Login</a></li></ul>
         </Col>
         <Col md="3"></Col>
         </Row>
       

         </Container>
         </div>
         </form>
         </div>
         </Col>
              </div>
          </div>
          </div>
      </div>
     
            );
        }
    }

    class Desctiption extends Component {
      render(){
          
          return (
            
               
                  <Container>


                   <div className="col-md-12" style={{marginTop:"20px"}}>
                       <h2 className="text-center">Why Choose AVY EYE CARE?</h2>
                       <hr style={{width:"18%",borderTop:"3px solid #007bff"}}></hr>
                   </div>
                    
                    <div className="row" style={{marginTop:"40px"}}>
                      <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                       <h3 style={{fontSize:"1.4rem"}}>More Experience</h3>
                       <p style={{textAlign:"justify"}}>Every year, more than a million people come to Avy Eye Care Hospital for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                      <h3 style={{fontSize:"1.4rem"}}>The right answers</h3>
                      <p style={{textAlign:"justify"}}>Getting effective treatment depends on identifying the right problem. In a recent study, 88 percent of patients who came to Avy Eye Care for a second opinion received a new or refined diagnosis.</p>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                      <h3 style={{fontSize:"1.4rem"}}>Seamless care</h3>
                      <p style={{textAlign:"justify"}}>At Avy Eye Care, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                      <h3 style={{fontSize:"1.4rem"}}>Unparalleled expertise</h3>
                      <p style={{textAlign:"justify"}}>Avy Eye Care experts are some of the best in the world. In the U.S. News {'&'} World Report rankings of top hospitals, Avy Eye Care is consistently ranked among the top hospitals in the nation.</p>
                      </div>
                    </div>
                      
           </Container> 
          
          
              
              );
          }
      }


      class Secondimg extends Component {
        render(){
            
            return (
                  <div style={{backgroundColor:"#E8E8E8"}}>
                    <Container>
                        <div>
                            <div style={{paddingTop:"50px"}}>
                            <h1><span style={{fontWeight:"300px"}}>IMPROVE YOUR VISION</span></h1>
                           <h3>WITH OUR EYE CENTERS</h3>
                           </div>
                            <Col md="12">
                            <Row>
                            <Col md="6">
                            <div style={{paddingTop:"50px"}}>
                            <p> &#10140; We offers a complete range of eye care services including LASIK and PRK refractive surgery, eye exams, vision testing for glasses and contacts.</p>
                           <p> &#10140; All Laser Lasik, Cornea & Glaucoma, Laser Cataract Surgery, Brow lift services.</p>
                           </div>
                           </Col>
                           <Col md="6">
                           
                           <div style={{paddingTop:"50px"}}>
                           
                           <p>&#10140; Cornea is the eye’s outermost layer. It is the clear, dome-shaped surface that covers the front of the eye.</p>
                           <p>&#10140; Glaucoma is slowly damages the eyes and can causes vision loss.</p>
                           </div>
                           </Col>
                           </Row>
                            </Col>
                        </div>
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
                <Col md="3" className="addstyledata">
                    <div style={{height:"200px"}} className="card text-center">
                    <span className="fa fa-wheelchair stylelogin2" aria-hidden="true"></span>
                    <h5 className="addstyledata">Modern Equipment</h5>
                    <p style={{textAlign:"justify" , padding:"5px"}}>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia</p>
                    </div>
                </Col>
                <Col md="3" className="addstyledata">
                <div style={{height:"200px"}} className="card text-center">
                <span className="fa fa-user-md stylelogin2" aria-hidden="true"></span>
                <h5 className="addstyledata">Famous Doctors</h5>
                <p style={{textAlign:"justify" , padding:"5px"}}>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia</p>
              </div>
                </Col>
                <Col md="3" className="addstyledata">
                <div style={{height:"200px"}} className="card text-center">
                <span  className="fa fa-life-ring stylelogin2" aria-hidden="true"></span>
                <h5 className="addstyledata">Health Monitoring</h5>
                <p style={{textAlign:"justify" , padding:"5px"}}>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia</p>
                </div>
                </Col>
                <Col md="3" className="addstyledata">
                <div style={{height:"200px"}} className="card text-center">
                <span  className="far fa-folder-open stylelogin2" aria-hidden="true"></span>
                 <h5 className="addstyledata">Booking a Visit</h5>
                 <p style={{textAlign:"justify" , padding:"5px"}}>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia</p>
                </div>
                </Col>
            </Row>
           </div>
           </Container>
            
                );
            }
        }

        class Imgcorosel extends Component {
          render(){
              
              return (
                <div></div>
                );
            }
        }
export default App;
