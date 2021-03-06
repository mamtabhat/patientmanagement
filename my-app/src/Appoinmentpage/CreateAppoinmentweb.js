import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/Header';
import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import axios from 'axios';
import config from '../config/config'
import { Container,Row} from 'react-bootstrap';
import '../Patient-page/patient.css';
import $ from 'jquery';
  class CreateForm extends Component {

   
    constructor(props){
        super(props); 

        var match = props.match;
        this.state = { 
           type: 0, 
           name:match.params.name,
           pid:match.params.id,
           reportStartDate: `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2,0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
         
             
      };
      this.handleChange = this.handleChange.bind(this);
      this.Optionchange = this.Optionchange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    handleChange(event) {
     
     
      this.setState({
        [event.target.name]: event.target.value
    })
    }

    Optionchange(event){

      if (event.target.name === 'type') {
        $('#typealert').hide();
      }

      this.setState({
        [event.target.name]: event.target.value
    })



    }

    Goback(){
   
      window.history.back();
  }

    closedtaperror(event){
      event.preventDefault();
      var modal = document.getElementById('diverroralert');
      $(modal).hide();
  }
    handleSubmit(event) {
        
        event.preventDefault();
        var date = this.state.reportStartDate;
        var millisecs = new Date(date).getTime();

        var _this = this;

        var data = {
          adate :parseFloat(millisecs),
          type : parseInt(this.state.type) ,
          ref : 'self',
          pid:this.state.pid
        }
    
        var postdata = JSON.stringify(data);
       
      console.log(postdata)
        //event.preventDefault();
        
 if (this.state.type === 0  ) {
  $('#typealert').show();

}

else{
  axios({
    method: 'post',
    url: config.url+'ap/createappointmentwithoutcreatinguser',
    data: postdata,
    headers: {
      'Content-Type': 'application/json',
     
      }
    })
    .then( (response) => {
        //handle success
        console.log(response);
        if (response.data.success === true) {
          $("#divsucessalert").show();
          $("#spansucess").html('Created successfully');
      }
      setTimeout(function () {
        window.location='/contactdetails/' + _this.state.name + "/" + _this.state.reportStartDate;
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

            <div className="margindata">
                <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item  ml-1"><a  className="breadcrumb-item text-decoration-none text-muted" href='/'>Home</a></li>
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Appoinment">Appointment Booking</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Create Appointment</strong></li>
                </ol>
             </div>
                 
                 <h3 class="text-center">Create Appointment</h3>

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
            type="datetime-local"
            name="reportStartDate"
           className="form-control"
           value={this.state.reportStartDate}
           onChange={this.handleChange}
           /> <br></br>
         
           <select name="type"  className="form-control" onChange={this.Optionchange} value={this.state.type} >
               <option value="0">Select Appointment type</option>
               <option value="1">General</option>
               <option value="2">Cataract</option>
               <option value="3">All Surgery</option>
           </select>

         <br></br>
         <div id="typealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Select Appointment type
           </div>
         <div className="float-right">
         <a className="btn btn-danger mr-1" href={"/Appoinment"}>Cancel</a>
         <button className="btn btn-success">Book Appointment</button>
        
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