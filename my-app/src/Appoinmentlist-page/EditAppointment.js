import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery';
import axios from 'axios';
import config from '../config/config'
import '../App-page/Alert.css'

class Editappointment extends Component {

    constructor(props) {
        super(props);
    
        var match = props.match;
    
    
       
    
        // var appdate=parseInt(match.params.adate);

         this.state = {
         
          adate:'',
          reference : '',
          type : '',
          aid:match.params.id,
          pid:match.params.pid,
          page:match.params.page,
          page1:match.params.page1,
          reportStartDate: '',
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

   
      Optionchange(event){
  
        this.setState({
          [event.target.name]: event.target.value
      })
  
     
  
      }

      closedtaperror(event){
        event.preventDefault();
        var modal = document.getElementById('diverroralert');
        $(modal).hide();
    }
      handleSubmit=(event)=> {
      

        event.preventDefault();
        var date = this.state.reportStartDate;
        var millisecs = new Date(date).getTime();

       var this_=this;

        var data = {
          adate :parseInt(millisecs),
          type : parseInt(this.state.type),
          ref : this.state.reference,
          aid:this.state.aid
        }
    
        var postdata = JSON.stringify(data);
        var auth =  sessionStorage.getItem('auth');
      
  
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
               
              
                  $("#divsucessalert").show();
                  $("#spansucess").html('Updated successfully');
              
              setTimeout(function () {
                if(this_.state.page === "viewpatient" ){
             
                  window.location="/Viewpatient/"  + this_.state.pid + "/" + this_.state.page1;
      
                 }
                 else{
                  window.location = '/Appoinmentlist'
                 }
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
      EditAppoinmentdata () {
        var data = {
          pid:this.state.pid
        }
        var postdata = JSON.stringify(data);
        var auth =  sessionStorage.getItem('auth');
        axios({
          method: 'post',
          url: config.url+'ap/ctk/getallappointmentforpatient',
          data: postdata,
          headers: {
            'Content-Type': 'application/json',
            'auth': auth
            }
          })
          .then( (response) => {
           
            
             
              var datalist = response.data.data;

             

              var type;
              var reference;
              var adate;
              var aid = this.state.aid;
             
              datalist.map((value) =>{

                var appid = value._key;


                 if(appid === aid){

                 type = value.type;
                 adate = value.adate;
                 reference = value.ref;
                 adate = parseInt(adate)
                
                adate =  `${new Date(adate).getFullYear()}-${`${new Date(adate).getMonth()+1}`.padStart(2,0)}-${`${new Date(adate).getDate()}`.padStart(2,0)}T${`${new Date(adate).getHours()}`.padStart(2,0)}:${`${new Date(adate).getMinutes()}`.padStart(2, 0)}`
                 }

            
              

              })
              this.setState({type:type});
              this.setState({reportStartDate:adate});
              this.setState({reference:reference});
          })
          .catch( (error) => {
          
        });

      }

      componentDidMount(){
       this.EditAppoinmentdata();

      }

    render(){
        
        return (
          <div>
          <Headerdata/>
            <Container style={{marginBottom:"150px"}}>


            {(() => {
              if(this.state.page1 == "1"){
                return(
                <div className="margindata">
                <ol className="breadcrumb margindata bg-white">
                <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Patientlist">Patient List</a></li>
                <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Viewpatient/"+this.state.pid+"/1"}>View Patient</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Edit Appointment</strong></li>
                </ol>
              </div>
             );
              } else if(this.state.page1 == "2") {
                return(
                  <div className="margindata">
                  <ol className="breadcrumb margindata bg-white">
                  <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Appoinmentlist">Appointment List</a></li>
                  <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Viewpatient/"+this.state.pid+"/2"}>View Patient</a></li>
                     <li className="breadcrumb-item active ml-1"><strong>Edit Appointment</strong></li>
                  </ol>
                </div>
                );
               } else {
                return(
                  <div className="margindata">
                  <ol className="breadcrumb margindata bg-white">
                  <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Appoinmentlist">Appointment List</a></li>
                     <li className="breadcrumb-item active ml-1"><strong>Edit Appointment</strong></li>
                  </ol>
                </div>
                );
               }

             })()}

                 
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
       
             {(() => {
           if(this.state.page === "viewpatient"){
             return(
              <a className="btn btn-danger mr-1" href={"/Viewpatient/"  + this.state.pid + "/" + this.state.page1} >Cancel</a>
             )
           }
           else{
             return(
              <a className="btn btn-danger mr-1" href="/Appoinmentlist" >Cancel</a>
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
export default Editappointment;
