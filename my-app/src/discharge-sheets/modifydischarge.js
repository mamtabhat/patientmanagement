import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import axios from 'axios';
import config from '../config/config'
import { Row} from 'react-bootstrap';
import $ from 'jquery';

class Modifydischargesheet extends Component {
  

   constructor (props){
       super(props);
       var match = props.match;
      
       this.state = {
           content:'',
           id:match.params.id
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

      content : this.state.content,
      did :this.state.id,
    }

    var postdata = JSON.stringify(data);

    if (this.state.content === "" || this.state.content === null) {
        $('#contentalert').show();
    }
    else{
    axios({
          
      method:'post',
      url:config.url + 'discharge/ctk/modifydischargesheet',
      data:postdata,
      headers:{
        'Content-Type':'application/json',
        'auth':auth
      }
    }).then((response) => {

      console.log(response.data);
      if (response.data.success === true) {
        $("#divsucessalert").show();
        $("#spansucess").html('Updated successfully');
    
    setTimeout(function () {
      //window.location = '/dischargetemplate'
      },1000)
    }

    }).catch((response) => {

      console.log(response);
      $("#diverroralert").show();
      $("#spanerror").html('Oops! something went wrong');
    }) ;
}

  }


  Dischargesheetdata = () => {
 
         var auth = sessionStorage.getItem('auth');
         var data = {
           did : this.state.did
         }

         var postdata = JSON.stringify(data);

    axios({
          
      method:'post',
      url:config.url + 'discharge/ctk/getdischargesheet',
      data:postdata,
      headers:{
        'Content-Type':'application/json',
        'auth':auth
      }
    }).then((response) => {

      console.log(response.data);
          var datalist = response.data.data;
           var content; 
          datalist.map(function(value){
           
            content = value.content;

          })
         this.setState({content:content});

    }).catch((response) => {

      console.log(response);
    
    }) ;

  }

  componentWillMount(){

    this.Dischargesheetdata()
  }
  
    render(){

        return(
             <div>
                  <Headerdata/>
         
            <div className="container" style={{marginTop:"150px"}}>
                  <h3 class="text-center">Edit Discharge sheet</h3>
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
         <button className="btn btn-success">Update</button>
         </div>
          </form>
         </div>
         <div className="col-md-3">
                  </div>
           </Row>
            </div>
            <Footerdata/>
            </div>
        )
    }

}

export default Modifydischargesheet;