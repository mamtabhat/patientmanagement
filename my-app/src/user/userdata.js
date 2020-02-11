import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';

import  '../Appoinmentlist-page/Appoinmentlist.css'; 
import axios from 'axios';
import config from '../config/config'
import $ from 'jquery';
import bootbox from 'bootbox';







var stdindata;



class userdata extends Component {
    render(){
        
        return (
            <div>
            <Headerdata/>
           
           
            <Editdata/>
           
            <Footerdata/>
          
            </div>
            
      );
    }
}


class Editdata extends Component {


    constructor(props) {
        super(props) 
        this.state = { 
            datalist: []
           
        }
        this.userdata = this.userdata.bind(this);
     }
  
     userdata(){

        
        var auth =  sessionStorage.getItem('auth');


        




      axios({
          method: 'get',
          url: config.url+'user/ctk/getalladmins',
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
              $("#diverroralert").show();
              $("#spanerror").html('Oops! something went wrong');
          });
    }




     deteteuser(val){

          
        console.log("val", val);



        var auth =  sessionStorage.getItem('auth');

        var uiddata = [];
       
        uiddata.push(val);

        var thisuser = this;

        let payload = {
            uids: uiddata
          };


        var uids = JSON.stringify(payload);

        console.log("uids", uids);

        bootbox.confirm({
            message: "Do you want to Delete this User?",
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
                    url: config.url+'user/ctk/deleteadmins',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth': auth
                    },
                    data: uids
                    })
                    .then( (response) => {
                        //handle success
                  
                        $("#divsucessalert").show();
                        $("#spansucess").html('Deleted successfully');
                
                       setTimeout(function () {
                        $("#divsucessalert").hide();
                        thisuser.userdata();
                      },1000)
           
                     //$('#'+val).css('display','none');
        
                     
        
        
                    //  axios({
                    //     method: 'get',
                    //     url: config.url+'user/ctk/getalladmins',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'auth': auth
                    //     }
                    //     })
                    //     .then( (response) => {
                    //         //handle success
                      
              
                    //      console.log(response.data.data);
              
                    //      const datalist = response.data.data;
              
                    //      this.setState({datalist: datalist})
              
              
                    //     })
                    //     .catch( (response) => {
                    //         //handle error
                    //         console.log(response);
                    //     });
        
        
            
          
                    })
                   .catch( (error) => {
      //handle error
      console.log(error.response);
      $("#diverroralert").show();
      $("#spanerror").html(error.response.data.error);
  });
      
               }
      
            }

        });

        


     }










     componentDidMount(){
         this.userdata();
         

     }
     


    render(){
        if(this.state.datalist.length > 0){

            this.state.datalist.map((student, index) => {
                if(student.sadmin == 1){
                  student.sadmin = "Admin-user"
                } else {
                  student.sadmin = "User"
                }
                
              })

            

        var body =  <div className="container-fluid">

          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 margindata">

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
            
            <div className="row">
           
           <div class="col-md-4">
           <ol className="breadcrumb bg-white">
                   <li className="breadcrumb-item active"><strong>Users</strong></li>
                </ol>
           </div>
           <div class="col-md-7">

            </div>
           <div class="col-md-1">
           <div className="float-right">
           <a className="btn btn-primary mr-2 rounded-circle" title="create user" href={"/createuser"}><i class="fa fa-plus" aria-hidden="true"></i></a>
           </div>
            </div>


            
         </div>
            </div>

             
        <div className="row">
                   {this.state.datalist.map((person) => (
                      
                       <div key={person._key} className="col-md-4 col-xs-12 mt-2">
                      <div id={person._key} className="card" >
                      <div className="parastyle1">
                     <p>{person.uname}</p>
                      </div>
                      <div className="row">
                      <i className="fas fa-phone-alt iconstyle"></i>
                       <div className="form-group">  
                       <h6>Phone</h6> 
                      <p >{person.phone}</p>
                       </div>
                      </div>
                      <div className="row">
                  <i className="fas fa-user iconstyle"></i>  
                  <div className="form-group">
                        
                   <h6>Type of user</h6>
                  
                         <p>{person.sadmin}</p>
                  
                   </div>
                   </div>
                   <div className="mb-1" style={{textAlign:"right"}}>
                       <a title="Edit" id="Editopt" href={"/Edituser/"+person._key} className="btn btn-sm btn-success mr-1"><i className="fa fa-edit" aria-hidden="true"></i></a>
                       <button title="Delete" id="deleteid" value={person._key} onClick={this.deteteuser.bind(this,person._key)} className="btn btn-sm btn-danger mr-1"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                   </div>
                      </div>
                      </div>
                  
                     ))}
               
        </div> 
        <div className="row" style={{marginTop:"100px"}}>
        </div>
       
        </div>
       


        } else {
            body = 
            <div className="container" style={{marginTop:"100px"}}>
               <div className="row">

              
               <div className="col-md-3">

                </div>
             <div className="col-md-6">

             </div>
             <div className="col-md-3">
             <div className="float-right">
             <a className="btn btn-primary mr-2 rounded-circle" title="create user" href={"/createuser"}><i class="fa fa-plus" aria-hidden="true"></i></a>
               </div>
            </div>
            </div>

            <h2 className="text-center  mt-5">Click Create User Icon to Create Users</h2>

            </div>
        }
        
        return (
            <div>
                 
               
               {body}
               
            </div>
          
        );
    }
}


export default userdata;
