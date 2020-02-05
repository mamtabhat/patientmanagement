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
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Logoimg from '../images/logonew.png';

const styledata = {
  backgroundColor:"gray",
  borderRadius: "5px 5px 0px 0px",
  boxShadow: "0px 2px grey",
  color: "black"
}


function opticaldata(){
  $('#casesheetdiv').hide();
  $('#opticaldiv').show();
  $('#Prescriptiondiv').hide();
  $('#Casesheetid').css("color", "white");
  $('#Opticalid').css("color", "black");
  $('#Prescriptionid').css("color", "white");
}


function Prescriptiondata(){
  $('#casesheetdiv').hide();
  $('#opticaldiv').hide();
  $('#Prescriptiondiv').show();
  $('#Casesheetid').css("color", "white");
  $('#Opticalid').css("color", "white");
  $('#Prescriptionid').css("color", "black");

 }



class Createcasesheets extends Component {

    constructor(props) {
        super(props) 

          var piddata = props.match.params.pid;

        this.state = { 
                dm: '',
                ht: '',
                ihd: '',
                allergy: '',
                other: '',
                optlist: [],
                prelist: [],
                va: '',
                re: 0,
                le : 0,
                redata: '',
                ledata: '',
                aseg: [],
                pseg : [],
                text: '',
                did : [],
                didvalue: '',
                discheck: '',
                didid: '',
                username: 'brahmendra',
                phone: '7330946033',
                age: '25',
                gender: 'male',
                address: 'Electronic city, bangalore, karnataka',
                pincode: '523271',
                patientid: piddata,
                cid: '',
                oids: [],
                oiddata: [],
                oid: '',
                pid: '',
                pids: [],
                presdata: [],
                instruction: '',
                odsph: '',
                odcyl: '',
                odaxis: '',
                odva: '',
                ossph: '',
                oscyl: '',
                osaxis: '',
                osva: '',
                distre: '',
                distle: '',
                nearre: '',
                nearle: '',
                kryptok: 0,
                unicvisd: 0,
                hiindex: 0,
                photochromic: 0,
                progreesive: 0,
                glass: 0,
                white: 0,
                arc: 0,
                executive: 0,
                plastic: 0,
                tint: 0,
                ophthalmologist: 0,
                Tablet1: '',
                Tablet2: '',
                Tablet3: '',
                Tablet4: '',
                Tablet5: '',
                Tablet6: '',
                Tablet7: '',
                Tablet8: '',
                Tablet9: '',
                Tablet10: '',
                Re1: 0,
                Re2: 0,
                Re3: 0,
                Re4: 0,
                Re5: 0,
                Re6: 0,
                Re7: 0,
                Re8: 0,
                Re9: 0,
                Re10: 0,
                Le1: 0,
                Le2: 0,
                Le3: 0,
                Le4: 0,
                Le5: 0,
                Le6: 0,
                Le7: 0,
                Le8: 0,
                Le9: 0,
                Le10: 0,
                Time1: null,
                Time2: null,
                Time3: null,
                Time4: null,
                Time5: null,
                Time6: null,
                Time7: null,
                Time8: null,
                Time9: null,
                Time10: null,
                Day1: null,
                Day2: null,
                Day3: null,
                Day4: null,
                Day5: null,
                Day6: null,
                Day7: null,
                Day8: null,
                Day9: null,
                Day10: null,
                Review: '',
                distext: ''
              
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
     }


     closedtaperror(event){
      event.preventDefault();
      var modal = document.getElementById('diverroralert');
      $(modal).hide();
  }



     prelistdata= event =>{

    console.log(event.target.name);
    console.log("event", event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      })

      }


      opticllistdata= event =>{

        console.log(event.target.name);
        console.log("event", event.target.value);
          this.setState({
            [event.target.name]: event.target.value
          })
    
          }


          Preslistdata= event =>{

            console.log(event.target.name);
            console.log("event", event.target.value);
              this.setState({
                [event.target.name]: event.target.value
              })
        
              }




      checkboxdata = event => {
        var data =document.getElementById('re').checked;

       

         console.log("event", event.target);

       console.log("data", data);
       if(data){
        $('#redataid').show();
        this.setState({
            [event.target.name]: 1
        })
       } else {
        $('#redataid').hide();
        this.setState({
            [event.target.name]: 0
        })
       }
      
       
     };



     Ledata = event => {
      var data =document.getElementById('le').checked;

     console.log("data", data);
     if(data){
      $('#ledataid').show();
      this.setState({
          [event.target.name]: 1
      })
     } else {
      $('#ledataid').hide();
      this.setState({
          [event.target.name]: 0
      })
     }
    
     
   };



   typesdata = event => {

    var id = event.target.name;

    var data =document.getElementById(id).checked;


    console.log("data", data);

    if(data){
      this.setState({
          [event.target.name]: 1
      })
     } else {
      this.setState({
          [event.target.name]: 0
      })
     }



   }




   Prestypesdata = event => {

    var id = event.target.name;

    console.log("id", id);

    var data =document.getElementById(id).checked;


    console.log("data", data);

    if(data){
      this.setState({
          [event.target.name]: 1
      })
     } else {
      this.setState({
          [event.target.name]: 0
      })
     }



   }



   asegdata = event => {


      console.log(event.target.name);

      var id = event.target.name;

      var data = $('#'+id).val();

      console.log("data", data);

      this.setState({
        [event.target.name]: data
    })



    };
    psegdata = event => {


      console.log(event.target.name);
      var data = $('#pseg').val();

      console.log("data", data);

      this.setState({
        [event.target.name]: data
    })



    };


    handleSubmit(event) {

     var auth =  sessionStorage.getItem('auth');

      event.preventDefault();


     if(this.state.cid != ""){
      $("#diverroralert").show();
      $("#spanerror").html('Casesheet already created');
      return false;
     }
         var data = {
          pid : this.state.patientid,
          ht: this.state.ht,
          ihd: this.state.ihd,
          allergy: this.state.allergy,
          other : this.state.other,
          optlist : this.state.optlist,
          preslist: this.state.prelist,
          va : this.state.va,
          re: this.state.redata,
          le: this.state.ledata,
          aseg: this.state.aseg,
          pseg: this.state.pseg,
          text : this.state.text,
          did : this.state.didid
         }
  
  
         var postdata = JSON.stringify(data);


         console.log("postdata", postdata);
  
         axios({
          method: 'post',
          url: config.url+'cs/ctk/createcasesheet',
          data: postdata,
          headers: {
              'Content-Type': 'application/json',
              'auth': auth
          }
          })
          .then( (response) => {
              //handle success
        
  
           console.log(response.data.data._key);
  
           this.setState({cid: response.data.data._key}) 
           
           //this.setState({oids: response.data.data.optlist}) 
  
           $("#divsucessalert").show();
           $("#spansucess").html('Casesheet Created successfully');
  
           setTimeout( () => {
  
            $("#divsucessalert").hide();
             
            }, 2000 )
  

  
           //opticaldata();
  
  
          })
          .catch( (response) => {
              //handle error
              console.log(response);
              $("#diverroralert").show();
              $("#spanerror").html('Oops! something went wrong');
          });
    };





