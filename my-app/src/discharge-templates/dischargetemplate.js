import React, { Component } from 'react';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery'; 
import axios from 'axios';
import config from '../config/config';
import bootbox from 'bootbox';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

class DischargeTemplate extends Component {

    render(){
         
        return (
          
          <div>
          <Headerdata/>
          <Templatedata/>
          <Footerdata/>
         
          </div>
      );
    }
}

class Templatedata extends Component {


    constructor(props) {
        super(props) 
        this.state = { 

            datalist:[],
        }
    }


    Alltemplates(){
    
        var auth =  sessionStorage.getItem('auth');

      
        axios({
            method: 'get',
            url: config.url+'discharge/ctk/listtemplates',
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
    closedtaperror(event){
        event.preventDefault();
        var modal = document.getElementById('diverroralert');
        $(modal).hide();
    }

    componentDidMount(){
        this.Alltemplates()
    }


    deletetemplate = (id,event) =>{

        
       var data = {
           tid:id,
       }
       var postdata = JSON.stringify(data);

       console.log(postdata)
       var _this = this;
       var auth =  sessionStorage.getItem('auth');
       bootbox.confirm({
        message: "Would like to delete this discharge template? ",
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
        url: config.url+'discharge/ctk/deletetemplate',
        data:postdata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
          console.log(response.data);
        
            $("#divsucessalert").show();
            $("#spansucess").html('Deleted successfully');
        
        setTimeout(function () {
            $("#divsucessalert").hide();
           
        },1000)
        _this.Alltemplates();

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
       
       return false;
    }


    render() {


        if(this.state.datalist.length === 0){
            var body= <div className='container' style={{marginBottom:"150px"}}>
                <div className="margindata">
                <ol className="breadcrumb bg-white">
                
                   <li className="breadcrumb-item active ml-1"><strong>Discharge Templates</strong></li>
                </ol>
             </div>
                <div  className="col-md-12 col-lg-12" >
                <div className="cardstyle">
              
                 <div >
                     <h5 id='title'>Discharge Templates</h5>
              
                     <a style={{marginTop:"-4.5rem"}} className="btn btn-primary rounded-circle  float-right mr-2" href={"/createtemplate"}><i title='Create Discharge Templates'  className="fa fa-plus"></i></a>
                </div>
                   <h2 id='title' style={{textAlign:"center"}}>Click Create Discharge Templates icon to Create a Discharge Templates</h2>
                </div>
                 </div>
                 </div>
        }
        else {
            var body= <div className='container' style={{marginBottom:"150px"}}>
                <div className="margindata">
                <ol className="breadcrumb bg-white">
                
                   <li className="breadcrumb-item active ml-1"><strong>Discharge Templates</strong></li>
                </ol>
             </div>
                 <div  className="col-md-12 col-lg-12" >
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
               
               <div className="cardstyle">
              
           <div >
            <h5 id='title'>Discharge Templates</h5>
           
                   <a style={{marginTop:"-4.5rem"}} className="btn btn-primary rounded-circle  float-right mr-2" href={"/createtemplate"}><i title='Create Templates'  className="fa fa-plus"  ></i></a>
                 </div>
               
                <div className="container">
                <div className="table-responsive">
                <Table  className="table table-hover"  >
            <Thead className="thead-dark" >
                    <Tr>
                      <Th>S.No</Th>
                      <Th>Name</Th>
                      <Th>Content</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  { this.state.datalist.map((value,index) => (
                    <Tr>
                      <Td>{index+1}</Td>
                      <Td>{value.name}</Td>
                      <Td style={{textAlign:"justify"}}>{value.content}</Td>
                      <Td> <a  title="Edit"  href={"/Edittemplate" + "/" + value._key } className="btn btn-sm btn-success mr-1"><i className="fa fa-edit" aria-hidden="true"></i></a></Td>
                      <Td> <button onClick={this.deletetemplate.bind(this,value._key)} title="Delete" id="deleteid"  className="btn btn-sm btn-danger mr-1"><i className="fa fa-trash-alt" aria-hidden="true"></i></button></Td>
                   </Tr>
                     ))
                    }
                 </Tbody>
              </Table>
                 </div>
                 </div>
                </div>
                </div>
                </div>
        }
        return( 
            <div>
            {body}
            </div>
         )
    }
}

export default DischargeTemplate;