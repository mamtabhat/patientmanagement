import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';

import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import '../App-page/App.css'
import '../App-page/Alert.css'
import axios from 'axios';
import config from '../config/config'
import $ from 'jquery';
import bootbox from 'bootbox';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';



const styledata = {
   backgroundColor:"gray",
   borderRadius: "5px 5px 0px 0px",
   boxShadow: "0px 2px grey",
   color: "black"
}



class Casesheets extends Component {


    constructor(props) {
        super(props) 

        var match = props.match.params.pid;

      console.log("match", match);


        this.state = { 
            datalist: [],
            optlist: [],
            prelist: [],
            pid: match
        }
        
     }

     closedtaperror(event){
      event.preventDefault();
      var modal = document.getElementById('diverroralert');
      $(modal).hide();
  }
     
     deletecasesheet = (casesheetid) => {
      var auth =  sessionStorage.getItem('auth');
      var data = {
         cid: casesheetid
      }
      var thisdata = this; 

      bootbox.confirm({
         message: "Do you want to Delete this Casesheet?",
         buttons: {
        
            confirm: {
             
                  label: 'Confirm',
                  className: 'btn-success'
            },
            cancel: {
              
                 label: 'Cancel',
                 className: 'btn-danger float-right'
            }
        },
        callback: function (result) {

         if (result === true) {

            axios({
               method: 'post',
               url: config.url+'cs/ctk/deletecasesheet',
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
                $("#spansucess").html('Deleted successfully');
        
               setTimeout(function () {
                $("#divsucessalert").hide();
           
              },1000)
      
                thisdata.casesheetdata();
       
               })
               .catch( (response) => {
                   //handle error
                   console.log(response);
                   $("#diverroralert").show();
                   $("#spanerror").html('Oops! something went wrong');
               });
 
          }
}

      });
      


      



     }


     casesheetdata = () => {
      var auth =  sessionStorage.getItem('auth');

      var data = {
         pid: this.state.pid
      }

          
      axios({
         method: 'post',
         url: config.url+'cs/ctk/getcasesheets',
         data: data,
         headers: {
             'Content-Type': 'application/json',
             'auth': auth
         }
         })
         .then( (response) => {
             //handle success
       
 
          console.log(response.data.data);
 
          const datalist = response.data.data;

          datalist.map((date) =>{

            if(date.edate){
               datalist.sort((a, b) => new Date(b.edate) - new Date(a.edate));
            } else {
               datalist.sort((a, b) => new Date(b.cdate) - new Date(a.cdate));
            }


          })

      
         this.setState({datalist: datalist})


          //const datalist = response.data.data;
 
          //this.setState({datalist: datalist})
 
 
         })
         .catch( (response) => {
             //handle error
             console.log(response);

             $("#diverroralert").show();
             $("#spanerror").html('Oops! something went wrong');
         });




     }



    
   



      componentWillMount(){
          this.casesheetdata()
      }


      renderTableData() {
         return this.state.datalist.map((student, index) => {
            //const { sno, patientname, phone,age, gender } = student //destructuring
             var aseg = student.aseg;
            if(student.aseg){
               if(student.aseg.length == 0){
                  student.aseg = ["aseg"];
                }
            }
            if(student.pseg){
               if(student.pseg.length == 0){
                  student.pseg = ["pseg"];
                }
            }
             
            var sadmin =  sessionStorage.getItem('sadmin');
              console.log("aseg", student.aseg);
             
            return (
               <Tr key={student._key}>
                  <Td>{index+1}</Td>
                  <Td>{student.text}</Td>
                  {(() => {
                     if(student.edate){
                        return (
                 <Td>{new Date(student.edate).toLocaleString()}</Td>
                        );
                     } else {
                        return (
                           <Td>{new Date(student.cdate).toLocaleString()}</Td>
                     );
                     }
                  })()}
                  <Td><a className="btn btn-success btn-sm" title="edit casesheet" href={"/Editcasesheet/"+this.state.pid+"/"+student._key+"/"+student.aseg+"/"+student.pseg + "/" + "casesheet"+"/" + '1' }><i className="fa fa-edit"></i></a></Td>
                  {(() => {
                     if(sadmin == "2"){
                        return (
                           <Td><button className="btn btn-danger btn-sm" title="delete casesheet" onClick={this.deletecasesheet.bind(this, student._key)}><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
                        );
                     } else {
                        return (
                           <Td></Td>
                        );
                     }
                  })()}
                  
               </Tr>
            )
         })
      }


