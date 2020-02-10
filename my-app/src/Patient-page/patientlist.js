import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import $ from 'jquery'; 
import axios from 'axios';
import config from '../config/config'

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


    Searchonclick(event){
        event.preventDefault();
        
        var searchdiv = document.getElementById('divsearch');
        var emptydiv = document.getElementById('emptydiv');
      
        $(searchdiv).show();
        $(emptydiv).hide();
      
      }
     
      constructor(props) {
         super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
         this.state = { //state is by default an object
            patientname:'',
            datalist:[],
            dataofarray:'',
           
         }
         this.handleChange = this.handleChange.bind(this);
         this.Searchpatient = this.Searchpatient.bind(this);

         
      }
      handleChange(event) {
        

        this.setState({
          [event.target.name]: event.target.value
      })
      }
     
      Searchpatient = (event) => {
         
        var auth =  sessionStorage.getItem('auth');
        var data ;

        if(this.state.patientname.match("^[a-zA-Z ]*$")!=null) {
          data = {
            name: this.state.patientname,
        }
        }
        else{

          data = {
            phone:parseInt(this.state.patientname),
          }
        }


        var postdata = JSON.stringify(data);
        console.log(postdata)
      
        axios({
            method: 'Post',
            url: config.url+'patient/ctk/retrievepatient',
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
      Createonclick(event){
        event.preventDefault();
       
        
        window.location = '/Createappointment';
      }

      componentDidMount(){
        this.Searchpatient();
    }

    Viewpatient(id,event){
     
      event.preventDefault();
     
      

      window.location = '/Viewpatient' + "/"+ id;

    }
       render() {
        
      

          return (
           
             <div className="container margindata" style={{marginBottom:"150px"}} >
             
             <div className="col-md-12 col-lg-12">
             <div className="cardstyle">
             <div className='row'>
         <div className='col-md-4'>
          <h5 id='title'>Patient List</h5>
         </div>
      
         <div id='divsearch'   class="col-md-6 input-group margin-bottom-sm custle">
              
              <input
              type="text"
              name="patientname"
              className="form-control class2"
              placeholder="Enter Patient Name or Phone number"
              value={this.state.patientname}
              onChange={this.handleChange}
               />
               <div onClick={this.Searchpatient}><i  className="fa fa-search  class3"></i></div>
                 </div>
                 <div  className='col-md-2'>
                 <a href={"/Createpatient"} className="btn btn-primary float-right m-3 rounded-circle  "> <i title='Create Patient' className="fas fa-plus"></i></a>
        </div>
        </div>
      
            <div  className="container" id='tablepatient' >
            <div  className="table-responsive">
                   {(() => {
        if (this.state.datalist.length === 0) {
          return (
            <div>
            <h2 style={{textAlign:"center",margin:"20px"}}>Click Create Patient icon to Create a patients </h2>
           
          </div>
          )
        } else {
          return (
            
            <Table  className="table table-hover"  >
            <Thead className="thead-dark" >
            <Tr>
                <Th>S.No</Th>
                <Th>Name</Th>
                <Th>Phone </Th>
                <Th>Gender </Th>
                <Th>Address</Th>
                <Th>Pincode</Th>
                <Th>Date and Time</Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
            </Tr>
            </Thead>
             <Tbody>
           
               

            {this.state.datalist.map((person,index) => (

                 <Tr>
                 <Td>{index + 1 }</Td>
                 <Td style={{cursor:"pointer"}} onClick={this.Viewpatient.bind(null, person._key)} title="Click to View Patient Details">{person.name}</Td>
                 <Td>{person.phone}</Td>

                 {(() => {

                  if(person.gender === 1){
                    return(
                      <Td>Female</Td>
                    )
                  }
                  else{
                    return(
                      <Td>Male</Td>
                    )
                  }

                })()}
               
                 <Td>{person.address}</Td>
                 <Td>{person.pin}</Td>
                 {(() => {
                   if(person.edate === undefined || person.edate === null){
                     return(
                      <Td>{new Date(person.rdate).toLocaleString()}</Td>
                     )
                   }
                   else{
                     return(
                      <Td>{new Date(person.edate).toLocaleString()}</Td>
                     )
                   }
                
                  })()}

                 <Td> <a title="Edit" id="Editopt" href={"/Editpatient/"+person._key + "/" + person.gender } className="btn btn-sm btn-success mr-1"><i title='Edit Patient' className="fas fa-edit "></i></a></Td>
                
                
                 <Td><a href={"/Createappointment/"+person._key } className="btn btn-sm btn-primary mr-1"> <i title='Create Appointment' id={person._key} className="fa fa-plus "></i></a></Td>
                 <Td><a className="btn btn-primary btn-sm  mr-1" href={"/Casesheets/"+person._key}>Casesheet</a></Td>
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
               </div>
           
          )
       }
   }
 
  export default Datalist1;