import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Img1 from '../images/bg-01.webp'



import axios from 'axios';


import Footerdata from '../Templates/footer';

import Headerdata from '../Templates/Header';







  const style1 = {
    backgroundImage: "url(" + Img1 + ")",
    width: "50%",
    height:"600px",
   
}


  const footerstyle = {
    
    width: "100%",
    
    backgroundColor: '#1d2024 ',
  
  }


class App extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Bodydata/>
             <Footerdata/>
            </div>
            
      );
    }
}


class Bodydata extends Component {


  constructor(props) {
    super(props);
    this.state = {
        email: '',
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

    var data = {
      email: this.state.email,
      password: this.state.password,
    }

    var postdata = JSON.stringify(data);


    console.log("postdata", postdata);

  //   axios('http://localhost:9000/login', {
  //     method: 'POST',
  //     email: this.state.email,
  //     password: this.state.password,
	// 		headers: {
  //       'Content-Type': 'application/json'
	// 		}
	// 	}).then(response => {
	// 			return response.json()
	// 		}).then(json => {

  //     console.log("json", json);

	// 			this.setState({
	// 				user:json
	// 			});
  // 		});
  



  axios({
    method: 'post',
    url: 'http://localhost:9000/login',
    data: postdata,
    headers: {'Content-Type': 'application/json' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
        window.location = '/Appoinmentlist';
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

   }

    render(){
        
        return (
          
          <form onSubmit={this.handleSubmit}>

       <div id="carouselExampleIndicators" data-ride="carousel">
          <div className="row" role="listbox">
             
        
            
              <div style={style1}>
            </div>
             <div style={{marginTop:"10px",width:"30%",marginLeft:"20px"}}>
             <h2 className="text-center">Login</h2>
          <input
           type="email"
           name="email"
           className="form-control"
           placeholder="Email"
           value={this.state.email}
           onChange={this.handleChange}
           style={{marginTop:"10px"}}
         />
          <input
           type="password"
           name="password"
           className="form-control"
           placeholder="Password"
           value={this.state.password}
           onChange={this.handleChange}
           style={{marginTop:"10px"}}
         />
          <input type="submit" style={{width: "100%",marginTop:"10px"}}  className="btn btn-primary text-center" value="Login" /> 
          <ul style={{listStyleType:"none",marginTop:"10px",textAlign:"center",marginRight:"40px"}}><li><a  href={"/Register"}>Sign up</a></li></ul>
         </div>
        
          </div>
          </div>
          </form>  
     
            );
        }
    }

   

        class Footerview extends Component {

          render(){
              
              return (
                
             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    <div style={footerstyle}>
                    <Container fluid={true}>
                 <div >
                 <Row style={{margin:"50px"}}>
              <Col md="3">
                  <div >
                 
                  <h5 style={{marginTop:"50px",color:"white"}}>ABOUT</h5>
                  <div className="row">
                  <div  style={{borderTop:"2px solid #007bff",width:"10%",marginLeft:"15px"}}>
                  </div>
                  <div  style={{borderTop:"2px solid #007bff",width:"2%",marginLeft:"5px"}}>
                  </div>
                  </div>
                  <p style={{color:"#cccccc",marginTop:"30px",padding:"5px"}}>Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address.</p>
                  <h5 style={{marginTop:"30px",color:"white"}}>OPENING HOURS</h5>
                
                  <p style={{color:"#cccccc",padding:"10px"}}>Mon - Tues :       6.00 am - 10.00 pm</p>
                
                  <div  style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
                  <p style={{color:"#cccccc",padding:"10px"}}>Wed - Thurs  :  8.00 am - 6.00 pm</p>
                  </div>
                  <div  style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
                 
                  <p style={{color:"#cccccc",padding:"10px"}}>Sunday  :  closed</p>
                  </div>
                  </div>
              </Col>
              <Col md="3">
                  <div >
                
                  <h5 style={{marginTop:"50px",color:"white"}}>OUR DEPEARTMENT</h5>
                  <div className="row">
                  <div  style={{borderTop:"2px solid #007bff",width:"10%",marginLeft:"15px"}}>
                  </div>
                  <div  style={{borderTop:"2px solid #007bff",width:"2%",marginLeft:"5px"}}>
                  </div>
                  </div>
                  <li style={{color:"#cccccc",marginTop:"30px",padding:"5px"}}> Medecine and Health.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> Dental Care and Surgery.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> Eye Treatment.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> Children Chare.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> Nuclear magnetic.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> Traumatology.</li>
                  <li style={{color:"#cccccc",padding:"10px"}}> X-ray.</li>
                  </div>
              </Col>
              <Col md="3">
                  <div style={{marginBottom:"20px"}} >
                
                  <h5 style={{marginTop:"50px",color:"white"}}>LATEST TWEETS</h5>
                  <div className="row">
                  <div  style={{borderTop:"2px solid #007bff",width:"10%",marginLeft:"15px"}}>
                  </div>
                  <div  style={{borderTop:"2px solid #007bff",width:"2%",marginLeft:"5px"}}>
                  </div>
                  </div>
                  <p style={{color:"#cccccc",marginTop:"30px",padding:"5px"}}> @Becare Looking for an awesome CREATIVE WordPress Theme? Find it here: http://t.co/0WWEMQEQ48</p>
                
                  
                   <div className="row">

                     <i style={{color:"#007bff",marginLeft:"20px",marginTop:"5px"}} className="fab fa-twitter"></i>
                     <p style={{color:"#cccccc",marginLeft:"10px"}} > 01 day ago</p>
                     </div> 
                     </div> 
                     <p style={{color:"#cccccc",padding:"5px"}}>@Jisham It is a long established fact that a reader will be distracted by the readable . Find it here: http://t.co/0WWEMQEQ48</p>
                
                    <div className="row">

                  <i style={{color:"#007bff",marginLeft:"20px",marginTop:"5px"}} className="fab fa-twitter"></i>
                  <p style={{color:"#cccccc",marginLeft:"10px"}} > 02 day ago</p>
                  </div> 
                  
              </Col>

              <Col md="3">
                  <div style={{marginBottom:"20px"}} >
                
                  <h5 style={{marginTop:"50px",color:"white"}}>CONTACT</h5>
                  <div className="row">
                  <div  style={{borderTop:"2px solid #007bff",width:"10%",marginLeft:"15px"}}>
                  </div>
                  <div  style={{borderTop:"2px solid #007bff",width:"2%",marginLeft:"5px"}}>
                  </div>
                  </div>
                   <div className="row" style={{marginTop:"20px",padding:"5px"}}>

                     <i style={{color:"#007bff",marginLeft:"20px",marginTop:"5px",fontSize:"25px"}} className="fas fa-phone"></i>
                    
                     <div className="form-group">
                       <label style={{color:"#fff",marginLeft:"10px"}} >Phone</label>
                     <p style={{color:"#cccccc",marginLeft:"10px"}} > +123 456 7890</p>
                     </div>
                     </div> 
                     <div  style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
                    <div className="row" style={{padding:"5px"}}>

                  <i style={{color:"#007bff",marginLeft:"20px",marginTop:"5px",fontSize:"25px"}} className="fas fa-envelope"></i>
                  <div className="form-group">
                       <label style={{color:"#fff",marginLeft:"10px"}} >Email</label>
                  <p style={{color:"#cccccc",marginLeft:"10px"}} > support@validtheme.com</p>
                  </div> 
                  </div> 
                  </div> 
                  <div  style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}}>
                  <div className="row" style={{padding:"5px"}}>

                     <i style={{color:"#007bff",marginLeft:"20px",marginTop:"5px",fontSize:"25px"}} className="fas fa-map"></i>
                     <div className="form-group">
                       <label style={{color:"#fff",marginLeft:"10px"}} >Address</label>
                     <p style={{color:"#cccccc",marginLeft:"10px"}} > 123 6th St. Melbourne ,</p>
                     <p style={{color:"#cccccc",marginLeft:"10px"}} > FL 32904</p>
                   </div> 
                   </div> 
                   </div>
                    <div className="from-group" style={{padding:"10px"}}>

                      <h6 style={{color:"#fff"}} >SUBSCRIBE NEWSLETTER</h6>

                      <div  class="input-group margin-bottom-sm">
                      
                       <input
                       type="email"
                       name="email"
                       className="form-control"
                       placeholder="Enter your e-mail here"
                       style={{backgroundColor:"#ffff",color:"#000",width:"50%",borderRadius:"0px"}} 
                        />
                       <span > <i style={{color:"#fff",backgroundColor:"#007bff",fontSize:"16px",width:"40px",borderRadius:"0px",border:"none"}}  className="fa fa-paper-plane form-control"></i></span>
                          </div>
                     
                      </div>

                  </div>
              </Col>
              </Row>
              </div>
              
              <div style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
              <Row>
              <Col md="6">

              <p style={{color:"#cccccc",marginTop:"10px"}}>@Copyright 2019. All Rights Reserved by validthemes</p>

              </Col>

              <Col md="6">
              <div className="row" style={{float:"right",margin:"10px"}}>
               <p style={{color:"#fff",marginLeft:"10px"}}>Terms of user</p>
               <p style={{color:"#fff",marginLeft:"10px"}}>License</p>
               <p style={{color:"#fff",marginLeft:"10px"}}>Support</p>
               </div>
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
export default App;