    render(){
      
        return (
            <div>
            <Headerdata/>
            
            <div>
             <Container>
             <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Patientlist">Patient List</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>Case sheet list</strong></li>
                </ol>
            </div>
             <div className="cardstyle">
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
            <div id="casesheetdiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
            {(() => {
          if (this.state.datalist.length > 0) {
            return (
            <div>   
               <div className="row">
           
           <div className="col-md-6">
              <h5 className="mt-3">Case sheet list</h5>
           </div>
           <div className="col-md-6">
           <div className="float-right mt-3">

             <a className="btn btn-primary mr-2 rounded-circle" title="create casesheet" href={"/Createcasesheets/"+this.state.pid + "/" + "casesheet" + "/" + '1'}><i class="fa fa-plus" aria-hidden="true"></i></a>
           </div> 
           </div>

            </div> 
               <div className="mt-4" style={{width:"100%"}}>
                  <div className="table-responsive">
                    
               <Table className="table table-hover">
                   <Thead className="thead-dark">
                   <Tr>
                       <Th>Sno</Th>
                       <Th>Instruction</Th>
                       <Th>Date and Time</Th>
                       <Th></Th>
                       <Th></Th>
                   </Tr>
                   </Thead>
                        <Tbody>
                        {this.renderTableData()}
                        </Tbody>
                     </Table>
                     </div>
                     </div>
                    
                     </div>
            )
             } else {
               return (
                  <div>
                 <div className="row">
                 <div class="col-md-4">
        
                   </div>
                  <div class="col-md-4">

                   </div>
                  <div class="col-md-4">
                  <div className="float-right mt-3">

                  <a title="create casesheets" className="btn btn-primary rounded-circle" href={"/Createcasesheets/"+this.state.pid+ "/" + "casesheet" + "/" + '1'}><i class="fa fa-plus" aria-hidden="true"></i></a>

                  </div> 
       
                  </div>
                
                </div>
                <h2 style={{textAlign:"center"}} className="m-5">Click Create Casesheet icon to Create Casesheets</h2>
                </div>
                )
             }
             })()}
        
            </div>
 
            <div id="opticaldiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none"}}>
            {(() => {

        if (this.state.optlist.length > 0) {
           return (
            <div>
            <h2 style={{textAlign:"center"}}>Welcome</h2>
          </div>
           )
         } else {
            return (
               <div>
               <h5 style={{textAlign:"center"}} className="mt-5">No Optical list Data</h5>
              <div className="row">
              <div class="col-md-4">
     
                </div>
               <div class="col-md-4">
   
                </div>
               <div class="col-md-4">
               <div className="float-right mt-3">

               <a style={{margin:"20px"}} className="btn btn-success" href={"/Createcasesheets/"+this.state.pid + "/" + "casesheet" + "/" + '1'}>Create</a>

              </div> 
              
    
               </div>
             
             </div>
             </div>
              )
         }

                })()}
            </div>

            <div id="Prescriptiondiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none"}}>
            
            {(() => {

     if (this.state.prelist.length > 0) {
   return (
    <div>
    <h2 style={{textAlign:"center"}}>Welcome</h2>
  </div>
   )
   } else {
    return (
       <div>
       <h5 style={{textAlign:"center"}} className="mt-5">No Prescription list Data</h5>
      <div className="row">
      <div class="col-md-4">

        </div>
       <div class="col-md-4">

        </div>
       <div class="col-md-4">
       <div className="float-right mt-3">

           <a style={{margin:"20px"}} className="btn btn-success" href={"/Createcasesheets/"+this.state.pid +  "/" + "casesheet" + "/" + '1'}>Create</a>

              </div> 

       </div>
     
     </div>
     </div>
      )
 }

        })()}
            </div>
            </div>
            <div className="float-right mt-2 mr-2">
                   <a className="btn btn-danger mr-1" href="/Patientlist">Back</a>
                    </div>
            <div className="row" style={{marginTop:"100px"}}>
            </div>
            </Container>
         </div>
             
            <Footerdata/>
          
            </div>
            
      );
    }
}




export default Casesheets;

