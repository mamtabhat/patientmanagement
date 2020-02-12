import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';

import axios from 'axios';
import config from '../config/config'
import { Container,Row} from 'react-bootstrap';

import $ from 'jquery';
 
class CreateForm extends Component {

   
    constructor(props){
        super(props); 

      
        this.state = { 
           name: '' ,
           content: '',
          
          
         
             
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    handleChange(event) {
     
      if (event.target.name === 'name') {
        $('#namealert').hide();
      }
      else if(event.target.name === 'content'){
        $('#contentalert').hide();
      }
      this.setState({
        [event.target.name]: event.target.value
    })
    }

  
  

    

    closedtaperror(event){
      event.preventDefault();
      var modal = document.getElementById('diverroralert');
      $(modal).hide();
  }
    handleSubmit(event) {
        
        event.preventDefault();
       
        var data = {
          
          name : this.state.name ,
          content : this.state.content,
         
        }
    
        var postdata = JSON.stringify(data);
        var auth =  sessionStorage.getItem('auth');
       
        console.log(postdata)
        //event.preventDefault();
        
 if (this.state.name === "" || this.state.name === null ) {
  $('#namealert').show();

}
else if (this.state.content === "" || this.state.content === null  ) {
  $('#contentalert').show();

}
else{
  axios({
    method: 'post',
    url: config.url+'discharge/ctk/createtemplate',
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
          $("#spansucess").html('Created successfully');
      
      setTimeout(function () {
        window.location = '/dischargetemplate'
        },1000)
      }

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

            <div className="margindata">
                <ol className="breadcrumb bg-white">
                <li><a className="breadcrumb-item text-decoration-none text-muted" href="/dischargetemplate">Discharge Templates</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Create Template</strong></li>
                </ol>
             </div>
                 
                 <h3 class="text-center">Create Template</h3>

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
           placeholder="Template Name"
           value={this.state.name}
           onChange={this.handleChange}
           /> 
         <br></br>
         <div id="namealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter template name 
           </div>
          <textarea
           type="text"
           name="content"
           className="form-control"
           placeholder="content"
           value={this.state.content}
           onChange={this.handleChange}
           style={{height:"150px"}}
         />
        <div id="contentalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter content
           </div>
        
         <br></br>
         <div className="float-right">
         <a className="btn btn-danger mr-1" href={"/dischargetemplate/"}>Cancel</a>
         <button className="btn btn-success">Create</button>
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


  export default CreateForm;
