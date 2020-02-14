import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import axios from 'axios';
import config from '../config/config'
import '../App-page/Alert.css'
import '../Patient-page/Viewpatient.css';
import bootbox from 'bootbox';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
class Viewpatient extends Component {
constructor(props) {
    super(props);

    var match = props.match;

  
     this.state = {
    
      pid:match.params.id,
      datalist:[],
      datalist1:[],
      datalist2: [],
      page:match.params.page
     
     
  };

   this.Appointmentdata = this.Appointmentdata.bind(this);
   this.Patientdata = this.Patientdata.bind(this);
}

Appointmentdata = () =>{

     var data ={
         pid:this.state.pid,
     }

     var postdata = JSON.stringify(data);
     var auth =  sessionStorage.getItem('auth');
  
     axios({
        method: 'Post',
        url: config.url+'ap/ctk/getallappointmentforpatient',
        data:postdata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

      
         const datalist = response.data.data;
         datalist.sort((a, b) => new Date(a.adate) - new Date(b.adate));
         this.setState({datalist: datalist})
         
      

        })
        .catch( (response) => {
            //handle error
            console.log(response);
        });
}

Patientdata = () =>{

    var data ={
        pid:this.state.pid,
    }

    var postdata = JSON.stringify(data);
    var auth =  sessionStorage.getItem('auth');
 
    axios({
       method: 'Post',
       url: config.url+'patient/ctk/getpatient',
       data:postdata,
       headers: {
           'Content-Type': 'application/json',
           'auth': auth
       }
       })
       .then( (response) => {
           //handle success
     

        const datalist1 = response.data.data;

        this.setState({datalist1: datalist1})

       })
       .catch( (response) => {
           //handle error
           console.log(response);
       });
}
deletecasesheet = (casesheetid) => {
    var auth =  sessionStorage.getItem('auth');
    var data = {
       cid: casesheetid
    }
    var thisdata = this; 

    bootbox.confirm({
       message: "Do you want to Delete this Case sheet?",
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
    
              thisdata.casesheetdata();
     
             })
             .catch( (response) => {
                 //handle error
                 console.log(response);
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
    
       this.setState({datalist2: datalist})


        //const datalist = response.data.data;

        //this.setState({datalist: datalist})


       })
       .catch( (response) => {
           //handle error
           console.log(response);
       });




   }

componentDidMount(){
    this.Appointmentdata();
    this.Patientdata();
    this.casesheetdata()
}


  Editpatient = (id,gender,event)=>{
     
    event.preventDefault();
   
  
    window.location = '/Editpatient' + "/"+ id + "/" + gender + "/" + "viewpatient" + "/" + this.state.page ;

  }

  back(){
    window.history.back();
  }


