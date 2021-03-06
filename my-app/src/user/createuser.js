import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery';
import axios from 'axios';
import config from '../config/config'


class user extends Component {
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
            username : '',
            password: '',
            phone: '',
            sadmin : 0,
            isPasswordShown:false
           
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     togglePasswordVisiblity = () =>{

        const {isPasswordShown} = this.state;
        this.setState({isPasswordShown: ! isPasswordShown});
      }
      handleChange(event) {
        if (event.target.name === 'username') {
          $('#namealert').hide();
        }
        if (event.target.name === 'password') {
          $('#passwordalert').hide();
        }
        if (event.target.name === 'phone') {
          $('#phonealert').hide();
        }

        this.setState({
          [event.target.name]: event.target.value
      })
      }

      
      checkboxdata = event => {
        var data =document.getElementById('sadmin').checked;

       console.log("data", data);
       if(data){
        this.setState({
            [event.target.name]: 1
        })
       } else {
        this.setState({
            [event.target.name]: 0
        })
       }
      
       
     };


      handleSubmit(event) {
     

        event.preventDefault();

        if(this.state.username === ""){
          $("#namealert").show();
          return false;
        }

        if(this.state.password === ""){
          $("#passwordalert").show();
          return false;
        }
        if(this.state.phone === ""){
          $("#phonealert").show();
          return false;
        }



        var phonedata = parseInt(this.state.phone);

        var data = {
          username: this.state.username,
          phone: phonedata,
          password: this.state.password,
          sadmin :  this.state.sadmin
        }
    
        var postdata = JSON.stringify(data);
 
        var auth =  sessionStorage.getItem('auth');

        axios({
          method: 'post',
          url: config.url+'user/ctk/createadmin',
          data: data,
          headers: {
            'Content-Type': 'application/json',
            'auth': auth
            }
          })
          .then( (response) => {
              //handle success
              console.log(response);

              $("#divsucessalert").show();
              $("#spansucess").html('Userdata Created successfully');
         
              setTimeout( () => {
         
               $("#divsucessalert").hide();
               window.location = '/userdata';
                
               }, 2000 )
             
            
      
          })
         .catch( (error) => {
            //handle error
            console.log(error.response);
            $("#diverroralert").show();
            $("#spanerror").html(error.response.data.error);
        });


       
       
    }

    closedtaperror(event){
      event.preventDefault();
      var modal = document.getElementById('diverroralert');
      $(modal).hide();
    }

    render(){
          const isPasswordShown = this.state.isPasswordShown;
        return (
            <Container>

               <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="/userdata">Users</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Create User</strong></li>
                </ol>
              </div>
                 
                 <h3 class="text-center">Create User</h3>

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

                <Row className="mt-3">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                 <form onSubmit={this.handleSubmit}>
                 <input
           type="text"
           name="username"
           className="form-control"
           placeholder="username"
           value={this.state.username }
           onChange={this.handleChange}
         />
          <div id="namealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
          Enter username
           </div>
         <br></br>
          <input
           type={isPasswordShown ? "text" : "password"}
           name="password"
           className="form-control"
           placeholder="password"
           value={this.state.password}
           onChange={this.handleChange}
         />
           <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"}   pass-icon  float-right`} onClick={ this.togglePasswordVisiblity}/>
           
          <div id="passwordalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
          Enter password
           </div>
         <br></br>
          <input
           type="number"
           name="phone"
           className="form-control"
           placeholder="phone number"
           value={this.state.phone}
           onChange={this.handleChange}
         />
         <div id="phonealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
          Enter Phone number
           </div>
           <br></br>
         <input
           type="checkbox"
           name="sadmin"
           id="sadmin"
           value={this.state.sadmin}
           defaultChecked={this.state.checked}
           onChange={this.checkboxdata}
         /> <span>Admin</span>
         <br></br>
         <div className="float-right">
         <a className="btn btn-danger mr-1" href="/userdata" >Cancel</a>
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


export default user;