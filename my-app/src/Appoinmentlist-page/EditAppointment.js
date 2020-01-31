import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery';
import axios from 'axios';
import config from '../config/config'
import '../Patient-page/patient.css';

class Editappointment extends Component {

    constructor(props) {
        super(props);
    
        var match = props.match;
    
    
         console.log("match", match.params);
    
         var appdate=parseInt(match.params.adate);

         this.state = {
         
          adate:match.params.adate,
          reference : match.params.reference,
          type : match.params.type,
          aid:match.params.id,
          reportStartDate: `${new Date(appdate).getFullYear()}-${`${new Date(appdate).getMonth()+1}`.padStart(2,0)}-${`${new Date(appdate).getDate()}`.padStart(2,0)}T${`${new Date(appdate).getHours()}`.padStart(2,0)}:${`${new Date(appdate).getMinutes()}`.padStart(2, 0)}`,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.Optionchange = this.Optionchange.bind(this);
    }
    handleChange(event) {
       
       
      if (event.target.name === 'reference') {
        $('#refalert').hide();
      }
        this.setState({
          [event.target.name]: event.target.value
      })
      }

      Goback(){
   
        window.history.back();
    }
    
      Optionchange(event){
  
        this.setState({
          [event.target.name]: event.target.value
      })
  
      console.log(event.target.value,"options1")
  
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

        console.log(millisecs,"millisecs");

        var data = {
          adate :parseInt(millisecs),
          type : parseInt(this.state.type),
          ref : this.state.reference,
          aid:this.state.aid
        }
    
        var postdata = JSON.stringify(data);
        var auth =  sessionStorage.getItem('auth');
      
        console.log(postdata)
         if (this.state.reference === "" || this.state.reference === null  ) {
          $('#refalert').show();
        
        }
        else{
        axios({
            method: 'post',
            url: config.url+'ap/ctk/modifyappointment',
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
        //event.preventDefault();
      }

    render(){
        
        return (
          <div>
          <Headerdata/>
            <Container className="margindata" style={{marginBottom:"150px"}}>
                 
                 <h3 class="text-center">Edit Appointment</h3>

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
               
               <option value="1">General</option>
               <option value="2">Cataract</option>
               <option value="3">All Surgery</option>
           </select>

         <br></br>
         <div id="typealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter Appointment type
           </div>
          <textarea
           type="text"
           name="reference"
           className="form-control"
           placeholder="Reference"
           value={this.state.reference}
           onChange={this.handleChange}
         />
        
        <div id="refalert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
              Enter Reference
           </div>
         <br></br>
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
        <Footerdata/>
        </div>
      );
        }

}
export default Editappointment;