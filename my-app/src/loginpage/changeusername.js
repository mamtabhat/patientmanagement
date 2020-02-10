import React, { Component } from 'react';
import { Container,Row} from 'react-bootstrap';
import Footerdata from '../Templates/footer1';
import Headerdata from '../Templates/header1';
import $ from 'jquery'; 
import axios from 'axios';
import config from '../config/config'


class Usernameform extends Component{



    constructor(props) {
        super(props);

        var username = sessionStorage.getItem('username');
        this.state = {
            name : username,
           
           

           
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      Goback(){
   
        window.history.back();
    }
      handleChange(event) {
       
        if (event.target.name === 'name') {
            $('#namealert').hide();
          }
        
        this.setState({
            [event.target.name]: event.target.value
        })
        }

        handleSubmit(event) {
            event.preventDefault();

            console.log("name",this.state.name);
            
            var data = {

                username:this.state.name
            }

            var postdata = JSON.stringify(data);
            var auth = sessionStorage.getItem('auth');  

          if(this.state.name === "" || this.state.name === null){
            $('#namealert').show();
          }
          else{
            axios({


                method:'post',
                url:config.url + 'user/ctk/edituser',
                data:postdata,
                headers:{
                    'Content-Type' : 'application/json',
                    'auth':auth
                }

            }).then((response) =>{

                console.log(response.data)
                    
                if (response.data.success === true) {
                    $("#divsucessalert").show();
                    $("#spansucess").html('Username Changed successfully');
                
                setTimeout(function () {
                  //window.location = '/dischargetemplate'
                  //this.props.history.goBack();
                  },1000)
                }
                
            }).catch( (error) => {
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
            <Container className="margindata">
            <h3 class="text-center">Change Username</h3>
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
       type="text"
       name="name"
       className="form-control"
       placeholder="Username"
       value={this.state.name }
       onChange={this.handleChange}
     />
       <br></br>
      <div id="namealert" style={{marginTop:"10px"}} className="alert alert-danger modalnew" aria-hidden="true">
          Enter username
       </div>
       
     <div className="float-right">
     <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Cancel</a>
     <button className="btn btn-success">Submit</button>
     </div>
     </form>
            </div>
           
            <div className="col-md-3">
            </div>
            </Row>
           </Container>
           <Footerdata/>
           </div>
        )
    }

}

export default Usernameform;