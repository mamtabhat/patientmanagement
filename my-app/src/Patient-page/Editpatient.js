import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery';
import axios from 'axios';
import config from '../config/config'
import '../App-page/Alert.css'

class Editpatient extends Component {






    constructor(props) {
        super(props);
    
        var match = props.match;
    
    
         console.log("match", match.params);
    
      
         this.state = {
          name : '',
          phone: '',
          age: '',
          gender:match.params.gender,
          reference :'',
          pincode : '',
          address:'',
          pid:match.params.id,
          male:'',
          female:'',
          datalist:[],
          page:match.params.page,
          page1:match.params.page1
      };
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.Editpatientdata = this.Editpatientdata.bind(this);
      
     

    }

   
      Editpatientdata = () =>{
        var data = {
          pid: this.state.pid
 
        }
        var auth =  sessionStorage.getItem('auth');
        var postdata = JSON.stringify(data)
       axios({
         method: 'post',
         url: config.url+'patient/ctk/getpatient',
         data: postdata,
         headers: {
           'Content-Type': 'application/json',
           'auth': auth
           }
         })
         .then( (response) => {
             //handle success
             console.log(response.data.data);
            
             var datalist = response.data.data;
 
           this.setState({datalist:datalist});
           var name;
           var phone;
           var age;
           var gender;
           var pincode;
           var address;
           var reference;
           datalist.map(function(value){
 
              name = value.name;
              phone = value.phone;
              age= value.age;
              gender = value.gender;
              pincode = value.pin;
              address=value.address;
              reference = value.ref;
           })
           this.setState({name:name});
           this.setState({phone:phone});
           this.setState({age:age});
          // this.setState({gender:gender});
           this.setState({pincode:pincode});
           this.setState({address:address});
           this.setState({reference:reference});
          
 
           console.log(this.state.gender)
 
          
 
         })
         .catch( (response) => {
             //handle error
             console.log(response);
            
         });
 
      }

      handleChange(event) {
        if (event.target.name === 'name') {
          $('#namealert').hide();
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
   
    componentDidMount(){
      this.Editpatientdata()
    }

      handleSubmit(event) {
     
     

        event.preventDefault();


        var gender = '';

        console.log(this.state.male,"malewchg")
        console.log(this.state.female,"femalewchg")
        

        if (this.state.male === null || this.state.male === "") {
            
            gender = this.state.female;

        }
        else if (this.state.female === null || this.state.female === ""){
            gender = this.state.male;
        }
        console.log(gender ,"gen")
        if (gender === null || gender === "") {
            
           gender = this.state.gender

        }
        else{
            gender = gender
        }
        
        var data = {
          pid:this.state.pid,
          name: this.state.name,
          phone: parseInt(this.state.phone),
          age: parseInt(this.state.age),
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
            url: config.url+'patient/ctk/editpatient',
            data: postdata,
            headers: {
              'Content-Type': 'application/json',
              'auth': auth
              }
            })
            .then( (response) => {
                //handle success
                console.log(response);
               
                if (response.data.success === true) {
                  $("#divsucessalert").show();
                  $("#spansucess").html('Updated successfully');
              }
            
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
            <div>
                 <Headerdata/>
           
            <Container style={{marginBottom:"150px"}}>

            {(() => {
              if(this.state.page == "viewpatient"){
                 return(
                  <div className="margindata">
                  <ol className="breadcrumb bg-white">
                  <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Viewpatient/"+this.state.pid+"/1"}>View Patient</a></li>
                     <li className="breadcrumb-item active ml-1"><strong>Edit Patient</strong></li>
                  </ol>
                  </div>
                 );
              } else {
                return(
                  <div className="margindata">
                  <ol className="breadcrumb bg-white">
                  <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Patientlist">Patient List</a></li>
                     <li className="breadcrumb-item active ml-1"><strong>Edit Patient</strong></li>
                  </ol>
                  </div>
                 );
              }

            })()}

            
                 
                 <h3 class="text-center">Edit Patient</h3>

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
           disabled="disabled"
         />
           <br></br>
          
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
         <div className='col-md-6 row'>
         
         {(() => {
        if (this.state.gender === '1') {
          return (
            <div style={{marginBottom:"10px"}}>
         <input
           type="radio"
           name="male"
           id="male"
           style={{margin:"5px"}}
           value={this.state.male}
           defaultChecked = {this.state.checked}
           onChange={this.checkboxmale}
         /> <span>Male</span>
          <input
           type="radio"
           name="female"
           id="female"
           style={{margin:"5px"}}
           value={this.state.female}
          defaultChecked
           onChange={this.checkboxfemale}
         /> <span>Female</span>
         <br></br>
        </div>
         )
        }
        else{
          return (
      <div style={{marginBottom:"10px"}}>
           <input
         type="radio"
         name="male"
         id="male"
         style={{margin:"5px"}}
         value={this.state.male}
         defaultChecked
         onChange={this.checkboxmale}
       /> <span>Male</span>
       <input
         type="radio"
         name="female"
         id="female"
         style={{margin:"5px"}}
         value={this.state.female}
         defaultChecked = {this.state.checked}
         onChange={this.checkboxfemale}
       /> <span>Female</span>
     <br></br>
      </div>
        
      )
          }
        
      })()}
      
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
         {(() => {
           if(this.state.page === "viewpatient"){
             return(
              <a className="btn btn-danger mr-1" href={"/Viewpatient/"  + this.state.pid + "/" + this.state.page1} >Cancel</a>
             )
           }
           else{
             return(
              <a className="btn btn-danger mr-1" href="/Patientlist" >Cancel</a>
             )
           }
      
        })()}
         <button className="btn btn-success">Update</button>
         </div>
       
        </form>
      
                </div>
                <div className="col-md-3">
                
                </div>
                </Row>
               
            
        </Container>
        <Footerdata/>
        </div>
      );
    }
}


export default Editpatient;