    userdata(){


      var auth =  sessionStorage.getItem('auth');
     
      var data = {
       
        pid: this.state.patientid
        
      }

     

      axios({
        method: 'post',
        url: config.url+'patient/ctk/getpatient',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

         console.log(response.data.data);


         var patientdata = response.data.data;

         //this.setState({optlist: ["one","two","three","four"]})

         patientdata.map((patient) => {


          if(patient.gender == 0){
            this.setState({gender: "Male"})
          } else {
            this.setState({gender: "Female"})
          }

          this.setState({username: patient.name})
          this.setState({phone: patient.phone})
          this.setState({age: patient.age})
         
          this.setState({address: patient.address})
          this.setState({pincode: patient.pin})
          this.setState({patientid: patient._key})


         })

         //const datalist = response.data.data;

         //this.setState({datalist: datalist})


        })
         .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });
    }


   dischargedata = () => {

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
      

         console.log(response.data.data);


         
         this.setState({did: response.data.data})
         //this.setState({optlist: ["one","two","three","four"]})

         

         //const datalist = response.data.data;

         //this.setState({datalist: datalist})


        })
        .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });


   }



    componentDidMount(){

      var sadmin =  sessionStorage.getItem('sadmin');
      this.userdata();
 
      if(sadmin == "2"){
        this.dischargedata();
      }

     

      
      
      

  }



  Casesheet = () => {
    $('#casesheetdiv').show();
    $('#opticaldiv').hide();
    $('#Prescriptiondiv').hide();
    $('#dischargediv').hide();
    $('#createid').hide();
    $('#Casesheetid').css("color", "black");
    $('#Opticalid').css("color", "white");
    $('#Prescriptionid').css("color", "white");
    $('#Dischargeid').css("color", "white");

   }
   Optical = () => {
    //if(this.state.cid != ""){
      $('#casesheetdiv').hide();
      $('#opticaldiv').show();
      $('#createid').show();
      $('#Prescriptiondiv').hide();
      $('#dischargediv').hide();
      $('#Casesheetid').css("color", "white");
      $('#Opticalid').css("color", "black");
      $('#Prescriptionid').css("color", "white");
      $('#Dischargeid').css("color", "white");
    //}








     

   }

   Prescription = () => {
    //if(this.state.cid != ""){
    $('#casesheetdiv').hide();
    $('#opticaldiv').hide();
    $('#createid').hide();
    $('#Prescriptiondiv').show();
    $('#dischargediv').hide();
    $('#Casesheetid').css("color", "white");
    $('#Opticalid').css("color", "white");
    $('#Prescriptionid').css("color", "black");
    $('#Dischargeid').css("color", "white");
  //}
   }


   createoptical = () => {
    $('#opticaltable').hide();
    $('#createoptical').show();
    $('#opticalbutton').hide();

    $('#createoptical').css('height', "auto");
    $('#createid').show();

   }

   createprescription = () => {
   
    $('#prestable').hide();
    $('#createpres').show();

    $('#Prescriptiondiv').css('height', "auto");
   }


     create = () => {


        var auth =  sessionStorage.getItem('auth');


        console.log("oiddata", this.state.oid);

        
          if(this.state.cid == ""){
            $("#diverroralert").show();
            $("#spanerror").html('Create casesheet first');
            return false;
          }

          if(this.state.oid != ""){
            $("#diverroralert").show();
            $("#spanerror").html('Optical already created');
            return false;
          }
        

        var typesarray = [];

        typesarray.push(this.state.kryptok);
        typesarray.push(this.state.unicvisd);
        typesarray.push(this.state.hiindex);
        typesarray.push(this.state.photochromic);
        typesarray.push(this.state.progreesive);
        typesarray.push(this.state.glass);
        typesarray.push(this.state.white);
        typesarray.push(this.state.arc);
        typesarray.push(this.state.executive);
        typesarray.push(this.state.plastic);
        typesarray.push(this.state.tint);
        typesarray.push(this.state.ophthalmologist);


        var osdata = {
          "SPH": this.state.ossph,
          "CYL": this.state.oscyl,
          "AXIS": this.state.osaxis,
          "va": this.state.osva
        }
        var oddata = {
          "SPH": this.state.odsph,
          "CYL": this.state.odcyl,
          "AXIS": this.state.odaxis,
          "va": this.state.odva
        }

        var distdata = {
          "RE": this.state.distre,
          "LE": this.state.distle
        }
        var neardata = {
          "RE": this.state.nearre,
          "LE": this.state.nearle
        }

        var vdata = {
          OS: osdata,
          OD: oddata
        }; 


         console.log("vdata", vdata);

        var data = {
          pid: this.state.patientid,
          instruction: this.state.instruction,
          vdata : vdata,
          dist: distdata,
          near: neardata,
          types: typesarray
        } 

        console.log("data", data);



        

        axios({
          method: 'post',
          url: config.url+'opticals/ctk/createoptical',
          data: data,
          headers: {
              'Content-Type': 'application/json',
              'auth': auth
          }
          })
          .then( (response) => {
              //handle success
        
  
           console.log(response.data.data);


           this.state.oids.push(response.data.data);

           this.state.oiddata.push(response.data.data._key);


           this.setState({oids: this.state.oids})

           this.setState({oiddata:  this.state.oiddata})

           this.setState({oid:  response.data.data._key})

          //  $('#opticaltable').show();
          //  $('#createoptical').hide();
          //  $('#opticalbutton').show();
          //  $('#opticaldiv').show();
          //  $('#createoptical').css('height', "500px");
          //  $('#createid').hide();
  

            console.log("oids", this.state.oids);
            console.log("oiddata", this.state.oiddata);
            console.log("cid", this.state.cid);
         
          var editdata = {
            cid: this.state.cid,
            optlist: this.state.oiddata
          }

            

            axios({
        method: 'post',
        url: config.url+'cs/ctk/editcasesheet',
        data: editdata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

         console.log(response);

         $("#divsucessalert").show();
         $("#spansucess").html('Optical Created successfully');

         setTimeout( () => {

          $("#divsucessalert").hide();
           
          }, 2000 )

         //Prescriptiondata();

      
        })
        .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });

          })
          .catch( (error) => {
          //handle error
          console.log(error.response);
          $("#diverroralert").show();
          $("#spanerror").html(error.response.data.error);
      });

  
    
     }
     Goback(){
   
      window.history.back();
  }

     createpres = () => {
      var auth =  sessionStorage.getItem('auth');


      if(this.state.cid == ""){
        $("#diverroralert").show();
        $("#spanerror").html('Create casesheet first');
        return false;
      }

      if(this.state.pid != ""){
        $("#diverroralert").show();
        $("#spanerror").html('Prescription already created');
        return false;
      }


      var medicines = [];

       var med1 = {
         "med": this.state.Tablet1,
         "re": this.state.Re1,
         "le": this.state.Le1,
         "times": parseInt(this.state.Time1),
         "days": parseInt(this.state.Day1)
       }
       var med2 = {
        "med": this.state.Tablet2,
        "re": this.state.Re2,
        "le": this.state.Le2,
        "times": parseInt(this.state.Time2),
        "days": parseInt(this.state.Day2)
      }
      var med3 = {
        "med": this.state.Tablet3,
        "re": this.state.Re3,
        "le": this.state.Le3,
        "times": parseInt(this.state.Time3),
        "days": parseInt(this.state.Day3)
      }
      var med4 = {
        "med": this.state.Tablet4,
        "re": this.state.Re4,
        "le": this.state.Le4,
        "times": parseInt(this.state.Time4),
        "days": parseInt(this.state.Day4)
      }
      var med5 = {
        "med": this.state.Tablet5,
        "re": this.state.Re5,
        "le": this.state.Le5,
        "times": parseInt(this.state.Time5),
        "days": parseInt(this.state.Day5)
      }
      var med6 = {
        "med": this.state.Tablet6,
        "re": this.state.Re6,
        "le": this.state.Le6,
        "times": parseInt(this.state.Time6),
        "days": parseInt(this.state.Day6)
      }
      var med7 = {
        "med": this.state.Tablet7,
        "re": this.state.Re7,
        "le": this.state.Le7,
        "times": parseInt(this.state.Time7),
        "days": parseInt(this.state.Day7)
      }
      var med8 = {
        "med": this.state.Tablet8,
        "re": this.state.Re8,
        "le": this.state.Le8,
        "times": parseInt(this.state.Time8),
        "days": parseInt(this.state.Day8)
      }
      var med9 = {
        "med": this.state.Tablet9,
        "re": this.state.Re9,
        "le": this.state.Le9,
        "times": parseInt(this.state.Time9),
        "days": parseInt(this.state.Day9)
      }
      var med10 = {
        "med": this.state.Tablet10,
        "re": this.state.Re10,
        "le": this.state.Le10,
        "times": parseInt(this.state.Time10),
        "days": parseInt(this.state.Day10)
      }

     if(this.state.Tablet1 != ""){
       medicines.push(med1);
     }
     if(this.state.Tablet2 != ""){
      medicines.push(med2);
    }
    if(this.state.Tablet3 != ""){
      medicines.push(med3);
    }
    if(this.state.Tablet4 != ""){
      medicines.push(med4);
    }
    if(this.state.Tablet5 != ""){
      medicines.push(med5);
    }
    if(this.state.Tablet6 != ""){
      medicines.push(med6);
    }
    if(this.state.Tablet7 != ""){
      medicines.push(med7);
    }
    if(this.state.Tablet8 != ""){
      medicines.push(med8);
    }
    if(this.state.Tablet9 != ""){
      medicines.push(med9);
    }
    if(this.state.Tablet10 != ""){
      medicines.push(med10);
    }
     

    var predata = {
      pid: this.state.patientid,
      review: this.state.Review,
      medicines: medicines
    }
     

      console.log("predata", predata);

       
      axios({
        method: 'post',
        url: config.url+'medicine/ctk/createprescription',
        data: predata,
        headers: {
            'Content-Type': 'application/json',
            'auth': auth
        }
        })
        .then( (response) => {
            //handle success
      

         console.log(response);



         this.state.pids.push(response.data.data);

           this.state.presdata.push(response.data.data._key);


           this.setState({pids: this.state.pids})

           this.setState({presdata:  this.state.presdata})

           this.setState({pid:  response.data.data._key})

        
            console.log("oids", this.state.pids);
            console.log("oiddata", this.state.presdata);
            console.log("cid", this.state.cid);
         
          var editdata = {
            cid: this.state.cid,
            preslist: this.state.presdata
          }




         axios({
          method: 'post',
          url: config.url+'cs/ctk/editcasesheet',
          data: editdata,
          headers: {
              'Content-Type': 'application/json',
              'auth': auth
          }
          })
          .then( (response) => {
              //handle success
        
  
           console.log(response);

           $("#divsucessalert").show();
           $("#spansucess").html('Prescription Created successfully');

           setTimeout( () => {

          $("#divsucessalert").hide();
           
          }, 2000 )


           //window.location = '/Casesheets/'+this.state.patientid;
  
        
          })
           .catch( (error) => {
            //handle error
            console.log(error.response);
            $("#diverroralert").show();
            $("#spanerror").html(error.response.data.error);
        });
  





        })
         .catch( (error) => {
            //handle error
            console.log(error.response);
            $("#diverroralert").show();
            $("#spanerror").html(error.response.data.error);
        });

          
      




     }



     patientdetailuparrow = () => {
        $('#downarrow').hide();
        $('#uparrow').show();
        $('#patientdetail').hide();
     }

     patientdetaildownarrow = () => {
      $('#downarrow').show();
      $('#uparrow').hide();
      $('#patientdetail').show();
     }
     
     downarrowoptical = () => {

      $('#downarrow-optical').hide();
      $('#uparrow-optical').show();
      $('#patient-optical').hide();

     }

     uparrowoptical = () => {
      $('#downarrow-optical').show();
      $('#uparrow-optical').hide();
      $('#patient-optical').show();
     }

     downarrowpres = () => {

      $('#downarrow-pres').hide();
      $('#uparrow-pres').show();
      $('#patient-pres').hide();

     }

     uparrowpres = () => {
      $('#downarrow-pres').show();
      $('#uparrow-pres').hide();
      $('#patient-pres').show();
     }

     downarrowdis = () => {

      $('#downarrow-dis').hide();
      $('#uparrow-dis').show();
      $('#patient-dis').hide();
    
     }
    
     uparrowdis = () => {
      $('#downarrow-dis').show();
      $('#uparrow-dis').hide();
      $('#patient-dis').show();
     }


     didlistdata= event =>{

      
      console.log(event.target.name);
      console.log("event", event.target.value);
      console.log("event", event.target.option);
      
        this.setState({
          [event.target.name]: event.target.value
         
        })

        
  
        var auth =  sessionStorage.getItem('auth');


        var did = event.target.value;

        console.log("did", did);
        console.log("did type", typeof did);

         if(did != "none"){
          this.setState({
            didid : event.target.value
           
          })

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
          
    
             console.log(response.data.data);
  
             response.data.data.map((discharge) => {
  
              if(discharge._key === did){
                console.log("name", discharge.name);
  
                this.setState({
                  distext : discharge.content
                 
                })
  
                $('#dischtext').show();
  
              }
  
             })
  
  
             //window.location = '/Casesheets/'+this.state.patientid;
    
          
            })
             .catch( (error) => {
            //handle error
            console.log(error.response);
            $("#diverroralert").show();
            $("#spanerror").html(error.response.data.error);
        });



         } else {

          this.setState({
            distext : ''
           
          })

           $('#dischtext').show();
         }

        



        }


        dischargeoption = () => {
          
          $('#casesheetdiv').hide();
          $('#opticaldiv').hide();
          $('#createid').hide();
          $('#Prescriptiondiv').hide();
          $('#dischargediv').show();
          $('#Casesheetid').css("color", "white");
          $('#Opticalid').css("color", "white");
          $('#Prescriptionid').css("color", "white");
          $('#Dischargeid').css("color", "black");


        }
      

        createdischarge = () => {

          var auth =  sessionStorage.getItem('auth');
      
          if(this.state.cid == ""){
            $("#diverroralert").show();
            $("#spanerror").html('Create casesheet first');
            return false;
          }
          console.log("didid", this.state.didid);
    
          if(this.state.discheck != ""){
            $("#diverroralert").show();
            $("#spanerror").html('Discharge sheet already created');
            return false;
          }

          var data = {
            "content": this.state.distext
          }
    
          axios({
            method: 'post',
            url: config.url+'discharge/ctk/createdischargesheet',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'auth': auth
            }
            })
            .then( (response) => {
                //handle success
          
        
             console.log("responce",response.data.data);
        
             this.setState({didid: response.data.data._key})
             this.setState({discheck: response.data.data._key})
        
           
             var data = {
              cid: this.state.cid,
              did : response.data.data._key
             }
          
          
             var postdata = JSON.stringify(data);
          
             axios({
              method: 'post',
              url: config.url+'cs/ctk/editcasesheet',
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
               $("#spansucess").html('Discharge sheet created');
          
               setTimeout( () => {
          
                $("#divsucessalert").hide();
                 
                }, 2000 )
          
              })
              .catch( (error) => {
              //handle error
              console.log(error.response);
              $("#diverroralert").show();
              $("#spanerror").html(error.response.data.error);
          });
           
        
            })
            .catch( (error) => {
              //handle error
              console.log(error.response);
              $("#diverroralert").show();
              $("#spanerror").html(error.response.data.error);
          });
          
    
    
    
    
        }
    

        printcasesheet = () => {
          //window.print();
    
          // var printContent = document.getElementById('casesheetdata');
          // window.print(printContent);
    
          var printContents = document.getElementById('printdisc').innerHTML;
          //var patientdetail = document.getElementById('patientdetail').innerHTML;
          var originalContents = document.body.innerHTML;
    
          document.body.innerHTML = printContents;
         
          window.onafterprint = function(e){
            $(window).off('mousemove', window.onafterprint);
            console.log('Print Dialog Closed..');
            window.location.reload(true);
    
           // presdata.Prescription();
        };
    
          window.print();
    
          document.body.innerHTML = originalContents;
          
        }
    
    
        printpresdata = () => {
         // window.print();
    
          // var printContent = document.getElementById('casesheetdata');
          // window.print(printContent);
    
          var printContents = document.getElementById('printpres').innerHTML;
          //var patientdetail = document.getElementById('patientdetail').innerHTML;
          var originalContents = document.body.innerHTML;
    
          document.body.innerHTML = printContents;
          var presdata = this;
          window.onafterprint = function(e){
            $(window).off('mousemove', window.onafterprint);
            console.log('Print Dialog Closed..');
            window.location.reload(true);
           // presdata.Prescription();
        };
    
          window.print();
    
          document.body.innerHTML = originalContents;
          
        }
    
        printoptical = () => {
          //var windowdata =  window.open("http://localhost:3000/Createcasesheets/10496525");
         
          var printContents = document.getElementById('printoptical').innerHTML;

          var originalContents = document.body.innerHTML;
    
          document.body.innerHTML = printContents;
          var optical = this;
          window.onafterprint = function(e){
            //(window).off('mousemove', window.onafterprint);
            console.log('Print Dialog Closed..');
            document.body.innerHTML = originalContents;
            window.open();
           // window.close();
            //window.location.reload(true);

           

            
       };
       


       window.print();

      
    
         
    
        }
    


       

    render(){
     


        const optlist = this.state.optlist;
        


        const aseg = this.state.aseg;
       

        const pseg = this.state.pseg;
      

        const prelist = this.state.prelist;
        const diddata = this.state.did;

        var sadmin =  sessionStorage.getItem('sadmin');


        if(sadmin == "2"){
          if(diddata.length > 0){

            var Discharge = <select className="form-control mt-1" name="didvalue" value={this.state.didvalue} onChange={this.didlistdata}>
               <option defaultValue>Select Discharge list</option>
            {diddata.map((value, index) => {
              return <option key={index} id={value.name} value={value._key}>{value.name}</option>
            })}
             <option>none</option>
          </select>
    
            } else {
              
                var Discharge = <select className="form-control mt-1" name="didvalue" value={this.state.didvalue} onChange={this.didlistdata}>
                <option defaultValue>Select Discharge list</option>
                 <option>none</option>
           </select>
             
             
            }

          }


        return (
            <div>
            <Headerdata/>
            <Container fluid={true} style={{marginBottom:"100px"}}>
            <div className="cardstyle margindata" style={{border:"1px solid grey",height:"auto"}}>
           <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
          
                <div className="row" style={styledata}>
                 <div className="col-md-3">
                   <center><h5 id="Casesheetid" onClick={this.Casesheet}>Casesheet</h5></center>
                 </div>
                 <div className="col-md-3">
                 <center><h5 id="Opticalid" style={{color:"white"}} onClick={this.Optical}>Optical</h5></center>
                 </div>
                 <div className="col-md-3">
                 <center><h5 id="Prescriptionid" style={{color:"white"}} onClick={this.Prescription}>Prescription</h5></center>
                 </div>
                 <div className="col-md-3">
                 <center><h5 id="Dischargeid" style={{color:"white"}} onClick={this.dischargeoption}>Discharge</h5></center>
                 </div>
               
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
            <Container>
            <div id="casesheetdiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
         <Row className="mt-3">
         
       <div className="col-md-1 col-lg-1">
       <a id="downarrow" data-toggle="collapse" onClick={this.patientdetailuparrow}><i class="fa fa-angle-double-down"></i></a>
        <a id="uparrow" style={{display:"none"}} onClick={this.patientdetaildownarrow}><i class="fa fa-angle-double-up"></i></a>
     </div>

       <div className="col-md-4 col-lg-4">
         <div id="patientdetail">
       <h6>Patient details</h6>
       <input
           type="text"
           name="username"
           className="form-control"
           placeholder="username"
           value={this.state.username }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="phone"
           className="form-control mt-1"
           placeholder="Phone number"
           value={this.state.phone }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="age"
           className="form-control mt-1"
           placeholder="Age"
           value={this.state.age }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="text"
           name="gender"
           className="form-control mt-1"
           placeholder="gender"
           value={this.state.gender }
           onChange={this.prelistdata}
           disabled
         />
         <textarea
       name="address"
      className="form-control mt-1"
      value={this.state.address}
      onChange={this.prelistdata}
      placeholder="address"
      disabled
    ></textarea>
     <input
           type="text"
           name="pincode"
           className="form-control mt-1"
           placeholder="pincode"
           value={this.state.pincode }
           onChange={this.prelistdata}
           disabled
         />
        </div>
        </div>
      <div className="col-md-6 col-lg-6">
        <form onSubmit={this.handleSubmit}>
       
          <h6 className="mt-2">Casesheet details</h6>  
        <textarea
      name="dm"
      className="form-control mt-1"
      value={this.state.dm}
      onChange={this.prelistdata}
      placeholder="dm"
    ></textarea>
    <textarea
      name="ht"
      className="form-control mt-1"
      value={this.state.ht}
      onChange={this.prelistdata}
      placeholder="ht"
    ></textarea>
    <textarea
      name="ihd"
      className="form-control mt-1"
      value={this.state.ihd}
      onChange={this.prelistdata}
      placeholder="ihd"
      ></textarea>
    <textarea
      name="allergy"
      className="form-control mt-1"
      value={this.state.allergy}
      onChange={this.prelistdata}
      placeholder="allergy"
      ></textarea>
    <textarea
      name="other"
      className="form-control mt-1"
      value={this.state.other}
      onChange={this.prelistdata}
      placeholder="other"
      ></textarea>


    <select id="va" name="va" value={this.state.va} onChange={this.prelistdata} className="form-control mt-1">
    <option defaultValue>Select V/A </option>
        <option>6/60</option>
        <option>6/36</option>
        <option>6/24</option>
        <option>6/18</option>
        <option>6/12</option>
        <option>6/9</option>
        <option>6/6</option>
      
    </select>
 <div className="mt-2">
 <input
           type="checkbox"
           name="re"
           id="re"  
           value={this.state.re}
           defaultChecked={this.state.checked}
           onChange={this.checkboxdata}
         /> <span>Re</span>
<div>


<textarea
      name="redata"
      className="form-control mt-1"
      style={{display:"none"}}
      id="redataid"
      value={this.state.redata}
      onChange={this.prelistdata}
      placeholder="Re data"
      ></textarea>
      </div>

 </div>
  
 <div className="mt-2">
  <input
           type="checkbox"
           name="le"
           id="le"  
           value={this.state.le}
           defaultChecked={this.state.checked}
           onChange={this.Ledata}
         /> <span>Le</span>
         <div>
         <textarea
      name="ledata"
      className="form-control mt-1"
      style={{display:"none"}}
      id="ledataid"
      value={this.state.ledata}
      onChange={this.prelistdata}
      placeholder="Le data"
      ></textarea>
         </div>
  </div>
  
  
    

  
     
 

  
      

    
 
    

<div className="form-group mt-1">
 

<select className="form-control selectpicker" id="aseg" name="aseg"  onChange={this.asegdata} multiple>
  
        <option>conjuctiva</option>
        <option>cornea</option>
        <option>anterior</option>
        <option>chamber</option>
        <option>pupil</option>
        <option>lens</option>
    </select>

    </div>

  

<div className="form-group  mt-1">
 
<select className="form-control selectpicker" id="pseg" name="pseg"  onChange={this.psegdata} multiple>
        <option>Vitrius</option>
        <option>Retina</option>
    </select>
</div>

  


<textarea
      name="text"
      className="form-control mt-1"
      value={this.state.text}
      onChange={this.prelistdata}
      placeholder="Description"
    ></textarea>

<div className="float-right">
<a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Cancel</a>
<button className="btn btn-success mt-2 mb-2">Create</button>
</div>

</form>
</div>
<div className="col-md-1 col-lg-1">

</div>
</Row>


        </div>
        </Container> 
        <div id="opticaldiv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"500px"}}>
               <div className="mt-4">

            <div className="row">
            <div className="col-md-1">
            <a id="downarrow-optical" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowoptical} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-optical"  onClick={this.uparrowoptical}><i class="fa fa-angle-double-up"></i></a>
               </div>
              <div className="col-md-5">
            <div id="patient-optical" style={{display:"none"}}>
            <h6>Patient details</h6>
            <input
           type="text"
           name="username"
           className="form-control"
           placeholder="username"
           value={this.state.username }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="phone"
           className="form-control mt-1"
           placeholder="Phone number"
           value={this.state.phone }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="age"
           className="form-control mt-1"
           placeholder="Age"
           value={this.state.age }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="text"
           name="gender"
           className="form-control mt-1"
           placeholder="gender"
           value={this.state.gender }
           onChange={this.prelistdata}
           disabled
         />
         <textarea
       name="address"
      className="form-control mt-1"
      value={this.state.address}
      onChange={this.prelistdata}
      placeholder="address"
      disabled
    ></textarea>
     <input
           type="text"
           name="pincode"
           className="form-control mt-1"
           placeholder="pincode"
           value={this.state.pincode }
           onChange={this.prelistdata}
           disabled
         />
          </div>
          </div>
              <div className="col-md-3">

              </div>
              <div className="col-md-3">
             
                <div className="float-right">
            <button title="print optical" onClick={this.printoptical} className="btn btn-info"><i class="fa fa-print" aria-hidden="true"></i></button>
            </div>
                </div>
             

            </div>

                <div id="createoptical" className="row">
                 
                <div className="row">
                      
                      <div className="col-md-12">
                      <div id="opticaltable" className="card mt-4" style={{width:"100%"}}>
                            
                      <table border="1">
             <thead>
        <tr>
             <th width="40"></th>
            <th colspan="4" className="text-center">OS</th>
            <th colspan="4" className="text-center">OD</th>
        
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td className="text-center">SPH</td>
            <td className="text-center">CYL</td>
            <td className="text-center">AXIS</td>
            <td className="text-center">V/A</td>

            <td className="text-center">SPH</td>
            <td className="text-center">CYL</td>
            <td className="text-center">AXIS</td>
            <td className="text-center">V/A</td>
        </tr>

        <tr>
           <td>DV</td>
           <td><input
                type="text"
                name="ossph"
                className="form-control mt-1"
                placeholder="sph"
               value = {this.state.ossph}
               onChange={this.opticllistdata}
              /></td>
            <td> <input
                  type="text"
                  name="oscyl"
                  className="form-control mt-1"
                  placeholder="CYL"
                  value = {this.state.oscyl}
               onChange={this.opticllistdata}
           /></td>
            <td><input
                  type="text"
                  name="osaxis"
                  className="form-control mt-1"
                  placeholder="AXIS"
                  value = {this.state.osaxis}
                  onChange={this.opticllistdata}
                /></td>
            <td><select id="va" name="osva" value = {this.state.osva} onChange={this.opticllistdata} className="form-control mt-1">
                  <option defaultValue>Select va </option>
                  <option>6/60</option>
                  <option>6/36</option>
                  <option>6/24</option>
                  <option>6/18</option>
                  <option>6/12</option>
                  <option>6/9</option>
                  <option>6/6</option>
      
                  </select></td>

                <td><input
                type="text"
                name="odsph"
                className="form-control mt-1"
                placeholder="sph"
                value = {this.state.odsph}
                onChange={this.opticllistdata}
              /></td>
               <td> <input
                  type="text"
                  name="odcyl"
                  className="form-control mt-1"
                  placeholder="CYL"
                  value = {this.state.odcyl}
                onChange={this.opticllistdata}
               /></td>
                         <td><input
                             type="text"
                             name="odaxis"
                             className="form-control mt-1"
                              placeholder="AXIS"
                              value={this.state.odaxis}
                              onChange={this.opticllistdata}
                              /></td>
            <td><select id="va" name="odva"  value={this.state.odva} onChange={this.opticllistdata} className="form-control mt-1">
                                 <option defaultValue>Select va </option>
                                     <option>6/60</option>
                                     <option>6/36</option>
                                     <option>6/24</option>
                                     <option>6/18</option>
                                     <option>6/12</option>
                                     <option>6/9</option>
                                     <option>6/6</option>
      
                                    </select></td>
                                   </tr>
                                   <tr>
                                     <td>NV</td>
                                     <td><input
                                      type="text"
                                      name="osaxis"
                                      className="form-control mt-1"
                                      placeholder="AXIS"
                                       /></td>
                                     <td colspan="2"><input
                                   type="text"
                                   name="osaxis"
                                   className="form-control mt-1"
                                   placeholder="AXIS"
                 
                                    /></td>
                                     <td><select id="va" name="odva"  value={this.state.odva} className="form-control mt-1">
                                 <option defaultValue>Select va </option>
                                     <option>6/60</option>
                                     <option>6/36</option>
                                     <option>6/24</option>
                                     <option>6/18</option>
                                     <option>6/12</option>
                                     <option>6/9</option>
                                     <option>6/6</option>
      
                                    </select></td>
                                     <td><input
                                    type="text"
                                    name="osaxis"
                                    className="form-control mt-1"
                                    placeholder="AXIS"
                                    /></td>
                                     <td colspan="2"><input
                                      type="text"
                                     name="osaxis"
                                     className="form-control mt-1"
                                     placeholder="AXIS"
                                      /></td>
                                     <td><select id="va" name="odva"  value={this.state.odva} className="form-control mt-1">
                                 <option defaultValue>Select va </option>
                                     <option>6/60</option>
                                     <option>6/36</option>
                                     <option>6/24</option>
                                     <option>6/18</option>
                                     <option>6/12</option>
                                     <option>6/9</option>
                                     <option>6/6</option>
      
                                    </select></td>

                                   </tr>
                           </tbody>
                      </table>


                      </div>
                      </div>
          <Container fluid={true}>

          <label  className="mt-2">Dist</label>        
<div className="row">

<div className="col-md-6">
<input
    type="text"
     name="distre"
     className="form-control mt-1"
    placeholder="RE"
    value = {this.state.distre}
    onChange={this.opticllistdata}
   />
</div>
<div className="col-md-6">
<input
    type="text"
     name="distle"
     className="form-control mt-1"
    placeholder="LE"
    value = {this.state.distle}
    onChange={this.opticllistdata}
   />
</div>
</div>
<label className="mt-2">Near</label> 
<div className="row">

<div className="col-md-6">
<input
    type="text"
     name="nearre"
     className="form-control mt-1"
    placeholder="RE"
    value = {this.state.nearre}
    onChange={this.opticllistdata}
   />
</div>
<div className="col-md-6">
<input
    type="text"
     name="nearle"
     className="form-control mt-1"
    placeholder="LE"
    value = {this.state.nearle}
    onChange={this.opticllistdata}
   />
</div>
</div>

     
  
            <div className="row mt-3">
  
            <div className="col-md-3">
  <span>Kryptok</span>
  <input
   style={{marginLeft:"38px"}}
  type="checkbox"
  name="kryptok"
  id="kryptok"
  defaultChecked={this.state.checked}
  value={this.state.kryptok}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Unicvis D</span>
  <input
   style={{marginLeft:"10px"}}
  type="checkbox"
  name="unicvisd"
  id="unicvisd"
  defaultChecked={this.state.checked}
  value={this.state.unicvisd}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Hi index</span>
  <input
   style={{marginLeft:"10px"}}
  type="checkbox"
  name="hiindex"
  id="hiindex"
  defaultChecked={this.state.checked}
  value={this.state.hiindex}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Photochromic</span>
  <input
  style={{marginLeft:"31px"}}
  type="checkbox"
  name="photochromic"
  id="photochromic"
  defaultChecked={this.state.checked}
  value={this.state.photochromic}
  onChange={this.typesdata}
/>
  </div>

  <div className="col-md-3">
  <span>Progreesive</span>
  <input
   style={{marginLeft:"10px"}}
  type="checkbox"
  name="progreesive"
  id="progreesive"
  defaultChecked={this.state.checked}
  value={this.state.progreesive}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Glass</span>
  <input
   style={{marginLeft:"39px"}}
  type="checkbox"
  name="glass"
  id="glass"
  defaultChecked={this.state.checked}
  value={this.state.glass}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>White</span>
  <input
   style={{marginLeft:"26px"}}
  type="checkbox"
  name="white"
  id="white"
  defaultChecked={this.state.checked}
  value={this.state.white}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Arc</span>
  <input
  style={{marginLeft:"106px"}}
  type="checkbox"
  name="arc"
  id="arc"
  defaultChecked={this.state.checked}
  value={this.state.arc}
  onChange={this.typesdata}
/>
  </div>

  <div className="col-md-3">
  <span>Executive</span>
  <input
   style={{marginLeft:"26px"}}
  type="checkbox"
  name="executive"
  id="executive"
  defaultChecked={this.state.checked}
  value={this.state.executive}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Plastic</span>
  <input
   style={{marginLeft:"30px"}}
  type="checkbox"
  name="plastic"
  id="plastic"
  defaultChecked={this.state.checked}
  value={this.state.plastic}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Tint</span>
  <input
   style={{marginLeft:"40px"}}
  type="checkbox"
  name="tint"
  id="tint"
  defaultChecked={this.state.checked}
  value={this.state.tint}
  onChange={this.typesdata}
/>
  </div>
  <div className="col-md-3">
  <span>Ophthalmologist</span>
  <input
  type="checkbox"
  style={{marginLeft:"10px"}}
  name="ophthalmologist"
  id="ophthalmologist"
  defaultChecked={this.state.checked}
  value={this.state.ophthalmologist}
  onChange={this.typesdata}
/>
  </div>
 </div>
 <textarea
                  name="instruction"
                 className="form-control mt-1"
                placeholder="instruction"
                value={this.state.instruction}
                onChange={this.opticllistdata}
              ></textarea>
 </Container>

                      
                   </div>

                   
                   
               </div>
         
               <div id="createid" className="float-right">
               <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Cancel</a>
              <button className="btn btn-success mt-2 mb-2" onClick={this.create}>Create</button>
             </div>
               

               </div>
        </div>
        <div id="Prescriptiondiv"  className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"500px"}}>
        <div className="row mt-4">
            <div className="col-md-1">
            <a id="downarrow-pres" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowpres} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-pres"  onClick={this.uparrowpres}><i class="fa fa-angle-double-up"></i></a>
               </div>
              <div className="col-md-5">
            <div id="patient-pres" style={{display:"none"}}>
            <h6>Patient details</h6>
            <input
           type="text"
           name="username"
           className="form-control"
           placeholder="username"
           value={this.state.username }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="phone"
           className="form-control mt-1"
           placeholder="Phone number"
           value={this.state.phone }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="age"
           className="form-control mt-1"
           placeholder="Age"
           value={this.state.age }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="text"
           name="gender"
           className="form-control mt-1"
           placeholder="gender"
           value={this.state.gender }
           onChange={this.prelistdata}
           disabled
         />
         <textarea
       name="address"
      className="form-control mt-1"
      value={this.state.address}
      onChange={this.prelistdata}
      placeholder="address"
      disabled
    ></textarea>
     <input
           type="text"
           name="pincode"
           className="form-control mt-1"
           placeholder="pincode"
           value={this.state.pincode }
           onChange={this.prelistdata}
           disabled
         />
          </div>
          </div>
              <div className="col-md-3">

              </div>
              <div className="col-md-3">
              <div className="float-right">
            <button title="print" onClick={this.printpresdata} className="btn btn-info"><i class="fa fa-print" aria-hidden="true"></i></button>
            </div>
              </div>

            </div>
             <div id="createpres" className="mt-2">
            <table className="table" border="1"> 
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Eye Drop/Ointment/Tablets</th>
                  <th width="40">RE</th>
                  <th width="43">LE</th>
                  <th>Times</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input
                type="text"
                name="Tablet1"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet1}
                onChange={this.prelistdata}
              /></td>
              <td className="text-center"><input
                type="checkbox"
                name="Re1"
                id="Re1"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re1}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le1"
                id="Le1"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le1}
                onChange={this.Prestypesdata}
              /></td>
              <td className="text-center"><input
                type="number"
                name="Time1"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time1}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day1"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day1}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><input
                type="text"
                name="Tablet2"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet2}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re2"
                id="Re2"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re2}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le2"
                id="Le2"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le2}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time2"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time2}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day2"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day2}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><input
                type="text"
                name="Tablet3"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet3}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re3"
                id="Re3"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re3}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le3"
                id="Le3"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le3}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time3"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time3}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day3"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day3}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><input
                type="text"
                name="Tablet4"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet4}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re4"
                id="Re4"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re4}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le4"
                id="Le4"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le4}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time4"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time4}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day4"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day4}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><input
                type="text"
                name="Tablet5"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet5}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re5"
                id="Re5"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re5}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le5"
                id="Le5"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le5}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time5"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time5}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day5"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day5}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><input
                type="text"
                name="Tablet6"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet6}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re6"
                id="Re6"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re6}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le6"
                id="Le6"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le6}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time6"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time6}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day6"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day6}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td><input
                type="text"
                name="Tablet7"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet7}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re7"
                id="Re7"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re7}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le7"
                id="Le7"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le7}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time7"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time7}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day7"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day7}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td><input
                type="text"
                name="Tablet8"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet8}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re8"
                id="Re8"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re8}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le8"
                id="Le8"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le8}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time8"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time8}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day8"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day8}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td><input
                type="text"
                name="Tablet9"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet9}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re9"
                id="Re9"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re9}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le9"
                id="Le9"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le9}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="number"
                name="Time9"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time9}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day9"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day9}
                onChange={this.prelistdata}
              /></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td><input
                type="text"
                name="Tablet10"
                className="form-control mt-1"
                placeholder="Eye Drop/Ointment/Tablets"
                value={this.state.Tablet10}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="checkbox"
                name="Re10"
                id="Re10"
                className="form-control mt-1"
                placeholder="RE"
                value={this.state.Re10}
                onChange={this.Prestypesdata}
              /></td>
              <td><input
                type="checkbox"
                name="Le10"
                id="Le10"
                className="form-control mt-1"
                placeholder="LE"
                value={this.state.Le10}
                onChange={this.Prestypesdata}
               
              /></td>
              <td><input
                type="number"
                name="Time10"
                className="form-control mt-1"
                placeholder="Times"
                value={this.state.Time10}
                onChange={this.prelistdata}
              /></td>
              <td><input
                type="number"
                name="Day10"
                className="form-control mt-1"
                placeholder="Days"
                value={this.state.Day10}
                onChange={this.prelistdata}
              /></td>
                </tr>
              </tbody>
            </table>
           <label>Review</label>
            <textarea
                  name="Review"
                 className="form-control mt-1"
                placeholder="Review"
                value={this.state.Review}
                onChange={this.prelistdata}
              ></textarea>

              <div id="createid" className="float-right">
              <a className="btn btn-danger mr-1" href="#" onClick={this.Goback}>Cancel</a>
              <button className="btn btn-success mt-2 mb-2" onClick={this.createpres}>Create</button>
             </div>

             </div>
              
        </div>
        
        <div id="dischargediv" className="col-md-12 col-sm-12 col-lg-12 col-xs-12" style={{display:"none",height:"500px"}}>
          <Container>
               <div className="row">
          <div className="col-md-1 mt-3">
          <a id="downarrow-dis" style={{display:"none"}} data-toggle="collapse" onClick={this.downarrowdis} ><i class="fa fa-angle-double-down"></i></a>
            <a id="uparrow-dis"  onClick={this.uparrowdis}><i class="fa fa-angle-double-up"></i></a>
           </div>
                      <div className="col-md-5">
                      <div id="patient-dis" style={{display:"none"}}>
            <h6>Patient details</h6>
            <input
           type="text"
           name="username"
           className="form-control"
           placeholder="username"
           value={this.state.username }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="phone"
           className="form-control mt-1"
           placeholder="Phone number"
           value={this.state.phone }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="number"
           name="age"
           className="form-control mt-1"
           placeholder="Age"
           value={this.state.age }
           onChange={this.prelistdata}
           disabled
         />
         <input
           type="text"
           name="gender"
           className="form-control mt-1"
           placeholder="gender"
           value={this.state.gender }
           onChange={this.prelistdata}
           disabled
         />
         <textarea
       name="address"
      className="form-control mt-1"
      value={this.state.address}
      onChange={this.prelistdata}
      placeholder="address"
      disabled
    ></textarea>
     <input
           type="text"
           name="pincode"
           className="form-control mt-1"
           placeholder="pincode"
           value={this.state.pincode }
           onChange={this.prelistdata}
           disabled
         />
          </div>

                      </div>
                      <div className="col-md-6 mt-3">
                      <div className="float-right">
             <button title="print" onClick={this.printcasesheet} className="btn btn-info"><i class="fa fa-print" aria-hidden="true"></i></button>
                   </div>
                      </div>
           
                       </div>

                            <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6 mt-5">
                          {Discharge}
                          <div id="dischtext" className="mt-2">
                        <textarea
                     name="distext"
                     className="form-control mt-1"
                    
                     rows="5"
                     value={this.state.distext}
                     onChange={this.prelistdata}
                     placeholder="Discharge content"
                    ></textarea>
                    <br></br>
                    <div className="float-right">
                    <button className="btn btn-danger mr-1" onClick={this.Goback}>Cancel</button>
                    <button className="btn btn-success" onClick={this.createdischarge}>Create</button>
                    </div>
                   
                   </div>
                    </div>
                        <div className="col-md-3">

                        </div>
                       </div>
               </Container>
    </div>

           </div>
           </div>
           <div className="row" style={{marginTop:"100px"}}>
        </div> 
        <div id="printpres" style={{display:"none"}}>
       <div  className="card" style={{border:"1px solid grey",height:"auto"}}>
       <div className="row">
        <div className="mt-1 ml-3 ">
        <img style={{maxWidth:"400px",height:"55px"}} src={Logoimg}></img>
        </div>
        <div className="col-md-6 mt-1">
          <h5>AVY EYE CARE & OPTICALS</h5>
        <p> Jansons MRI Opposite,</p>
        <p>Perunduari Road,</p>
        <p> Erode - 638 011</p>
        <p> Ph : 9600392556</p>
        </div>
       <div style={{borderRight:"2px solid black"}}  ></div>
       <div className="col-md-3 mt-1">
         <p>Dr.R.S. Naveen Balaji</p>
         <p>M.B.B.S., M.S., FICO</p>
         <p>Phaco & Refractive Surgeon</p>
         <p>Reg. No: 91192</p>
       </div>
         </div>

         <div className="col-md-12 bg-dark">
         <h5 className="text-center text-white">PRESCRIPTION FORM</h5>
         </div>
        
       <div className="col-md-12">
         <div className="float-right">
         <span>Date:</span>
          <span>  {this.state.reportStartDate}</span>
         </div>
       </div>
       <div className="row">
        <div className="col-md-6">
        <span>Patient Name:</span>
          <span> {this.state.username}</span>
        </div>
        <div className="col-md-3">
        <span>Age:</span>
        <span>  {this.state.age}</span>
        </div>
        <div className="col-md-3">
        <span>Sex:</span>
        <span>  {this.state.gender}</span>
        </div>
       </div>
       <Table className="table mt-2" border="1">
         <Thead>
           <Tr>
            <Th>S.no</Th>
            <Th>Eye Drop/Ointment/Tablets</Th>
            <Th>RE</Th>
            <Th>LE</Th>
            <Th>Times</Th>
            <Th>Days</Th>
           </Tr>
         </Thead>
         <Tbody>
           <Tr>
           <Td>1</Td>
          <Td>{this.state.Tablet1}</Td>
          {(() => {
           if(this.state.Re1 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le1 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time1}</Td>
           <Td>{this.state.Day1}</Td>
           </Tr>
           <Tr>
           <Td>2</Td>
          <Td>{this.state.Tablet2}</Td>
          {(() => {
           if(this.state.Re2 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le2 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time2}</Td>
           <Td>{this.state.Day2}</Td>
           </Tr>
           <Tr>
           <Td>3</Td>
          <Td>{this.state.Tablet3}</Td>
          {(() => {
           if(this.state.Re3 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le3 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time3}</Td>
           <Td>{this.state.Day3}</Td>
           </Tr>
           <Tr>
           <Td>4</Td>
          <Td>{this.state.Tablet4}</Td>
          {(() => {
           if(this.state.Re4 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le4 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time4}</Td>
           <Td>{this.state.Day4}</Td>
           </Tr>
           <Tr>
           <Td>5</Td>
          <Td>{this.state.Tablet5}</Td>
          {(() => {
           if(this.state.Re5 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
          {(() => {
           if(this.state.Le5 === 1){
             return(
           <Td><i class="fa fa-check" aria-hidden="true"></i></Td>
             );
           } else {
            return(
              <Td></Td>
                );
           }
          })()} 
           <Td>{this.state.Time5}</Td>
           <Td>{this.state.Day5}</Td>
           </Tr>
         </Tbody>
       </Table>
       <div className="col-md-12">
       <span>Review Date:</span>
        <span>  {this.state.Review}</span>
       </div>
      
       <div className="col-md-12" style={{marginTop:"150px"}}>
         <div className="float-right">
         <span className="mr-3">Doctor signature</span>
         </div>
       </div>
      </div>
      </div>

      <div id="printoptical" style={{display:"none"}}>
      <Container>
        <div className="card" style={{border:"1px solid grey",height:"auto"}}>
       
            <div className="row">
              <div className="col-md-2 mt-1 ml-4">
              <img style={{maxWidth:"400px",height:"55px"}} src={Logoimg}></img>
              </div>
              <div className="col-md-8 mt-1 text-center">
              <h3>AVY EYE CARE & OPTICALS</h3>
              <p> Jansons MRI Opposite, Perunduari Road, Erode - 638 011</p>
              <p> Ph: 86820 00055</p>
              <p>Consulting Time 10.00 am to 2.00 pm, 4.00 pm to 8.00 pm</p>
              </div>
            </div>

              <h5 className="text-center"><u>PRESCRIPTION</u></h5>
          
             <Container fluid={true}>
             <div className="row">
             <div className="col-md-6">
              <span>M.R. No:</span>
             </div>
             <div className="col-md-6">
               <div className="float-right">
               <span>Date:</span>
           <span> {this.state.reportStartDate}</span>
               </div>
            
             </div>
             </div>
             <div className="row">
               <div className="col-md-6">
               <span>Name:</span>
                <span>  {this.state.username}</span>
               </div>
               <div className="col-md-3">
               <span>Age:</span>
               <span>  {this.state.age}</span>
               </div>
               <div className="col-md-3">
               <span>Sex:</span>
               <span>  {this.state.gender}</span>
               </div>
             </div>
             <Table  border="1" className="mt-1">
               <Thead>
                 <Tr>
                 <Th width="40"></Th>
                 <Th colspan="4" className="text-center">OS</Th>
                 <Th colspan="4" className="text-center">OD</Th>
                 </Tr>
               </Thead>
               <Tbody>
                 <Tr>
                 <Td></Td>
                <Td className="text-center">SPH</Td>
                <Td className="text-center">CYL</Td>
                <Td className="text-center">AXIS</Td>
                <td className="text-center">V/A</td>

                <Td className="text-center">SPH</Td>
                <Td className="text-center">CYL</Td>
                <Td className="text-center">AXIS</Td>
                <Td className="text-center">V/A</Td>
                 </Tr>
                <Tr>
                  <Td>DV</Td>
                  <Td>{this.state.ossph}</Td>
                  <Td>{this.state.oscyl}</Td>
                  <Td>{this.state.osaxis}</Td>
                  <Td>{this.state.osva}</Td>

                  <Td>{this.state.odsph}</Td>
                  <Td>{this.state.odcyl}</Td>
                  <Td>{this.state.odaxis}</Td>
                  <Td>{this.state.odva}</Td>
                </Tr>
                <Tr>
                  <Td>NV</Td>
                  <Td></Td>
                  <Td colspan="2"></Td>
                  <Td></Td>

                  <Td></Td>
                  <Td colspan="2"></Td>
                  <Td></Td>
                </Tr>
               </Tbody>
             </Table>
               <div className="row mt-1">
                 <div className="col-md-3">
                  <span>Dist | PD.RE:</span>
                  <span> {this.state.distre}</span>
                 </div>
                 <div className="col-md-3">
                 <span>LE:</span>
                 <span> {this.state.distle}</span>
                 </div>
                 <div className="col-md-3">
                  <span>Near | PD.RE:</span>
                  <span> {this.state.nearre}</span>
                 </div>
                 <div className="col-md-3">
                 <span>LE:</span>
                 <span> {this.state.nearle}</span>
                 </div>
             </div>
             <div className="row mt-2">
  
  
  {(() => {
    console.log("kryptok", this.state.kryptok);
  if(this.state.kryptok == 1){
    return(
      <div className="col-md-3">
      <span>Kryptok</span>
      <i style={{marginLeft:"38px"}} class="fa fa-check" aria-hidden="true"></i>
 </div>
    );
  
  } else  {
    return(
      <div className="col-md-3">
      <span>Kryptok</span>
    <input
     style={{marginLeft:"38px"}}
    type="checkbox"
    checked={false}

 />
 </div>
    );
  }

})()}

{(() => {
 if(this.state.unicvisd == 1){
  return(
    <div className="col-md-3">
   <span>Unicvis D</span>
   <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
    );
  } else {
    return(
      <div className="col-md-3">
     <span>Unicvis D</span>
  <input
  style={{marginLeft:"10px"}}
  type="checkbox"
  checked={false}
  value={this.state.unicvisd}
  />
  </div>
      );
  }

})()}

{(() => {

if(this.state.hiindex == 1){
 return(
 <div className="col-md-3">
 <span>Hi index</span>
 <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>

 );
} else {
  return(
    <div className="col-md-3">
 <span>Hi index</span>
 <input
 style={{marginLeft:"10px"}}
 type="checkbox"
 name="unicvisd"
 id="unicvisddata"
 checked={false}
 value={this.state.unicvisd}
/>
</div>
  );
}

})()}

{(() => {
if(this.state.photochromic == 1){
  return(
  <div className="col-md-3">
  <span>Photochromic</span>
  <i style={{marginLeft:"31px"}} class="fa fa-check" aria-hidden="true"></i>
  </div>
  );
} else {
  return(
    <div className="col-md-3">
    <span>Photochromic</span>
    <input
    style={{marginLeft:"31px"}}
    type="checkbox"
    checked={false}
    value={this.state.photochromic}
    
    />
    </div>
    );
}


})()}

{(() => {

  if(this.state.progreesive == 1){
    return(

      <div className="col-md-3">
     <span>Progreesive</span>
     <i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
   </div>

    );

  } else {
    return(

      <div className="col-md-3">
     <span>Progreesive</span>
     <input
    style={{marginLeft:"10px"}}
    type="checkbox"
    checked={false}
    value={this.state.progreesive}
/>
</div>

    );
  }

})()}

{(() => {

if(this.state.glass == 1){
  return(
    <div className="col-md-3">
   <span>Glass</span>
   <i style={{marginLeft:"39px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
  );
} else {
  return(
    <div className="col-md-3">
   <span>Glass</span>
 <input
style={{marginLeft:"39px"}}
type="checkbox"
checked={false}
value={this.state.glass}

/>
</div>
  );
}

})()}


{(() => {

  if(this.state.white == 1){
    return(
      <div className="col-md-3">
      <span>White</span>
      <i style={{marginLeft:"26px"}} class="fa fa-check" aria-hidden="true"></i>
   </div>
    );
  } else {
    return(
      <div className="col-md-3">
      <span>White</span>
    <input
    style={{marginLeft:"26px"}}
   type="checkbox"
   checked={false}
  value={this.state.white}

/>
</div>
    );
  }

})()}


{(() => {

if(this.state.arc == 1){
  return(
<div className="col-md-3">
<span>Arc</span>
<i style={{marginLeft:"106px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
);
} else {
  return(
    <div className="col-md-3">
    <span>Arc</span>
    <input
    style={{marginLeft:"106px"}}
    type="checkbox"
    checked={false}
    value={this.state.arc}
    />
    </div>
    );
}

})()}

{(() => {

if(this.state.executive == 1){
 return(
  <div className="col-md-3">
  <span>Executive</span>
  <i style={{marginLeft:"26px"}} class="fa fa-check" aria-hidden="true"></i>
  </div>
 );
} else {
  return(
    <div className="col-md-3">
    <span>Executive</span>
    <input
    style={{marginLeft:"26px"}}
    type="checkbox"
    checked={false}
    value={this.state.executive}
    />
    </div>
   );
}

})()}

{(() => {
if(this.state.plastic == 1){
 return(
<div className="col-md-3">
<span>Plastic</span>
<i style={{marginLeft:"30px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
 );
} else {
  return(
    <div className="col-md-3">
    <span>Plastic</span>
    <input
    style={{marginLeft:"30px"}}
    type="checkbox"
    checked={false}
    value={this.state.plastic}
    />
    </div>
     );
}

})()}

{(() => {

if(this.state.tint == 1){
return(
  <div className="col-md-3">
<span>Tint</span>
<i style={{marginLeft:"40px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
);
} else {
  return(
    <div className="col-md-3">
  <span>Tint</span>
  <input
  style={{marginLeft:"40px"}}
  type="checkbox"
  checked={false}
  value={this.state.tint}
  />
  </div>
  );
}

})()}

{(() => {

if(this.state.ophthalmologist == 1){
 return(
 <div className="col-md-3">
<span>Ophthalmologist</span>
<i style={{marginLeft:"10px"}} class="fa fa-check" aria-hidden="true"></i>
</div>
 );
} else {
  return(
  <div className="col-md-3">
<span>Ophthalmologist</span>
<input
type="checkbox"
style={{marginLeft:"10px"}}
name="ophthalmologist"
id="ophthalmologistdata"
checked={false}
value={this.state.ophthalmologist}
/>
</div>
);
}

})()}


</div>
<div className="mt-2">
 <span>Special instructions:</span>
 <span>  {this.state.instruction}</span>
 <hr></hr>
 <div className="col-md-12">
 <h6 className="text-center">Your Glasses are dispensed in the most scientific manner at our opticals</h6>
 </div>
 
</div>
  </Container>
            
        </div>
        </Container>
      </div>
     
      <div id="printdisc" style={{display:"none"}}>
        <Container>
       <div  className="card">
       <div className="row">
       <div className="col-md-1 mt-1">
       </div>
              <div className="col-md-5 mt-2">
              <img style={{maxWidth:"400px",height:"80px"}} src={Logoimg}></img>
              </div>
              <div className="col-md-5 mt-2">
                <div className="float-right">
                <p> Jansons MRI Opposite, Perunduari Road, Erode - 638 011</p>
              <p> Ph: 86820 00055</p>
              <p>Consulting Time 10.00 am to 2.00 pm, 4.00 pm to 8.00 pm</p>
                </div>
              
              </div>
            </div>
            <div className="col-md-1 mt-1">
            </div>
            <hr></hr>
            <div className="col-md-12">
            <div className="row">
             <div className="col-md-1">

             </div>
             <div className="col-md-10">
             <p>{this.state.reportStartDate}</p>
            <p>{this.state.username}</p>
            <p>{this.state.address}</p>
            <h5>Dear {this.state.username}</h5>
            <br></br>
            <p style={{whiteSpace:"pre-line"}}>{this.state.distext}</p>
            <div className="float-right mt-5">
            <span className="mr-3">Doctor signature</span>
            </div>
            </div>
           <div className="col-md-1">

             </div>
            </div>
            </div>
            
       </div>
       </Container>
       </div>
        </Container>
            <Footerdata/>
          
            </div>
            
      );
    }
}




export default Createcasesheets;