import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import '../App-page/App.css';
import Footerdata from '../Templates/footer';
import $ from 'jquery'
import Headerdata from '../Templates/Header';
import '../loginpage/login.css';
import axios from 'axios';
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
            phone: '',
            password: '',
            isPasswordShown:false,
           
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



      handleChange(event) {

        if(event.target.name === 'phone')
        {
            $("#phonevalid").hide();
        }
        else{
            $("#passvalid").hide();
        }

        this.setState({
          [event.target.name]: event.target.value
      })
      }



    handleSubmit(event) {
        event.preventDefault();

        var data = {
            phone: this.state.phone,
            password: this.state.password,
          }
      
          var postdata = JSON.stringify(data);
      
          console.log("config", config.url);
          console.log("postdata", postdata);


          if(this.state.phone === "" || this.state.phone === null)
            {
                    $("#phonevalid").show();
            }
           else if(this.state.password === "" || this.state.password === null)
            {
                    $("#passvalid").show();
            }
                  
         else{

                  
          axios({
            method: 'post',
            url: config.url+'login',
            data: postdata,
            headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {
                //handle success
                //console.log(response);

                var token = response.data.auth;
                var sadmin = response.data.data.sadmin;
                var username = response.data.data.uname;
                sessionStorage.setItem('auth', token);
                sessionStorage.setItem('sadmin', sadmin);
                sessionStorage.setItem('username', username);
               

               
                    window.location = '/Appoinmentlist';
                
               
            })
            .catch(function (error) {
                //handle error
                // console.log(error.response);
                $("#submitvalid").show();
                $("#submitvalid").html(error.response.data.error);
            });
        }
      
       
    }

    togglePasswordVisiblity = () =>{

        const {isPasswordShown} = this.state;
        this.setState({isPasswordShown: ! isPasswordShown});
      }


    render(){
        const isPasswordShown = this.state.isPasswordShown;
        return (
          
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
              <div className="stylelogin newmargin">
              <Col md="8" lg="6" xs="12">
           <div className="login-form" >
           <form onSubmit={this.handleSubmit}>
           <div className="form-group" style={{marginTop:"40px"}} >
         
              <h2 className="text-center" style={{color:"#007bff"}}>Login</h2>
              <Container>
           <Row>
           <Col md="3"  ></Col>
           <Col md="6" style={{marginTop:"20px"}}>
            

           <input
           type="number"
           name="phone"
           className="form-control pl-5 rounded-pill"
           placeholder="phone number"
           value={this.state.email}
           onChange={this.handleChange}
          
         />
         
         <span><a className="pass-icon1  float-left ml-3"><i  className="fa fa-phone-alt  text-primary"></i></a></span>
         <span id="phonevalid" style={{color: "red",display:"none"}}>Enter Phone number</span>
         </Col>
        
         <Col md="3"></Col>
         <Col md="3"></Col>
         <Col md="6" className="mt-1">
       

         
           <input
          type={isPasswordShown ? "text" : "password"}
           name="password"
           className="form-control pl-5 rounded-pill"
           placeholder="Password"
           value={this.state.password}
           onChange={this.handleChange}
          
         />
        
        <span className='pass-icon1  float-left ml-3' > <a ><i  className="fa fa-lock text-primary"></i></a></span>
         <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"}   pass-icon  float-right`} onClick={ this.togglePasswordVisiblity}/>
         <span id="passvalid" style={{color: "red",display:"none"}}>Enter Password</span>
        </Col>
         <Col md="3"></Col>
         <Col md="3"></Col>
         <Col md="6">
        
         <div >
         <input type="submit" style={{width: "100%"}} className="btn btn-primary text-center rounded-pill" value="Login" /> 
         <p className="mt-2 text-center text-primary" >Forgot Password?</p>
         </div>
         <span id="submitvalid" style={{color: "red",display:"none"}}></span>
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
                        <div className="col-md-4 col-sm-6 col-xs-12  col-lg-3 text-center">
                         <h3 style={{fontSize:"1.4rem"}}>More Experience</h3>
                         <p style={{textAlign:"justify"}}>Every year, more than a million people come to Avy Eye Care Hospital for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12  col-lg-3 text-center">
                        <h3 style={{fontSize:"1.4rem"}}>The right answers</h3>
                        <p style={{textAlign:"justify"}}>Getting effective treatment depends on identifying the right problem. In a recent study, 88 percent of patients who came to Avy Eye Care for a second opinion received a new or refined diagnosis.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12  col-lg-3 text-center">
                        <h3 style={{fontSize:"1.4rem"}}>Seamless care</h3>
                        <p style={{textAlign:"justify"}}>At Avy Eye Care, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12  col-lg-3 text-center">
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
                               
                               <p> &#10140; Cornea is the eye’s outermost layer. It is the clear, dome-shaped surface that covers the front of the eye.</p>
                               <p> &#10140; Glaucoma is slowly damages the eyes and can causes vision loss.</p>
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
                <Col md="4" sm="6" lg="3" className="addstyledata">
                   <div  className="card text-center equipment mt-1">
                    <span  className="fa fa-wheelchair stylelogin2" aria-hidden="true"></span>
                    <h5 className="addstyledata">Modern Equipment</h5>
                    <p style={{textAlign:"justify" , padding:"5px"}}>Avy Eye Care hospital is well-equipped with state-of-the-art surgical and diagnostic equipment, Sterile operation theatres and total productivity systems with emphasis on patient satisfaction</p>
                    </div>
                </Col>
                <Col md="4" sm="6" lg="3" className="addstyledata mt-1">
                 <div  className="card text-center equipment">
                <span  className="fa fa-user-md stylelogin2" aria-hidden="true"></span>
                <h5 className="addstyledata">Famous Doctors</h5>
                <p style={{textAlign:"justify",padding:"5px"}}>we have a dedicated team of specialist ophthalmologists, nursing staffs and administrative staffs and support staffs and expert trained eye care professionals and clinical & non clinical staffs</p>
              </div>
                </Col>
                <Col md="4" sm="6" lg="3" className="addstyledata">
               <div  className="card text-center equipment mt-1">
                <span  className="fa fa-life-ring stylelogin2" aria-hidden="true"></span>
                <h5 className="addstyledata">Health Monitoring</h5>
                <p style={{textAlign:"justify",padding:"5px"}}>We offer both out-patient services and in-patient services at our hospitals. We have a dedicated team of Specialist Ophthalmologists, nursing staff, administrative staff and support staff to ensure that all our patients receive excellent treatment.</p>
                </div>
                </Col>
                <Col md="4" sm="6" lg="3" className="addstyledata">
                 <div className="card text-center equipment mt-1">
                <span  className="far fa-folder-open stylelogin2" aria-hidden="true"></span>
                 <h5 className="addstyledata">Booking a Visit</h5>
                 <p style={{textAlign:"justify",padding:"5px"}}>Now fix your appointment with our expert professional online and experience hassle-free consultation</p>
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
