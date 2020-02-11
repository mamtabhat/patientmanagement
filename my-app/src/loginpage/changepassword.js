import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import $ from 'jquery'; 
import axios from 'axios';
import config from '../config/config'
import '../Patient-page/patient.css'
class Changepassword extends Component {
    
  
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
  export default Changepassword;

  class Formdata extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldpass : '',
            newpass: '',
            isPasswordShownold:false,
            isPasswordShownnew:false,


           
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
       
        if (event.target.name === 'oldpass') {
            $('#oldalert').hide();
          }
         else if (event.target.name === 'newpass') {
            $('#newalert').hide();
          }

        this.setState({
            [event.target.name]: event.target.value
        })
        }
        togglePasswordVisiblityold = () =>{

          const {isPasswordShownold} = this.state;
          this.setState({isPasswordShownold: ! isPasswordShownold});
        }
        togglePasswordVisiblitynew = () =>{

          const {isPasswordShownnew} = this.state;
          this.setState({isPasswordShownnew: ! isPasswordShownnew});
        }
  
        closedtaperror(event){
            event.preventDefault();
            var modal = document.getElementById('diverroralert');
            $(modal).hide();
        }
        Goback(){
   
          window.history.back();
      }
        handleSubmit(event) {
            event.preventDefault();

            var data = {
                oldpwd: this.state.oldpass,
                newpwd: this.state.newpass,
              
              }


              var postdata = JSON.stringify(data);
 
              console.log(postdata);
              var auth =  sessionStorage.getItem('auth');
              var sadmin =  sessionStorage.getItem('sadmin');
             
              if (this.state.oldpass === "" || this.state.oldpass === null ) {
                $('#oldalert').show();
              }
             else if (this.state.newpass === "" || this.state.newpass === null ) {
                $('#newalert').show();
              }
              else{
                axios({
                    method: 'post',
                    url: config.url+'user/ctk/changepassword',
                    data: postdata,
                    headers: {
                      'Content-Type': 'application/json',
                      'auth': auth
                      }
                    })
                    .then( (response) => {
                        //handle success
                        console.log(response.data);
                       
                        if (response.data.success === true) {
                            $("#divsucessalert").show();
                            $("#spansucess").html('password changed successfully');
                        }
                       
                        setTimeout(function () {
                      
                          window.location = '/Appoinmentlist'
                       
                          
                       
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
          const isPasswordShownold = this.state.isPasswordShownold;
          const isPasswordShownnew = this.state.isPasswordShownnew;
            return (
                <Container >
                  <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li className="breadcrumb-item active ml-1"><strong>Change Password</strong></li>
                </ol>
             </div>
                <h3 class="text-center">Change Password</h3>
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
            type={isPasswordShownold ? "text" : "password"}
           name="oldpass"
           className="form-control"
           placeholder="old password"
           value={this.state.oldpass }
           onChange={this.handleChange}
         />
          <i className={`fa ${isPasswordShownold ? "fa-eye-slash" : "fa-eye"}   pass-icon  float-right`} onClick={ this.togglePasswordVisiblityold}/>
           <br></br>
          <div id="oldalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter old password
           </div>
           <input
           type={isPasswordShownnew ? "text" : "password"}
           name="newpass"
           className="form-control"
           placeholder="new password"
           value={this.state.newpass }
           onChange={this.handleChange}
         />
          <i className={`fa ${isPasswordShownnew ? "fa-eye-slash" : "fa-eye"}   pass-icon  float-right`} onClick={ this.togglePasswordVisiblitynew}/>
           <br></br>
          <div id="newalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter new password
           </div>
       
         <div className="float-right">
         <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Cancel</a>
         <button className="btn btn-success">Update</button>
         </div>
         </form>
                </div>
               
                <div className="col-md-3">
                </div>
                </Row>
               </Container>
            )
        }

  }