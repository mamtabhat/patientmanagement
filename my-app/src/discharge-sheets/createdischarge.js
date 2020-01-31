import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import axios from 'axios';
import config from '../config/config'
import { Row} from 'react-bootstrap';
import $ from 'jquery';
import '../Patient-page/patient.css'
class Dischargesheet extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
            <Dischargeform/>
            <Footerdata/>
            </div>
            
      );
    }
}
class Dischargeform extends Component{

   constructor (props){
       super(props);

       this.state = {
           content:'',
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

   }


   handleChange(event) {
     
    if(event.target.name === 'content'){
      $('#contentalert').hide();
    }
    this.setState({
      [event.target.name]: event.target.value
  })
  }
  handleSubmit(event) {
        
    event.preventDefault();

    var auth = sessionStorage.getItem('auth');

    var data = {

      content : this.state.content
    }

    var postdata = JSON.stringify(data);


    console.log(postdata,"postdata");
   
    if (this.state.content === "" || this.state.content === null) {

    
      $('#contentalert').show();
    }
   else{
    axios({
          
      method:'post',
      url:config.url + 'discharge/ctk/createdischargesheet',
      data:postdata,
      headers:{
        'Content-Type':'application/json',
        'auth':auth
      }
    }).then((response) => {

      console.log(response.data,"responsedata");
     
      if (response.data.success === true) {
        $("#divsucessalert").show();
        $("#spansucess").html('Created successfully');
    
    setTimeout(function () {
      //window.location = '/dischargetemplate'
      },1000)
    }
    }).catch((response) => {

      console.log(response);

      $("#diverroralert").show();
      $("#spanerror").html('Oops! something went wrong');
    });
  }

  }
    render(){

        return(

            <div className="container" style={{marginTop:"150px"}}>
                  <h3 class="text-center">Create Discharge sheets</h3>
                  <Row className="mt-5">
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
          <form onClick={this.handleSubmit}>
          <textarea
           type="text"
           name="content"
           className="form-control"
           placeholder="content"
           value={this.state.content}
           onChange={this.handleChange}
           />
           <br></br>
           <div id="contentalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter content
          </div>
          <div className="float-right">
         <button className="btn btn-success">Create</button>
         </div>
          </form>
         </div>
         <div className="col-md-3">
                  </div>
           </Row>
            </div>
        )
    }

}

export default Dischargesheet;