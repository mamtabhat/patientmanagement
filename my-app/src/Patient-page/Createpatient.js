import React, { Component } from 'react';
import { Container,Row} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery';
import axios from 'axios';
import config from '../config/config'
import '../Patient-page/patient.css'
class patient extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Formdata/>
            <Footerdata/>
            </div>
            
      );
    }
}
class Formdata extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            phone: '',
            age: '',
            male : '',
            female:'',
            reference:'',
            pincode:'',
            address:'',

           
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        
        console.log(event.target.name)

        if (event.target.name === 'name') {
          $('#namealert').hide();
        }
        else if(event.target.name === 'phone' ){
          $('#phonealert').hide();
        }
        else if(event.target.name === 'age' ){
          $('#agealert').hide();
        }
        else if(event.target.name === 'address' ){
          $('#addalert').hide();
        }
        else if(event.target.name === 'pincode' ){
          $('#pinalert').hide();
        }
        else if (event.target.name === 'reference') {
          $('#refalert').hide();
        }
        this.setState({
          [event.target.name]: event.target.value
      })
      }

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
      closedtaperror(event){
        event.preventDefault();
        var modal = document.getElementById('diverroralert');
        $(modal).hide();
    }
      handleSubmit(event) {
     
      

        event.preventDefault();


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
          address:this.state.address
        }
    
        var postdata = JSON.stringify(data);
 
        console.log(postdata);

        var auth =  sessionStorage.getItem('auth');
     

        if (this.state.name === "" || this.state.name === null ) {
          $('#namealert').show();
        }
       else if (this.state.phone === "" || this.state.phone === null ) {
          $('#phonealert').show();
        }
        else if (this.state.age === "" || this.state.age === null ) {
          $('#agealert').show();
        }
        else if (gender === "" || gender === null ) {
          $('#genderalert').show();
        }
        else if (this.state.pincode === "" || this.state.pincode === null ) {
          $('#pinalert').show();
        }
        else if (this.state.address === "" || this.state.address === null ) {
          $('#addalert').show();
        }
        else if (this.state.reference === "" || this.state.reference === null ) {
          $('#refalert').show();
        }
        else{

        axios({
            method: 'post',
            url: config.url+'patient/ctk/createpatient',
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
                    window.location = '/patientlist'
                },1000)

               
        
            })
            .catch( (error) => {
              //handle error
              console.log(error.response);
              $("#diverroralert").show();
              $("#spanerror").html(error.response.data.error);
          });


          }
       
    }
    render(){
        
        return (
            <Container className="margindata" style={{marginBottom:"150px"}}>
                 
                 <h3 class="text-center">Create Patient</h3>

                <Row className="mt-3">
                <div className="col-md-3">
                </div>
                <div id="diverroralert" className="modalalert">
    <div className="modal-contentalert alert alert-danger" role="alert">
        <div className="panel-group" style={{textAlign:"center"}}>
            <div className="close" onClick={this.closedtaperror}>&times;</div>
            <span id="spanerror"> </span>

        </div>
    </div>
</div>
<div id="divsucessalert" className="modalalert">
    <div className="modal-contentalert alert alert-success" role="alert">
        <div className="panel-group" style={{textAlign:"center"}}>
            <div className="close" >&times;</div>
            <span id="spansucess"> </span>

        </div>
    </div>
</div>

                <div className="col-md-6">
                 <form onSubmit={this.handleSubmit}>
                 <input
           type="text"
           name="name"
           className="form-control"
           placeholder="patient name"
           value={this.state.name }
           onChange={this.handleChange}
         />
         <br></br>
        
         <div id="namealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter patient name
           </div>
          <input
           type="number"
           name="phone"
           className="form-control"
           placeholder="phone number"
           value={this.state.phone}
           onChange={this.handleChange}
         />

           <br></br>
           
           <div id="phonealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter phone number
           </div>
          
           <input
           type="number"
           name="age"
           className="form-control"
           placeholder="age"
           value={this.state.age}
           onChange={this.handleChange}
         />
         <br></br>
         <div id="agealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter age
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
         <input
           type="number"
           name="pincode"
           className="form-control"
           placeholder="pincode"
           value={this.state.pincode}
           onChange={this.handleChange}
         />
         <br></br>
         <div id="pinalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter pincode
           </div>
        
         <textarea
           type="text"
           name="address"
           className="form-control"
           placeholder="address"
           value={this.state.address}
           onChange={this.handleChange}
         />
         <br></br>
         <div id="addalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter address
           </div>
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
              Enter Reference
           </div>
         <div className="float-right">
         <a className="btn btn-danger mr-1" href={"/Patientlist/"}>Cancel</a>
         <button className="btn btn-success">Create</button>
         </div>
        
        </form>
                </div>
                <div className="col-md-3">
                
                </div>
                </Row>
               
            
        </Container>
      );
    }
}


export default patient;