
import React, { Component } from 'react';
import {  Container} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import $ from 'jquery'; 
import axios from 'axios';
import config from '../config/config';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import '../App-page/Alert.css'

class Datalist1 extends Component {
    
  
   render(){
         
         return (
           
           <div>
           <Headerdata/>
           <Tabledata/>
           <Footerdata/>
          
           </div>
       );
     }
 }
 

 
    class Tabledata extends Component {

     
     
      
       constructor(props) {
         super(props) 
         this.state = { 
            startdate:`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2,0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
            enddate:`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2,0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
            type:0,
            ref:'',
            active:1,
            datalist:[],
            datalist1:[],
           
          
         }
         this.handleChange = this.handleChange.bind(this);
         this.Optionchange = this.Optionchange.bind(this);
         this.SearchAppointment = this.SearchAppointment.bind(this);

         
      }
      handleChange(event) {
        

         this.setState({
           [event.target.name]: event.target.value
       })
       }

       Optionchange(event) {
        

         this.setState({
           [event.target.name]: event.target.value
       
         })

        var type = parseInt(event.target.value);

     

       var active = this.state.active;

       this.Appointmentdata(active,type);


       }
      
       Appointmentdata =(active,type) =>{

           
           
            var strmillisecs ;
            var endmillisecs ;
            
            var ref = this.state.ref;
            var self = this;   
          
            var auth =  sessionStorage.getItem('auth');

            var data;
             
      if(active === 1){
          var nowDate = new Date(); 
          var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
          strmillisecs = new Date(date).getTime();
          endmillisecs = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000).getTime();
       }
    else if( active === 2 ){
   
         var nowDate = new Date(); 
         var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
         strmillisecs = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000).getTime();
         endmillisecs = new Date(new Date(date).getTime() + 48 * 60 * 60 * 1000).getTime();
              
         }
    else if( active === 3 ) {
               var strdate = this.state.startdate;
               strmillisecs = new Date(strdate).getTime();
               var enddate = this.state.enddate;
               endmillisecs = new Date(enddate).getTime();
            }

           

            if (type !== 0 ){
               data = {

                  sdate:strmillisecs,
                  edate:endmillisecs,
                  type:parseInt(type),
                 
                  
              }
            }
            else if (ref !== "" || ref !== null) {
               
               data = {

                  sdate:strmillisecs,
                  edate:endmillisecs,
                  ref:ref
                  
              }
            }
              else{
                   data = {

                    sdate:strmillisecs,
                    edate:endmillisecs,
                  
   
      
                    }
                }
            
          
            
    
           var postdata = JSON.stringify(data);
           axios({
               method: 'Post',
               url: config.url+'ap/ctk/getallappointment',
               data:postdata,
               headers: {
                   'Content-Type': 'application/json',
                   'auth': auth
               }
               })
               .then( (response) => {
                  
                const datalist = response.data.data;
               var data1 =[];
                datalist.map(function(value,index){

               

                  var pid = value.pid;
                
              
                axios({
                  method: 'post',
                  url: config.url+'patient/ctk/getpatient',
                  data: {"pid":pid},
                  headers: {
                    'Content-Type': 'application/json',
                    'auth': auth
                    }
                  })
                  .then( (response) => {
         
                  
                    var datalist1 = response.data.data;

                    value.phone = datalist1[0].phone
                    value.name = datalist1[0].name

                   self.setState({datalist1:data1})

                   
                    
                     //  for (let i =0 ;i<datalist1.length; i++){

                     //    value.phone = Phone;

                     //    console.log("value", value);

                        

                     //    var Phone = datalist1[i].phone;
                     //    var Name = datalist1[i].name;
 
                       

                     //     datalist[index].phone = Phone;
                     //     datalist[index].name = Name;

                     //     data1.push(datalist1[i])

                     //     self.setState({datalist1:data1})

                     //  } 
                    
                  })
                  .catch( (response) => {
                      //handle error
                      console.log(response);
                     
                  });
         
                
                
                 
                 })

                 datalist.sort((a, b) => new Date(a.adate) - new Date(b.adate));
                
                 this.setState({datalist: datalist})
                
                
               
                 
               })
            
               .catch( (response) => {
                   //handle error
                   console.log(response);
               });
           
       }

       SearchAppointment = (event) => {
        
      
         var active = 3;
        
        this.Appointmentdata(active);

     }

    

     Customonclick = (event) => {
        
        
      var customdiv = document.getElementById('customdiv');
      $(customdiv).show();
    
      var active = 3;
      this.setState({active:active});
      
      this.Appointmentdata(active);
     
     
    }
  


     todayAppointment = (event) => {
    
      var active = 1;

      this.setState({active:active});
     
      var customdiv = document.getElementById('customdiv');
         $(customdiv).hide();
      this.Appointmentdata(active);
     
      

       
   }

   tmrwAppointment = (event) => {
    
      var customdiv = document.getElementById('customdiv');
      $(customdiv).hide();
      var active = 2;
      this.setState({active:active});
      this.Appointmentdata(active);
     
    
   }
  
   RefAppointment = (event) => {
    

     var active = this.state.active;
     var type = 0;
      this.Appointmentdata(active,type);

   }
  
  
   componentDidMount(){
      this.todayAppointment();
      
  }
  Viewpatient(id,event){
     
   event.preventDefault();
  
   

   window.location = '/Viewpatient' + "/"+ id + "/" + 2;

 }

   render() {

      
     

          return (
               <Container style={{marginBottom:"150px"}}>
                   <div className="margindata">
                <ol className="breadcrumb margindata bg-white">
                   
                   <li className="breadcrumb-item active ml-1"><strong>Appointment List</strong></li>
                </ol>
               </div>
               
               <div className="col-md-12 col-lg-12">
               <div className="cardstyle">
                 
               <div className='row'>
           <div className='col-md-5 col-lg-3 col-xs-6'>
            <h5 id='title'>Appointment List</h5>
           </div>
          
           <div id='divsearch'  class="col-md-6 col-lg-5  col-xs-6 input-group margin-bottom-sm custle">
                
                <input
                type="text"
                name="ref"
                className="form-control class2"
                placeholder="Enter Appointment reference"
                 value={this.state.ref}
                 onChange={this.handleChange}
                 />
                 <div style={{cursor:"pointer"}} onClick={this.RefAppointment}><i  className="fa fa-search  class3"></i></div>
                   </div>

    
           <div  className='col-md-4 col-lg-4 col-xs-12' >

           <select name="type"  className="form-control"  style={{margin:"20px",width:"90%"}} onChange={this.Optionchange} value={this.state.type} >
               <option value="0">Select type</option>
               <option value="1">General</option>
               <option value="2">Cataract</option>
               <option value="3">All Surgery</option>
           </select>
           </div>
           </div>
          
           <div style={{display:"none"}} id='customdiv' className="container col-md-8 col-lg-8 col-xs-12 input-group margin-bottom-sm customstyle"  >
            
            <div className="form-group"   style={{marginRight:"10px"}}>
             <label><strong>Start Date and Time</strong></label>
             <input
                 type="datetime-local"
                 name="startdate"
                className="form-control"
                placeholder="Start Date"
                value={this.state.startdate}
              
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group"   style={{marginRight:"10px"}}>
                    <label><strong>End Date and Time</strong></label>
                    <input
                 type="datetime-local"
                 name="enddate"
                className="form-control"
                placeholder="End Date"
                value={this.state.enddate}
              
                onChange={this.handleChange}
                />
               </div>
               <div className="form-group" style={{marginTop:"30px"}} >
              
              <input type="submit" onClick={this.SearchAppointment} className="btn btnstyle1" value="Submit" /> 
              </div>
                </div>
       <div >  
       <ul className="col-xs-12 nav nav-tabs-new2 ulofstyle">
        
         <li className="nav-item"><a className=" nav-link active" data-toggle="tab" onClick={this.todayAppointment}>Today</a></li>
         <li className="nav-item"><a className=" nav-link" data-toggle="tab" onClick = {this.tmrwAppointment}>Tomorrow</a></li>
         <li className="nav-item"><a className=" nav-link" data-toggle="tab" onClick = {this.Customonclick}>Custom Schedule</a></li>
         </ul>
       </div>
               
                  <div className="container" id='appointmentable' >
                  <div className="table-responsive">
                  {(() => {
                   if (this.state.datalist.length === 0) {
                   return (  
                     <h2 style={{textAlign:"center"}}>No Data</h2>
                   )
                  }
                  else{
                     return(
                        <Table  className="table table-hover"  >
                        <Thead className="thead-dark" >
                        <Tr>
                           <Th>S.No</Th>
                           <Th>Name</Th>
                           <Th>Phone</Th>
                           <Th>Type</Th>
                           <Th>Date and Time</Th>
                           <Th>Reference</Th>
                           <Th></Th>
                        </Tr>
                        </Thead>
                         <Tbody>
                         {this.state.datalist.map((person,index) => (
                            <Tr key={index}>
                             <Td>{index+1}</Td>
                           
                             <Td style={{cursor:"pointer"}} onClick={this.Viewpatient.bind(null, person.pid)} title="Click to View Patient Details">{person.name}</Td>
                             
                             <Td>{person.phone}</Td>
                             {(() => {
                                 if (person.type === 1) {
                                    return (  
                                    <Td>General</Td>
                                    )
                                 }
                                else if (person.type === 2) {
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
                             <Td>{new Date(person.adate).toLocaleString()}</Td>
                             <Td>{person.ref}</Td>
                             <Td><a href={"/Editappointment/"+ person._key + "/" + person.pid + "/" + "Appointmentlist" + "/" + '1' } className="btn btn-sm btn-success mr-1"> <i title='Edit Appointment' id={person._key} className="fa fa-edit"></i></a></Td>
                            </Tr>
                            ))}
                         </Tbody>
                      </Table>
                     )
                  }
                })()}
                  </div> 
               </div>
               </div>
               </div> 
                 </Container>
            )
         }
     }
   
    export default Datalist1;