  renderTableData() {
    const sadmin = sessionStorage.getItem('sadmin')  
    return this.state.datalist2.map((student, index) => {
       //const { sno, patientname, phone,age, gender } = student //destructuring
        var aseg = student.aseg;

        if(student.aseg.length == 0){
          student.aseg = ["aseg"];
        }
        if(student.pseg.length == 0){
          student.pseg = ["pseg"];
        }
         console.log("aseg", student.aseg);
        
       return (
          <Tr key={student._key}>
             <Td>{index+1}</Td>
             <Td>{student.text}</Td>
             {(() => {
                   if(student.edate === undefined || student.edate === null){
                     return(
                      <Td>{new Date(student.cdate).toLocaleString()}</Td>
                     )
                   }
                   else{
                     return(
                      <Td>{new Date(student.edate).toLocaleString()}</Td>
                     )
                   }
                
                })()}
             <Td><a className="btn btn-success btn-sm" title="edit case sheet" href={"/Editcasesheet/"+this.state.pid+"/"+student._key+"/"+student.aseg+"/"+student.pseg + "/" + "viewpatient" + "/" + this.state.page  }><i class="fa fa-edit"></i></a></Td>
             {(() => {

                 if(sadmin === '2'){
                   return(
                    <Td><button className="btn btn-danger btn-sm" title="delete case sheet" onClick={this.deletecasesheet.bind(this, student._key)}><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
                   )
                 }
                else{
                  return(
                    <Td></Td>
                  )
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
       
     
        <Container className='margindata' style={{marginBottom:"200px"}}>

        {(() => {
          if(this.state.page == "1"){
            
            return(
              <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Patientlist">Patient List</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>View Patient</strong></li>
                </ol>
           
            
            </div>
            );


          } else if(this.state.page == "2") {
            return(
              <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="/Appoinmentlist">Appointment List</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>View Patient</strong></li>
                </ol>
            </div>
            );
          } else if(this.state.page == "3"){
            return(
              <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href={"/Createcasesheets/"+this.state.pid+"/viewpatient/4"}>Create Case sheet</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>View Patient</strong></li>
                </ol>
            </div>
            );
          } else {
            return(
              <div className="margindata">
                <ol className="breadcrumb bg-white">
                   <li><a className="breadcrumb-item text-decoration-none text-muted" href="#" onClick={this.back}>Edit Case sheet</a></li>
                   <li className="breadcrumb-item active ml-1"><strong>View Patient</strong></li>
                </ol>
            </div>
            );
          }

        })()}


            
        <div className="col-md-12 col-lg-12 row">

              
         
            <div className="col-md-5 col-lg-3">
             <div className="cardstyle">
            
             <div className='row p-2'>
                     <i className="fas fa-user-md text-primary m-4"></i>
                     <div className="form-group ">
                     <label>Total Appointments</label>
                     <h5 style={{textAlign:"center"}}>{this.state.datalist.length}</h5>
                     </div>
                 </div>
                 <div style={{borderBottom:"1px solid rgba(0,0,0,.1)",marginLeft:"20px",marginRight:"20px"}}></div>
                 <div className='row p-2'>
                     <i className="fas fa-file-alt text-primary m-4"></i>
                     <div className="form-group ">
                     <label>Total Case Sheets</label>
                     <h5 style={{textAlign:"center"}}>{this.state.datalist2.length}</h5>
                     </div>
                 </div>
                 </div>
               
                    <div style={{cursor:"pointer"}} className="cardstyle">
                    
                   
                     
                        {this.state.datalist1.map((patientlist,index) => (
                    <div onClick={this.Editpatient.bind(null,this.state.pid,patientlist.gender)} title = "Click to Edit patient details" >
                  
                    <div className='row newdiv'>
                     <i className="fas fa-user text-primary m-4"></i>
                     <h5>Name</h5>
                     <div className="input-group margin-bottom-sm ">
                     <p className='marginleftdata'>{patientlist.name}</p>
                     </div>
                     </div>
                     <div className='row newdiv'>
                     <i className="fas fa-phone-alt text-primary m-4"></i>
                     <h5>Phone</h5>
                     <div className="input-group margin-bottom-sm ">
                      <p className='marginleftdata'>{patientlist.phone}</p>
                     </div>
                     </div>
                     <div className='row newdiv'>
                     <i className="fas fa-transgender text-primary m-4"></i>
                     <h5>Gender</h5>
                     <div className="input-group margin-bottom-sm ">
                   
                     {(() => {
                          if(patientlist.gender === 1){
                            return(
                                <p className='marginleftdata'>Female</p>
                            )
                          }
                          else{
                            return(
                                <p className='marginleftdata'>Male</p>
                            )
                          }
                     
                    })()}
               
                     </div>
                     </div>
                    
                      <div className='row newdiv'>
                     <i className="fas fa-map-marked text-primary m-4"></i>
                     <h5 >Address</h5>
                     <div className="input-group margin-bottom-sm ">
                    
                     <p  style={{marginLeft:"62px"}} >{patientlist.address}</p>
                     </div>
                     </div>
                     <div className='row newdiv'>
                     <i className="fas fa-map-marker-alt text-primary m-4"></i>
                     <h5>Pincode</h5>
                     <div className="input-group margin-bottom-sm ">
                     <p className='marginleftdata' >{patientlist.pin}</p>
                     </div>
                     </div>
                     </div>
                  ))}
                 
                 </div>
                
                 </div>
               
                 <div className="col-md-7 col-lg-9">
                 <div className='form-groups'>
                 <div className="cardstyle">
                 <div >
                
                 <h5 id='title'>Appointment List</h5>
                 
                 <a title='Create Appointment' style={{marginTop:"-3rem"}} href={"/Createappointment/"+ this.state.pid + "/" + "viewpatient" + "/" + this.state.page } className="btn btn-primary float-right mr-2 rounded-circle  "> <i   className="fa fa-plus"></i></a>
                
                 </div>
                    {(() => {
                    

                    if (this.state.datalist.length === 0) {
                       return(
                        
                        <div>
                        <h3 style={{textAlign:"center",margin:"20px"}}>Click Create Appointment icon to Create a Appointments for this patient  </h3>
                      
                      
                       </div>
                        )
                    }
                    else{
                     return(

                      <div className="table-responsive">
                   <div style={{cursor:"pointer"}} className= "container">
                     <Table  className="table table-hover"  >
                        <Thead className="thead-dark" >
                        <Tr>
                           <Th>S.No</Th>
                           <Th>Type</Th>
                           <Th>Date and Time</Th>
                           <Th>Reference</Th>
                           <Th></Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                         {this.state.datalist.map((patientlist,index) => (
                            <Tr key={index}>
                             <Td>{index+1}</Td>
                             {(() => {
                                 if (patientlist.type === 1) {
                                    return (  
                                    <Td>General</Td>
                                    )
                                 }
                                else if (patientlist.type === 2) {
                                    return (  
                                    <Td>Cataract</Td>
                                    )
                                 }
                                else {
                                    return (  
                                    <Td>All Surgery</Td>
                                    )
                                 }
                              })()}
                             <Td>{new Date(patientlist.adate).toLocaleString()}</Td>
                             <Td>{patientlist.ref}</Td>
                             <Td><a title='Edit Appointment' href={"/Editappointment/"+ patientlist._key + "/" + patientlist.pid + "/" + "viewpatient" + "/" + this.state.page } className="btn btn-sm btn-success mr-1"> <i  id={patientlist._key} className="fa fa-edit"></i></a></Td>
                            </Tr>
                            ))}
                         </Tbody>
                        </Table>
                     </div>
                     </div>
                     )
                    }
                       })()}
                  </div>
                
            <div id="casesheetdiv" className="cardstyle">
            {(() => {
          if (this.state.datalist2.length > 0) {
            return (
            <div >   
               <div >
              <h5 id='title' className="mt-3">Case sheet list</h5>

              <a style={{marginTop:"-3rem"}} className="btn btn-primary mr-2  rounded-circle float-right" title="create case sheet" href={"/Createcasesheets/" + this.state.pid + "/" + "viewpatient" + "/" + this.state.page }><i class="fa fa-plus" aria-hidden="true"></i></a>
          
          

            </div> 
            <div className='container' >
               <div className="table-responsive"  >
               <Table  className="table table-hover"  >
                <Thead className="thead-dark" >
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
                   <h5 id='title' className="mt-3">Case Sheet list</h5>
                 
               
                 
                 <a style={{marginTop:"-3rem"}} className="btn btn-primary mr-2  rounded-circle float-right" title="create case sheet" href={"/Createcasesheets/"+this.state.pid +  "/" + "viewpatient" + "/" + this.state.page}><i class="fa fa-plus" aria-hidden="true"></i></a>
                  <div >
                  <h2 style={{textAlign:"center"}} className="mt-5">Click Create Case sheet icon to Create a Case sheet for this patient</h2>
                </div>
                </div>
                )
             }
             })()}
        
            </div>
 
            </div>
            </div>
           
            </div>
            <div className="float-right">
            {(() => {
           if(this.state.page === '2'){
             return(
              <a className="btn btn-danger mr-5 mt-2" href="/Appoinmentlist" >Back</a>
             )
           }
           else if(this.state.page === '3'){
            return(
             <a className="btn btn-danger mr-5 mt-2" href={"/Createcasesheets/" + this.state.pid + "/viewpatient/4"   } >Back</a>
            )
          }
          else if(this.state.page === '4'){
            return(
             <a className="btn btn-danger mr-5 mt-2" href="#" onClick={this.back} >Back</a>
            )
          }
           else{
             return(
              <a className="btn btn-danger mr-5 mt-2" href="/Patientlist" >Back</a>
             )
           }
      
        })()}
           
            </div>
        </Container>
        <Footerdata/>
        </div>
      );
    }
}

export default Viewpatient;
