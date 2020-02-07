import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import axios from 'axios';
import config from '../config/config'
import '../Patient-page/patient.css';
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
    
       this.setState({datalist2: datalist})


        //const datalist = response.data.data;

        //this.setState({datalist: datalist})


       })
       .catch( (response) => {
           //handle error
           console.log(response);
       });




   }

componentWillMount(){
    this.Appointmentdata();
    this.Patientdata();
    this.casesheetdata()
}

Goback(){
   
    window.history.back();
}

Editappointment(id,type,date,Reference,event){
     
    event.preventDefault();
   
  
    window.location = '/Editappointment' + "/"+ id + "/" + type + "/" + date + "/" + Reference;

  }
  Editpatient(id,gender,event){
     
    event.preventDefault();
   
  
    window.location = '/Editpatient' + "/"+ id + "/" + gender ;

  }
  renderTableData() {
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
             <Td><a className="btn btn-success btn-sm" title="edit casesheet" href={"/Editcasesheet/"+this.state.pid+"/"+student._key+"/"+student.aseg+"/"+student.pseg}><i class="fa fa-edit"></i></a></Td>
             <Td><button className="btn btn-danger btn-sm" title="delete casesheet" onClick={this.deletecasesheet.bind(this, student._key)}><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
          </Tr>
       )
    })
 }

render(){
        
    return (
        <div>
             <Headerdata/>
       
     
        <Container className='margindata' style={{marginBottom:"200px"}}>

            
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
                     <label>Total CaseSheets</label>
                     <h5 style={{textAlign:"center"}}>{this.state.datalist2.length}</h5>
                     </div>
                 </div>
                 </div>
               
                    <div className="cardstyle">
                    
                   
                     
                        {this.state.datalist1.map((patientlist,index) => (
                    <div onClick={this.Editpatient.bind(null,this.state.pid,patientlist.gender)} title = "Click to Edit patient details" >
                  
                    <div className='row p-2'>
                     <i className="fas fa-user text-primary m-4"></i>
                     <div className="form-group ">
                     <h5>Name</h5>
                    <p style={{textAlign:"center"}}>{patientlist.name}</p>
                     </div>
                     </div>
                     <div className='row p-2'>
                     <i className="fas fa-phone-alt text-primary m-4"></i>
                     <div className="form-group ">
                     <h5>Phone</h5>
                   
                      <p style={{textAlign:"center"}}>{patientlist.phone}</p>
                     </div>
                     </div>
                     <div className='row p-2'>
                     <i className="fas fa-transgender text-primary m-4"></i>
                     <div className="form-group ">
                     <h5>Gender</h5>
                     {(() => {
                          if(patientlist.gender === 1){
                            return(
                                <p style={{textAlign:"center"}}>Female</p>
                            )
                          }
                          else{
                            return(
                                <p style={{textAlign:"center"}}>Male</p>
                            )
                          }
                     
                    })()}
               
                     </div>
                     </div>
                    
                     <div className='row newdiv'>
                     <i className="fas fa-map-marked text-primary m-4"></i>
                    
                     <h5 >Address</h5>
                     <p style={{marginLeft:"71px"}} >{patientlist.address}</p>
                   
                     </div>
                     <div className='row p-2'>
                     <i className="fas fa-map-marker-alt text-primary m-4"></i>
                     <div className="form-group ">
                     <h5>Pincode</h5>
                     <p style={{textAlign:"center"}}>{patientlist.pin}</p>
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
                 
                 <a style={{marginTop:"-4.5rem"}} href={"/Createappointment/"+ this.state.pid } className="btn btn-primary float-right mr-2 rounded-circle  "> <i title='Create Appointment'  className="fa fa-plus"></i></a>
                
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


                   <div className= "container row">
                     

                   {this.state.datalist.map((patientlist,index) => (
                   <div className="col-lg-4">
                 
                  
                     <div onClick={this.Editappointment.bind(null, patientlist._key,patientlist.type,patientlist.adate,patientlist.ref)} title="Click to Edit Appointment" className="cardmy" style={{padding:"10px",margin:"10px"}}>
                    
                         
                      
                        {(() => {
                       
                       if (patientlist.type === 1) {
                       return(
                        <h5 className = "typecls">General</h5>
                       )
                       }
                       else if (patientlist.type === 2) {
                        return(
                        <h5 className = "typecls">Cataract</h5>
                        )
                       }  else {
                        return(
                        <h5 className = "typecls">All Surgery</h5>
                        )
                       }
                      
                        })()}
                        
                         
                      
                          <div className="form-group">
                         <h6  >Date</h6>  
                        <span >{new Date(patientlist.adate).toLocaleString() }</span>
                       
                       </div>
                       <div className="form-group">
                         <h6  >Reference</h6>  
                        <span >{patientlist.ref}</span>
                       
                       </div>
                          </div>
                         
                     
                     </div>
                      ))}
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
              <h5 id='title' className="mt-3">Casesheets list</h5>

              <a style={{marginTop:"-3.5rem"}} className="btn btn-primary mr-2  rounded-circle float-right" title="create casesheet" href={"/Createcasesheets/"+this.state.pid}><i class="fa fa-plus" aria-hidden="true"></i></a>
          
          

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
                   <h5 id='title' className="mt-3">Casesheets list</h5>
                 
               
                 
                  <a style={{marginTop:"-3.5rem"}} className="btn btn-primary mr-2  rounded-circle float-right" title="create casesheet" href={"/Createcasesheets/"+this.state.pid}><i class="fa fa-plus" aria-hidden="true"></i></a>
                  <div >
                  <h2 style={{textAlign:"center"}} className="mt-5">Click Create Casesheet icon to Create a Casesheets for this patient</h2>
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
            <a className="btn btn-danger m-5" href="#" onClick={this.Goback} >Back</a>
            </div>
        </Container>
        <Footerdata/>
        </div>
      );
    }
}

export default Viewpatient;