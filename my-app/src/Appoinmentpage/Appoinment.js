import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/Header';
import axios from 'axios';
import config from '../config/config'

const submitbutton = {
  marginTop: "20px",
  marginBottom:"20px",
  float: "right",

  color:"#fff"
}



class Login extends Component {

  render(){
        
    return (
        <div>
         <Headerdata/>
           <Header/>
           <Footerdata/>
        </div>
        
  );
}
 
}




class Header extends Component {

   constructor(props){
      super(props); 
      this.state = { 
         name: '', 
         phone: '',
         age: '',
         type: 0,
         pincode: '',
         address: '',
         reference: '',
         male: '',
         female:'',
         reportStartDate: `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2,0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
       
           
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Optionchange = this.Optionchange.bind(this);
    }
   
    handleChange = event => {
     
      console.log(event.target.name)

      if (event.target.name === 'name') {
        $('#namealert').hide();
      } else if (event.target.name === 'phone') {
        $('#phonealert').hide();
      }
      else if (event.target.name === 'age') {
        $('#agealert').hide();
      }
      else if (event.target.name === 'pincode') {
        $('#pinalert').hide();
      }
      else if (event.target.name === 'address') {
        $('#addalert').hide();
      }
      else if (event.target.name === 'reference') {
        $('#refalert').hide();
      }
      this.setState({
         [event.target.name]: event.target.value
     })
      
    };
    checkboxmale = event => {
      var male =document.getElementById('male').checked;
      var female =document.getElementById('female');
      $('#genderalert').hide();
       if(male){
          
          female.checked = false ;
          male= true; 
          this.setState({
            male: 0,
            female:''
          })
       }
      

    }
    checkboxfemale = event => {
      var male =document.getElementById('male');
      var female =document.getElementById('female').checked;
      $('#genderalert').hide();
     
      if(female){
          
          male.checked = false ;
          female= true;

          this.setState({
            female: 1,
            male:''
          })
       }

    }
    Optionchange(event){

      if (event.target.name === 'type') {
        $('#typealert').hide();
      }

      this.setState({
        [event.target.name]: event.target.value
    })
  }
    handleSubmit(event) {
     // alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
      var date = this.state.reportStartDate;
      var millisecs = new Date(date).getTime();
      var gender = '';

      if (this.state.male === null || this.state.male === '') {
          
          gender = this.state.female;

      }
      else{
          gender = this.state.male;
      }

      var data = {
        name: this.state.name,
        phone: parseInt(this.state.phone),
        age:parseInt(this.state.age),
        gender : parseInt(gender),
        ref:this.state.reference,
        pin:parseInt(this.state.pincode),
        address:this.state.address,
        adate : parseInt(millisecs),
        type:this.state.type
      }

      console.log(this.state.phone)

      var postdata = JSON.stringify(data);

      console.log(postdata,"data")

      var auth =  sessionStorage.getItem('auth');

      if (this.state.name === ""  ) {
        $('#namealert').show();
      
      }
     else if (this.state.phone === "" || this.state.phone === null  ) {
        $('#phonealert').show();
      
      }
      else if (this.state.age === "" || this.state.age === null  ) {
        $('#agealert').show();
      
      }
      else if (this.state.type === 0   ) {
        $('#typealert').show();
      
      }
      else if (this.state.pincode === "" || this.state.pincode === null  ) {
        $('#pinalert').show();
      
      }
      else if (this.state.address === "" || this.state.address === null  ) {
        $('#addalert').show();
      
      }
      else if (this.state.reference === "" || this.state.reference === null  ) {
        $('#refalert').show();
      
      }
      else if (gender === "" || gender === null  ) {
        $('#genderalert').show();
      
      }
      else{

        console.log("success");

       /* axios({
          method: 'post',
          url: config.url+'ap/ctk/createappointmentweb',
          data: postdata,
          headers: {
            'Content-Type': 'application/json',
            'auth': auth
            }
          })
          .then( (response) => {
              //handle success
              console.log(response);
             
             
                $("#divsucessalert").show();
                $("#spansucess").html('Created successfully');
            
          
               setTimeout(function () {
                    window.location='/'
                },1000)

             
      
          })
          .catch( (response) => {
              //handle error
              console.log(response);

              $("#diverroralert").show();
              $("#spanerror").html('Oops! something went wrong');
          });
          */
      }
    }

   

  render() {
    
     return (
      <React.Fragment>
           <Row>
     <Col md="3">
     
        <div style={{display:"none"}}>{this.state.reportStartDate}</div>
       

        </Col>
           <Col md="6">
           <div  style={{marginTop:"90px",marginBottom:"150px"}}>
           <form onSubmit={this.handleSubmit}>
           <div className="form-group">
           <Container>
              <h2 className="text-center">Appointment Booking</h2>
        
           <Row>
           <Col md="6">
           <label style={{marginTop:"8px"}}><strong>Name</strong></label>
           <input
           type="text"
           name="name"
           className="form-control"
           placeholder="Patient Name"
           value={this.state.name}
           onChange={this.handleChange}
         />
          <div id="namealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter name
           </div>
           </Col>
           <Col md="6">
           <label style={{marginTop:"8px"}}><strong>Phone</strong></label>
           <input
           type="number"
           name="phone"
           className="form-control"
           placeholder="Phone"
           value={this.state.phone}
           onChange={this.handleChange}
           maxLength="10"
         />
         <div id="phonealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter phone
           </div>
           </Col>
           </Row>
           <br></br>
           <Row>
           <Col md="6">
           <label style={{marginTop:"8px"}}><strong>Age</strong></label>
           <input
           type="text"
           name="age"
           className="form-control"
           placeholder="Age"
           value={this.state.age}
           onChange={this.handleChange}
         />
          <div id="agealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter age
           </div>
           </Col>
           <Col md="6">
           <label style={{marginTop:"8px"}}><strong>Appointment type</strong></label>
          
          <select name="type"  className="form-control" onChange={this.Optionchange} value={this.state.type} >
               <option value="0">Select</option>
               <option value="1">General</option>
               <option value="2">Cataract</option>
               <option value="3">All Surgery</option>
           </select>
          <div id="typealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Select appointment type
           </div>
           </Col>
           </Row>
           <br></br>
           <Row>

           <Col md="6">
             <label style={{marginTop:"8px"}}><strong>Appointment Date</strong></label>
             <input
            type="datetime-local"
            name="reportStartDate"
           className="form-control"
           value={this.state.reportStartDate}
           onChange={this.handleChange}
           />
           </Col>
           <Col md="6">
           <label style={{marginTop:"8px"}}><strong>Pincode</strong></label>
           <input
           type="text"
           name="pincode"
           className="form-control"
           placeholder="pincode"
           value={this.state.pincode}
           onChange={this.handleChange}
          
         />
          <div id="pinalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter Pincode
           </div>
           </Col>
           </Row>
           <br></br>
         <label style={{marginTop:"8px"}}><strong>Address</strong></label>
         <textarea
           type="text"
           name="address"
           className="form-control"
           placeholder="Address"
           value={this.state.address}
           onChange={this.handleChange}
          
         />
          <div id="addalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter address
           </div>
          <br></br>
          <label style={{marginTop:"8px"}}><strong>Reference</strong></label>
            <textarea
           type="text"
           name="reference"
           className="form-control"
           placeholder="reference"
           value={this.state.reference}
           onChange={this.handleChange}
         />
           <br></br>
           <div id="refalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter reference
           </div>
           <div style={{marginBottom:"10px"}} className='col-md-6 row'>
         <input
           type="radio"
           name="male"
           id="male"
           style={{margin:"5px"}}
           value={this.state.male}
           defaultChecked={this.state.checked}
           onChange={this.checkboxmale}
         /> <span>Male</span>
        
         <input
           type="radio"
           name="female"
           id="female"
           style={{margin:"5px"}}
           value={this.state.female}
           defaultChecked={this.state.checked}
           onChange={this.checkboxfemale}
         /> <span>Female</span>
         <br></br>
         </div>
         <div id="genderalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Select gender
           </div>
           <input type="submit" style={submitbutton} className="btn btn-success" value="Book Appointment" /> 
          </Container>   
           </div>
           </form>
           </div>
          
           </Col>
           <Col md="3">
           
           </Col>
           </Row>
            
        
       </React.Fragment>
        
        
     );
  }
}

export default Login;
